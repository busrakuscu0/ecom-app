import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex ">
      <Image
        className="w-full h-[60vh] object-cover"
        src="/hero-image.png"
        alt="Placeholder"
        width={500}
        height={500}
      />
    </div>
  );
}
