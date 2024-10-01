
import StackIcons from "./components/StackIcons"
import Contributors from "./components/Contributors"
//IMGS
// MyPortfolio
import myPortfolio1 from "./assets/myPortfolio/myportfolio-ui.png"
import myPortfolio2 from "./assets/myPortfolio/myportfolio-code1.png"
import myPortfolio3 from "./assets/myPortfolio/myportfolio-ui-light.png"
// File Watcher
import fileWatcher1 from './assets/fileWatcher/pic1.png'
import fileWatcher2 from './assets/fileWatcher/pic2-ui.png'
import fileWatcher3 from './assets/fileWatcher/pic3-email.png'
// MyVocabulary
import mvPic1 from './assets/myVocabulary/pic-mainpage.png'
import mvPic2 from './assets/myVocabulary/pic-login.png'
import mvPic3 from './assets/myVocabulary/pic-learn.png'
import mvPic4 from './assets/myVocabulary/pic-learnnotblur.png'
import mvPic5 from './assets/myVocabulary/pic-database.png'
import mvPic6 from './assets/myVocabulary/pic-aws.png'
// React To Survive
import rtsPic1 from './assets/reactToSurvive/rtsPic1-welcomePage.png'
import rtsPic2 from './assets/reactToSurvive/rtsPic2-gameplay.png'
import rtsPic3 from './assets/reactToSurvive/rtsPic3-ranking.png'
// AR-Puzzle
import arPuzzlePic1 from './assets/arPuzzle/startScreen.png'
import arPuzzlePic2 from './assets/arPuzzle/firstPuzzleImg.jpeg'
import arPuzzlePic3 from './assets/arPuzzle/secondPuzzleImg.jpeg'
// SEED - Backend
import seedBePic1 from './assets/SEEDBackend/sbe-pic1-authConfig.png'
import seedBePic2 from './assets/SEEDBackend/sbe-pic2-ataController.png'
import seedBePic3 from './assets/SEEDBackend/sbe-pic3-workflow.png'
// SEED - Frontend
import seedFePic1 from './assets/SEEDFrontend/seedFE-login.png'

const MyProjects =
    [
        {
            id: 1,
            name: "My Portfolio",
            githubLink: "https://github.com/LeonardoRafaelli/my-portfolio",
            stack: [StackIcons.react, StackIcons.tailwindcss, StackIcons.vercel, StackIcons.vscode],
            cardImg: myPortfolio1,
            description: <p>For the purpouse of making it easier to show what I'm capable of and some of the the projects I have already done, I finally decided to code my own portfolio and make a project out of it.</p>,
            popupSection: {
                imgs: [myPortfolio2, myPortfolio1, myPortfolio3],
                texts: [
                    {
                        sectionTitle: "Development",
                        sectionParagraphs: [
                            <p>Developed in 3 days of relaxing coding, the project <i>MyPortfolio</i> was
                                designed to be simple and focus only on the projects made by myself and their
                                informations, however, along the way I thought: "why don't I make it possible and easy
                                so other people can also use it?".</p>,
                            <p><b>So, I did it.</b> Still not so simple as just inputing your data, but with a bit of knowledge
                                of how JSONs, React and Git work, anyone can use it.</p>,
                            <p>It's only necessary to clone <a className="underline" href="https://github.com/LeonardoRafaelli/my-portfolio/">my repo</a> at the <i>start</i> branch,
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
            stack: [StackIcons.cSharp, StackIcons.dotNet, StackIcons.dotNetMaui, StackIcons.visualstudio, StackIcons.figma, StackIcons.llvm],
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
                                in the Information System Programming Apprenticeship course, therefore, the
                                hole design was a match of trying to make the most usable and
                                user-friendly screen, applying my new knowledges, and learning how to code with .NET.</p>,

                        ],
                    }
                ],
            },
        },
        {
            id: 3,
            name: "My Vocabulary",
            githubLink: "https://github.com/LeonardoRafaelli/my-portfolio",
            stack: [StackIcons.java, StackIcons.spring, StackIcons.maven, StackIcons.mysql, StackIcons.docker, StackIcons.aws, StackIcons.intellij],
            cardImg: mvPic1,
            description: <p>This project was one of which I had most fun coding it. It started as an idea to make an app for myself, that would <i>help me in some of my activities</i>. As by the time I coded this project I was studying german (which I still do, and will probably do forever), I decided to make an app for the need to learn german and this was the outcome.</p>,
            popupSection: {
                imgs: [mvPic2, mvPic3, mvPic4, mvPic5, mvPic6, mvPic1],
                videoUrl: "https://www.youtube.com/embed/P5Yvi1E0QLI?si=iRx9TRNeF4rT8dob",
                texts: [
                    {
                        sectionTitle: "Development",
                        sectionParagraphs: [
                            <p>The development was pretty flowed 	&#x1f468;&#x200d;&#x1f4bb; , I already knew all the tools I was about to use, except for AWS.</p>,
                            <p>Coding this project, as I used no front-end framework, I reeinforced a lot my knowledge in <b>Spring Security and Thymeleaf.</b></p>,
                            <p>Also, I could understand a lot more how AWS works, services and terms such <b>EC2</b> (Elastic Cloud), <b>RDS</b> (Relational Database Service) and their instances. It was <i>100%</i> worth to dive in my ideas and code this project.</p>,

                        ],
                    }
                ],
            },
        },
        {
            id: 4,
            name: "SEED - Backend",
            githubLink: "https://github.com/SID-Organization/SEED-Project-Backend",
            stack: [StackIcons.java, StackIcons.spring, StackIcons.jwt, StackIcons.maven, StackIcons.mysql, StackIcons.intellij],
            cardImg: seedBePic2,
            description: <p>This project was the longest and most <b>valuable project</b> I've took part in so far. Developed for the company WEG S.A., three friends and I took 1 year and a half to finish it, both back and front-end (which due to the size, I splited in the portfolio in 2 projects).</p>,
            popupSection: {
                videoUrl: "https://www.youtube.com/embed/UlAvhSIV8fc?si=ZI597cPTbcRDWGYF",

                texts: [
                    {
                        sectionTitle: "Goal / Idea",
                        sectionParagraphs: [<p>For this project we received an <i>8 page PDF</i> explaining the idea of the project and what was the outcome expected by the company, which I'll be simplifying here.</p>,
                        <p>Using the <i>KAIZEN</i> ideal of <b>continuous improvement</b>, the idea of the project was to allow all employees with access to the company's online services to have the opportunity to suggest improvements in their respective departments. After the suggestion input (which we will call here "ticket"), this, would be analyzed, classified, approved, and executed through a workflow (available below).</p>,
                        <p>Thus, by combining KAIZEN with automation, the company would have a solid system for continuous improvements.</p>
                        ]
                    },
                    {
                        sectionTitle: "Workflow",
                        sectionImg: seedBePic3,
                    },
                    {
                        sectionTitle: "Development",
                        sectionParagraphs: [<p>It was a very complex project since we had to code from zero to hero and also following of course all the business rules for this project. Along the way we used different type of tools to organize ourselfs and mainly to maintain the communication <i>(which we learn it's one of the most important things during a project development)</i> between the back-end and the front-end developers.</p>]
                    },
                    {
                        sectionTitle: "Team Splitting",
                        sectionParagraphs: [<p>Very on the beginning of the project, we were meant to rotate our responsabilites and assume other places on the development of the project, so the ones coding the BE, would have to assume the FE development and vice-versa. But as expected, it does really worked, since you'd have to forget your new feature development to dive in another one complete different, leading to time waste and mess.</p>,
                        <p><b>So after a while</b>, knowing that Gustavo and Otavio were BE devs and Henrique FE dev, we decided that we would split in to two teams. Considering myself a full-stack developer, I ended up joining the FE, even tough I'd have really liked to stay in the BE development and deal with our API.</p>,
                        <p><b>Furthermore</b>, even splitted in teams, we were always on the same side, meaning that a BE problem could also be solved by the FE devs or vice-versa, making this project a really successful teamwork.</p>]
                    }
                ]
            },
            contributors: [Contributors.hc, Contributors.os, Contributors.gz]
        },
        {
            id: 5,
            name: "SEED - Frontend",
            githubLink: "https://github.com/SID-Organization/SEED-Project-Frontend",
            stack: [StackIcons.react, StackIcons.tailwindcss, StackIcons.materialui, StackIcons.vscode, StackIcons.jira, StackIcons.figma],
            cardImg: seedFePic1,
            description: <p>Informations will be added soon</p>,
            popupSection: {
                videoUrl: "https://www.youtube.com/embed/QNudzz2LFag?si=GgDuAjkM_rYR-v0v",
            },
            contributors: [Contributors.hc, Contributors.os, Contributors.gz]
        },
        {
            id: 6,
            name: "Spring PayPal Integration",
            githubLink: "https://github.com/LeonardoRafaelli/spring-paypal-integration",
            stack: [StackIcons.java, StackIcons.spring, StackIcons.yaml, StackIcons.intellij],
            cardImg: "",
            description: <p>Informations will be added soon</p>,
            popupSection: {
            },
        },
        {
            id: 7,
            name: "React to Survive",
            githubLink: "https://github.com/HenriqueCole/react-to-survive",
            outsideLink: "https://react-to-survive.vercel.app",
            stack: [StackIcons.react, StackIcons.vscode],
            cardImg: rtsPic2,
            description: <p>This project was really really fun to code, mainly because Henrique and I were coding with <i>Live Share</i> and also building the sprite graphics with <a href="https://www.piskelapp.com/"><i className="underline">Piskel</i></a>. React To Survive was the first game with movements that I ever coded, it really helped me to understand and use concepts such as hitbox, screenlimit and so on.</p>,
            popupSection: {
                imgs: [rtsPic1, rtsPic2, rtsPic3],
                texts: [
                    {
                        sectionTitle: "How it works",
                        sectionParagraphs: [
                            <p>It's actually really simple and maybe a bit nonnsense, but anyway, the goal is to brake all the arrows that are falling with your knight (which is your mouse), as the time goes by, it gets harder and more cave mans start to appear. The background changes each minute to show the user that you've reached a new level of complexity. Enjoy :)</p>]
                    },
                    {
                        sectionTitle: "Development",
                        sectionParagraphs: [<p>Developed in ReactJS, this project was the first game with 'movement' that I took part in the development. With just simple ideas of how to make elements hit each other in HTML, CSS and JS, we started slowly to create this game, which is valuable to say, that helped a lot to develop our logical thinking, since we didn't use any refence to build it.</p>]
                    }
                ]
            },
            contributors: [Contributors.hc]
        },
        {
            id: 8,
            name: "AR Puzzle",
            githubLink: "https://github.com/LeonardoRafaelli/ra-scaperoom/",
            outsideLink: "https://ra-enigma.vercel.app/",
            stack: [StackIcons.react, StackIcons.vscode, StackIcons.html5],
            cardImg: arPuzzlePic2,
            description: <p>Critical thinking, the only way we get to proof things, and not just simply accept it. Therefore, puzzles that requires you to <b>think outside the box</b> always attracted me. During my IT course we were asked to create something with Augmented Reality, and without thinking to much, me and I friend quickly decided to create a puzzle. That was when this project was born. You can access the game clicking on the icon beside the title. <br /> obs. the game still in portuguese, so it might be a bit harder to solve it, if you can't speak portuguese, or you can consider it part of the puzzle. Enjoy :)</p>,
            popupSection: {
                imgs: [arPuzzlePic1, arPuzzlePic2, arPuzzlePic3],
                texts: [
                    {
                        sectionTitle: "Development",
                        sectionParagraphs: [
                            <p>Developed mainly with ReactJS, due to being the framework we were diving in, this project took us around 1 week to finish it. We also used another hosted project to store the images from the AR, you can find the repo <a href="https://github.com/HenriqueCole/camera_ra" className="underline" target="_blank">here</a></p>,
                            <p>For the AR part, we used a Web Framework for building 3D/AR/VR experiences, called <a href="https://aframe.io/" className="underline" target="_blank"><i>A-FRAME</i></a>.</p>,

                        ]
                    }
                ]
            },
            contributors: [Contributors.hc, Contributors.tb]
        },
        {
            id: 9,
            name: "Airbnb Clone",
            githubLink: "https://github.com/LeonardoRafaelli/airbnb-clone",
            stack: [StackIcons.java, StackIcons.spring, StackIcons.yaml, StackIcons.postgresql, StackIcons.angular, StackIcons.intellij],
            cardImg: "",
            description: <p>In development</p>,
            popupSection: {
                
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
//     description: <p></p>,
//     popupSection: {
//         imgs: [myPortfolio1],
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
//     contributors: [
//          {name: "", github:""}
//     ]
// },

export default MyProjects;