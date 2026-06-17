#!/usr/bin/env python3
"""Apply a subtle photo finish to homepage images (warmth, grain, softer digital look)."""

from __future__ import annotations

import math
import random
import shutil
from pathlib import Path

from PIL import Image, ImageChops, ImageEnhance, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / "public" / "images"
BACKUP = IMAGES / "_originals"

FILES = [
    "hero-woman-bible.jpg",
    "women-of-every-season.jpg",
    "season-assessment.jpg",
    "faith-planner.jpg",
    "community-group.jpg",
    "testimony-journal.jpg",
]


def warm_tones(img: Image.Image) -> Image.Image:
    r, g, b = img.split()
    r = r.point(lambda i: min(255, int(i * 1.03 + 4)))
    g = g.point(lambda i: min(255, int(i * 1.01 + 2)))
    b = b.point(lambda i: max(0, int(i * 0.96 - 2)))
    return Image.merge("RGB", (r, g, b))


def soft_clarity(img: Image.Image, radius: float = 0.6, blend: float = 0.12) -> Image.Image:
    blurred = img.filter(ImageFilter.GaussianBlur(radius=radius))
    return Image.blend(img, blurred, blend)


def add_grain(img: Image.Image, intensity: float = 14, opacity: float = 0.035) -> Image.Image:
    w, h = img.size
    try:
        noise = Image.effect_noise((w, h), intensity).convert("RGB")
    except AttributeError:
        layer = Image.new("L", (w, h))
        px = layer.load()
        for y in range(h):
            for x in range(w):
                px[x, y] = random.randint(0, 255)
        noise = Image.merge("RGB", (layer, layer, layer))

    return Image.blend(img, noise, opacity)


def vignette(img: Image.Image, strength: float = 0.18) -> Image.Image:
    w, h = img.size
    cx, cy = w / 2, h / 2
    max_dist = math.hypot(cx, cy)
    mask = Image.new("L", (w, h))
    px = mask.load()
    for y in range(h):
        for x in range(w):
            dist = math.hypot(x - cx, y - cy) / max_dist
            px[x, y] = int(255 * (1 - strength * (dist**1.6)))
    dark = Image.new("RGB", (w, h), (18, 12, 8))
    return Image.composite(img, dark, mask)


def polish(img: Image.Image) -> Image.Image:
    img = img.convert("RGB")
    img = warm_tones(img)
    img = ImageEnhance.Color(img).enhance(0.94)
    img = ImageEnhance.Contrast(img).enhance(1.04)
    img = ImageEnhance.Brightness(img).enhance(1.01)
    img = soft_clarity(img)
    img = img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=45, threshold=3))
    img = add_grain(img)
    img = vignette(img, strength=0.12)
    return img


def main() -> None:
    BACKUP.mkdir(exist_ok=True)
    random.seed(42)

    for name in FILES:
        src = IMAGES / name
        if not src.exists():
            print(f"skip (missing): {name}")
            continue

        backup = BACKUP / name
        if not backup.exists():
            shutil.copy2(src, backup)
            print(f"backed up: {name}")

        with Image.open(src) as raw:
            raw = ImageOps.exif_transpose(raw)
            out = polish(raw)
            out.save(src, format="JPEG", quality=90, optimize=True, subsampling=0)
            print(f"polished: {name} ({out.size[0]}x{out.size[1]})")

    print("done — originals saved in public/images/_originals/")


if __name__ == "__main__":
    main()
