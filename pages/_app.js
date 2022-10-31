import ModalProvider from "../Context/ModalContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-primary text-primary ">
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </div>
  );
}

export default MyApp;
