"""
Image Optimization Script
This script optimizes your profile photo for better web performance.
"""

from PIL import Image
import os

def optimize_profile_photo():
    """Optimize the profile photo for web use"""
    
    input_path = "IMG_4921.PNG"
    output_path = "profile_photo_optimized.jpg"
    
    if not os.path.exists(input_path):
        print(f"❌ Image not found: {input_path}")
        return
    
    try:
        # Open the image
        img = Image.open(input_path)
        print(f"📸 Original image: {img.size}, {img.format}")
        
        # Convert to RGB if needed
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
        
        # Resize to optimal size for web (300x300 for profile photos)
        # Maintain aspect ratio
        img.thumbnail((400, 400), Image.Resampling.LANCZOS)
        
        # Save optimized version
        img.save(output_path, "JPEG", quality=85, optimize=True)
        
        # Check file sizes
        original_size = os.path.getsize(input_path) / 1024  # KB
        optimized_size = os.path.getsize(output_path) / 1024  # KB
        
        print(f"✅ Optimized image: {img.size}")
        print(f"📁 Original size: {original_size:.1f} KB")
        print(f"📁 Optimized size: {optimized_size:.1f} KB")
        print(f"💾 Size reduction: {((original_size - optimized_size) / original_size * 100):.1f}%")
        
        # Update config to use optimized image
        config_content = """
# Update your config.py with this line:
PROFILE_PHOTO = "profile_photo_optimized.jpg"
"""
        print(config_content)
        
    except Exception as e:
        print(f"❌ Error optimizing image: {e}")

if __name__ == "__main__":
    optimize_profile_photo()
