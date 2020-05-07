export const FETCH_USERS = "FETCH_USERS";

const fetchUsers = (dispatch) => {
    fetch('https://testapi.io/api/maniakhil/resource/users')
        .then(res => res.json())
        .then(res => dispatch({ type: FETCH_USERS, payload: res.data }))
};
export default fetchUsers;