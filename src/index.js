import { render } from 'react-dom';
import App from './components/App';
import CounterContextProvider from './contexts/CounterContexts';

render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>,
  document.getElementById('root')
);
