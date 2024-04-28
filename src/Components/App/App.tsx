// @ts-ignore
import classes from './App.css';
import {NavBar} from "../NavBar/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// @ts-ignore
import {DialogContainer} from "../Dialogs/DialogContainer.tsx";
// @ts-ignore
import {UserBarContainer} from "../Users/UserBarContainer.tsx";
// @ts-ignore
import {ProfileContentContainer} from "../ProfileContent/ProfileContentContainer.tsx";
// @ts-ignore
import {HeaderContainer} from "../Header/HeaderContainer.tsx";
// @ts-ignore
import {LoginContainer} from "../LoginPage/LoginContainer.tsx";
// @ts-ignore
import {NotFound} from "../NotFound/NotFound.tsx";
// @ts-ignore
import {reduxStore} from "../../Redux/ReduxStore.ts";
import {Provider} from "react-redux";


function App() {
    return (
        <BrowserRouter>
            <Provider store={reduxStore}>
                <div className={"app"}>
                    <HeaderContainer/>
                    <NavBar/>
                    <div className={classes.content}>
                        <Routes>
                            <Route path='/dialog/*' element={
                                // @ts-ignore
                                <DialogContainer/>}/>
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
            </Provider>
        </BrowserRouter>
    );
}

export default App;
