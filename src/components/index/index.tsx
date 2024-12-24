import image from "@/assets/demo_img.png";
import Image from "next/image";
import Link from "next/link";

export const IndexPage = () => {
  return (
    <div className="w-screen p-16 pt-0">
      <div className="flex justify-center items-center h-screen flex-col">
        <h2 className="text-9xl font-bold">Any bot without code</h2>
        <p className="text-2xl font-medium mt-4">
          A curious look at the capabilities of modern codeless artificial
          intelligence technologies.
        </p>
        <Link
          className="text-2xl font-medium bg-foreground text-background py-2 px-4 rounded-xl mt-12"
          href="/docs"
        >
          Get started
        </Link>
      </div>
      <div className="flex justify-center items-center h-max">
        <Image
          className="rounded-[32px] border-[32px] border-black"
          src={image}
          alt="demo_img"
        />
      </div>
    </div>
  );
};
