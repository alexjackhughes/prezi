import Head from "next/head";
import Slide from "../components/Slide";

export default function Home() {
  const url = "https://startups-hire-you.vercel.app";

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        // backgroundColor: "#111827",
        // backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23cbd5e1' fill-opacity='0.07'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,

        backgroundColor: "#0f172a",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23334155' stroke-width='62.9' stroke-opacity='0.03' %3E%3Ccircle fill='%230f172a' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%2310182b' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%2311192c' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23121a2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23121b2e' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23131c2f' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23141d30' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23151e31' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23161f32' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23172033' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23182134' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23192335' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23192436' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%231a2537' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%231b2638' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%231c2739' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%231d283a' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%231e293b' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
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
        <meta property="og:image" content={`${url}/screenshot.png`} />
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
