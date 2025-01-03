import { perksData } from "./PerksAndBenefits";
import { ArrowRight02Icon } from "hugeicons-react";

export default function Home() {
  return (
    <>
      <div className="relative h-[450px] ">
        <h1 className="text-4xl underline-offset-4 transform -translate-x-1/2 decoration-purple-700 underline flex items-center absolute bottom-4 left-1/2 text-white font-semibold my-8 text-center">
          What can we offer?
        </h1>
        <img
          src={"/group_photo.jpg"}
          alt="group photo"
          className="absolute -z-20 h-full contrast-125 top-0 object-cover w-full"
        />

        <div className="absolute -z-10 bottom-0 right-0 left-0 inset-0 bg-gradient-to-b from-transparent to-neutral-950 opacity-75" />
      </div>
      <p className="text-lg my-24 text-center max-w-md m-auto p-4">
        If working with the best people, with the greatest technology is not
        enough we also like to highlight some of our employees most{" "}
        <mark className="inline-block bg-purple-100 px-2">
          appriciated perks.
        </mark>
      </p>
      <div className="m-auto max-w-[1000px] p-4 mb-12">
        <div className="flex flex-wrap justify-center gap-8 mt-8 gap-y-16 mb-20">
          {perksData.map((perk, index) => (
            <div
              key={index}
              className="duration-300 w-[250px] rounded-xl  hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-105 flex flex-col justify-center relative border border-slate-200 h-[280px] p-6"
            >
              <div className=" h-12 flex justify-center w-12 absolute -top-8 left-1/2 transform -translate-x-1/2">
                {perk.icon}
              </div>
              <h2 className="font-bold text-xl mt-8 mb-2">{perk.title}</h2>
              <p className="text-sm">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
