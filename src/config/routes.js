import App from '../components/App';
import Home from '../components/Home';
import Profile from '../components/Profile';

export const routes = {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [
        { path: 'profile/:username', component: Profile, name: 'profile' }
    ]
};