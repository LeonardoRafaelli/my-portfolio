import { useEffect, useState } from 'react'
import ProjectTemplate from './components/ProjectTemplate'
import Header from './components/Header.JSX';

// Project pictures
import firstProject from './assets/projectpic-test.png'

function App() {
  const [appTheme, setAppTheme] = useState('light');

  useEffect(() => {
    let lsTheme = getThemeOnLS()
    if(lsTheme != null) {
      setAppTheme(lsTheme)
    } else {
      localStorage.setItem('theme', appTheme)
    }
  },[])
  

  function getThemeOnLS() {
    return localStorage.getItem('theme');
  }
  

  function switchAppTheme() {
    const newTheme = getSwitchedAppTheme()

    localStorage.setItem('theme', newTheme);
    setAppTheme(newTheme);
  }
  

  function getSwitchedAppTheme() {
    return appTheme == 'light' ? 'dark' : 'light';
  }
  
  // Tailwind code to control dark/light mode
  const themeModeCSS = `${appTheme} text-dark bg-light dark:text-light dark:bg-dark`; 

  return (
    <div className={`${themeModeCSS} font-standard min-h-screen w-full`}>
      <Header switchAppTheme={switchAppTheme} appTheme={appTheme}/>
      <div className='mx-6 grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-2 gap-y-16'>
        <ProjectTemplate projectName={"Project name"} stack={"List of imgs"} imgSrc={firstProject}/>
        <ProjectTemplate projectName={"Project name"} stack={"List of imgs"} imgSrc={firstProject}/>
        <ProjectTemplate projectName={"Project name"} stack={"List of imgs"} imgSrc={firstProject}/>
        <ProjectTemplate projectName={"Project name"} stack={"List of imgs"} imgSrc={firstProject}/>
        <ProjectTemplate projectName={"Project name"} stack={"List of imgs"} imgSrc={firstProject}/>
      </div>
    </div>
  )
}

export default App
