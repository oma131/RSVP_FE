import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>WEB3RSVP</title>
        <link rel="icon" href="/favicon.ico" />    
      </Head>
      <div className="font-serif flex flex-col ">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
    
  );
};

export default Layout;
