import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { createUserWithEmailPass } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleSingUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photoURL.value;
    const password = e.target.password.value;

    console.log(name, email,photo,password)

    if (password.length < 6) {
      return toast("Password must be 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      return toast("Password must be 1 uppercase characters");
    } else if (!/[a-z]/.test(password)) {
      return toast("Password must be 1 lowercase characters");
    }

    // create user
    createUserWithEmailPass(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        toast("User create successfully");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        toast("Something wrong try again letter");
      });

    // update profile data
  };

  useEffect(() => {
    document.title = "Act Avero | Sign Up";
  }, []);

  return (
    <div>
      <div>
        <section className="max-w-5xl mx-auto mt-10 mb-10 rounded-xl p-6 text-base-content border border-indigo-500">
          <form onSubmit={handleSingUp} className=" flex flex-col mx-auto space-y-12">
            <h1 className="text-center text-3xl font-bold">Sign Up</h1>
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
              <div className="grid grid-cols-6 gap-4 col-span-full">
                <div className="col-span-full md:col-span-3">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full py-2 px-4 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full py-2 px-4 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                  />
                </div>
                <div className="col-span-full md:col-span-3">
                  <label htmlFor="photoURL">PhotoURL</label>
                  <input
                    id="photoURL"
                    type="text"
                    name="photoURL"
                    placeholder="Enter your photoURL"
                    className="w-full py-2 px-4 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                  />
                </div>
                
                <div className="col-span-full sm:col-span-3 relative">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="Enter your password"
                    className="w-full py-2 px-4 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800"
                  />

                  <span
                    className="absolute top-1/2 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />}
                  </span>
                </div>

              </div>
            </fieldset>
            <button
              type="submit"
              className="btn btn-ghost text-lg font-medium text-white bg-indigo-500 hover:text-black"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-2">
            Already have an account? Please{" "}
            <Link className="font-medium text-indigo-500 underline" to="/signin">
              Sign In
            </Link>
          </p>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
