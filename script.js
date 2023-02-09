
//404 - Not Found - status code
//200 - ok - status code

//------Read data

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         return response.json()
//     })
//     //can write single line code
//     .then((data) => console.log(data))

//     .catch((error) => {
//         console.log(error)

//         // document.write("can't Fetch data");
//     });


//-------print data on document

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);

//         for (var x in data) {
//             document.write(`${data[x].username} - ${data[x].email}<br>`);
//         }
//     })
//     .catch((error) => {
//         console.log(error)
//     });

// Insert,Update,Delete server data -> Method : "post" , Method : "put" , Method : "delete"
//body : Form, JSON, Text
//header : 'Content-Type': 'application/json   or   application/x-www-form-urlencoded


//------Insert data

// var obj = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// };

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify(obj),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));


//------Insert Form data
// document.getElementById("saveForm").addEventListener("click", function (e) {
//     e.preventDefault(); //for not refreshing the page after submitting the form.


//     var obj = {
//         title: document.getElementById("titleText").value,
//         body: document.getElementById("bodyText").value,
//         userId: document.getElementById("userid").value,
//     };

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(obj),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
// })

//short hand for form data


document.getElementById("saveForm").addEventListener("click", function (e) {
    e.preventDefault(); //for not refreshing the page after submitting the form.

    //use formData() method and chnage body value
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: new FormData(document.getElementById("myForm")),
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
})