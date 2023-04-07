import ButtonSample1 from "@/components/button/sample1/ButtonSampleReact";
import SEO from "@/components/Seo";
import { COMPONENT_LIST } from "@/utils/constant";
import { useRouter } from "next/router";
import React from "react";
import componetList from "./componentList";

const ViewComponent = ({ target }) => {
  const { query } = useRouter();
  // console.log(query, " : query");
  // console.log(target, " : target");

  return (
    <>
      <SEO
        title={target?.title}
        description={target?.description}
        image={`https://tailwindblock.vercel.app/${target?.mainImageSrc}`}
      ></SEO>
      <div>{componetList(query.component)};</div>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      target:
        COMPONENT_LIST.find(
          (data) => data.type + "-" + data.slug === context.query.component
        ) || null,
    },
  };
}

export default ViewComponent;
