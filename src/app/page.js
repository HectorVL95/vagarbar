//Working on it
'use client'

import { useContext } from "react";
import { Context } from "@/context/global-context";
import Header from "@/components/views/header";
import HomeImageSlider from "@/components/views/home-img-slider";
import HomeBriefInfo from "@/components/views/home-brief-info";
import GallerySlider from "@/components/views/gallery-slider";
import About from "@/components/views/about";
import MessageForm from "@/components/views/message-form";
import Footer from "@/components/views/footer";
import Image from "next/image";

export default function Home() {

  const { screen_width, set_screen_width } = useContext(Context)

  return (
    <main>
      <Header />
      {
        screen_width < 768 && 

        <div class="container mx-auto">
          <div class="fixed bottom-10 right-10 z-10">
            <a href="https://wa.me/+526671538590" target="_blank">
              <Image src={'/img/whatsapp.svg'} width={60} height={60} alt="WhatsApp" />
            </a>
          </div>
        </div>
      }
      <HomeImageSlider />
      <HomeBriefInfo />
      <GallerySlider />
      <About />
      <MessageForm />
      <Footer />
    </main>
  );
}
