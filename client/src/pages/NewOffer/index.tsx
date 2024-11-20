import { Link } from "react-router-dom";

import header from "../../../public/images/bg-header-desktop.svg";
import Form from "../../Components/Form";

const Page = () => {
  return (
    <>
      <img src={header} alt="header" className="bg-breakerBay w-full" />
      <div className="my-10 md:mx-12 xl:mx-52">
        <Link to={"/"} className="button_action">
          Go back to the homepage
        </Link>
      </div>

      <Form />
    </>
  );
};

export default Page;
