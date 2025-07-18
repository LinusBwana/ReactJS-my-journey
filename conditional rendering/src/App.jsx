import UserGreeting from './UserGreeting.jsx'

function App(){

    return(
    <>
    <UserGreeting isLoggedIn={true} username="Mr. Linus" />
    </>
    );
}

export default App