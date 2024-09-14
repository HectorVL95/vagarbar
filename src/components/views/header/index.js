'use client'

import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
  const [mobile_show_nav, set_mobile_show_nav] = useState(null);
  const [show_nav, set_show_nav] = useState(null)
  const [show_menu_btn, set_show_menu_btn] = useState(null)
  const [show_social_media, set_show_social_media] = useState(null)
  const [, set_screen_width] = useState(window.innerWidth)

  useEffect(() => {
    const dissapear_mobile_nav = () => {
      const width = window.innerWidth
      set_screen_width(width)

      if (width > 768) {
        set_show_social_media(!show_social_media)

      }
      if (width < 768) {
        set_show_social_media(null)
      }

      if (width < 1020) {
        set_show_menu_btn(!show_menu_btn)
        set_show_nav(null)
      } else {
        set_mobile_show_nav(null)
        set_show_menu_btn(null)
        set_show_nav(!show_nav)
      }


    };

    window.addEventListener('resize', dissapear_mobile_nav)

    dissapear_mobile_nav();
  }, [])


  return (
    <header className="p-4">
      <div className="flex justify-between items-center ">
        {
          show_menu_btn &&
          <div>
            <MdMenu  onClick={() => set_mobile_show_nav(!mobile_show_nav)} className="w-8 h-8"/>
          </div>
        }
        <div className="flex justify-center w-full lg:w-auto">
          <p className="text-3xl hover:cursor-default">VagarBar</p>
        </div>
        {
          show_nav &&
          <ul className="flex gap-20 items-center">
            <li className="hover:cursor-pointer hover:underline underline-offset-8">Principal</li>
            <li className="hover:cursor-pointer hover:underline underline-offset-8">Acerca De</li>
            <li className="hover:cursor-pointer hover:underline underline-offset-8">Galeria</li>
            <li className="hover:cursor-pointer hover:underline underline-offset-8">Reservaciones</li>
          </ul>
        }
        {
          show_social_media && 
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