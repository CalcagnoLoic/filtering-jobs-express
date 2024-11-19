import { useFetchJobOffers } from "../../hooks/useFetch";

import CardDetails from "../CardDetails";
import CardHasthags from "../CardHashtags";
import ErrorServer from "../ErrorServer";
import Loader from "../Loader";

const Component = () => {
  const { isData, isLoading, isError } = useFetchJobOffers();

  return (
    <>
      {isLoading && <Loader />}

      {isData &&
        isData.map((data) => (
          <div
            key={data.id}
            className={`shadow-blueSmoke md:mx-12 xl:mx-52 my-5 flex rounded-xl bg-white p-8 shadow-lg ${data.isFeatured.data[0] == 1 && "border-l-breakerBay border-l-4"} `}
          >
            <img src={data.url} alt={data.name} className="mr-10" />
            <div className="flex w-full justify-between">
              <div className="flex self-center">
                <CardDetails
                  name={data.name}
                  position={data.position}
                  contract={data.contract}
                  time={data.time}
                  location={data.location}
                  newJob={data.isNew.data[0]}
                  feature={data.isFeatured.data[0]}
                />
              </div>

              <CardHasthags
                role={data.role}
                level={data.level}
                languages={data.languages}
                tools={data.tools}
              />
            </div>
          </div>
        ))}

      {isError && <ErrorServer />}
    </>
  );
};

export default Component;
