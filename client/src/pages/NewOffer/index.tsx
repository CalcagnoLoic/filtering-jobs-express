import { Link } from "react-router-dom";
import header from "../../../public/images/bg-header-desktop.svg";

const Page = () => {
  return (
    <>
      <img src={header} alt="header" className="bg-breakerBay w-full" />
      <div className="my-10 md:mx-12 xl:mx-52">
        <Link to={"/"} className="button_action">
          Go back to the homepage
        </Link>
      </div>

      <form
        action="post"
        className="mb-5 rounded-xl bg-white p-8 shadow-xl md:mx-12 xl:mx-52"
      >
        <h1 className="text-breakerBay mb-10 text-center text-3xl font-semibold italic underline">
          Do you want to add a new offer?
        </h1>

        <div className="flex self-center py-4">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />

          <label htmlFor="url" className="ml-2">Logo: </label>
          <input type="text" name="url" id="url"  />
        </div>

        <div className="flex py-4">
          <label htmlFor="location">Location: </label>
          <select name="location" id="location">
            <option value="usa">USA Only</option>
            <option value="world">Worldwide</option>
            <option value="remote">Remote</option>
          </select>

          <label htmlFor="time" className="ml-2">Time: </label>
          <input type="text" name="time" id="time" />

          <label htmlFor="contract" className="ml-2">Contract: </label>
          <select name="contract" id="contract">
            <option value="part">Part time</option>
            <option value="full">Full time</option>
            <option value="con">Contract</option>
          </select>
        </div>

        <div className="flex py-4">
          <label htmlFor="position">Position: </label>
          <input type="text" name="position" id="position" />

          <label htmlFor="level" className="ml-2">Level: </label>
          <select name="level" id="level">
            <option value="junior">Junior</option>
            <option value="mid">Midweight</option>
            <option value="senior">Senior</option>
          </select>

          <label htmlFor="role" className="ml-2">Role: </label>
          <select name="role" id="role">
            <option value="front">Frontend</option>
            <option value="back">Backend</option>
            <option value="full">Fullstack</option>
          </select>
        </div>

        <div className="flex py-4">
          <label htmlFor="tools">Tools: </label>
          <input type="text" name="tools" id="tools" />
        </div>
        <div className="flex py-4">
          <label htmlFor="languages">Languages: </label>
          <input type="text" name="languages" id="languages" />
        </div>

        <div className="flex py-4">
          <label htmlFor="isNew">Is new offer? </label>
          <input type="radio" name="isNew" id="isNew" value={0} /> No
          <input type="radio" name="isNew" id="isNew" value={1} /> Yes
        </div>
        <div>
          <label htmlFor="isFeatured">Is Featured offer?: </label>
          <input type="radio" name="isFeatured" id="isFeatured" value={0} /> No
          <input type="radio" name="isFeatured" id="isFeatured" value={1} /> Yes
        </div>

        <div className="my-4 flex">
          <label htmlFor="description_jobs">Description: </label>
          <textarea name="description_jobs" id="description_jobs"></textarea>
        </div>
        <div className="my-4 flex">
          <label htmlFor="responsabilities">Responsabilities: </label>
          <textarea name="responsabilities" id="responsabilities"></textarea>
        </div>

        <div className="my-4 flex">
          <label htmlFor="benefits">Benefits: </label>
          <textarea name="benefits" id="benefits"></textarea>
        </div>

        <button
          type="submit"
          className="button_action mx-auto my-5 block w-1/2"
        >
          Add this new offer
        </button>
      </form>
    </>
  );
};

export default Page;
