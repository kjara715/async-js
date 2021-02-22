
$data=$('#data')
// Part 1: Number Facts
// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.

let fav_number=2
async function getFaveNumber(){
    try {
        res = await axios.get(`http://numbersapi.com/${fav_number}/trivia?json`)
        console.log(res.data.text)
    } catch (e) {
        console.log("YOU GOT AN ERROR", e)
    }
    
}


// Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
// To get facts about multiple numbers in one request, specify ranges for number in http://numbersapi.com/number/type.


async function get10NumberFacts(){
    try{
        res= await axios.get("http://numbersapi.com/1..10?json")
        console.log(res.data)
        for(let property in res.data){
            $data.append("<p>").append(`${res.data[property]}`)
        }

    } catch (e) {
        console.log("ERROR:", e)
    }
    
}



// Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

// (Note: You’ll need to make multiple requests for this.)

$facts=$(".facts")

async function get4facts() {
    let fact1promise=axios.get(`http://numbersapi.com/${fav_number}/trivia?json`)
    let fact2promise=axios.get(`http://numbersapi.com/${fav_number}/trivia?json`)
    let fact3promise=axios.get(`http://numbersapi.com/${fav_number}/trivia?json`)
    let fact4promise=axios.get(`http://numbersapi.com/${fav_number}/trivia?json`)

    let fact1= await fact1promise;
    let fact2= await fact2promise;
    let fact3= await fact3promise;
    let fact4= await fact4promise;
   
    let factsArray=[fact1.data.text, fact2.data.text, fact3.data.text, fact4.data.text]
    for(let fact of factsArray){
        $facts.append("<p>").append(fact)
    }

}

// for(let i=0; i<4; i++){
//     console.log("hi")
//     res = axios.get(`http://numbersapi.com/${fav_number}/trivia?json`)
//     console.log(res)
//     fourNumberPromises.push(
//         axios.get(`http://numbersapi.com/${fav_number}/trivia?json`)
//     )
// }


// Promise.all(fourNumberPromises)
//   .then(numArr => (
//     numArr.forEach(num =>  $data.append("<p>").append(num.data.text))
//   ))
//   .catch(err => console.log(err));