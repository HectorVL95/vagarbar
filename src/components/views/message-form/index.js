import Section from "@/components/layouts/main-layout";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const MessageForm = () => {

  return (
    <Section custom_style={'gap-4'}>
      <div className="flex flex-col gap-4 ">
        <p className="text-center text-3xl">¿Tienes alguna pregunta?</p>
        <p>Contactanos por Whatsapp, Instagram o atravez de este formulario</p>
        <div className="flex flex-col justify-left max-w-lg">
          <div className="flex gap-4 justify-center items-center">
            <FaWhatsapp />
            <p>667 462 2965</p>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <FaInstagram />
            <Link href="http://instagram.com/barvagar">http://instagram.com/barvagar</Link>    
          </div>
        </div>
      </div>
        <form className="flex flex-col justify-center items-center gap-4 border p-4 w-full max-w-xl"   action="https://formspree.io/f/xldrqqao"
        method="POST"
        >
        <div className="w-full">
          <p>Nombre</p>
          <input
            type="text"
            name="name"
            className="bg-black border px-4 py-2 w-full"
            required
            
          />
        </div>
        <div className="w-full">
          <p>Correo Electronico</p>
          <input
            type="email"
            name="email"
            className="bg-black border px-4 py-2 w-full"
            required
          />
        </div>
        <div className="w-full">
          <p>Numero de telefono</p>
          <input
            type="number"
            name="number"
            className="bg-black border px-4 py-2 w-full"
            placeholder="Opcional"
          />
        </div>
        <div className="w-full">
          <p>Escribenos tu mensaje</p>
          <textarea
            type="text"
            name="message"
            className="bg-black border px-4 py-2 w-full"
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="py-2 px-10 border-2 border-white text-white hover:bg-white hover:text-black" type="submit">Enviar</button>
        </div>
      </form>
    </Section>
  );
}

export default MessageForm;