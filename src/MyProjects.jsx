
import StackIcons from "./components/StackIcons"
//IMGS
// MyPortfolio
import myPortfolio1 from "./assets/myPortfolio/myportfolio-ui.png"
import myPortfolio2 from "./assets/myPortfolio/myportfolio-code1.png"
import myPortfolio3 from "./assets/myPortfolio/myportfolio-ui-light.png"
// File Watcher
import fileWatcher1 from './assets/fileWatcher/pic1.png'
import fileWatcher2 from './assets/fileWatcher/pic2-ui.png'
import fileWatcher3 from './assets/fileWatcher/pic3-email.png'

const MyProjects =
    [
        {
            id: 1,
            name: "My Portfolio",
            githubLink: "https://github.com/LeonardoRafaelli/my-portfolio",
            stack: [StackIcons.react, StackIcons.tailwindcss, StackIcons.vercel],
            cardImg: myPortfolio1,
            description: <p>After applying for don't know how many jobs as
                a Developer and
                not getting a single chance to show what I'm capable of,
                I finally decided to create my own portfolio site, so I could include it in my Resume
                and no more words would be needed to be said to prove my hard skills. &#x1f917;</p>,
            popupSection: {
                imgs: [myPortfolio1, myPortfolio3, myPortfolio2],
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
                            <p>It's only necessary to clone <a className="underline" href="https://vercel.com/">my repo</a> at the <i>start</i> branch,
                                update the object on 'MyProjects.jsx' file with your own files and informations
                                and host it on <a className="underline" href="https://vercel.com/">vercel</a>.</p>
                        ],
                    }
                ],
            },
        },
        {
            id: 2,
            name: "File Watcher",
            githubLink: "https://github.com/LeonardoRafaelli/Filewatcher",
            stack: [StackIcons.cSharp, StackIcons.dotNet, StackIcons.dotNetMaui, StackIcons.figma, StackIcons.llvm],
            cardImg: fileWatcher2,
            description: <p>FileWatcher is a <b>cross-platform</b> application, which was built using <i>.NET Maui</i> and designed to monitor changes in files or folders. The application provides a user-friendly interface to select and monitor a specific file or folder, offering real-time updates on changes and notifications. This application was destinated to the final project of the 'CS50 - Introduction to Computer Science' course.</p>,
            popupSection: {
                imgs: [fileWatcher1, fileWatcher2, fileWatcher3],
                videoUrl: "https://www.youtube-nocookie.com/embed/6NvXdmYXeQ4?si=jDpdhewj8STvn4uF",
                texts: [
                    {
                        sectionTitle: "Development",
                        sectionParagraphs: [
                            <p>During the development of the FileWatcher, I was studying software usability
                            in the Information System Programming Apprenticeship course. Therefore, the
                            hole design was a match of trying to make the most usable and
                            user-friendly screen, applying my new knowledges, and learning how to code with .NET.</p>,

                        ],
                    }
                ],
            },
        },
    ]

// TEMPLATE
// {
//     id: 1,
//     name: "",
//     githubLink: "",
//     outsideLink: "",
//     stack: [StackIcons.react],
//     cardImg: myPortfolio1,
//     description: <p>After applying for don't know how many jobs as 
//     Back/Front/Fullstack/Java/React/C# Developer and so on and
//     not getting a single chance to show what I'm capable of,
//     I finally decided to create my own portfolio site, so I could include it in my Resume
//     and no more words would be needed to be said to prove my hard skills. &#x1f917;</p>,
//     popupSection: {
//         imgs: [myPortfolio1, myPortfolio3, myPortfolio2],
//         videoUrl: "https://www.youtube-nocookie.com/embed/6NvXdmYXeQ4?si=jDpdhewj8STvn4uF",
//         texts: [
//             {
//                 sectionTitle: "Development",
//                 sectionParagraphs: [
//                 <p>Developed in 3 </p>,
//                 <p><b>So, I did it.</b></p>
//                 ],
//             }
//         ],
//     },
// },

export default MyProjects;