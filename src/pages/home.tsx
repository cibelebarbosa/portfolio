import TabAbout from "@/components/custom/tababout";

import About from "./about";
import BannerCustom from "@/components/custom/bannercustom";

export default function Home() {
  return (
    <>
      <BannerCustom />
      <TabAbout />

      <section className="flex justify-center items-center text-red-950 bg-red-950  p-10 md:p-6 xl:p-24 xl:rounded-tr-full xl:rounded-bl-full ">
        <About />
      </section>
    </>
  );
}
