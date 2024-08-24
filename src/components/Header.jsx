import darkThemeIcon from '../assets/theme-icon-dark.png';
import lightThemeIcon from '../assets/theme-icon-light.png';


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
            <div className="flex-1 text-sm flex items-center justify-center">
                <p>My portfolio : )</p>
            </div>
            <div className="flex-1 pr-6 flex items-center justify-end">
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