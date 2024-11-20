import { FormChange } from "../../../definitions";

const Component = ({ formData, onChange }: FormChange) => {
  return (
    <>
      <div className="flex py-4">
        <label htmlFor="isNew">Is new offer? </label>
        <input
          type="radio"
          name="isNew"
          id="isNewNo"
          value={0}
          checked={formData.isNew === 0}
          onChange={(e) => onChange("isNew", parseInt(e.target.value))}
        />{" "}
        No
        <input
          type="radio"
          name="isNew"
          id="isNewYes"
          value={1}
          checked={formData.isNew === 1}
          onChange={(e) => onChange("isNew", parseInt(e.target.value))}
        />{" "}
        Yes
      </div>
      <div>
        <label htmlFor="isFeatured">Is Featured offer?: </label>
        <input
          type="radio"
          name="isFeatured"
          id="isFeaturedNo"
          value={0}
          checked={formData.isFeatured === 0}
          onChange={(e) => onChange("isFeatured", parseInt(e.target.value))}
        />{" "}
        No
        <input
          type="radio"
          name="isFeatured"
          id="isFeaturedYes"
          value={1}
          checked={formData.isFeatured === 1}
          onChange={(e) => onChange("isFeatured", parseInt(e.target.value))}
        />{" "}
        Yes
      </div>
    </>
  );
};

export default Component;
