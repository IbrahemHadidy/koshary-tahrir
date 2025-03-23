'use client';

import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';

interface GalleryProps {
  images: StaticImageData[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  return (
    <div className="space-y-4">
      <div
        key={selectedImage}
        className="relative aspect-square animate-[fadeScale_0.2s_ease-out] overflow-hidden rounded-2xl shadow-lg"
      >
        <Image
          src={images[selectedImage]}
          alt="image"
          fill
          loading="lazy"
          className="bg-white object-contain p-6"
        />
      </div>

      {images.length > 1 && (
        <div
          className={`grid ${
            images.length < 4
              ? 'grid-cols-[repeat(auto-fit,80px)] justify-center'
              : 'grid-cols-[repeat(auto-fit,minmax(80px,1fr))]'
          } w-full gap-4`}
        >
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              name="image"
              className={`relative aspect-square max-h-32 cursor-pointer overflow-hidden rounded-lg border-2 bg-white transition-transform duration-200 ease-out ${
                selectedImage === index
                  ? 'scale-105 border-amber-600'
                  : 'border-gray-200 hover:scale-105 hover:border-amber-400 active:scale-95'
              }`}
            >
              <Image src={img} alt="img-thumb" fill className="object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
