import { FormChange } from "../../../definitions";

const Component = ({ formData, onChange }: FormChange) => {
  return (
    <>
      <div className="flex self-center py-4">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name of the company"
          value={formData.name}
          onChange={(e) => onChange("name", e.target.value)}
        />

        <label htmlFor="url" className="ml-2">
          Logo:{" "}
        </label>
        <input
          type="text"
          name="url"
          id="url"
          placeholder="Logo of the company"
          value={formData.url}
          onChange={(e) => onChange("url", e.target.value)}
        />
      </div>

      <div className="flex py-4">
        <label htmlFor="location">Location: </label>
        <select name="location" id="location" value={formData.location} onChange={e=> onChange("location", e.target.value)}>
          <option value="USA Only">USA Only</option>
          <option value="UK Only">UK Only</option>
          <option value="Worldwide">Worldwide</option>
          <option value="Remote">Remote</option>
        </select>

        <label htmlFor="time" className="ml-2">
          Time:{" "}
        </label>
        <input
          type="text"
          name="time"
          id="time"
          placeholder="1d ago"
          value={formData.time}
          onChange={(e) => onChange("time", e.target.value)}
        />

        <label htmlFor="contract" className="ml-2">
          Contract:{" "}
        </label>
        <select
          name="contract"
          id="contract"
          value={formData.contract}
          onChange={(e) => onChange("contract", e.target.value)}
        >
          <option value="Part time">Part time</option>
          <option value="Full time">Full time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>
    </>
  );
};

export default Component;
