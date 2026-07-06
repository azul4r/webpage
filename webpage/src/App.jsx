import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  function handlelogin(e) {

    e.preventDefault();
    // Login logic here
    if (username.trim() === '') {
      setUsernameError('Username wajib diisi.');
      return;
    }
    setUsernameError(''); // Clear username error if valid

    if (password.trim() === '') {
      setPasswordError('Password wajib diisi.');
      return;
    }
    setPasswordError(''); // Clear password error if valid

    if (password.length < 8) {
      setPasswordError('Password minimal 8 karakter.');
      return;
    }
    setPasswordError(''); // Clear password error if valid

    setLoading(true); // Set loading state to true

    setTimeout(() => {
      setLoading(false); // Set loading state to false after 2 seconds
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Login successful!');
    }, 2000);
  }

  return (
    <>
     <section className="login-card">

            <header className="login-header">
                <h1>Masuk</h1>
                <p>Silakan masuk untuk melanjutkan.</p>
            </header>

            <form className="login-form" onSubmit={handlelogin}>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                    className={usernameError ? 'error' : ''}
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Masukkan username"
                        
                        value = {username}
                        onChange={(e) => {setUsername(e.target.value); setUsernameError('')}}
                        
                    />
                    {usernameError && 
                          (<span className="error-message">{usernameError}</span>)}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Masukkan password"
                         value={password}
                        onChange={(e) => {
                          setPassword(e.target.value); 
                          setPasswordError('')}}/>
                       
                        {passwordError && 
                          (<span className="error-message">{passwordError}</span>)}
                </div>

                <div className="form-options">
                    <label>
                        <input type="checkbox" name="remember" id="remember"/>
                        Ingat saya
                    </label>

                    <a href="#">Lupa password?</a>
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>

            </form>

        </section>
    </>
  )
}

export default App
