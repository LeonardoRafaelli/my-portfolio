import darkThemeIcon from '../assets/theme-icon-dark.png';
import lightThemeIcon from '../assets/theme-icon-light.png';
import githubIcon from '../assets/github-original.svg'
import linkedinIcon from '../assets/linkedin-icon.png'

export default function Header({switchAppTheme, appTheme}) {

    return (
        <header
            className="
            h-14
            mb-14
            flex
            justify-between
            "
        >
            <div className="flex-1 pl-6 flex items-center font-signature text-xl font-bold">
                Leonardo Rafaelli
            </div>
            <div className="flex-1 flex items-center justify-center gap-4">
                <a href='https://github.com/LeonardoRafaelli/'>
                    <img className='w-8 hover:brightness-50 dark:hover:brightness-150 select-none' src={githubIcon}/>
                </a>
                <a href='https://www.linkedin.com/in/leonardo-rafaelli/'>
                    <img className='w-8 hover:brightness-50 dark:hover:brightness-150 select-none' src={linkedinIcon}/>
                </a>
            </div>
            <div className="flex-1 pr-6 flex items-center justify-end">
                <button
                   onClick={switchAppTheme}
                   >
                   <img src={appTheme == 'light' ? darkThemeIcon : lightThemeIcon}
                    className='w-8 select-none'
                />
                </button>
                
            </div>
        </header>
    )

}