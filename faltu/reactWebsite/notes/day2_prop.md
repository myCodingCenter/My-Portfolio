# Day 2 
## props
read-only properties that are shared between components. A parent component can send data to a child component.

+ \<Component key=value />

### PropTypes
A mechanism that ensures that the passed value is of the correct datatypes. <br>
age: PropType.number

### defaultProps 
Default values for props in case they are not passed from the parent component.

**div.jsx**
```jsx
import PropTypes from 'prop-types';
import propTypes from 'prop-types'

function Div(props){
    return(
        <div className="customer">
            <p className="name">Name: <strong>{props.name}</strong></p>
            <p className="age">Age : {props.age}</p>
            <p className="gender"> Gender:{props.gender ? "Male" : "Female"} </p>
        </div>
    );
}
Div.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.bool,
}

Div.defaultProps ={
    name: "Guest",
    age: 0,
    gender: true,
}
export default Div;
```
**App.jsx**
```jsx
import Div from "./div";

function App(){
return(
<>
<Div name="Spongebob" age={30} gender={true}/>
    <Div name="Patrick" age={25} gender={true}/>
    <Div name="Olivia" age={20} gender={false}/>
    <Div name="Radhika" age={25} gender={false}/>
    <Div/>
    <Div/>
</> 
  );
}

export default App;
```
**index.css**
```jsx
.customer{
  font-size: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding: 5px 10px;
  background: blue;
  color: white;
  margin: 20px;
  border-radius: 1%;
  display: inline-block;
  min-width: 250px;
}
```
## Conditional Rendering
It allows you to control what gets rendered in your application based on certain conditions (show, hide, or change components)

**UserGreeting.jsx**
```jsx
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
```

**App.jsx**
```
import UserGreeting from "./UserGreeting";

function App(){
  return(
    <UserGreeting isLoggedIn={false} user="Bro Code"/>
  );
}

export default App;
```