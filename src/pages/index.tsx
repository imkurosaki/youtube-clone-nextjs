import Image from "next/image";
import { Inter } from "next/font/google";
import VideoCard from "@/components/VideoCard";
import VideoGrid from "../components/VideoGrid";
import Appbar from "@/components/Appbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return <div className="px-5 grid gap-5">
    <Appbar />
    <div className="grid grid-cols-12">
      <Sidebar />
      <VideoGrid />
    </div>
  </div>
}
