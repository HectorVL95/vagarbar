//Working on it
import Header from "@/components/views/header";
import HomeImageSlider from "@/components/views/home-img-slider";
import HomeBriefInfo from "@/components/views/home-brief-info";
import GallerySlider from "@/components/views/gallery-slider";
import About from "@/components/views/about";
import MessageForm from "@/components/views/message-form";
import Footer from "@/components/views/footer";

export default function Home() {
  return (
    <main className="max-w-[1920px]">
      <div>
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
