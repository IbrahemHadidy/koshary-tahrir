import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <motion.div
        key={selectedImage}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative aspect-square overflow-hidden rounded-2xl shadow-lg"
      >
        <Image
          src={images[selectedImage]}
          alt="image"
          fill
          className="bg-white object-contain p-6"
          loading="lazy"
        />
      </motion.div>

      {images.length > 1 && (
        <div
          className={`grid ${
            images.length < 4
              ? 'grid-cols-[repeat(auto-fit,80px)] justify-center'
              : 'grid-cols-[repeat(auto-fit,minmax(80px,1fr))]'
          } w-full gap-4`}
        >
          {images.map((img, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              name="image"
              className={`relative aspect-square max-h-32 cursor-pointer overflow-hidden rounded-lg border-2 bg-white transition-all ${
                selectedImage === index
                  ? 'scale-105 border-amber-600'
                  : 'border-gray-200 hover:border-amber-400'
              }`}
            >
              <Image src={img} alt="img-thumb" fill className="object-contain" />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
