import { useState } from "react";
import OtpInput from "react-otp-input";

export default function Step() {
  const [otp, setOtp] = useState("");

  const handleSumbit = () => {
    console.log(otp);
  };
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center text-center space-y-10 relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="font-semibold text-3xl">
          <p>OTP Verification</p>
        </div>
        <div className="flex flex-row text-sm font-medium text-gray-400">
          <p>We have sent a code to your email.</p>
        </div>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          separator={<span style={{ width: "8px" }}></span>}
          isInputNum={true}
          shouldAutoFocus={true}
          inputStyle={{
            border: "2px solid black",
            borderRadius: "8px",
            width: "54px",
            height: "54px",
            fontSize: "12px",
            color: "#000",
            fontWeight: "400",
            caretColor: "blue",
          }}
          focusStyle={{
            border: "1px solid #CFD3DB",
            outline: "none",
          }}
        />
        <div>
          <button
            className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5  border-none text-white font-semibold shadow-sm px-4 text-lg "
            style={{ backgroundColor: "#840000" }}
            onClick={handleSumbit}
          >
            Verify Account
          </button>
        </div>
      </div>
    </div>
  );
}
