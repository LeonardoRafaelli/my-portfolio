import darkThemeIcon from '../assets/theme-icon-dark.png';
import lightThemeIcon from '../assets/theme-icon-light.png';


export default function Header({switchAppTheme, appTheme}) {

    return (
        <header
            className="
            h-14
            mb-6
            flex
            justify-between
            "
        >
            <div className="w-1/2 pl-6 flex items-center font-signature text-2xl font-bold">
                Leonardo Rafaelli
            </div>
            <div className="w-1/2 pr-6 flex items-center justify-end">
                <button
                   onClick={switchAppTheme}
                   >
                   <img src={appTheme == 'light' ? darkThemeIcon : lightThemeIcon}
                    className='w-8'
                />
                </button>
                
            </div>
        </header>
    )

}