//import logo from './logo.svg';
import './App.css';
import IndexPage from './utils'

function App() {
  return (
    <IndexPage />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Create a helper for this one?
  const [age, setAge] = useState('');
  return (
    <div>
      <label>
        First Name:
        <input value={firstName} onChange={e => setFirstName(e.target.value)} />
      </label>
      <label>
        Last Name:
      <input value={lastName} onChange={e => setLastName(e.target.value)} />
      </label>
      <label>
        Email:
        <input value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <label>
        Age:
        <input value={age} onChange={e => setAge(e.target.value)} />
      </label>
    </div>
  )
}

Form();

export default App;