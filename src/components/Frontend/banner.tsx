import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-4">
        <div className="max-w-xl text-center sm:text-left lg:pl-12">
          <h1 className="text-3xl font-extrabold sm:text-5xl" style={{ color: '#8b5d40' }}>
            Bienvenido a
            <strong className="block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-600" style={{ color: '#ebb687', marginBottom: '25px' }}>
              Spicy Nails 
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Uñitas con muy buenas vibras. Reserva tu cita ahora y disfruta de un
            look nuevo en tu día a día o en eventos !
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4 text-center">
          <Link
            href="/reserva"
            className="block w-full sm:w-auto rounded bg-green-500 px-4 py-2 text-sm font-medium text-white shadow custom-icon-link-new lg:p-3 hover:bg-ebd087"
            style={{ marginTop: '15px', marginLeft: '20px' }}
          >
            Pide tú cita ahora
          </Link>

          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0 lg:ml-16 lg:flex-1 lg:pl-8 pointer-events-none">
          <Image
            alt="banner"
            src="/img/banner.png"
            className="hidden lg:block"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
