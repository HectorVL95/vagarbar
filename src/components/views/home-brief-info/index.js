'use client'

import Image from 'next/image';
import { useContext } from 'react';
import { Context } from '@/context/global-context';

const HomeBriefInfo  = () => {
  const { screen_width } = useContext(Context);

  return (
    <section className="flex flex-col justify-center items-center px-8 py-20">
      {
        screen_width  > 1020 ? 
        <div className="flex justify-around items-center gap-12 w-full">
          <div className="flex flex-col gap-12 max-w-md">
            <p className="text-3xl text-left">
              Nuestro Bar va a donde estes
            </p>
            <p className="text-left">
              Preparamos bebidas para todos los gustos, incluido no alcoholicas para los pequeños, deleitese con nuestra variedad de productos que haran que su evento sea mucho mas placentero
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image src={'/img/served.jpg'} width={350} height={350} alt="Bebida servida"/>
          </div>
        </div>
        : 
        <div className="max-w-7xl flex flex-col justify-center items-center gap-12">
          <div className="flex flex-col gap-8 max-w-md">
            <p className="text-3xl text-center">
              Nuestro Bar va a donde estes
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image src={'/img/served.jpg'} width={250} height={250} alt="Bebida servida"/>
          </div>
          <div className="flex flex-col gap-8 max-w-md">
            <p className="text-center">
              Preparamos bebidas para todos los gustos, incluido no alcoholicas para los pequeños, deleitese con nuestra variedad de productos que haran que su evento sea mucho mas placentero
            </p>
          </div>
        </div>
      }
    </section>
  );
}

export default HomeBriefInfo;