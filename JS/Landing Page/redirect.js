{
    let sendAuthRequest = () => {
        let url = "http://localhost:3000/api/auth/";
        let token = JSON.parse(localStorage.getItem('glocal-customer-auth-token'));
        if (token == null) {
            token = JSON.parse(localStorage.getItem('glocal-shop-auth-token'));
        }
        let header = new Headers();
        header.append('Authorization', `Bearer ${token}`);

        let req = new Request(url, {
            method: 'GET',
            mode: 'cors',
            headers: header,
        });

        fetch(req)
            .then((resp) => {
                switch (resp.status) {
                    case 200:
                        return resp;
                    default:
                        throw resp;
                }
            })
            .then(resp => resp.json())
            .then(data => {
                if(localStorage.getItem('glocal-customer-auth-token')){
                    window.location.replace("../../Dashboard/Customer_dash.html");
                }else{
                    window.location.replace("../../Dashboard/Shopkeeper_dash.html");
                }
            })
            .catch(err => {
                return;
            })
    }
    sendAuthRequest();
}

