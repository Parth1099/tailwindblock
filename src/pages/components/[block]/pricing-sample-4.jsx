import { useRouter } from "next/router";
import PricingReact from "../../../components/pricing/sample-4/pricingReact";

const PricingSample4 = () => {
  const router = useRouter();
  return (
    <>
      <PricingReact color={router?.query?.color} />
    </>
  );
};
export default PricingSample4;
