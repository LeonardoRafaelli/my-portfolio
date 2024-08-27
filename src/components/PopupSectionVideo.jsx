import { useEffect } from "react"


export default function PopupSectionVideo({videoUrl}) {

    return (
        <div>
            <h2>Video</h2>
            <div className="p-4">
                <div className="relative w-full pb-[56.25%]">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-md"
                        src={videoUrl}
                        title="YouTube video player"
                        frameborder="0"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
        )
}