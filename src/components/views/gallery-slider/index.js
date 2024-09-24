'use client'
import images from "../../../../data/images";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section from "@/components/layouts/main-layout";

const GallerySlider = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  return (
    <Section custom_style={'gap-4'}>
      <p className="text-center text-3xl">Galeria</p>
      <div className="w-4/5">
        <Slider {...settings}>
          {
            images.map(el => 
              <div key={el.id}>
                <Image
                  key={el.id}
                  src={el.img}
                  width={450}
                  height={450}
                  className="rounded-xl"
                  Alt="Imagen del Slider"
                />
            </div>)
          }
        </Slider>
      </div>
    </Section>
  );
}

export default GallerySlider;