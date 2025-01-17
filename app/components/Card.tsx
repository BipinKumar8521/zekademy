import React from "react";
import Image from "next/image";
import Button from "./Button";

const Card = ({
  data,
}: {
  data: {
    title: string;
    image: string;
    description: string;
    shortDescription: string;
  };
}) => {
  return (
    <div className="flex justify-between flex-col md:h-full p-3 h-[284px] min-w-[180px] md:min-w-[360px] border-b-[6px] border-[2px] md:border-[1px] rounded-[12px] border-buttonBorder">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <Image src={data.image} alt={data.title} width={120} height={120} />
        <div className="flex flex-col justify-center md:items-center my-2 md:my-0">
          <h1 className="font-semibold text-base">{data.title}</h1>
          <p className=" text-xs text-paragraph mt-2 hidden md:block">
            {data.description}
          </p>
          <p className=" text-xs text-paragraph mt-2 md:hidden">
            {data.shortDescription}
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <Button>READ</Button>
      </div>
    </div>
  );
};

export default Card;
