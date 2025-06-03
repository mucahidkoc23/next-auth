import React from 'react';
import Image from 'next/image';

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen w-screen bg-[#FAEBDD]">
      <div className="hidden md:block md:w-1/2 h-full">
        <div className="h-full w-full overflow-hidden rounded-xl">
          <Image
            src="/images.jpg"
            alt="Kayra"
            width={500}
            height={500}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      <div className="flex w-full md:w-1/2 items-center justify-center">
        <div className="w-full max-w-sm rounded-lg bg-[#FAEBDD] p-8">
          <h2 className="mb-4 text-center text-5xl font-bold text-orange-600">Kayra Export</h2>
          <h3 className="mb-4 text-center text-4xl font-semibold text-gray-700">Hoşgeldiniz.</h3>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
