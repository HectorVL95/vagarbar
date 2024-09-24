'use client'

import Image from 'next/image';
import { useContext } from 'react';
import { Context } from '@/context/global-context';
import Section from '@/components/layouts/main-layout';

const HomeBriefInfo  = () => {
  const { screen_width } = useContext(Context);

  return (
    <Section>
      {
        screen_width  > 1020 ? 
        <div className="flex justify-between items-center gap-12 w-4/5">
          <div className="flex flex-col gap-12">
            <p className="text-3xl text-left">
              Nuestro Bar va a donde estes
            </p>
            <p className="text-left max-w-md">
              Preparamos bebidas para todos los gustos, incluido no alcoholicas para los pequeños, deleitese con nuestra variedad de productos que haran que su evento sea mucho mas placentero
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image src={'/img/served.jpg'} width={350} height={350} alt="Bebida servida" className="rounded-xl"/>
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
            <Image src={'/img/served.jpg'} width={250} height={250} alt="Bebida servida" className="rounded-xl"/>
          </div>
          <div className="flex flex-col gap-8 max-w-md">
            <p className="text-left">
              Preparamos bebidas para todos los gustos, incluido no alcoholicas para los pequeños, deleitese con nuestra variedad de productos que haran que su evento sea mucho mas placentero
            </p>
          </div>
        </div>
      }
    </Section>
  );
}

export default HomeBriefInfo;