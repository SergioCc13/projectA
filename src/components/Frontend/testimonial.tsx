import Star from "./star";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl sm:p-14 p-4">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl"style={{ color: '#8b5d40' }}>
          Valoración de nuestros clientes
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <Image
                alt="testimonialUser"
                src="/img/user.png"
                className="h-16 w-16 rounded-full object-cover"
                height={64}
                width={64}
              />
              <div>
                <Star />
                <p className="mt-1 text-lg font-medium text-gray-700">Sergio</p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
              Si buscas una chica auténtica, amigable y profesional. Este es el lugar para ti.
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <Image
                alt="testimonialUser"
                src="/img/user.png"
                className="h-16 w-16 rounded-full object-cover"
                height={64}
                width={64}
              />
              <div>
                <Star />
                <p className="mt-1 text-lg font-medium text-gray-700">Noelia</p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
              Siempre que voy a un evento importante confío en Aroa, nunca falla. Recomiendo sus servicios al cien por cien.
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-100 p-8">
            <div className="flex items-center gap-4">
              <Image
                alt="testimonialUser"
                src="/img/user.png"
                className="h-16 w-16 rounded-full object-cover"
                height={64}
                width={64}
              />
              <div>
                <Star />
                <p className="mt-1 text-lg font-medium text-gray-700">Janne</p>
              </div>
            </div>

            <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
              Me hizo las uñas con un estilo para Navidad increíble. ¡Volveré pronto!
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
