import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className=" mx-8 font-primary text-primary ">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
