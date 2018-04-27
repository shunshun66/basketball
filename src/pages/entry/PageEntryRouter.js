import { Route } from 'react-keeper'
import Page from './PageEntry';

export default {
    page: Page,
    route: () => (
        <div>
            <Route component={Page} path= '/entry' >

            </Route>
        </div>)
};
