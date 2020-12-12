import Link from "next/link";

import { NavBar } from "../components";

const Home = () => {
  return (
    <main className="home">
      <NavBar />
      <section className="home__hero">
        <div className="home__hero__root">
          <div className="home__hero__root__content">
            <h1>Página oficial de OSM Paraguay</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              arcu turpis, mollis sit amet dolor sit amet, elementum fringilla
              diam. Phasellus sollicitudin erat a justo rutrum, ac commodo quam
              aliquam.
            </p>
            <Link href="/ejemplos">
              <a>Ver ejemplos</a>
            </Link>
          </div>
          <img src="/images/py-svg.svg" alt="py-svg" />
        </div>
      </section>
      <section className="home__links">
        <div className="home__links__content">
          <h3>Proyectos</h3>
          <div className="link-list">
            <a
              href="https://chaco.osmparaguay.org/"
              target="_blank"
              rel="noopener"
              className="link-list__item"
            >
              <img src="/images/chaco.svg" alt="chaco-ra'anga-logo" />
              <div className="link-list__itemt__footer">Chaco Ra'anga</div>
            </a>
          </div>
          <h3>Redes de contacto</h3>
          <div className="link-list">
            <a
              href="https://wiki.openstreetmap.org/wiki/WikiProject_Paraguay"
              target="_blank"
              rel="noopener"
              className="link-list__item"
            >
              <img src="/images/osm_logo_wiki.png" alt="osm-logo-wiki" />
              <div className="link-list__itemt__footer">Wiki Paraguay</div>
            </a>
            <a
              href="https://www.facebook.com/osmparaguay"
              target="_blank"
              rel="noopener"
              className="link-list__item"
            >
              <img src="/images/facebook.svg" alt="faceboo-logo" />
              <div className="link-list__itemt__footer">OSM PY Facebook</div>
            </a>
            <a
              href="https://twitter.com/OpenStreetMapPy"
              target="_blank"
              rel="noopener"
              className="link-list__item"
            >
              <img src="/images/twitter.svg" alt="twitter-logo" />
              <div className="link-list__itemt__footer">OSM PY Twitter</div>
            </a>
            <a
              href="https://t.me/osm_py"
              target="_blank"
              rel="noopener"
              className="link-list__item"
            >
              <img src="/images/telegram.svg" alt="telegram-logo" />
              <div className="link-list__itemt__footer">OSM PY Telegram</div>
            </a>
            <a
              href="https://t.me/osm_chaco_py"
              target="_blank"
              rel="noopener"
              className="link-list__item"
            >
              <img src="/images/telegram.svg" alt="telegram-logo" />
              <div className="link-list__itemt__footer">OSM Chaco Telegram</div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
