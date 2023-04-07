import Animation from "@/components/animation/animation-infinite/animationReact";
import ButtonSample1 from "@/components/button/sample1/ButtonSampleReact";
import ButtonSample2 from "@/components/button/sample2/ButtonSampleReact";
import ButtonSample3 from "@/components/button/sample3/ButtonSampleReact";
import Cards from "@/components/card/profilecard/cardReact";
import CheckBox from "@/components/checkbox/checkbox-sample-1/checkboxReact";
import CreditCard1 from "@/components/creditcard/card-1/creditcardReact";
import CreditCard2 from "@/components/creditcard/card-2/creditcardReact";
import CreditCard3 from "@/components/creditcard/card-3/creditcardReact";
import Input from "@/components/input/input-sample-1/inputReact";
import RadioButton from "@/components/radiobutton/radiobutton-sample-1/radioButtonReact";
import Carousal1 from "../carousal-carousal-1";
import Carousal2 from "../carousal-carousal-2";
import PricingSample1 from "../pricing-sample-1";
import PricingSample2 from "../pricing-sample-2";
import PricingSample3 from "../pricing-sample-3";
import PricingSample4 from "../pricing-sample-4";
import PricingSample5 from "../pricing-sample-5";

const componetList = (targetKey) => {
  if (targetKey === "button-sample1") return <ButtonSample1 />;
  else if (targetKey === "button-sample2") return <ButtonSample2 />;
  else if (targetKey === "button-sample3") return <ButtonSample3 />;
  else if (targetKey === "pricing-sample-1") return <PricingSample1 />;
  else if (targetKey === "pricing-sample-2") return <PricingSample2 />;
  else if (targetKey === "pricing-sample-3") return <PricingSample3 />;
  else if (targetKey === "pricing-sample-4") return <PricingSample4 />;
  else if (targetKey === "pricing-sample-5") return <PricingSample5 />;
  else if (targetKey === "creditcard-card-1") return <CreditCard1 />;
  else if (targetKey === "creditcard-card-2") return <CreditCard2 />;
  else if (targetKey === "creditcard-card-3") return <CreditCard3 />;
  else if (targetKey === "carousal-carousal-1") return <Carousal1 />;
  else if (targetKey === "carousal-carousal-2") return <Carousal2 />;
  else if (targetKey === "card-profilecard") return <Cards />;
  else if (targetKey === "animation-animation-infinite") return <Animation />;
  else if (targetKey === "input-input-sample-1") return <Input />;
  else if (targetKey === "radiobutton-radiobutton-sample-1")
    return <RadioButton />;
  else if (targetKey === "checkbox-checkbox-sample-1") return <CheckBox />;
  else return <p> NO Component</p>;
};

export default componetList;
