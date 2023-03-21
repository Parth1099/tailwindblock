import PricingReact from "../../../components/pricing/sample-1/pricingReact";
import { useRouter } from "next/router";

const PricingSample1 = () => {
  const router = useRouter();
  return (
    <>
      {/* <PricingReact /> */}
      <PricingReact color={router?.query?.color} />
    </>
  );
};
export default PricingSample1;
