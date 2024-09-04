import { useEffect, useState } from "react";

export default function PopupSectionImgs({ imgs }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imgSrcZoomed, setImgSrcZoomed] = useState();

    function getSlideClass(slideIndex) {
        if (slideIndex == currentIndex) {
            return "translate-x-0";
        }
        if (slideIndex < currentIndex) {
            return "-translate-x-full";
        }
        else {
            return "translate-x-full"
        }
    }

    function prevSlide() {
        setCurrentIndex(currentIndex - 1)
    }
    function nextSlide() {
        setCurrentIndex(currentIndex + 1)
    }

    const btnNavigationStyle = "disabled:opacity-30 absolute top-1/2 transform -translate-y-1/2 bg-light bg-opacity-80 hover:bg-opacity-85 text-dark p-2 rounded-full border border-dark border-opacity-70";

    return (
        <>
            <h2>Images</h2>
            {imgSrcZoomed && (
                <img src={imgSrcZoomed}
                    className="w-[70%] fixed top-[5%] left-[15%] rounded-lg z-30 cursor-zoom-out"
                    onClick={() => setImgSrcZoomed(null)}
                />
            )}
            <div className="relative w-full max-w-2xl mx-auto">
                <div className="overflow-hidden relative h-72 rounded-lg">
                    {imgs.map((imgSrc, index) => (
                        <div
                            key={index}
                            className={`
                            absolute
                            flex
                            justify-center
                            inset-0
                            transition-transform
                            duration-500
                            ease-in-out
                            transform ${getSlideClass(index)}
                            `}
                        >
                            <img src={imgSrc} 
                                className="object-cover h-full rounded-lg cursor-zoom-in"
                                onClick={() => setImgSrcZoomed(imgSrc)}
                            />
                        </div>
                    ))}
                    <div className="absolute w-full top-[95%] flex justify-center gap-4">
                        {imgs.map((imgSrc, index) => (
                            <p
                                className={`w-4 h-1 rounded-full cursor-pointer
                                    ${currentIndex == index ? "bg-[#888]" : "bg-[#555]"}`
                                }
                                onClick={() => setCurrentIndex(index)}
                            ></p>
                        ))}
                    </div>
                </div>

                <button
                    onClick={prevSlide}
                    disabled={currentIndex == 0}
                    className={`${btnNavigationStyle} left-2`}
                >
                    &lt;
                </button>
                <button
                    onClick={nextSlide}
                    disabled={currentIndex + 1 == imgs.length}
                    className={`${btnNavigationStyle} right-2`}
                >
                    &gt;
                </button>
            </div>
        </>

    )
}