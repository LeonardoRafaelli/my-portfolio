
export default function PopupSectionContributors({contributors}) {

    return (
        <div>
            <h2>Contributors</h2>
            <div className="mt-4 ml-8 grid gap-4">
                {contributors.map((c, index) => (
                    <div key={index} className="w-min">
                        <a href={c.github} target="_blank">
                            <p className="w-max text-sm underline underline-offset-4 cursor-pointer hover:text-link"
                            >
                                {c.name}
                            </p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )

}