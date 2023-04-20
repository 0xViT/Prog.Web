import logo from './logo.svg';
import './App.css';

const Sum = (name) => {
  return (
    <p>
      {name}
    </p>
  )
}

function App() {

  const name = "Luca"
  let corso = "BSD"

  const arrayStudents = [{
    name: "Luca",
    corso: "BSD",
  },
  {
    name: "Luca",
    corso: "BSD",
  },
  {
    name: "Luca",
    corso: "BSD",
  },
  ]

  const Student = arrayStudents.find((item) => item.name === "Luca")
  console.log(Student)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {arrayStudents.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.corso}</p>
          </div>
        ))}

        {arrayStudents.filter((item) => item.Name === "Luca").map((item) =>
          <>
            <p>{item.name}</p>
            <p>{item.corso}</p>
          </>
        )}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
