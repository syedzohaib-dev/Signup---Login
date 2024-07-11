var signupForm = document.querySelector('#submitForm').addEventListener('submit', function (event) {
    event.preventDefault()

    const username = document.querySelector('#username').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const confirmpassword = document.querySelector('#confirmpassword').value


    if (!username || !email || !password || !confirmpassword) {
        Swal.fire("All Field Are Required");
        // alert('iefsklxnlk')
        return
    }
    if (password.length < 8) {
        Swal.fire("Password Must 8 Character");
        return
    }

    if (password != confirmpassword) {
        Swal.fire("Password Dont Match");
        return
    }

    const users = JSON.parse(localStorage.getItem('users')) || []

    users.push({ username, email, password, confirmpassword })

    localStorage.setItem('users', JSON.stringify(users))

    Swal.fire("You signup Successfully");

    setTimeout(() => {
        window.location.href = 'login.html'

    }, 1000)
})
