
function ProfilePicture(){

    const imageUrl = './src/assets/profile.jpg';

    function clickProfile(e){
        e.target.style.display = "none";
    };

    return(
        <>
            <img onDoubleClick={e => clickProfile(e)} src={imageUrl} alt="profile picture" />
        </>
    );
};

export default ProfilePicture;