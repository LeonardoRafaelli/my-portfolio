

export default function ProjectTemplate({imgSrc, projectName, stack}){

    return (
        <div className="flex basis-[21%] justify-center transition transform hover:-translate-y-5 hover:cursor-pointer">
            <div className=" 
                h-60
                w-[90%]
                px-[2px]
                py-px
                flex
                flex-col
                bg-opaclight
                dark:bg-opacdark
                rounded-lg
                
                "
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
                    <img src={imgSrc} className="rounded-lg opacity-50"/>
                </div>
                
                <div className="flex-1 p-4 rounded-b-lg bg-lightgray dark:bg-dark">
                    {stack}
                </div>
            </div>
        </div>
    )
}