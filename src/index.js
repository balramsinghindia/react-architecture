import { render } from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./vehicle.js";
const vehicle = createStore(reducer);



render(
    <Provider store={vehicle}>
    <App />
  </Provider>, document.getElementById("root")
);
