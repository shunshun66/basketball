import { Route } from 'react-keeper'
import Page from './PageHome';
import NavPage from '../home-nav'
import EntryPage from '../entry'
import WelcomPage from '../welcom'
import NotFoundPage from '../notfound'
import PageUser from '../users'
export default {
    page: Page,
    route: () => (
        <div>
            <Route index component={Page} path= '/' >
                <WelcomPage.route />
                <NavPage.route />
                <EntryPage.route />
                <NotFoundPage.route />
            </Route>
            <PageUser.route />
        </div>)
};
