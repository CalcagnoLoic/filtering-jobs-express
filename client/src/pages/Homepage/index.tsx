import Card from "../../Components/Card";
import header from "../../../public/images/bg-header-desktop.svg";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <>
      <img src={header} alt="header" className="bg-breakerBay w-full" />
      <div className="my-10 flex justify-between md:mx-12 xl:mx-52">
        <span className="text-blueSmoke self-center text-xl">
          Welcome, stranger!
        </span>
        <button className="button_action">Login</button>
      </div>

      <Card />

      <Link
        to={"/new-offer"}
        className="button_action mx-auto my-8 block w-1/3 text-center"
      >
        + Add a new offer
      </Link>
    </>
  );
};

export default Page;
