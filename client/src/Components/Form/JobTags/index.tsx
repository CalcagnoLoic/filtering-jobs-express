import { FormChange } from "../../../definitions";

const Component = ({ formData, onChange }: FormChange) => {
  return (
    <>
      <div className="flex py-4">
        <label htmlFor="tools">Tools: </label>
        <input
          type="text"
          name="tools"
          id="tools"
          placeholder="Please write here the tools used in the job in this format:[“React”, “RoR”]"
          value={formData.tools}
          onChange={(e) => onChange("tools", e.target.value)}
        />
      </div>
      <div className="flex py-4">
        <label htmlFor="languages">Languages: </label>
        <input
          type="text"
          name="languages"
          id="languages"
          placeholder="Please write here the languages used in the post in this format: [“HTML”, “JS”]"
          value={formData.languages}
          onChange={(e) => onChange("languages", e.target.value)}
        />
      </div>
    </>
  );
};

export default Component;
