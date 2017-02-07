export const loadData = ({ commit }) =>  {
    const url = 'https://httpbin.org/get';
    const request = new Request(url, {
            method: 'get',
            mode: 'cors'
        });
    
    let promise = fetch(request)
        .then(function json(response) {  
            return response.json()  
        })
        .then(function(data) {
            // _this.setState({ ministryPartners: data });
            console.log('Request succeeded with JSON response', data);
        }).catch(function(error) {
            console.log('Request failed', error);
        });

    return promise;
};