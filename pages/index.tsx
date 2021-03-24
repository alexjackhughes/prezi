import Head from "next/head";
import Slide from "../components/Slide";

export default function Home() {
  const url = "https://letsloopin.com";

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundColor: "#111827",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23cbd5e1' fill-opacity='0.07'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <Head>
        <title>Why startups aren't hiring you</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Why startups aren't hiring you" />
        <meta name="description" content="Why startups aren't hiring you" />
        <meta
          property="og:description"
          content="Why startups aren't hiring you"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${url}`} />
        <meta property="og:image" content={`${url}/loopin-screenshot.png`} />
        <meta
          property="twitter:image:alt"
          content="screenshot of the Loopin website"
        />
        <meta property="twitter:site" content="letsloopin" />
      </Head>
      <Slide />
    </div>
  );
}
