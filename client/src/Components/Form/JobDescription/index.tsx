import { FormChange } from "../../../definitions";

const Component = ({ formData, onChange }: FormChange) => {
  return (
    <>
      <div className="mt-4 mb-1 flex">
        <label htmlFor="description_jobs">Description: </label>
        <textarea
          name="description_jobs"
          id="description_jobs"
          placeholder="Description of the job offer"
          value={formData.description_jobs}
          onChange={(e) => onChange("description_jobs", e.target.value)}
        ></textarea>
      </div>
      <span className="text-torchRed text-sm italic">
        Don't forget to end each sentences by a "."
      </span>

      <div className="mt-4 mb-1 flex">
        <label htmlFor="responsabilities">Responsabilities: </label>
        <textarea
          name="responsabilities"
          id="responsabilities"
          placeholder="Responsibilities of the position"
          value={formData.responsabilities}
          onChange={(e) => onChange("responsabilities", e.target.value)}
        ></textarea>
      </div>
      <span className="text-torchRed text-sm italic">
        Don't forget to end each sentences by a "."
      </span>

      <div className="mt-4 mb-1 flex">
        <label htmlFor="benefits">Benefits: </label>
        <textarea
          name="benefits"
          id="benefits"
          placeholder="Extra-legal benefits of the position"
          value={formData.benefits}
          onChange={(e) => onChange("benefits", e.target.value)}
        ></textarea>
      </div>
      <span className="text-torchRed text-sm italic">
        Don't forget to end each sentences by a "."
      </span>
    </>
  );
};

export default Component;
