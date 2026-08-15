import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex ">
      <Image
        className="w-full h-screen object-cover"
        src="/hero-image.jpg"
        alt="Placeholder"
        width={400}
        height={400}
      />
    </div>
  );
}
