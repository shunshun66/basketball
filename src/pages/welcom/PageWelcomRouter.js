import { Route } from 'react-keeper'
import Page from './PageWelcom';
import PageTeach from '../teach'
export default {
    page: Page,
    route: () => (
        <div>
            <Route index component={Page} path= '/main' />
            <PageTeach.route/>
        </div>)
};
