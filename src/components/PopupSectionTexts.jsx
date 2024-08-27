import Divider from "./Divider";

export default function PopupSectionTexts({texts}) {
    return (
        
        texts.map((text, i) => (
            <div>
                <p className="text-lg font-semibold mb-3">{text.sectionTitle}</p>
                {text.sectionParagraphs.map(p => (<div className="text-sm text-justify">{p}</div>))}
                {i+1 != texts.length && <Divider/>}
            </div>
        ))

    )
}