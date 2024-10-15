# React JS in 6 days

## Set Up for react js
First of all download npm. Then, open terminal in your text editor. and run following commands.
```jsx
npm create vite@latest
```
Now your need to input your project name.
___
**This is alternative of following command which is outdated now.**
```jsx
npm create react app
```
After this commands run:
```jsx
cd <project_name>
npm install 
npm run dev
```
**Jsx means JavaScript XML**
## Components in React Js
open your project, and see src folder. and open App.jsx and replace the code with this:

```jsx
import Header from "./Header"
import Footer from "./footer.jsx"
import Food from "./food.jsx"


function App() {
  return(
    <>
    <Header/>
    <Food/>
    <Footer/>
    </>
  )
}

export default App
```
before that you need to create components, simply by creating a file with extension **.jsx** for example.

```jsx
function Food(){
    let food1 = "Roti"
    let food2 = "Biryani"
    let food3 = "momo"
    return(
        <ul>
            <li>Rice</li>
            <li>{food1}</li>
            <li>{food2}</li>
            <li>{food3.toUpperCase()}</li>
        </ul>
    )
}

export default Food
```
**to add javascript inside return function we need {_js code goes here_}

**FRAGMENT IN REACT JS**
_<></>_
it is help to return component in single as single element.


## Card in React js
**Card.jsx**
```jsx
// import profilePic from './assets/react.svg'
// src={profilePic}

function Card(){
return(
    <div className="card">
        <img src="https://th.bing.com/th/id/OIP.s3YKJpxtQMCKld-1pFsnVAHaEK?w=253&h=180&c=7&r=0&o=5&pid=1.7" className="card-img" alt="profile_picture"/>
        {/* <img src="https://via.placeholder.com/200" className="card-img" alt="profile_picture"/> */}
        <h2 className="card-title">Raj Kishor Yadav</h2>
        <p className="card-text">Undergraduate student running student in Seoul University in BIT.</p>
    </div>
)
}

export default Card;
```
**App.jsx**
```jsx
import Card from "./card";


function App(){
  return(
    <>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    </>
  );
}

export default App;
```

**index.css**
```css
.card{
  /* background-color: green; */
  border:1px solid hsl(0, 0%, 80%);
  border-radius: 10px;
  box-shadow: 5px 5px 5px black;
  padding: 20px;
  margin: 10px;
  text-align: center;
  max-width: 200px;
  display: inline-block;
}
.card .card-img{
  max-width: 60%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 10px;
}
.card .card-title{
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  color: blue;
}
.card .card-text{
  font-family: Arial, Helvetica, sans-serif;
  color: grey;

}
```
## Working with CSS
How to style react components with css
<br>
**Not including external frameworks or preprocessors** <br>
1. External <br>
See Example [Card in React JS](#card-in-react-js)
2. Modules
<br>
**button/button.js**
```jsx
import styles from './button.module.css'
function Button(){
    return(
        <div>
            <button className={styles.button}>Click Me</button>
        </div>
    )
}

export default Button;
```

***button/button.modules.css**
```jsx
.button{
    padding:20px 30px;
    background-color: green;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    border: none;
}
.button:hover{
    background-color: red;
}
```
3. inline <br>
   **button.jsx**
```jsx
   function Button(){
    const styles = {
        backgroundColor:"blue",
        color: "white",
        padding:"20px 30px",
        borderRadius:"20px",
        fontSize:"18px",
    }
    return(
        <div>
            <button style={styles}>Click Me</button>
        </div>
    )
}

export default Button;
   ``` 

