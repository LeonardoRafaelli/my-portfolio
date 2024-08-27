import ProjectTemplate from "./ProjectTemplate"
import ProjectPopup from "./ProjectPopup"
import PopupSectionImgs from "./PopupSectionImgs";
import PopupSectionTexts from "./PopupSectionTexts";
import PopupSectionVideo from "./PopupSectionVideo";
import githubIcon from "../assets/stackIcons/github-original.svg"

import MyProjects from "../MyProjects";
import CardStackIcons from "./CardStackIcons";

export default function Projects() {

    return (<>
        {MyProjects.map((project, i) => (
            <ProjectTemplate key={i} projectName={project.name} stack={project.stack} imgSrc={project.cardImg}>
                <ProjectPopup>
                    <div>
                        <div className="flex">
                            <div className="flex-1" />
                            <h1 className='flex-1 text-2xl text-center font-semibold mb-6'>
                                {project.name}
                            </h1>
                            <div className="flex-1 flex justify-end">
                                <a href={project.githubLink}>
                                    <img className="w-8 hover:brightness-200 transition duration-400" src={githubIcon}/>
                                </a>
                            </div>
                        </div>
                        <p className='text-sm'>
                            {project.description}
                        </p>
                    </div>
                    {project.popupSection.imgs && <PopupSectionImgs imgs={project.popupSection.imgs} /> }
                    {project.popupSection.texts && <PopupSectionTexts texts={project.popupSection.texts} />}
                    {project.popupSection.videoUrl && <PopupSectionVideo videoUrl={project.popupSection.videoUrl} />}
                    <div>
                        <h2>Project Stack</h2>
                        <CardStackIcons stack={project.stack} isInPopup={true}/>
                    </div>
                </ProjectPopup>
            </ProjectTemplate>
        ))}
        
    </>
    )
}