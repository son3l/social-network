import classes from './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {ProfileContent} from "./components/ProfileContent/ProfileContent";
import {Dialog} from "./components/Dialogs/Dialog";


function App() {
  return (
    <div className={"app"}>
      <Header/>
        <NavBar/>
        <div className={classes.content}>
          <Dialog/>
          <ProfileContent/>

        </div>
    </div>
  );
}
export default App;
