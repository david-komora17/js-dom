async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        // console.log(response.status);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
        const ul = document.getElementById("userList");
        ul.innerHTML = `<li style="color:red; ">Error: ${error.message}</li>`;
    }
}

function displayUsers(users) {
    const ul = document.getElementById("userList");
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.title} - ${user.body}`;
       
        ul.appendChild(li);
    })
};

fetchUsers();