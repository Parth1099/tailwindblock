import ButtonSample1 from "@/components/button/sample1/ButtonSampleReact";
import { useRouter } from "next/router";

const SampleButton1 = () => {
  const router = useRouter();
  return (
    <>
      <ButtonSample1 color={router?.query?.color} />
    </>
  );
};
export default SampleButton1;
