
import { Inter } from "next/font/google";
import Event from "../components/Event";
import AnimationFirstPart from "@/components/AnimationFirstPart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    {/* <Event /> */}
<AnimationFirstPart/>
   </div>
  );
}
