import Header from "../components/Header";
import ForgetPassword from "../components/ForgetPassword";

export default function LoginPage() {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-2 space-y-6 flex flex-col">
          <Header
            heading="Forgot Password"
            paragraph="Follow the link in your email to create a new password"
          />
          <ForgetPassword />
        </div>
      </div>
    </>
  );
}
