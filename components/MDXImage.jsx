import Image from "next/image";

export default function MDXImage({ src, alt, width = 800, height = 500 }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="my-8 w-full rounded-xl object-cover shadow-md"
    />
  );
}
