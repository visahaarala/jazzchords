import ContextProvider from "../context/Context";
import Navigation from "../components/navigation/Navigation";

const ErrorPage = () => {
  return (
    <ContextProvider>
      <div className='container'>
        <main>
          bad url
        </main>
        <footer>
          <Navigation />
        </footer>
      </div>
    </ContextProvider>
  );
};

export default ErrorPage;
