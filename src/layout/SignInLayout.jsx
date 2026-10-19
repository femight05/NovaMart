import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const SignInLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default SignInLayout;
