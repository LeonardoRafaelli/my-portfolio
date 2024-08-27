import ProjectTemplate from "./ProjectTemplate"
import ProjectPopup from "./ProjectPopup"
import PopupSectionImgs from "./PopupSectionImgs";
import PopupSectionTexts from "./PopupSectionTexts";
import PopupSectionVideo from "./PopupSectionVideo";
import CardStackIcons from "./CardStackIcons";
import githubIcon from "../assets/github-original.svg";
import linkIcon from "../assets/external-link-icon.png";

import MyProjects from "../MyProjects";

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
                                <a href={project.githubLink} className="w-8 h-min">
                                    <img className="hover:brightness-200 transition duration-400 select-none" src={githubIcon}/>
                                </a>
                                {project.outsideLink && 
                                    <a href={project.outsideLink} className="w-4 h-min ml-4">
                                        <img className="hover:brightness-200 transition duration-400 select-none" src={linkIcon}></img>
                                    </a>
                                }
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