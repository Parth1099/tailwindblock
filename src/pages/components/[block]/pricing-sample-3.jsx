import { useRouter } from "next/router";
import PricingReact from "../../../components/pricing/sample-3/pricingReact";

const PricingSample3 = () => {
  const router = useRouter();
  return (
    <>
      <PricingReact color={router?.query?.color} />
    </>
  );
};
export default PricingSample3;
