import { useParams } from "react-router-dom";

import header from "../../../public/images/bg-header-desktop.svg";
import JobCardDetails from "../../Components/JobCardDetails";

const Page = () => {
  const { id } = useParams();

  return (
    <>
      <img src={header} alt="header" className="bg-breakerBay  w-full" />
      <div className="my-10 flex justify-between md:mx-12 xl:mx-52">
        <span className="text-blueSmoke self-center text-xl">
          Welcome, stranger!
        </span>
        <button className="hover:bg-blueSmoke text-aquaSpring bg-breakerBay rounded-xl px-8 py-4 text-xl shadow-lg transition duration-300 ease-out">
          Login
        </button>
      </div>
      <JobCardDetails id={id as string} />
    </>
  );
};

export default Page;
