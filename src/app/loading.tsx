import Logo from '@images/logo.webp';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-md">
      <div className="flex flex-col items-center gap-4">
        {/* Logo with Pulse Animation */}
        <div className="animate-[pulseScaleFade_1s_ease-in-out_infinite]">
          <Image src={Logo} alt="logo" priority width={80} height={80} className="rounded-full" />
        </div>

        {/* Modern Loading Indicator */}
        <div className="relative h-2 w-48 overflow-hidden rounded-full bg-gray-200">
          <div className="absolute left-0 h-full w-1/3 animate-[slideAcross_1.5s_linear_infinite] rounded-full bg-amber-600" />
        </div>
      </div>
    </div>
  );
}
