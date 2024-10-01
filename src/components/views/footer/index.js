import Section from "@/components/layouts/main-layout";
import Image from "next/image";
import { FaClock, FaMapPin, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-8 flex justify-center gap-8 flex-col lg:flex-row justify-around">
      <div>
        <ul className="flex flex-col gap-4">
          <li className="text-3xl hover:cursor-default">VagarBar</li>
          <li>Dandole sabor a tus eventos</li>
          <li className="flex gap-4">
            <FaClock /> Lun-Dom: 9am-12pm
          </li>
          <li className="flex gap-4">
            <FaMapPin /> Culiacan, Sinaloa, Mexico
          </li>
          <li className="flex gap-4">
            <FaPhone /> 667 462 2965
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          <li className="text-2dxl hover:cursor-default">Secciones</li>
          <li>Principal</li>
          <li>Acerca De</li>
          <li>Galeria</li>
          <li>Reservaciones</li>
        </ul>
      </div>
      <div>
        <p>
          Eventos todos los fines de semana
        </p>
      </div>
      <div>
        <p className="text-xl">Instagram</p>
        <div className="flex flex-col lg:grid grid-rows3 grid-cols-3 gap-2">
          <Image className="hover:cursor-pointer hover:" src={'/img/IMG_6883.JPG'} width={90} height={90}/>
          <Image src={'/img/IMG_6883.JPG'} width={90} height={90}/>
          <Image src={'/img/IMG_6883.JPG'} width={90} height={90}/>
          <Image src={'/img/IMG_6883.JPG'} width={90} height={90}/>
          <Image src={'/img/IMG_6883.JPG'} width={90} height={90}/>
          <Image src={'/img/IMG_6883.JPG'} width={90} height={90}/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;