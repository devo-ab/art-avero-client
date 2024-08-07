import { Link } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const ErrorPages = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-2 lg:px-0">
        <Navbar></Navbar>
        <div>
          <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
            <div className="max-w-lg mx-auto space-y-3 text-center">
              <h3 className="text-base-content font-semibold">404 Error</h3>
              <p className="text-base-content text-4xl font-semibold sm:text-5xl">Page not found</p>
              <p className="text-base-content">
                Sorry, the page you are looking for could not be found or has been removed.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/"
                  href="javascript:void(0)"
                  className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg"
                >
                  Home
                </Link>
                <Link
                  href="javascript:void(0)"
                  className="block py-2 px-4 text-base-content hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg"
                >
                  Contact support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPages;
