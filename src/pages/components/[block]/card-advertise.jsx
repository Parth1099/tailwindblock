import { useRouter } from "next/router";
import AdvertiseCard from "../../../components/card/advertise/cardReact";

const Card = () => {
  const router = useRouter();
  return (
    <>
      <AdvertiseCard color={router?.query?.color} />
    </>
  );
};
export default Card;
