import { Route } from 'react-keeper'
import Page from './PageTeach';

export default {
    page: Page,
    route: () => (
        <div>
            <Route  component={Page} path= '/teach' >

            </Route>
        </div>)
};
