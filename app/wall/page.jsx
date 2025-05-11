import Image from "next/image"

const images = [
  {
    src: "/wall/marrakech1.webp",
    alt: "Ruelle de la médina de Marrakech",
  },
  {
    src: "/wall/marrakech2.webp",
    alt: "Coucher de soleil sur les toits",
  },
  {
    src: "/wall/marrakech3.webp",
    alt: "Travail sur le terrain avec le drone",
  },
  {
    src: "/wall/marrakech4.webp",
    alt: "Souk coloré de Marrakech",
  },
  {
    src: "/wall/marrakech5.webp",
    alt: "Session de design dans notre studio",
  },
  {
    src: "/wall/marrakech7.webp",
    alt: "Détails de notre travail au quotidien",
  },
  {
    src: "/wall/marrakech8.webp",
    alt: "Détails de notre travail au quotidien",
  },
  {
    src: "/wall/marrakech9.webp",
    alt: "Détails de notre travail au quotidien",
  },
  {
    src: "/wall/marrakech10.webp",
    alt: "Détails de notre travail au quotidien",
  },
  {
    src: "/wall/marrakech11.webp",
    alt: "Détails de notre travail au quotidien",
  },
  {
    src: "/wall/marrakech12.webp",
    alt: "Détails de notre travail au quotidien",
  },
  {
    src: "/wall/marrakech14.webp",
    alt: "Détails de notre travail au quotidien",
  },
  {
    src: "/wall/marrakech15.webp",
    alt: "Détails de notre travail au quotidien",
  },

]

export default function WallSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto mt-8 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          🌄 Le Wall
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Un regard en images sur notre quotidien à Marrakech, notre travail, et ce qui nous inspire au jour le jour.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-300 ease-out"
                placeholder="empty"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
