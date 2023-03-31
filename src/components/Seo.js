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
      <meta property="og:type" content="event" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={
          description ||
          "Free responsive components and template ,Preview it and and download source code in one click."
        }
      />
      <meta property="og:image" content={image || "/assets/logo.svg"} />
      <meta property="og:image:alt" content={description} />
      <meta name="keywords" content={keywords || "Compoenent and templates"} />
    </Head>
  );
};

export default SEO;
