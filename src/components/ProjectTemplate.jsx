import { useEffect, useRef, useState } from "react"
import CardStackIcons from "./CardStackIcons";

export default function ProjectTemplate(
    { imgSrc, projectName, stack, children }
) {
    const [openPopup, setOpenPopup] = useState(false);

    function togglePopup(){
        setOpenPopup(true);
    }

    function closePopup(clickEvent){
        if(isCorrectTarget(clickEvent)) {
            setOpenPopup(false)
        }
    }

    function isCorrectTarget(clickEvent) {
        return clickEvent.target.classList.contains("close-popup");
    }

    return (
        <div className="flex basis-[21%] justify-center">
            <div className="transition-transform duration-200 hover:-translate-y-1 hover:cursor-pointer
                h-44
                w-[90%]
                flex
                flex-col
                bg-opaclight
                dark:bg-opacdark
                rounded-lg
                hide-scrollbar
                "
                onClick={togglePopup}
            >
                <div className="
                    flex-[4]
                    relative
                    overflow-hidden
                    "
                >
                    <div className="
                        p-2
                        h-full
                        w-full
                        z-10
                        absolute
                        flex
                        items-end
                        text-sm
                        rounded-t-lg
                        bg-gradient-to-t
                        from-lightgray
                        to-40%
                        dark:from-dark
                        dark:to-40%
                        ">
                        {projectName}
                    </div>
                    <img src={imgSrc} className="rounded-lg opacity-60" />
                </div>

                <CardStackIcons stack={stack} />
                
            </div>

            <div onClick={closePopup}>
                {openPopup && children}
            </div>
        </div>
    )
}