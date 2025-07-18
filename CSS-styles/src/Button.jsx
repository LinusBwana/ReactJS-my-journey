
function Button(){
    
    const styles = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    }

    return(
        <>
            <button type="button" className="button">External Button</button>
            <button type="button" style={styles}>Inline button</button>
        </>
    );
}

export default Button



