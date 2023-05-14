import Header from "../components/Header";
import ForgetPassword from "../components/ForgetPassword";

export default function LoginPage() {
  return (
    <>
      <Header
        heading="Forgot Password"
        paragraph="Follow the link in your email to create a new password"
      />
      <ForgetPassword />
    </>
  );
}
