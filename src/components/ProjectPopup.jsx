import { useEffect } from "react";
import Divider from "./Divider";

export default function ProjectPopup({children}) {

    function getOrganizedChildren() {
        if(Array.isArray(children)) {
            return children.map((child, index) => {
                
                if(!child) return;
                
                if(index == 0){
                    return <div key={index}>{child}</div>
                } else {
                    return <div key={index}>
                        <Divider/>
                        {child}
                    </div>
                }
            })
        } else {
            return children
        }
    }

    return (
        <div className='pt-12 fixed z-20 inset-0 flex items-start justify-center bg-dark bg-opacity-70 close-popup'>
            <div className='
            bg-opaclight
            dark:bg-opacdark
            p-5
            rounded-lg
            shadow-lg
            w-[50%]
            max-h-[90%]
            overflow-y-scroll'
            >
                {getOrganizedChildren()}
            </div>
        </div>
    )
}