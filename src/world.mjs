import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { HDRLoader } from "three/addons/loaders/HDRLoader.js";
import { gsap } from "gsap";

const destinations = {
  home: [0, 1, -1],
  driftdoctor: [-6, -1, 3],
  compatforge: [6, -0.2, 2],
  originkeep: [4.7, 2, -6.4],
};
const names = {
  home: "Home",
  driftdoctor: "Repair Works",
  compatforge: "Observatory",
  originkeep: "The Archive",
};
export async function createWorld({
  mount,
  assets,
  onFailure,
  status,
  initialActive = true,
}) {
  let active = initialActive,
    paused = false,
    dead = false,
    frame = 0,
    last = 0,
    elapsed = 0,
    travelTween,
    particles,
    particleTimer,
    idleHandle,
    resizeObserver,
    progress,
    positioned = false,
    redraw = true;
  const modelCache = {},
    modelRoots = new Set(),
    ownedMaterials = new Set();
  // Release the main thread between setup batches so navigation stays responsive.
  const yieldSetup = async () => {
    if (globalThis.scheduler?.yield) await scheduler.yield();
    else await new Promise((resolve) => setTimeout(resolve, 0));
    if (dead) throw new Error("Renderer lost during initialization");
  };
  const low =
    matchMedia("(max-width: 767px)").matches ||
    navigator.hardwareConcurrency <= 4;
  await yieldSetup();
  const canvas = document.createElement("canvas");
  const contextStarted = performance.now();
  const context = canvas.getContext("webgl2", {
    alpha: true,
    antialias: !low,
    powerPreference: "low-power",
  });
  performance.measure("World WebGL2 context", { start: contextStarted });
  if (!context) throw new Error("WebGL2 is unavailable");
  // Give input and navigation a turn between driver creation and renderer setup.
  await yieldSetup();
  const rendererStarted = performance.now();
  const renderer = new THREE.WebGLRenderer({
    canvas,
    context,
    alpha: true,
    antialias: !low,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(devicePixelRatio, low ? 1.25 : 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  performance.measure("World renderer setup", { start: rendererStarted });
  mount.append(renderer.domElement);
  renderer.domElement.style.touchAction = "none";
  mount.dataset.quality = low ? "low" : "high";
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2("#5d6680", 0.012);
  const camera = new THREE.OrthographicCamera(-15, 15, 10, -10, 0.1, 150);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.minPolarAngle = 0.75;
  controls.maxPolarAngle = 1.35;
  controls.minAzimuthAngle = -0.55;
  controls.maxAzimuthAngle = 0.55;
  const contextLost = (event) => {
    event.preventDefault();
    if (!dead) {
      dispose();
      onFailure();
    }
  };
  renderer.domElement.addEventListener("webglcontextlost", contextLost);
  try {
    await yieldSetup();
    const ambient = new THREE.HemisphereLight("#b4d4ee", "#d38d72", 2.2);
    scene.add(ambient);
    const sun = new THREE.DirectionalLight("#ffe3b4", 3.2);
    sun.position.set(-7, 15, 10);
    scene.add(sun);
    const rim = new THREE.DirectionalLight("#b1c8ff", 2);
    rim.position.set(8, 4, -10);
    scene.add(rim);
    const mat = (color, metalness = 0, roughness = 0.8) => {
      const material = low
        ? new THREE.MeshLambertMaterial({ color, flatShading: true })
        : new THREE.MeshStandardMaterial({
            color,
            metalness,
            roughness,
            flatShading: true,
          });
      ownedMaterials.add(material);
      return material;
    };
    const stone = mat("#bac3bc"),
      chalk = mat("#eadbc2"),
      dark = mat("#314b54"),
      grass = mat("#526e63"),
      copper = mat("#b96e4c", 0.55, 0.35),
      gold = mat("#e3ae71", 0.5, 0.3);
    const glow = low
      ? new THREE.MeshBasicMaterial({ color: "#ffe4a4" })
      : new THREE.MeshStandardMaterial({
          color: "#ffe4a4",
          emissive: "#ffbd6e",
          emissiveIntensity: 2,
        });
    ownedMaterials.add(glow);
    const mesh = (geo, material, parent, x = 0, y = 0, z = 0) => {
      const m = new THREE.Mesh(geo, material);
      m.position.set(x, y, z);
      parent.add(m);
      return m;
    };
    const box = (p, w, h, d, m, x = 0, y = 0, z = 0) =>
      mesh(new THREE.BoxGeometry(w, h, d), m, p, x, y, z);
    const cylinder = (p, r, h, m, x = 0, y = 0, z = 0, segments = 24) =>
      mesh(new THREE.CylinderGeometry(r, r, h, segments), m, p, x, y, z);
    const ring = (p, r, t, m, x = 0, y = 0, z = 0) =>
      mesh(new THREE.TorusGeometry(r, t, 8, 48), m, p, x, y, z);
    const islands = {};
    let seed = 27;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    for (const [id, position] of Object.entries(destinations)) {
      const group = new THREE.Group();
      group.position.fromArray(position);
      scene.add(group);
      islands[id] = group;
      const r = id === "home" ? 2.65 : 2.05;
      const crown = cylinder(group, r, 0.35, chalk, 0, 0, 0, 9);
      crown.rotation.y = 0.2;
      const land = cylinder(group, r * 0.96, 0.12, grass, 0, 0.2, 0, 9);
      land.rotation.y = 0.2;
      mesh(
        new THREE.ConeGeometry(r * 0.98, 2.2, 7),
        stone,
        group,
        0,
        -1.3,
        0,
      ).rotation.z = Math.PI;
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        const b = mesh(
          new THREE.DodecahedronGeometry(0.45 + random() * 0.35),
          i % 2 ? stone : chalk,
          group,
          Math.cos(a) * r * 0.73,
          -0.6 - random() * 0.5,
          Math.sin(a) * r * 0.73,
        );
        b.scale.y = 1.9;
        b.rotation.set(random(), random(), random());
      }
      const path = mesh(
        new THREE.CircleGeometry(r * 0.7, 36),
        chalk,
        group,
        0,
        0.275,
        0,
      );
      path.rotation.x = -Math.PI / 2;
      const shadow = mesh(
        new THREE.CircleGeometry(1.2, 32),
        new THREE.MeshBasicMaterial({
          color: "#233c39",
          transparent: true,
          opacity: 0.18,
          depthWrite: false,
        }),
        group,
        0,
        0.28,
        0,
      );
      shadow.rotation.x = -Math.PI / 2;
      // Pale stepping stones and small original rocks around the imported foliage.
      for (let i = 0; i < 7; i++) {
        const a = i * 0.9;
        const pebble = mesh(
          new THREE.DodecahedronGeometry(0.12 + random() * 0.15),
          chalk,
          group,
          Math.sin(a) * r * 0.86,
          0.32,
          Math.cos(a) * r * 0.86,
        );
        pebble.scale.y = 0.7;
      }
      const label = new THREE.Object3D();
      label.position.set(0, -1.5, r * 0.7);
      group.add(label);
      group.userData.label = label;
      await yieldSetup();
    }
    // HOME — a small illuminated lighthouse, ringed by a copper orbital beacon.
    const home = islands.home;
    cylinder(home, 1.05, 0.25, stone, 0, 0.4, 0);
    cylinder(home, 0.67, 0.3, chalk, 0, 0.62, 0);
    mesh(
      new THREE.CylinderGeometry(0.38, 0.65, 2.15, 8),
      chalk,
      home,
      0,
      1.82,
      0,
    );
    for (let y = 1; y < 2.9; y += 0.45)
      cylinder(home, 0.4, 0.06, copper, 0, y, 0, 8);
    cylinder(home, 0.62, 0.15, copper, 0, 3.02, 0, 8);
    cylinder(home, 0.41, 0.62, glow, 0, 3.38, 0, 8);
    for (let i = 0; i < 8; i++) {
      let a = (i / 8) * Math.PI * 2;
      box(
        home,
        0.05,
        0.65,
        0.05,
        copper,
        Math.sin(a) * 0.48,
        3.36,
        Math.cos(a) * 0.48,
      );
    }
    mesh(new THREE.ConeGeometry(0.74, 0.4, 8), copper, home, 0, 3.9, 0);
    mesh(new THREE.SphereGeometry(0.1, 12, 8), glow, home, 0, 4.2, 0);
    const beaconRing = ring(home, 1.3, 0.025, gold, 0, 2.8, 0);
    beaconRing.rotation.x = 1.15;
    beaconRing.rotation.y = 0.4;
    const beaconLight = new THREE.PointLight("#ffc485", 8, 6);
    beaconLight.position.set(0, 3.4, 0);
    home.add(beaconLight);
    await yieldSetup();
    // REPAIR WORKS — a separated assembly returns to a checked alignment.
    const repair = islands.driftdoctor;
    cylinder(repair, 1.25, 0.25, stone, 0, 0.4, 0);
    box(repair, 1.65, 0.35, 1.25, dark, 0, 0.7, 0);
    const machine = new THREE.Group();
    repair.add(machine);
    machine.position.y = 0.9;
    const pieces = [];
    for (let i = 0; i < 3; i++) {
      const piece = new THREE.Group();
      machine.add(piece);
      piece.position.set(
        (i - 1) * 0.7 + (i === 0 ? -0.2 : 0),
        0.38 + (i - 1) * 0.23,
        0,
      );
      piece.rotation.z = (i - 1) * 0.19;
      box(piece, 0.45, 0.8, 0.68, i === 1 ? chalk : copper);
      box(piece, 0.48, 0.07, 0.73, gold, 0, 0.23, 0);
      box(piece, 0.48, 0.07, 0.73, gold, 0, -0.23, 0);
      pieces.push(piece);
    }
    const gear = ring(repair, 0.47, 0.13, copper, 0.85, 1.9, 0.45);
    for (let i = 0; i < 10; i++) {
      const tooth = box(
        gear,
        0.18,
        0.26,
        0.25,
        copper,
        Math.sin((i * Math.PI) / 5) * 0.56,
        Math.cos((i * Math.PI) / 5) * 0.56,
        0,
      );
      tooth.rotation.z = (-i * Math.PI) / 5;
    }
    box(repair, 0.4, 1.9, 0.3, copper, -1.2, 1.3, -0.5);
    box(repair, 2.1, 0.18, 0.25, copper, -0.28, 2.2, -0.5);
    const repairLamp = mesh(
      new THREE.SphereGeometry(0.1, 12, 8),
      glow,
      repair,
      -1.2,
      2.35,
      -0.5,
    );
    const validatedLamp = mat("#a4dfb6", 0, 0.3);
    await yieldSetup();
    // OBSERVATORY — an evidence lens and three distinct, traceable readings.
    const observatory = islands.compatforge;
    cylinder(observatory, 1.17, 0.35, chalk, 0, 0.5, 0);
    cylinder(observatory, 0.53, 0.7, copper, 0, 1, 0);
    const telescope = new THREE.Group();
    telescope.position.y = 1.4;
    telescope.rotation.z = -0.45;
    observatory.add(telescope);
    const lens = cylinder(telescope, 0.37, 1.55, dark, 0, 0.5, 0);
    lens.rotation.x = Math.PI / 2;
    ring(telescope, 0.4, 0.1, copper, 0, 0.5, 0.8);
    const lensMat = mat("#a6d8c4", 0.4, 0.2);
    mesh(new THREE.CircleGeometry(0.35, 36), lensMat, telescope, 0, 0.5, 0.86);
    const orbit = ring(observatory, 1.25, 0.025, gold, 0, 1.45, 0);
    orbit.rotation.x = 0.75;
    orbit.rotation.z = 0.3;
    const evidenceLights = [];
    for (let i = 0; i < 3; i++) {
      const x = (i - 1) * 0.55;
      cylinder(observatory, 0.12, 0.38, copper, x, 0.65, 1.15);
      evidenceLights.push(
        mesh(
          new THREE.SphereGeometry(0.14, 16, 10),
          mat(i === 0 ? "#a4d6c5" : "#526a76"),
          observatory,
          x,
          0.97,
          1.15,
        ),
      );
    }
    await yieldSetup();
    // ARCHIVE — an open stone vault holding a warm, floating file passport.
    const archive = islands.originkeep;
    cylinder(archive, 1.2, 0.28, chalk, 0, 0.4, 0);
    for (const x of [-0.95, 0.95]) {
      box(archive, 0.38, 1.65, 0.4, chalk, x, 1.25, -0.35);
      box(archive, 0.53, 0.15, 0.53, copper, x, 2.05, -0.35);
    }
    box(archive, 2.4, 0.27, 0.65, chalk, 0, 2.27, -0.35);
    box(archive, 2.65, 0.13, 0.77, copper, 0, 2.46, -0.35);
    const fileMat = mat("#eed5ad", 0.22, 0.4);
    progress = { value: -0.1 };
    // Shader injection and threshold edge adapted from Jatin Chopra's Codrops
    // Emissive Dissolve Effect (MIT). Original small hash noise replaces simplex.
    fileMat.onBeforeCompile = (shader) => {
      shader.uniforms.uProgress = progress;
      shader.vertexShader = shader.vertexShader
        .replace("#include <common>", "#include <common>\nvarying vec3 vPos;")
        .replace(
          "#include <begin_vertex>",
          "#include <begin_vertex>\nvPos=position;",
        );
      shader.fragmentShader = shader.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>\nvarying vec3 vPos;uniform float uProgress;`,
        )
        .replace(
          "#include <dithering_fragment>",
          `#include <dithering_fragment>\nfloat noise=fract(sin(dot(floor(vPos*18.0),vec3(12.9898,78.233,37.719)))*43758.5453);if(noise<uProgress)discard;if(noise<uProgress+0.12)gl_FragColor=vec4(1.0,0.65,0.3,1.0);`,
        );
    };
    fileMat.customProgramCacheKey = () => "aarya-dissolve-v1";
    const file = new THREE.Group();
    archive.add(file);
    file.position.set(0, 1.45, 0.35);
    box(file, 0.78, 1.03, 0.1, fileMat);
    for (let i = 0; i < 4; i++)
      box(file, 0.44, 0.025, 0.01, copper, 0, 0.26 - i * 0.16, 0.06);
    const fileRing = ring(archive, 0.72, 0.022, gold, 0, 1.45, 0.35);
    fileRing.rotation.y = 0.4;
    if (!low) {
      const vertices = new Float32Array(90 * 3);
      for (let i = 0; i < 90; i++) {
        vertices[i * 3] = (random() - 0.5) * 2;
        vertices[i * 3 + 1] = 0.8 + random() * 2;
        vertices[i * 3 + 2] = (random() - 0.5) * 2;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
      particles = new THREE.Points(
        geo,
        new THREE.PointsMaterial({
          color: "#ffc590",
          size: 0.035,
          transparent: true,
          opacity: 0.75,
          depthWrite: false,
        }),
      );
      archive.add(particles);
      particles.visible = false;
    }
    await yieldSetup();
    // The islands are linked by an illuminated, dotted route across the sky.
    for (const [a, b] of [
      ["home", "driftdoctor"],
      ["home", "compatforge"],
      ["home", "originkeep"],
    ]) {
      const p1 = new THREE.Vector3(...destinations[a]),
        p2 = new THREE.Vector3(...destinations[b]);
      p1.y -= 0.35;
      p2.y -= 0.35;
      const curve = new THREE.QuadraticBezierCurve3(
        p1,
        p1
          .clone()
          .lerp(p2, 0.5)
          .add(new THREE.Vector3(0, -1, 0)),
        p2,
      );
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(30)),
        new THREE.LineDashedMaterial({
          color: "#f1c6a0",
          transparent: true,
          opacity: 0.45,
          dashSize: 0.1,
          gapSize: 0.16,
        }),
      );
      line.computeLineDistances();
      scene.add(line);
    }
    // Distant floating fragments and peach mist, with no costly post-processing.
    for (let i = 0; i < (low ? 10 : 25); i++) {
      const rock = mesh(
        new THREE.DodecahedronGeometry(0.12 + random() * 0.3),
        stone,
        scene,
        random() * 27 - 12,
        random() * 8 - 5,
        random() * 12 - 7,
      );
      rock.rotation.set(random() * 3, random() * 3, random() * 3);
    }
    const gltf = new GLTFLoader(),
      loaded = new Set();
    async function scenery(id) {
      if (loaded.has(id)) return;
      loaded.add(id);
      try {
        const [birch, bush] = await Promise.all([
          loadModel("birch"),
          loadModel("bush"),
        ]);
        if (dead) return;
        const island = islands[id],
          r = id === "home" ? 2.3 : 1.8;
        for (let i = 0; i < (low ? 2 : 3); i++) {
          const tree = birch.clone(true);
          const a = 2.1 + i * 1.5;
          tree.position.set(Math.cos(a) * r, 0.27, Math.sin(a) * r);
          tree.scale.setScalar(0.29 + random() * 0.1);
          tree.rotation.y = random() * 6;
          island.add(tree);
        }
        for (let i = 0; i < 3; i++) {
          const plant = bush.clone(true);
          let a = 0.3 + i * 2;
          plant.position.set(Math.cos(a) * r, 0.27, Math.sin(a) * r);
          plant.scale.setScalar(0.48);
          island.add(plant);
        }
        redraw = true;
      } catch {
        if (!dead)
          status(
            "Some scenery could not load. All destinations and project content remain available.",
          );
      }
    }
    function loadModel(key) {
      return (modelCache[key] ??= gltf.loadAsync(assets[key]).then((g) => {
        if (low) {
          const materials = new Map();
          g.scene.traverse((node) => {
            if (!node.isMesh) return;
            const simple = (original) => {
              if (!materials.has(original)) {
                materials.set(
                  original,
                  new THREE.MeshLambertMaterial({
                    color: original.color,
                    map: original.map,
                    alphaTest: original.alphaTest,
                    side: original.side,
                    transparent: original.transparent,
                    opacity: original.opacity,
                    vertexColors: original.vertexColors,
                    flatShading: true,
                  }),
                );
                original.dispose();
              }
              return materials.get(original);
            };
            node.material = Array.isArray(node.material)
              ? node.material.map(simple)
              : simple(node.material);
          });
        }
        if (dead) {
          disposeResources([g.scene]);
          throw new Error("World was disposed");
        }
        modelRoots.add(g.scene);
        return g.scene;
      }));
    }
    await scenery("home");
    if (dead) throw new Error("Renderer lost during initialization");
    // Remaining scenery is requested only on visiting its island or after idle.
    const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1000));
    idleHandle = idle(
      async () => {
        for (const id of ["driftdoctor", "compatforge", "originkeep"]) {
          if (dead) return;
          await scenery(id);
          if (globalThis.scheduler?.yield) await scheduler.yield();
          else await new Promise((resolve) => setTimeout(resolve, 0));
        }
      },
      { timeout: 5000 },
    );
    // Mobile uses the matching baked palette and directional lights; avoid HDR
    // preprocessing and a second shader compilation on constrained devices.
    let lighting = Promise.resolve();
    if (low) mount.dataset.lighting = "built-in";
    else
      lighting = new HDRLoader()
        .loadAsync(assets.environment)
        .then((texture) => {
          if (dead) {
            texture.dispose();
            return;
          }
          // Filtered from Venice Sunset at asset-authoring time. CubeUV data
          // avoids blocking GPU convolution and retains the same reflections.
          texture.mapping = THREE.CubeUVReflectionMapping;
          scene.environment = texture;
          scene.environmentIntensity = 0.22;
          mount.dataset.lighting = "environment";
        })
        .catch(() => {
          if (dead) return;
          mount.dataset.lighting = "built-in";
          status("Using the world’s built-in dusk lighting.");
        });
    const labels = [
      ...document.querySelectorAll(".island-labels [data-island]"),
    ];
    let labelSizes;
    const drawingSize = new THREE.Vector2();
    function layout() {
      redraw = true;
      labelSizes = null;
      const w = mount.clientWidth,
        h = mount.clientHeight,
        portrait = w < 768 && h > w;
      if (!w || !h) return;
      const size = portrait
        ? Math.max(32, (19.5 * h) / w)
        : Math.max(19, (24 * h) / w);
      camera.left = (-size * w) / h / 2;
      camera.right = (size * w) / h / 2;
      camera.top = size / 2;
      camera.bottom = -size / 2;
      camera.updateProjectionMatrix();
      renderer.getSize(drawingSize);
      if (drawingSize.x !== w || drawingSize.y !== h)
        renderer.setSize(w, h, false);
      if (!positioned) {
        positioned = true;
        const target = portrait
          ? new THREE.Vector3(0, 5, 0)
          : new THREE.Vector3(-4, 1, 0);
        controls.target.copy(target);
        camera.position.copy(target).add(new THREE.Vector3(0, 14, 27));
        controls.update();
      }
      camera.updateMatrixWorld();
      projectLabels();
    }
    function projectLabels() {
      if (!labelSizes && labels[0].offsetWidth)
        labelSizes = labels.map((button) => ({
          width: button.offsetWidth,
          height: button.offsetHeight,
        }));
      const placed = [],
        w = mount.clientWidth,
        h = mount.clientHeight;
      const minY = h < 500 ? 50 : w < 768 ? 220 : 70,
        maxY = h - 95;
      for (const [index, button] of labels.entries()) {
        const id = button.dataset.island;
        const point = new THREE.Vector3(...destinations[id])
          .add(islands[id].userData.label.position)
          .project(camera);
        const size = labelSizes?.[index] || { width: 150, height: 54 },
          halfW = size.width / 2,
          halfH = size.height / 2;
        const desiredX = Math.round(
          Math.min(w - 75, Math.max(75, (point.x * 0.5 + 0.5) * w)),
        );
        const desiredY = Math.round(
          Math.min(maxY, Math.max(minY, (-point.y * 0.5 + 0.5) * h)),
        );
        let x = desiredX,
          y = desiredY,
          best = Infinity;
        // Keep labels separated when projected islands approach one another.
        const xs = [
          desiredX,
          ...placed.flatMap((r) => [r.left - halfW - 8, r.right + halfW + 8]),
        ];
        const ys = [
          desiredY,
          ...placed.flatMap((r) => [r.top - halfH - 8, r.bottom + halfH + 8]),
        ];
        for (const cx of xs)
          for (const cy of ys) {
            if (cx < 75 || cx > w - 75 || cy < minY || cy > maxY) continue;
            if (
              placed.some(
                (r) =>
                  cx + halfW + 8 > r.left &&
                  cx - halfW - 8 < r.right &&
                  cy + halfH + 8 > r.top &&
                  cy - halfH - 8 < r.bottom,
              )
            )
              continue;
            const distance = (cx - desiredX) ** 2 + (cy - desiredY) ** 2;
            if (distance < best) {
              best = distance;
              x = cx;
              y = cy;
            }
          }
        x = Math.round(x);
        y = Math.round(y);
        placed.push({
          left: x - halfW,
          right: x + halfW,
          top: y - halfH,
          bottom: y + halfH,
        });
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
      }
    }
    function render(now = 0) {
      if (!active || dead) return;
      frame = requestAnimationFrame(render);
      if (now - last < (low ? 33 : 24)) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!paused) elapsed += dt;
      controls.update();
      // Constrained devices keep the scene still between interactions. Travel,
      // orbit and samples still animate; desktop ambient motion stays available.
      if ((paused || low) && !redraw && !particles?.visible) return;
      if (!paused && !low) {
        for (const [i, group] of Object.values(islands).entries())
          group.position.y =
            Object.values(destinations)[i][1] +
            Math.sin(elapsed * 0.65 + i) * 0.1;
        beaconRing.rotation.z = elapsed * 0.1;
        gear.rotation.z = elapsed * 0.12;
        orbit.rotation.y = elapsed * 0.07;
        file.rotation.y = Math.sin(elapsed * 0.5) * 0.15;
      }
      if (!paused && particles?.visible) particles.rotation.y = elapsed * 0.2;
      projectLabels();
      try {
        renderer.render(scene, camera);
        redraw = false;
      } catch {
        fail();
      }
    }
    function fail() {
      if (dead) return;
      dispose();
      onFailure();
    }
    controls.addEventListener("start", () => {
      travelTween?.kill();
      travelTween = null;
      mount.dataset.orbit = "dragging";
    });
    controls.addEventListener("end", () => {
      mount.dataset.orbit = "idle";
    });
    controls.addEventListener("change", () => { redraw = true; });
    function travel(id, reset = false) {
      if (!islands[id] || dead) return;
      mount.dataset.destination = id;
      scenery(id);
      travelTween?.kill();
      const portrait =
        mount.clientWidth < 768 && mount.clientHeight > mount.clientWidth;
      const target = reset
        ? portrait
          ? new THREE.Vector3(0, 5, 0)
          : new THREE.Vector3(-4, 1, 0)
        : new THREE.Vector3(...destinations[id]);
      // Keep the selected island visible beside a desktop panel.
      if (!reset && !portrait) target.x += 3.4;
      const end = target.clone().add(new THREE.Vector3(0, 14, 27));
      const zoom = reset ? 1 : portrait ? 1.12 : 1.38;
      const message = reset
        ? "Drag to look around · choose an island"
        : `${names[id]} · close the panel to explore here`;
      // An orbit gesture may interrupt camera travel immediately.
      controls.enabled = true;
      // The initial route is already at Home. Avoid a 1.4-second animation of
      // identical coordinates, which otherwise requests needless GPU frames.
      if (camera.position.distanceToSquared(end) < 1e-10 &&
          controls.target.distanceToSquared(target) < 1e-10 &&
          Math.abs(camera.zoom - zoom) < 1e-6) {
        redraw = true;
        status(message);
        return;
      }
      travelTween = gsap
        .timeline({
          onComplete: () => {
            travelTween = null;
            controls.enabled = true;
            controls.update();
          },
        })
        .to(
          camera.position,
          {
            x: end.x,
            y: end.y,
            z: end.z,
            duration: paused ? 0 : 1.4,
            ease: "power3.inOut",
          },
          0,
        )
        .to(
          controls.target,
          {
            x: target.x,
            y: target.y,
            z: target.z,
            duration: paused ? 0 : 1.4,
            ease: "power3.inOut",
          },
          0,
        )
        .to(
          camera,
          {
            zoom,
            duration: paused ? 0 : 1.4,
            onUpdate: () => {
              camera.updateProjectionMatrix();
              redraw = true;
            },
          },
          0,
        );
      status(message);
    }
    layout();
    // Configure the final environment before compiling, so its arrival cannot
    // trigger another synchronous shader batch during the first visible frame.
    await lighting;
    await yieldSetup();
    const compileStarted = performance.now();
    await renderer.compileAsync(scene, camera);
    performance.measure("World shader preparation", { start: compileStarted });
    await yieldSetup();
    // Upload each island's shared buffers and textures in a separate hidden frame.
    // The poster remains visible until every batch is ready.
    const renderBatches = scene.children
      .map((child) => {
        const batch = [];
        child.traverseVisible((node) => {
          if (node.isMesh || node.isPoints || node.isLine || node.isSprite)
            batch.push(node);
        });
        return batch;
      })
      .filter((batch) => batch.length);
    // Hide geometry only. Hiding island groups also hides their lights, which
    // creates unprepared shader variants and synchronous GPU stalls.
    for (const node of renderBatches.flat()) node.visible = false;
    const uploadStarted = performance.now();
    // Upload/prepare real scene buffers behind the poster without repeatedly
    // shading a full screen of invisible pixels on the software/mobile GPU.
    renderer.setSize(1, 1, false);
    try {
      for (const batch of renderBatches) {
        for (const node of batch) node.visible = true;
        renderer.render(scene, camera);
        for (const node of batch) node.visible = false;
        await yieldSetup();
      }
    } finally {
      for (const node of renderBatches.flat()) node.visible = true;
      // A rotation during initialization must restore the current viewport.
      layout();
    }
    performance.measure("World buffer uploads", { start: uploadStarted });
    // Observe only after restoring the current viewport. An initial observer
    // notification during warm-up would expand its one-pixel drawing buffer.
    // Later notifications track settled header breakpoints and viewport units.
    resizeObserver = new ResizeObserver(layout);
    resizeObserver.observe(mount);
    const firstFrameStarted = performance.now();
    renderer.render(scene, camera);
    performance.measure("World first full frame", { start: firstFrameStarted });
    await yieldSetup();
    camera.updateMatrixWorld();
    projectLabels();
    render();
    return {
      refreshLayout: layout,
      getView() {
        return {
          position: camera.position.toArray(),
          target: controls.target.toArray(),
          zoom: camera.zoom,
        };
      },
      setView(view) {
        redraw = true;
        travelTween?.kill();
        camera.position.fromArray(view.position);
        controls.target.fromArray(view.target);
        camera.zoom = view.zoom;
        camera.updateProjectionMatrix();
        controls.update();
        projectLabels();
      },
      travel,
      reset() {
        travel("home", true);
      },
      setActive(value) {
        redraw = true;
        active = value && !document.hidden;
        if (active) {
          layout();
          cancelAnimationFrame(frame);
          last = performance.now();
          render(last);
        } else {
          cancelAnimationFrame(frame);
          travelTween?.pause();
        }
        if (active) travelTween?.resume();
        mount.dataset.rendering = active ? "active" : "paused";
      },
      setPaused(value) {
        paused = value;
        redraw = true;
        mount.dataset.motion = value ? "paused" : "active";
      },
      panelEnter(node) {
        if (!paused)
          gsap.fromTo(
            node,
            { opacity: 0, x: 14 },
            {
              opacity: 1,
              x: 0,
              duration: 0.35,
              ease: "power2.out",
              clearProps: "transform,opacity",
            },
          );
      },
      demo(type, value, instant = false) {
        redraw = true;
        const animate = !paused && !instant;
        mount.dataset[`${type}State`] = String(value);
        if (type === "repair") {
          for (const [i, p] of pieces.entries()) {
            gsap.killTweensOf([p.position, p.rotation]);
            gsap.to(p.position, {
              x: (i - 1) * 0.7 + (value ? 0 : i === 0 ? -0.2 : 0),
              y: value ? 0.38 : 0.38 + (i - 1) * 0.23,
              duration: animate ? 0.7 : 0,
              delay: animate ? i * 0.12 : 0,
              onUpdate: () => { redraw = true; },
            });
            gsap.to(p.rotation, {
              z: value ? 0 : (i - 1) * 0.19,
              duration: animate ? 0.7 : 0,
              onUpdate: () => { redraw = true; },
            });
          }
          repairLamp.material = value ? validatedLamp : glow;
        }
        if (type === "evidence") {
          const colors = {
            supported: "#a4d6c5",
            unknown: "#c4beab",
            conflicting: "#ed987e",
          };
          lensMat.color.set(colors[value]);
          evidenceLights.forEach((light, i) =>
            light.material.color.set(
              i === { supported: 0, unknown: 1, conflicting: 2 }[value]
                ? colors[value]
                : "#526a76",
            ),
          );
        }
        if (type === "archive") {
          gsap.to(progress, {
            value: value ? 1.1 : -0.1,
            duration: animate ? 1.2 : 0,
            ease: "none",
            overwrite: true,
            onUpdate: () => { redraw = true; },
          });
          particleTimer?.kill();
          if (particles) {
            particles.visible = animate;
            if (animate)
              particleTimer = gsap.delayedCall(1.3, () => {
                particles.visible = false;
                redraw = true;
              });
          }
        }
      },
      dispose,
    };
  } catch (error) {
    dispose();
    throw error;
  }
  function disposeResources(roots) {
    const geometries = new Set(),
      materials = new Set(ownedMaterials),
      textures = new Set();
    for (const object of roots)
      object.traverse((node) => {
        if (node.geometry) geometries.add(node.geometry);
        for (const material of Array.isArray(node.material)
          ? node.material
          : [node.material])
          if (material) materials.add(material);
        gsap.killTweensOf([node.position, node.rotation]);
      });
    for (const material of materials) {
      for (const value of Object.values(material))
        if (value?.isTexture) textures.add(value);
      material.dispose();
    }
    for (const geometry of geometries) geometry.dispose();
    for (const texture of textures) texture.dispose();
  }
  function dispose() {
    if (dead) return;
    dead = true;
    cancelAnimationFrame(frame);
    travelTween?.kill();
    particleTimer?.kill();
    if (window.cancelIdleCallback) cancelIdleCallback(idleHandle);
    else clearTimeout(idleHandle);
    resizeObserver?.disconnect();
    if (progress) gsap.killTweensOf(progress);
    renderer.domElement.removeEventListener("webglcontextlost", contextLost);
    controls.dispose();
    disposeResources([scene, ...modelRoots]);
    ownedMaterials.clear();
    scene.environment?.dispose();
    renderer.dispose();
    // Return the GPU context immediately when the world is permanently removed.
    renderer.forceContextLoss();
    renderer.domElement.remove();
    mount.dataset.rendering = "disposed";
  }
}
