import { Route } from 'react-keeper'
import Page from './PageNotfound';

export default {
    page: Page,
    route: () => (
        <div>
            <Route  component={Page} path= '/notfound' >

            </Route>
        </div>)
};
