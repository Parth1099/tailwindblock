import Head from "next/head";
import { useRouter } from "next/router";

const SEO = ({ title, image, description, keywords }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title || "Tailwind blocks"}</title>
      <meta
        name="description"
        content={
          description ||
          "Free responsive components and template ,Preview it and and download source code in one click."
        }
      />
      <meta name="image" content={image} />
      {/* OG DATA */}
      <meta property="og:site_name" content="Tailwind blocks" />
      <meta
        property="og:url"
        content={`https://https://tailwindblock.vercel.app/${router.pathname}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300"></meta>
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={
          description ||
          "Free responsive components and template ,Preview it and and download source code in one click."
        }
      />
      <meta property="og:image" content={image || "/assets/logo.svg"} />
      <meta property="og:image:alt" content={title || "Tailwind blocks"} />
      <meta name="keywords" content={keywords || "Component and templates"} />
    </Head>
  );
};

export default SEO;
