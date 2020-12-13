import Link from "next/link";

const Brand = () => (
  <Link href="/">
    <div className="brand">
      <img src="/images/logo.png" alt="osm-py-logo" />
      OSM Paraguay
    </div>
  </Link>
);

export default Brand;
