import SEO from "@/components/Seo";
import { TemplateConstant } from "@/utils/templateconstant";
import { useRouter } from "next/router";
import React from "react";
import TemplateList from "./TemplateList";

const ViewComponent = ({ target }) => {
  const { query } = useRouter();
  console.log(query, " : query");
  console.log(target, " : target");

  return (
    <>
      <SEO
        title={target?.title}
        description={target?.description}
        image={`https://tailwindblock.vercel.app/${target?.mainImageSrc}`}
      ></SEO>
      <div>{TemplateList(query.template)};</div>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      target:
        TemplateConstant.find(
          (data) => data.type + "-" + data.slug === context.query.template
        ) || null,
    },
  };
}

export default ViewComponent;
