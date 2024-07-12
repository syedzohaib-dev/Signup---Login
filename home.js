const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (!loggedInUser) {
    Swal.fire("No user is logged in");
    setTimeout(() => {
        window.location.href = 'login.html'
    }, 1000)

} else {
    if (!loggedInUser.posts) {
        loggedInUser.posts = []
    }

    document.getElementById('username').textContent = loggedInUser.username
}


document.getElementById('logoutButton').addEventListener('click', function () {
    localStorage.removeItem('loggedInUser');
    Swal.fire('Logged out successfully');

    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1000);
});

// ---------------------------------------------------------------------------------------------------------------

function displayPosts() {
    const postsSection = document.getElementById('posts')
    postsSection.innerHTML = ""

    if (loggedInUser && loggedInUser.posts) {
        loggedInUser.posts.forEach((post, index) => {
            const postElement = document.createElement('div')
            postElement.classList.add('card')
            postElement.innerHTML = `
            
            <div class="auther">Creater by.. <span>${post.author}</span></div>

            <div class="cardPara">
                <p>${post.content}</p>
            </div>
            <div class="btnGroup">
                <button type="button" class="edit" onclick="editPost(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
                <button type="button" class="delete" onclick="deletePost(${index})"><i class="fa-solid fa-trash"></i></button>
            </div>
            <div class="dateStamp">${post.createdAt}</div>
            `
            postsSection.appendChild(postElement)

        })
    }
}

document.getElementById("cardSubmit")?.addEventListener('click', function () {
    const content = document.getElementById("cardInput").value.trim()
    if (!content) {
        Swal.fire("plz enter some content")
        return
    }

    setTimeout(() => {
        const post = {
            author: loggedInUser.username,
            content: content,
            createdAt: new Date().toLocaleString()

        }

        loggedInUser.posts.unshift(post)
        // console.log(loggedInUser.post.unshift(post))
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))

        document.getElementById('cardInput').value = ""
        displayPosts()



    }, 1000)
})

function editPost(index) {
    const newContent = prompt(
        "Edit Yout Post",
        loggedInUser.posts[index].content
    )
    if (newContent !== null) {
        loggedInUser.posts[index].content = newContent
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
        displayPosts()
    }
}

function deletePost(index) {
    if (Swal.fire("Are you sure you want to delete your post")) {
        loggedInUser.posts.splice(index, 1)
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
        displayPosts()
    }
}

if (document.getElementById("homePage")) {
    // document.getElementById("homePage").classList.remove("hidden");
    document.getElementById("usernameDisplay").textContent = currentUser.username;
    displayPosts();
}



// const cardInput = document.getElementById('cardInput');
// const cardSubmit = document.getElementById('cardSubmit');
// const cardBox = document.querySelector('.cardBox')


// cardSubmit.addEventListener('click', function () {
//     console.log('button chala');
//     const cardInputValue = cardInput.value;



//     if (!cardInputValue) {
//         Swal.fire("PLz fill out this field")
//     } else {

//         const cards = JSON.parse(localStorage.getItem('cards')) || []
//         cards.push({ cardInputValue })
//         localStorage.setItem('cards', JSON.stringify(cards))





//         JSON.parse(localStorage.getItem('cards'))
//         // console.log(showCard[0])
//         const cardBoxy = document.createElement('div');
//         cardBoxy.classList.add('card');
//         const cardDiv = `
//                 <div class="cardPara">
//                     <p>${cards}</p>
//                 </div>
//                 <div class="auther">Created by.. <span class="createUser">${loggedInUser.username}</span></div>`;
//         cardBoxy.innerHTML = cardDiv;

//         cardBox.appendChild(cardBoxy);

//     }


// });
























