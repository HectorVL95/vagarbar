//Working on it
import Header from "@/components/views/header";
import HomeImageSlider from "@/components/views/home-img-slider";
import HomeBriefInfo from "@/components/views/home-brief-info";
import GallerySlider from "@/components/views/gallery-slider";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeImageSlider />
      <HomeBriefInfo />
      <GallerySlider />
    </main>
  );
}
