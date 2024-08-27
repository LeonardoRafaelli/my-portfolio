import darkThemeIcon from '../assets/theme-icon-dark.png';
import lightThemeIcon from '../assets/theme-icon-light.png';
import githubIcon from '../assets/github-original.svg'
import linkedinIcon from '../assets/linkedin-icon.png'
import LinkImg from './LinkImg';

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
                <LinkImg link={"https://github.com/LeonardoRafaelli/"} src={githubIcon}/>
                <LinkImg link={"https://www.linkedin.com/in/leonardo-rafaelli/"} src={linkedinIcon} />
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