'use client';

import Logo from '@images/logo.webp';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-md">
      <div className="flex flex-col items-center gap-4">
        {/* Logo with Pulse Animation */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        >
          <Image src={Logo} alt="logo" width={80} height={80} className="rounded-full" />
        </motion.div>

        {/* Modern Loading Indicator */}
        <div className="relative h-2 w-48 overflow-hidden rounded-full bg-gray-200">
          <motion.div
            className="absolute left-0 h-full w-1/3 rounded-full bg-amber-600"
            initial={{ x: '-100%' }}
            animate={{ x: '300%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      </div>
    </div>
  );
}
