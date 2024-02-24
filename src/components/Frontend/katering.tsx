import Link from "next/link";
import Image from "next/image";

export default function Katering() {
  return (
    <section className="mx-auto max-w-screen-xl overflow-hidden sm:grid sm:grid-cols-2 sm:items-center mb-16" style={{ backgroundColor: '#fae9db', border: 'none' }}>
      <div className="p-15 md:p-12 lg:px-20 lg:py-30">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold md:text-3xl" style={{ color: '#8b5d40' }}>
            Servicio de uñas y maquillaje
          </h2>

          <p className="text-gray-500 md:mt-4 md:block">
            Planeando una fiesta o reunión? Quizá quieres sentirte bonita.
            Deja que te ayude. ¡Reserva ahora y disfruta de un resultado 
            y experiencia única!
          </p>
          <div className="mt-4 md:mt-8 flex justify-center">
              <Link
                href="./reserva"
                className="inline-block rounded px-6 py-3 text-sm font-medium text-white shadow custom-icon-link lg:p-4"
              >
              Reservar
            </Link>
          </div>
        </div>
      </div>

      <Image
        alt="unas aroa"
        src="/img/unas aroa.png"
        className="h-full w-full object-fit: cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px] sm:pr-14"
        height={1022}
        width={762}
      />
    </section>
  );
}

