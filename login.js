const loginFrom = document.querySelector('#loginFrom').addEventListener('submit', function (event) {
    event.preventDefault()

    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    if (!username || !password) {
        Swal.fire("All Field Are Required");
        return
    }

    const users = JSON.parse(localStorage.getItem('users') || [])

    const user = users.find(u => u.username === username && u.password === password)

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user))
        Swal.fire('Login Successfull')


        setTimeout(() => {
            window.location.href = "home.html"
        }, 1000)
    } else {
        Swal.fire("Invalid Username And Password")
    }


})
