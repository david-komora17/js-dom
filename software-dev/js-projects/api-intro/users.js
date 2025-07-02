// GET - 
// POST 
// PUT/PATCH -edit
// DELETE

async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        // console.log(response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();
        console.log('Users:', users);
    } catch (error) {
        console.log('Failed to fetch:', error.message)
    } 
}

fetchUsers();