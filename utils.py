"""
Portfolio Utility Functions
==========================

Modular utility functions for the portfolio website to improve code organization,
reusability, and maintainability. This module contains:

- Configuration validation utilities
- Image processing helpers
- Performance monitoring tools
- Error handling utilities
- Data sanitization functions

Author: Aarya Mody
Date: 2025
Version: 1.0.0
"""

import os
import logging
import hashlib
import time
from typing import Any, Dict, List, Optional, Union
from pathlib import Path
from PIL import Image
import base64
import io

logger = logging.getLogger(__name__)

# Configuration Validation Utilities
# =================================

def validate_email(email: str) -> bool:
    """
    Validate email format with basic regex checking.
    
    Args:
        email (str): Email address to validate
        
    Returns:
        bool: True if email format is valid
    """
    import re
    email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(email_pattern, email))

def validate_url(url: str) -> bool:
    """
    Validate URL format.
    
    Args:
        url (str): URL to validate
        
    Returns:
        bool: True if URL format is valid
    """
    import re
    url_pattern = r'^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$'
    return bool(re.match(url_pattern, url))

def validate_phone(phone: str) -> bool:
    """
    Validate phone number format (flexible for international numbers).
    
    Args:
        phone (str): Phone number to validate
        
    Returns:
        bool: True if phone format is valid
    """
    import re
    # Remove common phone number characters
    cleaned = re.sub(r'[\s\-\(\)\+\.]', '', phone)
    # Check if remaining characters are digits and reasonable length
    return cleaned.isdigit() and 7 <= len(cleaned) <= 15

def sanitize_filename(filename: str) -> str:
    """
    Sanitize filename by removing/replacing unsafe characters.
    
    Args:
        filename (str): Original filename
        
    Returns:
        str: Sanitized filename
    """
    import re
    # Remove or replace unsafe characters
    sanitized = re.sub(r'[<>:"/\\|?*]', '_', filename)
    sanitized = re.sub(r'[^\w\-_\.]', '_', sanitized)
    # Remove multiple underscores
    sanitized = re.sub(r'_+', '_', sanitized)
    return sanitized.strip('_')

# Image Processing Utilities
# =========================

def get_image_info(image_path: str) -> Dict[str, Any]:
    """
    Get comprehensive information about an image file.
    
    Args:
        image_path (str): Path to image file
        
    Returns:
        Dict[str, Any]: Image information including size, format, mode, etc.
    """
    info = {
        'exists': False,
        'size': None,
        'format': None,
        'mode': None,
        'file_size': 0,
        'dimensions': None,
        'aspect_ratio': None,
        'is_valid': False
    }
    
    try:
        if not os.path.exists(image_path):
            return info
        
        info['exists'] = True
        info['file_size'] = os.path.getsize(image_path)
        
        with Image.open(image_path) as img:
            info['size'] = img.size
            info['format'] = img.format
            info['mode'] = img.mode
            info['dimensions'] = f"{img.size[0]}x{img.size[1]}"
            info['aspect_ratio'] = round(img.size[0] / img.size[1], 2) if img.size[1] > 0 else 0
            info['is_valid'] = True
            
    except Exception as e:
        logger.error(f"Error getting image info for {image_path}: {e}")
    
    return info

def optimize_image_for_web(
    image_path: str, 
    output_path: Optional[str] = None,
    max_width: int = 1200,
    max_height: int = 800,
    quality: int = 85
) -> bool:
    """
    Optimize image for web use by resizing and compressing.
    
    Args:
        image_path (str): Path to source image
        output_path (Optional[str]): Path for optimized image (None to overwrite)
        max_width (int): Maximum width in pixels
        max_height (int): Maximum height in pixels
        quality (int): JPEG quality (1-100)
        
    Returns:
        bool: True if optimization successful
    """
    try:
        if not os.path.exists(image_path):
            logger.error(f"Image not found: {image_path}")
            return False
        
        with Image.open(image_path) as img:
            # Convert to RGB if necessary
            if img.mode in ('RGBA', 'P', 'LA'):
                if img.mode == 'RGBA':
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    background.paste(img, mask=img.split()[-1])
                    img = background
                else:
                    img = img.convert('RGB')
            
            # Calculate new size maintaining aspect ratio
            original_size = img.size
            ratio = min(max_width / original_size[0], max_height / original_size[1])
            
            if ratio < 1:  # Only resize if image is larger than max dimensions
                new_size = (int(original_size[0] * ratio), int(original_size[1] * ratio))
                img = img.resize(new_size, Image.Resampling.LANCZOS)
            
            # Save optimized image
            save_path = output_path if output_path else image_path
            img.save(save_path, 'JPEG', quality=quality, optimize=True, progressive=True)
            
            logger.info(f"Image optimized: {original_size} -> {img.size}, saved to {save_path}")
            return True
            
    except Exception as e:
        logger.error(f"Error optimizing image {image_path}: {e}")
        return False

# Performance Monitoring Utilities
# ===============================

class PerformanceTimer:
    """Context manager for timing operations."""
    
    def __init__(self, operation_name: str, log_level: str = "INFO"):
        self.operation_name = operation_name
        self.log_level = log_level.upper()
        self.start_time = None
        self.end_time = None
    
    def __enter__(self):
        self.start_time = time.perf_counter()
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.end_time = time.perf_counter()
        duration = (self.end_time - self.start_time) * 1000  # Convert to milliseconds
        
        log_message = f"{self.operation_name} completed in {duration:.2f}ms"
        
        if self.log_level == "DEBUG":
            logger.debug(log_message)
        elif self.log_level == "INFO":
            logger.info(log_message)
        elif self.log_level == "WARNING":
            logger.warning(log_message)
        elif self.log_level == "ERROR":
            logger.error(log_message)
    
    def get_duration_ms(self) -> float:
        """Get duration in milliseconds if timing is complete."""
        if self.start_time and self.end_time:
            return (self.end_time - self.start_time) * 1000
        return 0.0

def measure_memory_usage() -> Dict[str, Any]:
    """
    Measure current memory usage of the application.
    
    Returns:
        Dict[str, Any]: Memory usage statistics
    """
    import sys
    import gc
    
    stats = {
        'timestamp': time.time(),
        'python_objects': len(gc.get_objects()),
        'gc_counts': gc.get_count(),
        'memory_info': {}
    }
    
    try:
        import psutil
        process = psutil.Process()
        memory_info = process.memory_info()
        stats['memory_info'] = {
            'rss': memory_info.rss,  # Resident Set Size
            'vms': memory_info.vms,  # Virtual Memory Size
            'rss_mb': round(memory_info.rss / 1024 / 1024, 2),
            'vms_mb': round(memory_info.vms / 1024 / 1024, 2)
        }
    except ImportError:
        logger.debug("psutil not available for detailed memory monitoring")
    
    return stats

def format_bytes(bytes_value: int) -> str:
    """
    Format bytes into human-readable format.
    
    Args:
        bytes_value (int): Size in bytes
        
    Returns:
        str: Formatted size string
    """
    for unit in ['B', 'KB', 'MB', 'GB', 'TB']:
        if bytes_value < 1024:
            return f"{bytes_value:.1f} {unit}"
        bytes_value /= 1024
    return f"{bytes_value:.1f} PB"

# Data Sanitization and Security
# ==============================

def sanitize_html_input(text: str) -> str:
    """
    Basic HTML sanitization for user inputs.
    
    Args:
        text (str): Text to sanitize
        
    Returns:
        str: Sanitized text
    """
    if not text:
        return ""
    
    # Replace potentially dangerous characters
    sanitized = (text
                .replace('<', '&lt;')
                .replace('>', '&gt;')
                .replace('"', '&quot;')
                .replace("'", '&#x27;')
                .replace('&', '&amp;'))
    
    return sanitized

def validate_config_data_structure(data: Dict[str, Any], required_keys: List[str]) -> Dict[str, Any]:
    """
    Validate configuration data structure and provide fallbacks.
    
    Args:
        data (Dict[str, Any]): Configuration data to validate
        required_keys (List[str]): List of required keys
        
    Returns:
        Dict[str, Any]: Validation results with errors and warnings
    """
    validation_result = {
        'is_valid': True,
        'errors': [],
        'warnings': [],
        'missing_keys': [],
        'invalid_types': {}
    }
    
    # Check for missing required keys
    for key in required_keys:
        if key not in data:
            validation_result['missing_keys'].append(key)
            validation_result['is_valid'] = False
    
    # Check for empty or None values in important keys
    important_keys = ['name', 'title', 'email']
    for key in important_keys:
        if key in data and (data[key] is None or str(data[key]).strip() == ''):
            validation_result['warnings'].append(f"Important key '{key}' is empty or None")
    
    # Validate specific data types
    type_validations = {
        'name': str,
        'title': str,
        'email': str,
        'social_links': dict,
        'skills': dict
    }
    
    for key, expected_type in type_validations.items():
        if key in data and not isinstance(data[key], expected_type):
            validation_result['invalid_types'][key] = {
                'expected': expected_type.__name__,
                'actual': type(data[key]).__name__
            }
            validation_result['warnings'].append(f"Key '{key}' has unexpected type")
    
    if validation_result['missing_keys'] or validation_result['invalid_types']:
        validation_result['is_valid'] = False
    
    return validation_result

# File System Utilities
# ====================

def ensure_directory_exists(directory_path: str) -> bool:
    """
    Ensure a directory exists, create if it doesn't.
    
    Args:
        directory_path (str): Path to directory
        
    Returns:
        bool: True if directory exists or was created successfully
    """
    try:
        Path(directory_path).mkdir(parents=True, exist_ok=True)
        return True
    except Exception as e:
        logger.error(f"Error creating directory {directory_path}: {e}")
        return False

def get_file_hash(file_path: str, algorithm: str = "md5") -> Optional[str]:
    """
    Calculate hash of a file for caching and integrity checking.
    
    Args:
        file_path (str): Path to file
        algorithm (str): Hash algorithm ('md5', 'sha1', 'sha256')
        
    Returns:
        Optional[str]: File hash or None if error
    """
    try:
        hash_func = hashlib.new(algorithm)
        with open(file_path, 'rb') as f:
            for chunk in iter(lambda: f.read(4096), b""):
                hash_func.update(chunk)
        return hash_func.hexdigest()
    except Exception as e:
        logger.error(f"Error calculating hash for {file_path}: {e}")
        return None

def clean_old_cache_files(cache_directory: str, max_age_hours: int = 24) -> int:
    """
    Clean old cache files to prevent disk space issues.
    
    Args:
        cache_directory (str): Directory containing cache files
        max_age_hours (int): Maximum age of cache files in hours
        
    Returns:
        int: Number of files cleaned
    """
    cleaned_count = 0
    
    try:
        if not os.path.exists(cache_directory):
            return 0
        
        current_time = time.time()
        max_age_seconds = max_age_hours * 3600
        
        for filename in os.listdir(cache_directory):
            file_path = os.path.join(cache_directory, filename)
            
            if os.path.isfile(file_path):
                file_age = current_time - os.path.getmtime(file_path)
                
                if file_age > max_age_seconds:
                    os.remove(file_path)
                    cleaned_count += 1
                    logger.debug(f"Cleaned old cache file: {filename}")
        
        logger.info(f"Cleaned {cleaned_count} old cache files from {cache_directory}")
        
    except Exception as e:
        logger.error(f"Error cleaning cache files: {e}")
    
    return cleaned_count

# Export commonly used functions
__all__ = [
    'validate_email', 'validate_url', 'validate_phone', 'sanitize_filename',
    'get_image_info', 'optimize_image_for_web',
    'PerformanceTimer', 'measure_memory_usage', 'format_bytes',
    'sanitize_html_input', 'validate_config_data_structure',
    'ensure_directory_exists', 'get_file_hash', 'clean_old_cache_files'
]
