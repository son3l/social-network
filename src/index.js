import reportWebVitals from "./reportWebVitals";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {reduxStore} from "./redux/ReduxStore";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <Provider store={reduxStore}>
            <App/>
            </Provider>
        </React.StrictMode>
    );
reportWebVitals(console.log);
