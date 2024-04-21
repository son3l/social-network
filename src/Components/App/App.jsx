import classes from './App.css';
import {NavBar} from "../NavBar/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DialogContainer} from "../Dialogs/DialogContainer";
import {UserBarContainer} from "../Users/UserBarContainer";
import {ProfileContentContainer} from "../ProfileContent/ProfileContentContainer";
import {HeaderContainer} from "../Header/HeaderContainer";
import {LoginContainer} from "../LoginPage/LoginContainer";
import {NotFound} from "../NotFound/NotFound";


function App(props) {
    return (
        <BrowserRouter>
            <div className={"app"}>
                <HeaderContainer/>
                <NavBar/>
                <div className={classes.content}>
                    <Routes>
                        <Route path='/dialog/*'
                               element={<DialogContainer/>}/>
                        <Route path='/profile/:profileId'
                               element={<ProfileContentContainer/>}/>
                        <Route path='/profile'
                               element={<ProfileContentContainer/>}/>
                        <Route path='/users' element={<UserBarContainer/>}/>
                        <Route path={'/login'} element={<LoginContainer/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
