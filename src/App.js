import './App.css';

function App() {
  return (
    <div className='body'>
        <div className="App">
          <div className = 'header'>
            <h2 className='head1'>Login</h2>
            <p className='para1'>Enter your credentials</p>
          </div>
          <form className = 'form1'>
            <input 
              className='username' 
              placeholder='Username'
              type = 'email'
              spellcheck = 'false'
              autocomplete = 'off'
            />
            <input 
              className='password' 
              placeholder='Password'
              id = 'password'
              type='password'
              spellcheck = 'false'
            />
            <button>LOGIN</button>
          </form>
        </div>
    </div>
  );
}

export default App;
