// // thunk exmaple
// store.dispatch((dispatch: any) => {
//   dispatch({type: "FETCH_SOMETHING"});
//   axios
//     .get('http://api.labelengin.com/something/12')
//     .then(response => {
//       dispatch({type: "RECEIVE_SOMETHING", payload: response.data});
//     })
//     .catch(error => {
//       dispatch({type: "FETCH_SOMETHING_ERROR", payload: error});

//     })
// })

// // promise example
// // it is do actions of type "FOO_PENDING", "FOO_FULFILLED", "FOO_REJECTED"
// store.dispatch({
//   type: "FOO",
//   payload: axios.get('http://api.labelengin.com/something/12')
// })



// export const signIn = (username: string, password: string) => {
//   return (dispatch) => {
//     dispatch({type: "TOKEN_PENDING"});
//     axios
//       .post('/api/12', {username, password})
//       .then(response => {
//         dispatch({type: "TOKEN_FULFILLED", payload: response.data});
//       })
//       .catch(error => {
//         dispatch({type: "TOKEN_REJECTED", payload: error});
//       })
//   }
// }
