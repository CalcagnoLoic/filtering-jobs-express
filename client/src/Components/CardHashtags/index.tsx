import { Hashtag } from "../../definitions";
import deleteOffer from "../../../public/images/icon-remove.svg";

const Component = ({ role, level, languages, tools }: Hashtag) => (
  <div className="text-breakerBay flex gap-5 self-center font-semibold">
    <div className="box">{role}</div>
    <div className="box">{level}</div>
    <div className="flex gap-3">
      {JSON.parse(languages).map((language: string, index: number) => (
        <div className="box" key={index}>
          {language}
        </div>
      ))}
    </div>

    {JSON.parse(tools).length > 0 ? (
      <div className="flex gap-3">
        {JSON.parse(tools).map(
          (tool: string, index: number) =>
            tool && (
              <div className="box" key={index}>
                {tool}
              </div>
            ),
        )}
      </div>
    ) : null}

    <button>
      <img
        src={deleteOffer}
        alt="Delete offer"
        className="bg-torchRed self-center rounded-full p-3"
      />
    </button>
  </div>
);

export default Component;
