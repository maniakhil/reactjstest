import socketIOClient from "socket.io-client";
const ENDPOINT = "https://testapi.io/api/maniakhil/resource/users";
export const FETCH_USERS = "FETCH_USERS";

const fetchUsers = (dispatch) => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      console.log(data);
    });
    
    fetch('https://testapi.io/api/maniakhil/resource/users')
        .then(res => res.json())
        .then(res => dispatch({ type: FETCH_USERS, payload: res.data }))
};
export default fetchUsers;