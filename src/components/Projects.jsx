import ProjectCard from "./ProjectCard"
import ProjectPopup from "./ProjectPopup"
import PopupSectionImgs from "./PopupSectionImgs";
import PopupSectionTexts from "./PopupSectionTexts";
import PopupSectionVideo from "./PopupSectionVideo";
import CardStackIcons from "./CardStackIcons";
import githubIcon from "../assets/github-original.svg";
import linkIcon from "../assets/external-link-icon.png";

import MyProjects from "../MyProjects";
import LinkImg from "./LinkImg";

export default function Projects() {

    return (<>
        {MyProjects.map((project, i) => (
            <ProjectCard key={i} projectName={project.name} stack={project.stack} imgSrc={project.cardImg}>
                <ProjectPopup>
                    <div>
                        <div className="flex">
                            <div className="flex-1"> </div>
                            <div className="flex-1 flex justify-center">
                                <div className='relative text-2xl text-center font-semibold mb-6'>
                                    { project.name}
                                    { project.outsideLink &&
                                        <div className="absolute top-0 right-[-30px]">
                                            <LinkImg link={project.outsideLink} width={4} src={linkIcon} />
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="flex-1 flex justify-end">
                                { project.githubLink &&
                                    <LinkImg link={project.githubLink} src={githubIcon} />
                                }
                            </div>
                        </div>
                        <p className='text-sm text-justify'>
                            {project.description}
                        </p>
                    </div>
                    {project.popupSection.imgs && <PopupSectionImgs imgs={project.popupSection.imgs} />}
                    {project.popupSection.texts && <PopupSectionTexts texts={project.popupSection.texts} />}
                    {project.popupSection.videoUrl && <PopupSectionVideo videoUrl={project.popupSection.videoUrl} />}
                    {project.stack.length > 0 && (
                        <div>
                            <h2>Project Stack</h2>
                            <CardStackIcons stack={project.stack} isInPopup={true} />
                        </div>
                    )}
                </ProjectPopup>
            </ProjectCard>
        ))}

    </>
    )
}