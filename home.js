// const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

// if (!loggedInUser) {
//     Swal.fire("No user is logged in");
//     setTimeout(() => {
//         window.location.href = 'login.html'
//     }, 1000)

// } else {
//     document.getElementById('username').textContent = loggedInUser.username
// }

// document.getElementById('logoutButton').addEventListener('click', function () {
//     localStorage.removeItem('loggedInUser')
//     Swal.fire('Logged out successfully')

//     setTimeout(() => {
//         window.location.href = 'login.html'
//     }, 1000)



// })
// // const cardBox = document.getElementsByClassName('cardBox')
// const cardInput = document.getElementById('cardInput')
// const cardSubmit = document.getElementById('cardSubmit')

// // cardInput.textContent = ""



// cardSubmit.addEventListener('click', function () {

//     console.log('button chala')
//     const cardInputValue = cardInput.value

//     localStorage.setItem('inputkivalue', cardInputValue)

//     const cardBoxy = document.createElement('div')
//     cardBoxy.classList.add('cardBox')
//     // alert(inputValue)
//     const cradDiv = `<div class="card">
//             <div class="cardPara">
//                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, deserunt?</p>
//             </div>
//             <div class="auther">Creater by.. <span id="createUser"></span></div>
//         </div>`
//     cardBoxy.innerHTML = cradDiv
//     // const cardDiv = document.createElement('div')
//     // cardDiv.classList.add('card')
//     // // cardDiv.style.border = '1px solid black'
//     // // const cardPara = document.createElement(div)
//     // // localStorage.getItem('inputkivalue', cardInputValue)
//     document.getElementById('createUser').textContent = loggedInUser.username

//     // const cardData = ` <div class="cardPara">
//     //             <p id="inputUser"></p>
//     //         </div>
//     //         <div class="auther">Creater by.. <span id="createUser"></span></div>`

//     // cardDiv.innerHTML = cardData


//     document.body.appendChild(cardBoxy)


// })


const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (!loggedInUser) {
    Swal.fire("No user is logged in");
    setTimeout(() => {
        window.location.href = 'login.html'
    }, 1000)

} else {
    document.getElementById('username').textContent = loggedInUser.username
}


document.getElementById('logoutButton').addEventListener('click', function () {
    localStorage.removeItem('loggedInUser');
    Swal.fire('Logged out successfully');

    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1000);
});

const cardInput = document.getElementById('cardInput');
const cardSubmit = document.getElementById('cardSubmit');
const cardBox = document.querySelector('.cardBox')


cardSubmit.addEventListener('click', function () {
    console.log('button chala');
    const cardInputValue = cardInput.value;



    if (!cardInputValue) {
        Swal.fire("PLz fill out this field")
    } else {

        const cards = JSON.parse(localStorage.getItem('cards')) || []
        cards.push({ cardInputValue })
        localStorage.setItem('cards', JSON.stringify(cards))



        // localStorage.setItem('inputkivalue', cardInputValue);
        const showCard = JSON.parse(localStorage.getItem('cards'))
        const cardBoxy = document.createElement('div');
        cardBoxy.classList.add('card');
        const cardDiv = `
                <div class="cardPara">
                    <p>${showCard}</p>
                </div>
                <div class="auther">Created by.. <span class="createUser">${loggedInUser.username}</span></div>`;
        cardBoxy.innerHTML = cardDiv;

        cardBox.appendChild(cardBoxy);

    }


});
























