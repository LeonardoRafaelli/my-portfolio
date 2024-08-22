import { useState } from "react"


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
                h-52
                w-[90%]
                px-[2px]
                py-px
                flex
                flex-col
                bg-opaclight
                dark:bg-opacdark
                rounded-lg
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
                        rounded-t-lg
                        bg-gradient-to-t
                        from-lightgray
                        to-40%
                        dark:from-darkgray
                        dark:to-40%
                        ">
                        {projectName}
                    </div>
                    <img src={imgSrc} className="rounded-lg opacity-60" />
                </div>

                <div className="flex-1 p-4 rounded-b-lg bg-lightgray dark:bg-dark">
                    {stack}
                </div>
            </div>

            <div onClick={closePopup}>
                {openPopup && children}
            </div>
        </div>
    )
}