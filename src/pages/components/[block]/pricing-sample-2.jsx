import { useRouter } from "next/router";
import PricingReact from "../../../components/pricing/sample-2/pricingReact";

const PricingSample2 = () => {
  const router = useRouter();
  return (
    <>
      <PricingReact color={router?.query?.color} />
    </>
  );
};
export default PricingSample2;
