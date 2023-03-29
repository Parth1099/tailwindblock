import CommonLayout from "@/components/templates";
import { TemplateConstant } from "@/utils/templateconstant";
import { useRouter } from "next/router";
import React from "react";

const Template = () => {
  const router = useRouter();
  const component = TemplateConstant.filter(
    (data) => data.type === router.query.block
  )[0];
  return (
    <div>
      <CommonLayout component={component} />
    </div>
  );
};

export default Template;
