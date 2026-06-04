import Image from "next/image";
import HeroJobs from "./component/Banner";
import dynamic from "next/dynamic";

const Herojobs = dynamic(() => import("./component/Banner"))

export default function Home() {

  return (
    <div>
       <Herojobs></Herojobs>
    </div>
  );
}
