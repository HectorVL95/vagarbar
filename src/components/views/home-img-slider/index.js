

const HomeImageSlider = () => {
  return (
    <section className="relative bg-orange-drink bg-cover bg-center bg-no-repeat h-[700px] flex justify-center items-center">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="flex flex-col justify-center items-center gap-4 z-10">
        <p className="text-white text-center text-3xl">Servicio de bebidas preparadas</p>
        <div>
          <button className="py-2 px-10 border-2 border-white text-white hover:bg-white hover:text-black">Ver mas</button>
        </div>
      </div>
    </section>
  );
}

export default HomeImageSlider;