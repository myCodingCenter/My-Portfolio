function UserGreeting(props){
//     if (props.isLoggedIn){
//         return <h2>Welcome {props.user}</h2>
//     }
//     return <h2>Welcome Guest</h2>

// return(
//     props.isLoggedIn ? 
//     <h2>Welcome {props.user}</h2>
//     :
//     <h2>Please logged in.</h2>
// );
const welcomeMessage = <h2>Welcome {props.user}</h2>
const loginPrompt = <h2>Please logged in.</h2>
return(
    props.isLoggedIn ? 
    welcomeMessage
    :
    loginPrompt
);
}

export default UserGreeting;