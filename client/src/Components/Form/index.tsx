import { useState } from "react";

import JobDescription from "./JobDescription";
import JobDetailsCompany from "./JobDetailsCompany";
import JobDetailsOffer from "./JobDetailsOffer";
import JobStatus from "./JobStatus";
import JobTags from "./JobTags";

const Component = () => {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    location: "",
    time: "",
    contract: "",
    position: "",
    level: "",
    role: "",
    tools: "",
    languages: "",
    isNew: 0,
    isFeatured: 0,
    description_jobs: "",
    responsabilities: "",
    benefits: "",
  });

  const handleChange = (name: any, value: any) => {
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  return (
    <form
      action="/"
      className="mb-5 rounded-xl bg-white p-8 shadow-xl md:mx-12 xl:mx-52"
    >
      <h1 className="text-breakerBay mb-10 text-center text-3xl font-semibold italic underline">
        Do you want to add a new offer?
      </h1>

      <JobDetailsCompany formData={formData} onChange={handleChange} />
      <JobDetailsOffer formData={formData} onChange={handleChange} />
      <JobDescription formData={formData} onChange={handleChange} />
      <JobTags formData={formData} onChange={handleChange} />
      <JobStatus formData={formData} onChange={handleChange} />

      <button type="submit" className="button_action mx-auto my-5 block w-1/2">
        Add this new offer
      </button>
    </form>
  );
};

export default Component;
