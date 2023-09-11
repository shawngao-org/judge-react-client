import './App.css';
import {getRouterComponent} from "./router/Router";

function App() {
    return (
        <div className="App">
            {getRouterComponent()}
        </div>
    );
}

export default App;
