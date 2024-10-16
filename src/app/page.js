//Working on it
'use client'

import { useContext } from "react";
import { Context } from "@/context/global-context";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/views/header";
import HomeImageSlider from "@/components/views/home-img-slider";
import HomeBriefInfo from "@/components/views/home-brief-info";
import GallerySlider from "@/components/views/gallery-slider";
import About from "@/components/views/about";
import MessageForm from "@/components/views/message-form";
import Footer from "@/components/views/footer";

export default function Home() {
  const { screen_width } = useContext(Context);
  return (
    <main className="max-w-[1920px]">
      <div>
        {
          screen_width < 768 && 
          <Link href="https://wa.me/+526671538590" target="_blank" rel="noopener noreferrer"
          class="fixed bottom-10 right-10 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition z-20">
            <Image src={'/img/whatsapp.svg'} width={45} height={45}/>
          </Link>
        }
        <Header />
        <HomeImageSlider />
        <HomeBriefInfo />
        <GallerySlider />
        <About />
        <MessageForm />
        <Footer />
      </div>
    </main>
  );
}
