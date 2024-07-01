import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/store/reducers/themeReducer';
import { Switch } from './ui/switch';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(store => store.theme.darkMode);

    const handleToggle = () => {
        dispatch(toggleTheme());
        document.body.classList.toggle('dark', !darkMode);
    };
    
    return (
        <div className="flex items-center">
            <span className="mr-2">{darkMode ? 'Dark' : 'Light'}</span>

            <Switch checked={darkMode} onCheckedChange={handleToggle} />
        </div>
    );
};

export default ThemeToggle;