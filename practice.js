

//Task - 1
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
// .then(data => console.log(data))



//Task-2

const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => displayComments(data))
}

const displayComments = comment => {
    // console.log(comment);

    const commen = document.getElementById('comment')
    for (const comments of comment) {
        console.log(comments)
        const p = document.createElement('p');
        p.style.color = 'green'
        p.style.border = '2px solid tomato'



        p.style.textAlign = "center"
        p.innerHTML = `
        <h3>Post Id: ${comments.postId}</h3>
        <h2>Name: ${comments.name}</h2>`
        commen.appendChild(p);
    }
}

//Task-3

const loadCommentsData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayCommentsProparty(data))
}

loadCommentsData();

const displayCommentsProparty = data => { // (Task-4 = Arrow Function)
    const comment = document.getElementById('comment');
    data.forEach(comments => { //(Task-4 =  forEach loop )

        // console.log(comments)
        const p = document.createElement('p');
        p.innerHTML =
            `Email: <h3>${comments.email}</h3>
        Body: <p>${comments.body}</p>`
        comment.appendChild(p);

    })
}

// Task-5 //Uncomplete
const loadCommentsId = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => displayCommentsId(data))
}



const displayCommentsId = data => {
    // console.log(data)
    const url = `https://jsonplaceholder.typicode.com/${data}`
    // console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => displayCommentsByIdDetail(data))
    // p.innerHTML = 
    // `<></>`

}

const displayCommentsByIdDetail = info => {
    console.log(info)
    const comment = document.getElementById('comment');
    info.forEach(commentsId => {
        const p = document.createElement('p');

    })
}

// Task - 6

const loadRandomUser = () => {

    // load data
    fetch('https://randomuser.me/api/')
        .then(rse => rse.json())
        // .then(data => console.log(data))
        .then(data => displayLoadUser(data))
}



const displayLoadUser = info => {
    console.log(info)
    const comment = document.getElementById('comment');



    const div = document.createElement('div');

    div.innerHTML = ` <img src="${info.results[0].picture.medium}">
        <h4>City: ${info.results[0].location.city}</h4>
        <h4>Location : ${info.results[0].location.street.number},  ${info.results[0].location.street.name}</h4> 
        <h4>Coordinates : ${info.results[0].location.coordinates.latitude},  ${info.results[0].location.coordinates.longitude}</h4>
        <h4>TimeZone: ${info.results[0].location.timezone.description},
        ${info.results[0].location.timezone.offset} </h4>

        `

    comment.appendChild(div)

}







