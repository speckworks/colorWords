
const createQuoteSnippet = document.getElementById('#quote-snippet')
let buttonListener = document.querySelector('.button')
let quoteDiv = document.querySelector('#quote-div')


buttonListener.addEventListener('click',  //initial userquote generation eventlistener
(event) => {

    let userNameEntered = document.querySelector('#new-user').value

    if (userNameEntered !== '') {

            //original fetch to rails quotes db, returning json object with quote 
            fetch("http://localhost:3000/quotes")
            .then(res => res.json())
            .then((quotesArr) =>{
            //create initial Userquote
            let randomQuoteObj = quotesArr[Math.floor(Math.random() * quotesArr.length)];
            let userNameContainer = document.createElement('h3')
            let quoteContainer = document.createElement('span')
            let innerQuoteDiv = document.createElement('div')
            innerQuoteDiv.style.borderRadius = "25px";
            // quoteDiv.style.backgroundColor = "turquoise"
            quoteDiv.style.borderRadius = "15px"
            // quoteContainer.style.backgroundColor = "coral"
            quoteDiv.appendChild(innerQuoteDiv)
            innerQuoteDiv.appendChild(userNameContainer)
            innerQuoteDiv.appendChild(quoteContainer)
            userNameContainer.innerText = userNameEntered
            quoteContainer.innerText = randomQuoteObj.text + " "+"-"+ randomQuoteObj.author 
            quoteContainer.textAlign = "center"

            //create delete button on userQuote
            let deleteButton = document.createElement('button')
            deleteButton.setAttribute('class', 'btn');
            deleteButton.innerHTML = 'delete';
            innerQuoteDiv.appendChild(deleteButton)

            //reverse text button
            let reverseTextButton = document.createElement('button')
            innerQuoteDiv.appendChild(reverseTextButton)
            reverseTextButton.innerText = "Reverse"
            reverseTextButton.addEventListener("click", function(event){
                reverseTextFunction(quoteContainer,randomQuoteObj)
        })

            
            // this fetch will persist userquote to database delete userquotes is also here
            let userQuoteId = randomQuoteObj.id
            fetch(`http://localhost:3000/userquotes`, {
                method:'POST',
                headers: { 
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    "username":userNameEntered,
                    "quote_id":userQuoteId
                })
            }).then((resp) => resp.json())
            .then((respObj) => {
                // console.log(respObj)
                // console.log(
                //     quotesArr[(respObj.quote_id)-1].text
                // )

                //delete userQuote from the database with callback "makeDeleteFetch" Function
                innerQuoteDiv.setAttribute('id',respObj.id)
                deleteButton.setAttribute('id',respObj.id)
                // debugger;

                //this is the eventListener to Remove a userQuote from the database
                deleteButton.addEventListener('click', (event) => {
                makeDeleteFetch(event)
            
                })//inside remove quote delete event listener
            })//inside 2nd then of respObj after post to userquotes


            //update UserQuote
            let updateQuoteBtn = document.createElement('button')
            updateQuoteBtn.setAttribute('class','btn');
            updateQuoteBtn.innerHTML = 'update';
            innerQuoteDiv.appendChild(updateQuoteBtn)
            //update UserQuote EventListener
            updateQuoteBtn.addEventListener('click', 
            ()=> { 
                let randomQuoteObjUpdater = quotesArr[Math.floor(Math.random() * quotesArr.length)];
                quoteContainer.innerText = randomQuoteObjUpdater.text + " "+"-"+ randomQuoteObjUpdater.author
                let idUpdate = randomQuoteObjUpdater.id
                console.log(randomQuoteObjUpdater.id)
                let userQuoteId = innerQuoteDiv.id
                // debugger;
                    fetch(`http://localhost:3000/userquotes/${userQuoteId}`, {
                        method:'PATCH',
                        headers: { 
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            "id":userQuoteId,
                            "quote_id": idUpdate,
                            "username": userNameEntered
                        })
                    })
                    .then((res) => res.json())
                    .then((updatedQuote) => {
                        // console.log(updatedQuote)
                    })
            }) //inside eventListener on click to Update userQuote
            
            


        })//inside 2nd .then from initial fetch post
    } //inside if statement for username validation
    else{usernameValidationAlert()}


    
})//inside initial userquote generation eventListener


function usernameValidationAlert(){
     alert("Please enter a valid username.")
}

//this makeDeleteFetch function deletes userQuote from Database And removes div from front end
function makeDeleteFetch(){
    // debugger;
    // console.log(event.target)
    let removeQuoteId = event.target.id
    return fetch(`http://localhost:3000/userquotes/${removeQuoteId}`, {
        method: "delete"
    })
    .then(() => {
        let divForRemoval = document.getElementById(removeQuoteId)
        divForRemoval.remove()  
    }) // inside delete fetch
}//inside makeDelete Callback



function reverseTextFunction (quoteContainer, randomQuoteObj){
    let str = quoteContainer.innerText
    // debugger;
    function reverseString(){
      return str.split("").reverse().join("")
    //   debugger;
    }
    // console.log(reverseString())
    quoteContainer.innerText = reverseString()
    // console.log("inside the reverse function")
}















