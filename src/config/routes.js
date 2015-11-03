import App from '../components/App'
import Home from '../components/Home'
import Profile from '../components/Profile'
import History from '../components/History'

export const routes = {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    history: History,
    childRoutes: [
        { path: 'profile/:username', component: Profile, name: 'profile' }
    ]
};