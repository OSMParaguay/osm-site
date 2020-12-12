import { NavBar } from "../../components";

const Ejemplos = () => {
  return (
    <main className="examples__root">
      <NavBar />
      <section className="examples__content">
        <h1>Ejemplos de OSM</h1>
        <p>Explora y experimenta estos ejemplos prácticos de OSM</p>
        <div className="examples__list"></div>
      </section>
    </main>
  );
};

export default Ejemplos;
