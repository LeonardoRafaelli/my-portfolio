import Divider from "./Divider";

export default function PopupSectionTexts({texts}) {
    return (
        
        texts.map((text, i) => (
            <div>
                <p className="text-lg font-semibold mb-3">{text.sectionTitle}</p>
                {text.sectionParagraphs && text.sectionParagraphs.map(p => (<div className="text-sm text-justify">{p}</div>))}
                {text.sectionImg && <img src={text.sectionImg} className="rounded-lg my-4"/>}
                {i+1 != texts.length && <Divider/>}
            </div>
        ))

    )
}