import { FormChange } from "../../../definitions";

const Component = ({ formData, onChange }: FormChange) => {
  return (
    <>
      <div className="flex py-4">
        <label htmlFor="position">Position: </label>
        <input
          type="text"
          name="position"
          id="position"
          placeholder="Title of the position"
          value={formData.position}
          onChange={(e) => onChange("position", e.target.value)}
        />

        <label htmlFor="level" className="ml-2">
          Level:{" "}
        </label>
        <select
          name="level"
          id="level"
          defaultValue={"Junior"}
          value={formData.level}
          onChange={(e) => onChange("level", e.target.value)}
        >
          <option value="Junior">Junior</option>
          <option value="Midweight">Midweight</option>
          <option value="Senior">Senior</option>
        </select>

        <label htmlFor="role" className="ml-2">
          Role:{" "}
        </label>
        <select
          name="role"
          id="role"
          defaultValue={"Frontend"}
          value={formData.role}
          onChange={(e) => onChange("role", e.target.value)}
        >
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Fullstack">Fullstack</option>
        </select>
      </div>
    </>
  );
};

export default Component;
