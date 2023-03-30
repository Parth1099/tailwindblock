import Input from "@/components/input/input-sample-1/inputReact";
import { useRouter } from "next/router";

const InputSample1 = () => {
  const router = useRouter();
  return (
    <>
      <Input color={router?.query?.color} />
    </>
  );
};
export default InputSample1;
