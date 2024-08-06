import Image from "next/image";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const Home = () => {
  const cardData = [
    {
      title: "Introduction to Rocket Science",
      image: "/images/rocket.png",
      description:
        "Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and",
    },
    {
      title: "Astro Physics",
      image: "/images/atom.png",
      description:
        "Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and",
    },
    {
      title: "Artificial Intelligence",
      image: "/images/chip.png",
      description:
        "Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and",
    },
    {
      title: "Space Exploration",
      image: "/images/telescope.png",
      description:
        "Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and",
    },
  ];
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-between px-14 my-14">
          <h1 className="font-semibold">Popular Topics 🔥</h1>
          <div className="flex w-[80px] h-[30px] justify-between">
            <Image
              src="/images/arrow-disabled.svg"
              alt="arrow"
              height={30}
              width={30}
              className="border-[1px] border-buttonBorder rounded-[8px] p-1"
            />
            <Image
              src="/images/arrow.svg"
              alt="arrow"
              height={30}
              width={30}
              className="border-[1px] border-buttonBorder rounded-[8px] p-1"
            />
          </div>
        </div>
        <div className="flex gap-2 h-[222px] overflow-x-hidden px-14">
          {cardData.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
