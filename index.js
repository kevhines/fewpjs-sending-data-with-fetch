// // Add your code here
// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
  
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     }); 


function appendDOM(message) {

const body = document.querySelector("body")
const newElement = document.createElement("P")
newElement.innerHTML = message
body.append(newElement)
// console.log(newElement.innerHTML)
// console.log(newElement.innerText)


}


function submitData (name, email) {

let formData = {
    name: name,
    email: email
  };
  
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return    fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
      appendDOM(object.id);
    }) 
    .catch(function(error) {
        console.log(error.message);
        appendDOM(error.message);
      }); 
}

submitData("Kevin", "kevin@email.com");