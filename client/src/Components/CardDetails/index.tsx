import { Details } from "../../definitions";

const Component = ({
  name,
  position,
  time,
  contract,
  location,
  newJob,
  feature,
}: Details) => {
  console.log(newJob);

  return (
    <div>
      <div className="flex gap-3 self-center">
        <span className="text-breakerBay flex font-bold">{name}</span>
        {newJob == 1 && <div className="bg-breakerBay popup">New!</div>}
        {feature == 1 && <div className="bg-outerSpace popup">Featured</div>}
      </div>

      <p className="text-outerSpace my-2 text-xl font-extrabold">{position}</p>
      <span className="text-blueSmoke">
        {time} . {contract} . {location}
      </span>
    </div>
  );
};

export default Component;
