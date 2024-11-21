import { useState } from "react";

import JobDescription from "./JobDescription";
import JobDetailsCompany from "./JobDetailsCompany";
import JobDetailsOffer from "./JobDetailsOffer";
import JobStatus from "./JobStatus";
import JobTags from "./JobTags";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleChange = (name: any, value: any) => {
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = formData;

    const isFormValid = Object.values(formData).every(
      (value) => value !== "" && value !== null,
    );

    if (!isFormValid) {
      console.error("Error: All fields must be filled.");
      alert("Please fill in all required fields before submitting.");
      return; // Empêche l'envoi
    }

    try {
      const response = await fetch("http://localhost:3000/new-offer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Offer submitted: ", result);
      navigate("/");
    } catch (error) {
      console.log("Error when submitting form: ", error);
      alert("An error occurred while submitting the offer.");
    }
  };

  return (
    <form
      action="/"
      onSubmit={handleSubmit}
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
      <span  className="text-torchRed text-lg font-semibold italic underline">* All the fields are required</span>
    </form>
  );
};

export default Component;
