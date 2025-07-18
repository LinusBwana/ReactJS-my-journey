import Student from './Student';

function App() {

  return (<>
    <Student name="Sandra"/>
    <Student name="Linus" age={29} isStudent={false}/>
    <Student name="Laura" age={31} isStudent={true}/>
    <Student age={26}/>
    <Student name="martin" isStudent={true}/>
    <Student />
  </>);
}

export default App
