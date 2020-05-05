

class loginService {

  constructor() {
    this.state = {
        
    }
  }

  checkCredentials(params) {
    return fetch("https://testapi.io/api/maniakhil/login?token=20a5676bfe86d99fb3a726b1d30a4a3c02d47f32", {
        "method": "POST",
        "body": JSON.stringify(params)
    }).then(response => response.json()).then(response => {
        return response;
    }).catch(err => {
        console.log(err);
        return err;
    });
  }
}


export default loginService;