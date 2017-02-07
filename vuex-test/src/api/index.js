const URL = 'https://httpbin.org/get';

export function loadData() {
    const request = new Request(URL, {
            method: 'get',
            mode: 'cors'
        });
    
    return fetch(request);
        // .then(function json(response) {  
        //     return response.json()  
        // })
        // .then(function(data) {
        //     // _this.setState({ ministryPartners: data });
        //     console.log('Request succeeded with JSON response', data);
        // }).catch(function(error) {
        //     console.log('Request failed', error);
        // });

    // return promise;
}