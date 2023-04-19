export default function Banner() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Bienvenido a
            <strong className="block font-extrabold text-green-600">
              Bamboo Express
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Nuestras recetas únicas y de alta calidad te transportarán a un
            viaje culinario por China. Reserva tu mesa ahora y disfruta de una
            experiencia gastronómica inolvidable !
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-green-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-600 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
            >
              Reservar
            </a>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0 lg:ml-16 lg:flex-1 lg:pl-8">
          <img
            alt="banner"
            src="./img/banner.png"
            className="hidden lg:block"
          ></img>
        </div>
      </div>
    </section>
  );
}