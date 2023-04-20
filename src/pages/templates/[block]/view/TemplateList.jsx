import Template1 from "../3dnft-temp1";
import Template3 from "../advocate-temp3";
import Template2 from "../crypto-temp2";
import Template4 from "../tbdesign-temp4";
import Template5 from "../dreamagency-temp5";

const TemplateList = (targetKey) => {
  if (targetKey === "3dnft-temp1") return <Template1 />;
  if (targetKey === "crypto-temp2") return <Template2 />;
  if (targetKey === "advocate-temp3") return <Template3 />;
  if (targetKey === "tbdesign-temp4") return <Template4 />;
  if (targetKey === "dreamagency-temp5") return <Template5 />;
  else return <p> NO Component</p>;
};

export default TemplateList;
