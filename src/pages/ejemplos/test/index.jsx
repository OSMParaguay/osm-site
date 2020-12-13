import dynamic from "next/dynamic";

import { ExampleViewLayout } from "../../../components";

const Example = dynamic(() => import("./example"), {
  ssr: false,
});

import code from "./code";

const codeSample1 = `const a =5;
console.log(a);
const sum = (a,b)=> a+b;`;

const Test = () => {
  return (
    <ExampleViewLayout
      title="Renderizado de un mapa"
      example={<Example />}
      codeString={code}
    >
      Lorem ipsum dolor sit amet, <bold>bold text</bold> adipiscing elit.
      Curabitur arcu turpis, mollis sit amet dolor sit amet, elementum fringilla
      diam. Phasellus sollicitudin erat a justo rutrum, ac commodo quam aliquam.{" "}
      <a href="http://google.com" target="__blank">
        Ir a Google
      </a>
      <blockquote>
        Lorem ipsum <code>code block</code> adipisicing elit. Est minima
        deserunt asperiores ipsa. Quo enim nobis excepturi nam eveniet officiis
        quis <u>text subrayado</u> tenetur, eos voluptatibus iure totam
        reprehenderit culpa.
      </blockquote>
      <ul>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
      </ul>
      <ol>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
        <li>hola</li>
      </ol>
      <pre>{codeSample1}</pre>
      <q>Lore ipsum</q>
      <p>
        Lorem, ipsum <i>text cursiva</i> dolor sit amet consectetur adipisicing
        elit. Debitis quidem, dolorem rem, quo ullam alias porro quibusdam vel
        autem tempora quis consequatur, aut at ut velit. Voluptate eveniet totam
        illo?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
        quidem, dolorem rem, quo ullam alias porro quibusdam vel autem tempora
        quis consequatur, aut at ut velit. Voluptate eveniet totam illo?
      </p>
      <h2>Hello</h2>
      <h3>Hello</h3>
      <h4>Hello</h4>
      <h5>Hello</h5>
      <h6>Hello</h6>
      <p>
        <s>Lorem, ipsum dolor sit amet consecteturadipisicing elit. Debitis</s>
        quidem, dolorem rem, quo ullam alias porro quibusdam vel autem tempora
        quis consequatur, aut at ut velit. Voluptate eveniet totam illo?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
        quidem, dolorem rem, quo ullam alias porro quibusdam vel autem tempora
        quis consequatur, aut at ut velit. Voluptate eveniet totam illo?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
        quidem, dolorem rem, quo ullam alias porro quibusdam vel autem tempora
        quis consequatur, aut at ut velit. Voluptate eveniet totam illo?
      </p>
      <table>
        <caption>Lista de usuarios</caption>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a</td>
            <td>l</td>
            <td>0</td>
          </tr>
          <tr>
            <td>a</td>
            <td>l</td>
            <td>0</td>
          </tr>
          <tr>
            <td>a</td>
            <td>l</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
        quidem, dolorem rem, quo ullam alias porro quibusdam vel autem tempora
        quis consequatur, aut at ut velit. Voluptate eveniet totam illo?
      </p>
      <img src="https://images.unsplash.com/photo-1553864250-05b20249ee0c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
      <legend>
        Foto de <a href="https://unsplash.com/">Unplash it</a>
      </legend>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
        quidem, dolorem rem, quo ullam alias porro quibusdam vel autem tempora
        quis consequatur, aut at ut velit. Voluptate eveniet totam illo?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
        quidem, dolorem rem, quo ullam alias porro quibusdam vel autem tempora
        quis consequatur, aut at ut velit. Voluptate eveniet totam illo?
      </p>
    </ExampleViewLayout>
  );
};

export default Test;
