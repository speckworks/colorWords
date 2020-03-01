
// const createQuoteSnippet = document.getElementById('#quote-snippet')
let buttonListener = document.querySelector('.button')

buttonListener.addEventListener('click',  //initial userquote generation eventlistener
(event) => {
    console.log(event.target)
    let userNameEntered = document.querySelector('#new-user').value
    let categoryPressed = event.target.innerText.toLowerCase()
    
    if (userNameEntered !== '') {
        
        //original fetch to rails quotes db, returning json object with quote 
        fetch("https://colorwords-backend.herokuapp.com/quotes")
        .then(res => res.json())
        .then((quotesArr) =>{
            // console.log(quotesArr)
            //create initial Userquote
            let quoteObj = quotesArr.filter(quote => (quote.category == `${categoryPressed}`
            ))
            let quoteDiv = document.querySelector('#quote-div')
            let innerQuoteDiv = document.createElement('li')
            let userNameContainer = document.createElement('h3')
            let quoteCategory = document.createElement('h4')
            let quoteContainer = document.createElement('h5')
            innerQuoteDiv.className = "quote-div"
            userNameContainer.className = "card"
            quoteCategory.className = "card"
            innerQuoteDiv.style.borderRadius = "25px";
            quoteDiv.style.borderRadius = "15px"
            quoteDiv.appendChild(innerQuoteDiv)
            innerQuoteDiv.appendChild(userNameContainer)
            innerQuoteDiv.appendChild(quoteCategory)
            innerQuoteDiv.appendChild(quoteContainer)
            userNameContainer.innerText = "User:" + " " + userNameEntered 
            quoteCategory.innerText = "Category:"+categoryPressed + " "
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            quoteContainer.innerText = quoteObj[getRandomInt(7)].text + " "+"-"+ quoteObj[getRandomInt(7)].author 
            console.log("rand", getRandomInt(7));
            
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
            reverseTextButton.className = "btn"
            reverseTextButton.addEventListener("click", function(event){
                reverseTextFunction(quoteContainer,quoteObj)
        })

            
            // this fetch will persist userquote to database delete userquotes is also here
            let userQuoteId = quoteObj.id
            fetch(`https://colorwords-backend.herokuapp.com/userquotes`, {
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
                let quoteObjUpdater = quotesArr[Math.floor(Math.random() * quotesArr.length)];
                quoteContainer.innerText = quoteObjUpdater.text + " "+"-"+ quoteObjUpdater.author
                let idUpdate = quoteObjUpdater.id
                console.log(quoteObjUpdater.id)
                let userQuoteId = innerQuoteDiv.id
                // debugger;
                    fetch(`https://colorwords-backend.herokuapp.com/userquotes/${userQuoteId}`, {
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
    return fetch(`https://colorwords-backend.herokuapp.com/userquotes${removeQuoteId}`, {
        method: "delete"
    })
    .then(() => {
        let divForRemoval = document.getElementById(removeQuoteId)
        divForRemoval.remove()  
    }) // inside delete fetch
}//inside makeDelete Callback



function reverseTextFunction (quoteContainer, quoteObj){
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















