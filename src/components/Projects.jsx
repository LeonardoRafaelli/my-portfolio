import ProjectTemplate from "./ProjectTemplate"
import ProjectPopup from "./ProjectPopup"
import PopupSectionImgs from "./PopupSectionImgs";
import PopupSectionTexts from "./PopupSectionTexts";

import MyProjects from "../MyProjects";

export default function Projects() {

    return (<>
        {MyProjects.map((project, i) => (
            <ProjectTemplate key={i} projectName={project.name} stack={project.stack} imgSrc={project.cardImg}>
                <ProjectPopup>
                    <div>
                        <h1 className='text-2xl text-center font-semibold mb-6'>
                            {project.name}
                        </h1>
                        <p className='text-sm'>
                            {project.description}
                        </p>
                    </div>
                    {project.popupSection.imgs && <PopupSectionImgs imgs={project.popupSection.imgs} /> }
                    {project.popupSection.texts && <PopupSectionTexts texts={project.popupSection.texts} />}
                </ProjectPopup>
            </ProjectTemplate>
        ))}
        
    </>
    )
}