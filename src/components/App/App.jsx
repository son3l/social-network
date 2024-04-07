import classes from './App.css';
import {Header} from "../Header/Header";
import {NavBar} from "../NavBar/NavBar";
import {ProfileContent} from "../ProfileContent/ProfileContent";
import {Dialog} from "../Dialogs/Dialog";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DialogContainer} from "../Dialogs/DialogContainer";
import {UserBarContainer} from "../Users/UserBarContainer";
import {ProfileContentClass} from "../ProfileContent/ProfileContentClass";
import {ProfileContentContainer} from "../ProfileContent/ProfileContentContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className={"app"}>
                <Header/>
                <NavBar/>
                <div className={classes.content}>
                    <Routes>
                        <Route path='/dialog/*'
                               element={<DialogContainer/>}/>
                        <Route path='/profile/:profileId'
                               element={<ProfileContentContainer/>}/>
                        <Route path='/users' element={<UserBarContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
