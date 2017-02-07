import * as api from '../api';

export const loadData = ({ commit }) =>  {
    api.loadData()
        .then(function json(response) {  
                return response.json()  
            })
        .then(function(data) {
                // _this.setState({ ministryPartners: data });
                console.log('Request succeeded with JSON response', data);
                commit('loadData', { data });
            })
        .catch(function(error) {
                console.log('Request failed', error);
            });

};