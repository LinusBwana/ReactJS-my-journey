import profilePic from './assets/profile.jpg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Lorem Ipsum</h2>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestias?</p>
        </div>
    );
}

export default Card