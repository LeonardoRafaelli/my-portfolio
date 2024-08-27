import { useRef, useEffect } from "react";

export default function CardStackIcons({ stack, isInPopup }) {

    const bgColor = !isInPopup && "bg-lightgray dark:bg-dark";
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollXContainer = scrollContainerRef.current;

        const onWheel = (e) => {
            e.preventDefault();
            scrollXContainer.scrollLeft += e.deltaY;
        }

        scrollXContainer.addEventListener("wheel", onWheel);

        return () => {
            scrollXContainer.removeEventListener("wheel", onWheel);
        }
    }, [])

    return (
        <div className={`flex-1 p-2 flex overflow-x-auto scroll-smooth rounded-b-lg ${bgColor}`}
            ref={scrollContainerRef}
        >
            {stack.map((stackIcon, i) => (
                <img className="min-w-6 max-w-24 flex mx-3 select-none"
                    src={isInPopup ? (stackIcon.wordmark ?? stackIcon.original) : stackIcon.original}
                    key={i}
                    title={stackIcon.title}
                    alt={`stack-${i}`}
                />
            ))}
        </div>
    )
}