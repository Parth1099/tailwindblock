import PricingReact from "../../../components/pricing/sample-1/pricingReact";
import CustomePreview from "@/components/common/customePreview";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";

const PricingSample1 = () => {
  const router = useRouter();

  return (
    <>
      <PricingReact color={router?.query?.color} />
    </>
  );
};
export default PricingSample1;
