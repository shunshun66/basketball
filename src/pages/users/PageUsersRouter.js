import { Route } from 'react-keeper'
import Page from './PageUsers';

export default {
    page: Page,
    route: () => (
        <div>
            <Route component={Page} path= '/users' >

            </Route>
        </div>)
};
