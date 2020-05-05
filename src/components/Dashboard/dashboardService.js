

class dashboardService {

    constructor() {
      this.state = {
          
      }
    }
  
    getTodos() {
      return fetch("https://testapi.io/api/maniakhil/todolist?token=20a5676bfe86d99fb3a726b1d30a4a3c02d47f32")
      .then(response => response.json()).then(response => {
          return response;
      }).catch(err => {
          console.log(err);
          return err;
      });
    }
  }
  
  
  export default dashboardService;