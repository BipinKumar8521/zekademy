import React from "react";
import Image from "next/image";
import Button from "./Button";

const Card = ({
  data,
}: {
  data: { title: string; image: string; description: string };
}) => {
  return (
    <div className="flex justify-between flex-col h-full p-3 w-[360px] border-[1px] rounded-[12px] border-buttonBorder">
      <div className="flex justify-center items-center">
        <Image src={data.image} alt={data.title} width={120} height={120} />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold text-base">{data.title}</h1>
          <p className=" text-xs text-paragraph mt-2">{data.description}</p>
        </div>
      </div>
      <div>
        <Button>READ</Button>
      </div>
    </div>
  );
};

export default Card;
