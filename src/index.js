


const createQuoteSnippet = document.getElementById('#quote-snippet')
let quoteContainer = document.createElement('div')
let buttonListener = document.querySelector('.button')




// const quotesUl = document.getElementById('quote-list')
// const quotesForm = document.querySelector('#new-quote-form')
// const colorWordsH1 = document.querySelector('#h1')




// //original fetch to db.json
// fetch("http://localhost:3000/quotes")
// .then(res => res.json())
// .then((quotesArr) => {
//     // debugger;  
//     console.log(quotesArr)  
//     quotesArr.forEach((quote) => {
//         // turnQuotetoHTML(quote)
//     })// end of .forEach
// })// end of the second .then







//create a New Quote
// quotesForm.addEventListener("submit", (event) => {
//     event.preventDefault()
//     // console.log(event.target["author"].value)
//     // console.log(event.target["new-quote"].value)
//     let newAuthor = event.target["author"].value
//     let newQuote = event.target["new-quote"].value
//     fetch(`http://localhost:3000/quotes`, {
//       method:'POST',
//      headers: { 
//          'Content-type': 'application/json'
//      },
//      body: JSON.stringify({
//          "author": newAuthor,
//          "quote": newQuote
//       })
//     }).then((res) => res.json())
//     .then((helloQuote) => {
//         let quoteLi = document.createElement('li')
//         quoteLi.style.listStyle ='none'
//         quoteLi.id = `${helloQuote.id}`
//         quoteLi.innerHTML = `<blockquote>
//         <p>${helloQuote.quote}</p>
//         <footer>${helloQuote.author}</footer><br>
//         <button class='btn-danger'>Delete</button>
//         <div id="button-div"> 
//       <button class="update-button">Update  Quote</button>
//       </div>
//         </blockquote>`    
//         quotesUl.append(quoteLi)
//     })
// })//inside create new Quote
    


// function turnQuotetoHTML(quote){
//     let quoteLi = document.createElement('li')
//     quoteLi.style.listStyle ='none'
//     quoteLi.id = `${quote.id}`
//     quoteLi.innerHTML = `<blockquote>
//     <p>${quote.quote}</p>
//     <footer>${quote.author}</footer><br>
//     <button class='btn-danger'>Delete</button><br>
//     <button class="update-button">Update Quote</button>
  
//     </blockquote>`    
//     quotesUl.append(quoteLi)

//     //delete quote
//     let deleteButton = quoteLi.querySelector('.btn-danger')
//     deleteButton.addEventListener("click", () => {
//         console.log(quote, quoteLi)
//         fetch(`http://localhost:3000/quotes/${quote.id}`,{
//             method: "DELETE"
//         }) //end of fetch
//         .then((res) => res.json())
//         .then((byebyeQuote) => {
//             console.log(byebyeQuote)
//             quoteLi.remove()
//         })
//     })

// }//end of creating LIs 


//Update an existing Quote
    // let updateQuoteBtn = document.querySelector('.update-button')
    // updateQuoteBtn.addEventListener('click', 
    // ()=> { 
    //     console.log("clicking update")
    // let updateQuoteForm = document.createElement('form')
    //     updateQuoteForm.innerHTML = `
    //     <form id="update-quote-form">
    //     <div class="form-group">
    //       <label for="update-quote">Update My Colorful Quote</label>
    //       <input type="text" class="form-control" id="update-quote" placeholder="Color. Passion. Reason.">
    //     </div>
    //     <div class="form-group">
    //       <label for="Author">Author</label>
    //       <input type="text" class="form-control" id="author" placeholder="J. Speck">
    //     </div>
    //     <button type="submit" class="btn btn-primary">Submit</button>
    //     </form>`
    //   quoteLi.append(updateQuoteForm)
    //     updateQuoteForm.addEventListener("submit", (event) => {
    //         event.preventDefault()
    //         console.log("clicking update")
    //         // console.log(event.target["author"].value)
    //         // console.log(event.target["update-quote"].value)
    //         // console.log(event.target["id"].value)
    //         // let quoteUpdate = event.target["quote"].value
    //         // let authorUpdate = event.target["author"].value
    //         // let quoteId = event.target["id"].value
    
    //         fetch(`http://localhost:3000/quotes`, {
    //             method:'PATCH',
    //             headers: { 
    //                 'Content-type': 'application/json'
    
    //             },
    //             body: JSON.stringify({
    //                 "id": quoteId,
    //                 "quote": quoteUpdate,
    //                 "author": authorUpdate
    //             })
    //         })
    //         .then((res) => res.json)
    //         .then((updatedQuote) => {
    //             console.log(updatedQuote)
    //         })
    //     }) //inside click Update Quote Event 
    // })


