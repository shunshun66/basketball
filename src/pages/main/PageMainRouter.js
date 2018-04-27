import { Route } from 'react-keeper'
import Page from './PageMain';

export default {
    page: Page,
    route: () => (
        <div>
            <Route index component={Page} path= '/main' >

            </Route>
        </div>)
};
