export async function testRequest() {
    const response = await fetch('http://localhost:3000/hello');
    return response.json();
}