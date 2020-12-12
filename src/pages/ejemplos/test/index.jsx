import dynamic from "next/dynamic";

import { ExampleViewLayout } from "../../../components";

const Example = dynamic(() => import("./example"), {
  ssr: false,
});

import code from "./code";

const Test = () => {
  return (
    <ExampleViewLayout
      title="Renderizado de un mapa"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu turpis, mollis sit amet dolor sit amet, elementum fringilla diam. Phasellus sollicitudin erat a justo rutrum, ac commodo quam aliquam."
      codeString={code}
    >
      <Example />
    </ExampleViewLayout>
  );
};

export default Test;
