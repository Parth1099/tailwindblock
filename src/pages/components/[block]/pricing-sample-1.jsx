import PricingReact from "../../../components/pricing/sample-1/pricingReact";
import CustomePreview from "@/components/common/customePreview";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";

const PricingSample1 = () => {
  // const [color, setColor] = useState();
  const router = useRouter();

  // useEffect(() => {
  //   console.log(router.route.includes("/components/[block]/"));
  //   console.log(router);

  //   setColor(localStorage.getItem("preview-color"));
  // }, [color]);

  return (
    <>
      <PricingReact color={router?.query?.color} />

      {/* <div
        className={classNames(
          router.route.includes("components/pricing/sample-1")
            ? "hidden"
            : "block"
        )}
      >
        <CustomePreview color={color} setColor={setColor} />
      </div> */}
    </>
  );
};
export default PricingSample1;
