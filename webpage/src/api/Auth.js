export async function loginRequest(username, password) {
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
        
    });
    console.log(response.status);
    const data = await response.json()
    
    if (!response.ok) {
        throw data;
    }
    return data;
}
