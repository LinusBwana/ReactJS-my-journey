
function Food(){
    const food1 = "Orange";
    const food2 = "Banana";
    
    return(
        <div>
        <ol>
            <li>{food1}</li>
            <li>{food2}</li>
            <li>{food2.toUpperCase()}</li>
        </ol>

        <ul>
            <li>{food1}</li>
            <li>{food2}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>

        <dl>
            <dt>HTML</dt>
                <dd>A markup language for creating web pages.</dd>

                <dt>CSS</dt>
                <dd>A language used to style HTML content.</dd>
        </dl>
        <hr />
        </div>

    );
}

export default Food