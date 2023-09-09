import logo from './logo.svg';
import './App.css';
import {Login} from "./view/login/Login";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

function App() {
    if (!localStorage.getItem("token")) {
        return (
            <div className="App">
                <Login></Login>
            </div>
        );
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>
        </div>
    );
}

export default App;
