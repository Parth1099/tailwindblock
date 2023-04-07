import Footer from "@/components/common/Footer";
import Introduction from "@/components/common/Introduction";
import Contact from "@/components/Contact";
import Customization from "@/components/Customization";
import Faq from "@/components/Faq";
import PopularComponents from "@/components/PopularComponents";
import PopularTemplates from "@/components/PopularTemplates";
import Header from "../components/common/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <div className="mt-8 md:mt-20">
        <Customization />
      </div>
      <div className="mt-8 md:mt-20">
        <PopularComponents />
      </div>
      <div className="mt-8 md:mt-20">
        <PopularTemplates />
      </div>
      <div className="mt-20">
        <Faq />
      </div>
      <div className="mt-20">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
