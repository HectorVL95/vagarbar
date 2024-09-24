'use client'

import { useEffect, useState, useContext } from "react";
import { MdMenu } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Context } from "@/context/global-context";

const Header = () => {
  const [mobile_show_nav, set_mobile_show_nav] = useState(null);
  const [show_nav, set_show_nav] = useState(null)
  const [show_menu_btn, set_show_menu_btn] = useState(null)
  const [show_social_media, set_show_social_media] = useState(null)
  const { screen_width, set_screen_width } = useContext(Context)

  useEffect(() => {
    if(typeof window !== 'undefined') {

      const handle_resize = () => {
        set_screen_width(window.innerWidth);
        if (screen_width < 1020) {
          set_mobile_show_nav(null)
        }
      }

      window.addEventListener('resize', handle_resize);

      handle_resize();

      return () => {
        window.removeEventListener('resize', handle_resize);
      }

    }



  }, [set_screen_width]);


  return (
    <header className="p-4">
      <div className="flex justify-between items-center ">
        {
          screen_width < 1020 &&
          <div>
            <MdMenu  onClick={() => set_mobile_show_nav(!mobile_show_nav)} className="w-8 h-8"/>
          </div>
        }
        <div className="flex justify-center w-full lg:w-auto">
          <p className="text-3xl hover:cursor-default">VagarBar</p>
        </div>
        {
          screen_width > 1020 &&
          <ul className="flex gap-20 items-center">
            <li className="hover:cursor-pointer hover:underline underline-offset-8">Principal</li>
            <li className="hover:cursor-pointer hover:underline underline-offset-8">Acerca De</li>
            <li className="hover:cursor-pointer hover:underline underline-offset-8">Galeria</li>
            <li className="hover:cursor-pointer hover:underline underline-offset-8">Reservaciones</li>
          </ul>
        }
        {
          screen_width > 768 && 
          <div className="flex justify-around items-center gap-4">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        }
      </div>
      {
        mobile_show_nav &&
        <ul>
          <li>Principal</li>
          <li>Acerca De</li>
          <li>Galeria</li>
          <li>Reservaciones</li>
        </ul>
        }

    </header>
  );
}

export default Header;