import { Link } from "react-router-dom";
import CardDetails from "../CardDetails";
import ErrorServer from "../ErrorServer";
import Loader from "../Loader";
import { useFetchJobOffers } from "../../hooks/useFetchDetails";
import BulletPoint from "../BulletPoint";

const Component = ({ id }: { id: string }) => {
  const { isData, isLoading, isError } = useFetchJobOffers(id as string);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorServer />;
  }

  if (!isData || isData.length === 0 || !id) {
    return <ErrorServer />;
  }

  return (
    <>
      <div className="shadow-blueSmoke my-5 flex flex-col rounded-xl bg-white p-10 shadow-lg md:mx-12 xl:mx-52">
        <div className="flex">
          <img src={"/public/" + isData[0].url} alt={isData[0].name} />
          <div className="ml-8">
            <CardDetails
              position={isData[0].position}
              time={isData[0].time}
              contract={isData[0].contract}
              location={isData[0].location}
            />
          </div>
        </div>

        <h1 className="text-breakerBay mt-8 text-3xl underline">
          Description of position
        </h1>
        <p className="text-outerSpace mt-5">{isData[0].description_jobs}</p>

        <h2 className="text-breakerBay mt-8 text-xl underline">
          Responsabilities
        </h2>
        <BulletPoint data={isData[0].responsabilities} />

        <h2 className="text-breakerBay mt-8 text-2xl underline">Benefits</h2>
        <BulletPoint data={isData[0].benefits} />

        <div className="mt-12 flex justify-around">
          <Link to={`/job-details/${id}`} className="button">
            Hire me please!
          </Link>
          <Link to={"/"} className="button">
            Go back
          </Link>
        </div>
      </div>
    </>
  );
};

export default Component;
