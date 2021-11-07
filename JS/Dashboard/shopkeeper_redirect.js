{
    let sendAuthRequest = () => {
        let url = "http://localhost:3000/api/auth/";
        let token = JSON.parse(localStorage.getItem('glocal-shop-auth-token'))
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
                if(localStorage.getItem('glocal-shop-auth-token')){
                    localStorage.setItem('shop_details',JSON.stringify(data.data));
                }
            })
            .catch(err => {
                window.location.replace("../../Login/ShopKeeper_Signin.html");
            })
    }
    sendAuthRequest();
}

