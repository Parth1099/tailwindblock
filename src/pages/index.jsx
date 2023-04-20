import Introduction from "@/components/common/Introduction";
import Contact from "@/components/Contact";
import Customization from "@/components/Customization";
import Faq from "@/components/Faq";
import PopularComponents from "@/components/PopularComponents";
import PopularTemplates from "@/components/PopularTemplates";
import HomeBg from "../../public/assets/common/line.png";
import Image from "next/image";
import Layout from "@/components/HomeLayout";

export default function Home() {
  return (
    <>
      <Layout>
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
        </div>
      </Layout>
    </>
  );
}
