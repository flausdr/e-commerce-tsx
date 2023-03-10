import ReactDOM from 'react-dom/client';
import './index.scss';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import App from './pages/index';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        < App />
    </BrowserRouter>
);