

export default function LinkImg({ link, src, width = 8, ml=0, mr=0}) {
    return (
        <a href={link} target="_blank" className="h-min">
            <img
                className={`
                    w-${width}
                    ml-${ml}
                    mr-${mr}
                    hover:brightness-50
                    dark:hover:brightness-150
                    transition
                    duration-300
                    select-none`
                }
                src={src}
            />
        </a>
    )
}