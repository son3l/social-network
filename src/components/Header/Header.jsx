import logo from "./logo192.png";
import classes from './Header.module.css';

export const Header = () => {
    return (<div className={classes.head}>
            <img src={logo}></img>
        </div>
    );
}