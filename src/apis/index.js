import user from './user';
import _ from 'lodash'
export const resources = _.assign( {} ,
    user
);

export const fetchOptions = {
    method: 'GET',
    mode: 'cors',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
    credentials: 'omit'
};