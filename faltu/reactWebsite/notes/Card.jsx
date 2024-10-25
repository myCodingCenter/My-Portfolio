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