import { Details } from "../../definitions";
import { Link } from "react-router-dom";

const Component = ({
  name,
  position,
  time,
  contract,
  location,
  newJob,
  feature,
  id,
}: Details) => {

  return (
    <div>
      <div className="flex items-center gap-3 self-center">
        <span className="text-breakerBay flex font-bold">{name}</span>
        {newJob == 1 && <div className="bg-breakerBay popup">New!</div>}
        {feature == 1 && <div className="bg-outerSpace popup">Featured</div>}
      </div>

      <div className="flex flex-col">
        <Link
          to={`/job-details/${id}`}
          className="text-outerSpace my-2 text-xl font-extrabold hover:italic"
        >
          {position}
        </Link>
        <span className="text-blueSmoke">
          {time} . {contract} . {location}
        </span>
      </div>
    </div>
  );
};

export default Component;
