// IMGS
// Project 'name'
import projectPic1 from "./assets/projectName/myportfolio-ui.png"
import projectPic2 from "./assets/projectName/myportfolio-code1.png"
import projectPic3 from "./assets/projectName/myportfolio-ui-light.png"
// Project 'name'...

const MyProjects =
[
    {
        id: 1,
        name: "My Portfolio",
        stack: ["java", "spring", "react"],
        cardImg: projectPic1,
        description: <p>After applying for don't know how many jobs as 
        Back/Front/Fullstack/Java/React/C# Developer and so on and
        not getting a single chance to show what I'm capable of,
        I finally decided to create my own portfolio site, so I could include it in my Resume
        and no more words would be needed to be said to prove my hard skills. &#x1f917;</p>,
        popupSection: {
            imgs: [projectPic1, projectPic3, projectPic2],
            video: "",
            texts: [
                {
                    sectionTitle: "Development",
                    sectionParagraphs: [
                    <p>Developed in 3 days of relaxing coding, the project <i>MyPortfolio</i> was
                    designed to be simple and focus only on the projects made by myself and their
                    informations, however, along the way I thought: "why don't I make it possible and easy
                    so other people can also use it?&#x1f914;".</p>,
                    <p><b>So, I did it.</b> Still not so simple as just inputing your data, but with a bit of knowledge
                    of how JSONs, React and Git work, anyone can use it.</p>,
                    <p>It's only necessary to clone <a className="text-blue-800 underline" href="https://vercel.com/">my repo</a> at the <i>start</i> branch,
                    update the object on 'MyProjects.jsx' file with your own files and informations
                    and host it on <a className="text-blue-800 underline" href="https://vercel.com/">vercel</a>.</p>
                    ],
                }
            ],
            links: [],
        }
    },
]


export default MyProjects;