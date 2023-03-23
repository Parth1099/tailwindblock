import CreditCard1 from "@/components/creditcard/card-1/creditcardReact";
import { useRouter } from "next/router";

const Sample1CreditCard = () => {
  const router = useRouter();
  return (
    <>
      <CreditCard1 color={router?.query?.color} />
    </>
  );
};
export default Sample1CreditCard;
