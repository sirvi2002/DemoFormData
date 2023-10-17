import logo from './logo.svg';
import './App.css';

function App() {


  const clickHandler = async () => {
    console.log("Clicked me");


    const formData = new FormData();
    formData.append("Name ", "Manoj");
    const response = await fetch('http://localhost:5000/users', { method: 'POST', body: formData });

  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={clickHandler}>Send Request</button>
      </header>
    </div>
  );
}

export default App;
