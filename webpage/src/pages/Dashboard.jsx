import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {useEffect} from 'react';
import {isLoggedIn, login, logout, getUsername } from '../utils/Auth.js';
import {testRequest} from '../api/test.js';

function Dashboard() {
    const username = getUsername(); // Retrieve username using the getUsername function
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadData() {
            const data = await testRequest();
            console.log(data);
        }
        loadData();
    }, []);

    function handleLogout() {
        setLoading(true);
        setTimeout(() => {
            logout(); // Call the logout function to clear login state
            setLoading(false);
            navigate('/'); // Navigate to the login page
        }, 1000);
    }        
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <p>Selamat datang di dashboard {username}!</p>
            <button onClick={handleLogout} disabled={loading}>
                {loading ? 'Logging out...' : 'Logout'}
            </button>
        </div>
    );
}
export default Dashboard