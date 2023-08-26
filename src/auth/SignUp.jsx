/* eslint-disable no-unused-vars */
// Signup.js
import { useState } from "react";
// import { useUserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import axios from "./api";
// import { signUpUser } from "./api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import loader from "../assets/Rolling-1s-24px.svg";

const REGISTER_URL = "/buyer/register";

const SignUp = () => {
  //   const { dispatch } = useUserContext();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); //phone_number password_confirmation
  const [password_confirmation, setPassword_confirmation] = useState(""); //phone_number password_confirmation
  const [phone_number, setPhone_number] = useState(""); //phone_number address
  const [address, setAddress] = useState(""); //phone_number address city
  const [city, setCity] = useState(""); //phone_number address city
  const [state, setState] = useState(""); //phone_number address city
  const [date_of_birth, setDate_of_birth] = useState(""); //phone_number address city
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // const handleSignUp = () => {
  //   try {
  //     await signUpUser({
  //       fullname,
  //       email,
  //       password,
  //       password_confirmation,
  //       phone_number,
  //       address,
  //       city,
  //       state,
  //       date_of_birth,
  //     });
  //     //   dispatch({ type: "LOGIN", payload: user });
  //   } catch (error) {
  //     console.error("SignUp error:", error);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = axios
        .post(
          REGISTER_URL,
          {
            fullname,
            email,
            password,
            password_confirmation,
            phone_number,
            address,
            city,
            state,
            date_of_birth,
          },
          {
            headers: { Accept: "application/json" },
            // withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            // setMdaPaymentRecords(response.data);
            setIsLoading(false);
            setFullname("");
            setAddress("");
            setEmail("");
            setPassword("");
            setPassword_confirmation("");
            setPhone_number("");
            setState("");
            setCity("");
            setDate_of_birth("");
            toast.success("Success !", {
              position: toast.POSITION.TOP_LEFT,
            });
            navigate(`/verify`);
          }
        })
        .catch((err) => {
          console.log(err, ": err");
          toast.error("Something went wrong !", {
            position: toast.POSITION.TOP_LEFT,
          });
          setIsLoading(false);
        });

      // console.log(response.data), "data";
      // console.log(response?.accessToken);
      // console.log(JSON.stringify(response));
      // setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
    } catch (error) {
      console.log("SignUp error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Header
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
        />
        {/* <h2 className="text-center text-2xl font-bold">Sign Up</h2> */}

        <form onSubmit={handleSubmit} className="space-y-6 mt-3 flex flex-col">
          <input
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            type="text"
            placeholder="Black Samuel"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <input
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            type="email"
            placeholder="samblack15@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            type="password"
            placeholder="Password"
            value={password_confirmation}
            onChange={(e) => setPassword_confirmation(e.target.value)}
            required
          />
          <input
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            type="tel"
            placeholder="09093737838"
            value={phone_number}
            onChange={(e) => setPhone_number(e.target.value)}
            required
          />
          <input
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            type="text"
            placeholder="43 yau kumoyo  Estate"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <input
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            type="text"
            placeholder="Ajah"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            type="text"
            placeholder="Lagos"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
          <input
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            type="date"
            placeholder="2023-03-25"
            value={date_of_birth}
            onChange={(e) => setDate_of_birth(e.target.value)}
            required
          />
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              required
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              By Signing up, you agree to our Terms and Conditions
            </label>
          </div>
          <button
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            // onClick={handleSignUp}
            style={{ backgroundColor: "#840000" }}
            type="submit"
          >
            {isLoading ? (
              <div className=" text-white">
                <img src={loader} alt="" className="h-10 1-10 text-white" />
              </div>
            ) : (
              "Submit"
            )}
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
