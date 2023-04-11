import Footer from "@/components/common/Footer";
import Introduction from "@/components/common/Introduction";
import Contact from "@/components/Contact";
import Customization from "@/components/Customization";
import Faq from "@/components/Faq";
import PopularComponents from "@/components/PopularComponents";
import PopularTemplates from "@/components/PopularTemplates";
import Header from "../components/common/Header";
import HomeBg from "../../public/assets/common/line.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative">
        <Image src={HomeBg} className="z-0" fill alt="homebg" />
        <div className="relative">
          <Introduction />
        </div>
        <div className="relative mt-8 md:mt-20">
          <Customization />
        </div>
        <div className="relative mt-8 md:mt-20">
          <PopularComponents />
        </div>
        <div className="relative mt-20">
          <PopularTemplates />
        </div>
        <div className="relative mt-20">
          <Faq />
        </div>
        <div className="relative mt-10 md:mt-24">
          <Contact />
        </div>
        <div className="relative mt-10 md:mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
}
