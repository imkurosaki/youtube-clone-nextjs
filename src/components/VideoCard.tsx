import ProgressBar from "./ProgressBar"
import { useRouter } from 'next/router'

export default function VideoCard({ title, name, viewsCount, timestamp }: any) {
    const router = useRouter()

    return <div className="grid gap-4">
        <div className="static rounded-xl overflow-hidden cursor-pointer">
            <img src="https://as1.ftcdn.net/v2/jpg/07/09/60/44/1000_F_709604405_6SbaDwARvoufOiArmhfHHR3FkExjvjlw.jpg" alt="" />
            <ProgressBar />
        </div>
        <div className="flex gap-4">
            <img className="w-[3rem] h-[3rem] border rounded-full cursor-pointer"
                src="https://mcosmeticsurgery.com/wp-content/uploads/2022/06/what-is-the-golden-ratio-of-facial-aesthetics-1024x683.jpeg" alt="" />
            <div>
                <p>{title}</p>
                <div className="flex gap-1 ">
                    <p className="text-sm text-gray-400">{name}</p>
                    <p className="text-sm text-gray-400">{viewsCount} {timestamp}</p>
                </div>
            </div>
        </div>
    </div>
}