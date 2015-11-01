import App from '../components/App';
import Home from '../components/Home';

export const routes = {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [

    ]
};