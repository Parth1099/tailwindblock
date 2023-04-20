import Head from "next/head";
import { useRouter } from "next/router";

const SEO = ({ title, image, description, keywords }) => {
  const titleupercase = title?.replace(/(^\w{1})|(\s+\w{1})/g, (title) =>
    title.toUpperCase()
  );
  const router = useRouter();
  return (
    <Head>
      <title>
        {titleupercase
          ? titleupercase + " | Tailwind Blocks"
          : "Tailwind Blocks"}
      </title>

      <meta
        name="description"
        content={
          description ||
          "Free responsive components and template ,Preview it and download source code in one click."
        }
      />
      <meta name="image" content={image} />
      {/* OG DATA */}
      <meta property="og:site_name" content="Tailwind blocks" />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_APP_URL}/${router.pathname}`}
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
      <meta
        property="og:image"
        content={image || `${process.env.NEXT_PUBLIC_APP_URL}/logo.svg`}
      />
      <meta property="og:image:alt" content={title || "Tailwind blocks"} />
      <meta name="keywords" content={keywords || "Component and templates"} />
      {/* Twitter card */}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
    </Head>
  );
};

export default SEO;
