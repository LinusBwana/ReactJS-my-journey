
function Button(){

    let count = 3;

    const clickBtn = (e) => {
        if(count > 1){
            count--;
            console.log(`${count}`);
        }
        else{
            e.target.textContent = "Hey STOP";
        }
    };

    return(
        <button onClick={(e) => clickBtn(e)}>Click Me</button>
    );
};

export default Button;