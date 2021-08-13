import { render } from 'react-dom';
import App from './components/App';

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer1 from "./vehicle.js";

const store = createStore(reducer1);


render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"));
