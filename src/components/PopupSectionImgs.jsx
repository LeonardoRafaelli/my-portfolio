import { useEffect, useState } from "react";

export default function PopupSectionImgs({imgs}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    function getSlideClass(slideIndex) {
        if(slideIndex == currentIndex) {
            return "translate-x-0";
        }
        if(slideIndex < currentIndex) {
            return "-translate-x-full";
        }
        else
        {
            return "translate-x-full"
        }
    }

    function prevSlide(){
        setCurrentIndex(currentIndex - 1)
    }
    function nextSlide(){
        setCurrentIndex(currentIndex + 1)
    }

    const btnNavigationStyle = "disabled:opacity-30 absolute top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-lg";

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <div className="overflow-hidden relative h-72 rounded-lg">
                {imgs.map((slide, index) => (
                    <div
                        key={index}
                        className={`
                            absolute
                            inset-0
                            transition-transform
                            duration-500
                            ease-in-out
                            transform ${getSlideClass(index)}
                            `}
                    >
                        <img src={slide} className="object-cover"/>
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                disabled={currentIndex==0}
                className={`${btnNavigationStyle} left-2`}
            >
                &lt;
            </button>
            <button
                onClick={nextSlide}
                disabled={currentIndex+1 == imgs.length}
                className={`${btnNavigationStyle} right-2`}
                >
                &gt;
            </button>
        </div>
    )
}