// ✍️ import the Image component from 'next/image'
import Image from "next/image";
// ✍️ import "lazar.png" statically
import lazar from "../lazar.png";
const Twitter_image =
  "https://pbs.twimg.com/media/D2Nic0OWkAs3CF0?format=jpg&name=medium";

const Home = () => {
  return (
    <>
      <Image src={lazar} alt="Lazar" />
      <Image src={Twitter_image} alt="Twitter_image" width={500} height={500} />
    </>
  );
};

export default Home;
