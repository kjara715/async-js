
$data=$('#data')
// Part 1: Number Facts
// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.
let fav_number=2
// axios.get(`http://numbersapi.com/${fav_number}/trivia?json`)
// .then(res => {
//     console.log(res.data.number, res.data.text);
//   })
// .catch(err => console.log(err))

// // Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
// //To get facts about multiple numbers in one request, specify ranges for number in http://numbersapi.com/number/type.

// res=axios.get("http://numbersapi.com/1..20?json")
// .then(res => {
//     console.log(res)
//     console.log(res.data)
//     for(let property in res.data){
//         console.log(`${property}: ${res.data[property]}`)
//         $data.append("<p>").append(`${property}: ${res.data[property]}`)
//     }

    
// })
// .cath(err => console.log(err))
// console.log(res)
// Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

// (Note: You’ll need to make multiple requests for this.)
fourNumberPromises=[];

for(let i=0; i<4; i++){
    console.log("hi")
    res = axios.get(`http://numbersapi.com/${fav_number}/trivia?json`)
    console.log(res)
    fourNumberPromises.push(
        axios.get(`http://numbersapi.com/${fav_number}/trivia?json`)
    )
}

// console.log(num.data.text)

Promise.all(fourNumberPromises)
  .then(numArr => (
    numArr.forEach(num =>  $data.append("<p>").append(num.data.text))
  ))
  .catch(err => console.log(err));
