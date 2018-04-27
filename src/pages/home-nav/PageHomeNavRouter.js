import { Route } from 'react-keeper'
import Page from './PageHomeNav';
import PageUsers from '../users/PageUsers'
export default {
    page: Page,
    route: () => (
        <div>
            <Route component={Page} path= '/nav' />
            <Route component={PageUsers} path='/register' />
            
        </div>)
};
