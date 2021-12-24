const container = document.querySelector(".container")
const checkbox = document.getElementById("checkid")
const titleInput = document.getElementById("bookid")
const authorInput = document.getElementById("authorid")
const pagesInput = document.getElementById("pagesid")
// const tbody = document.querySelector('tbody')
// const del = document.createElement('button')
// del.textContent = "delete"
// // titleInput.addEventListener('click',()=>{
// //     console.log("checked")
// // })
const submitbtn = document.getElementById('submit')

function getread() {
    if (checkbox.checked == true)
        return "Read"
    else return "Unread"
}
function resetForm() {
    titleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""
}
// }
// function changeStatus(bk)
// {
//     if(bk.read=== true) return bk.read= false
//     else bk.read = true;

// }
// function addBookToList(mag)
// {

//    let readstatus 
//    if(mag.read== true) readstatus = "Read"
//    else readstatus = "Unread"

//    const row = document.createElement('tr')
//    row.innerHTML = `
//    <td>${mag.title}</td>
//    <td>${mag.author}</td>
//    <td>${mag.pages}</td>

//    <td id="readstatus">${readstatus}</td> 
//    <td> <button id = changebtn> Change Read status </button> </td>
//    <td> <button class="delete" id = deletebtn> Delete </button> </td>
//    <td> <button id = editbtn> Edit</button> </td>`




//    tbody.appendChild(row)
//    const dlt=document.querySelector('.delete')
//    const change = document.getElementById('changebtn')
//    const status = document.getElementById('readstatus')


//   change.addEventListener('click',()=>{
//     readstatus= changeStatus(mag)
//     if(readstatus== true) readstatus = "Read"
//     else readstatus = "Unread"

//     status.textContent = readstatus

//   })

// }
// function UI()
// {
//  const books = myLibrary
//  addBookToList(books[myLibrary.length-1]) 
// }

submitbtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (titleInput.value === '' || pagesInput.value === '' || authorInput.value === '') {
        alert("what da faq u want mf??")
        return
    }

    createCard()
    addBookToLibrary()


    console.log(myLibrary.length)
})
let myLibrary = [
    {
        title: "harry potter",
        author: "J.K Rowling",
        pages: 300,
        read: false

    }
]

function book(title, author, pages, read) {

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

}
function addBookToLibrary() {

    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = getread();
    let newBook = new book(title, author, pages, read)

    myLibrary.push(newBook)
    // console.log(newBook)
    resetForm()

}

function createCard() {

    //create the card to container
    const carddiv = document.createElement("div")
    carddiv.classList.add("card")
    //add card to the container
    container.appendChild(carddiv)
    //create divs and add book details 
    const authordiv = document.createElement("div")
    const booknamediv = document.createElement("div")
    const pagesdiv = document.createElement("div")
    const readdiv = document.createElement("div")

    booknamediv.textContent = `Book:${titleInput.value}`
    authordiv.textContent = `Author: ${authorInput.value}`
    pagesdiv.textContent = `Page : ${pagesInput.value}`
    readdiv.textContent = getread()
    carddiv.appendChild(authordiv)
    carddiv.appendChild(booknamediv)
    carddiv.appendChild(pagesdiv)
    carddiv.appendChild(readdiv)
    // adding buttons to card       
    const readbtn = document.createElement("button")
    const removebtn = document.createElement("button")

    removebtn.textContent = "REMOVE"
    readbtn.textContent = "READ"
    carddiv.appendChild(readbtn).classList.add("button")
    carddiv.appendChild(removebtn).classList.add("button")
    readbtn.addEventListener('click',()=>{
        if(readdiv.textContent==='Read') {
            readdiv.textContent='Unread'
            readbtn.textContent='Unread'
            readbtn.style.backgroundColor = 'red'
        }
        else{
            readdiv.textContent='Read'
            readbtn.textContent='Read'
            readbtn.style.backgroundColor = 'green'
        }
    })
    removebtn.addEventListener('click',()=>{
        container.removeChild(carddiv)
        for(let i=0;i<myLibrary.length;i++)
        {
            if(myLibrary[i].title === booknamediv.textContent && myLibrary[i].author === authordiv.textContent && myLibrary[i].pages === pagesdiv.textContent)
            {
                myLibrary.splice(i,1)
            }
        }  
    })

    //   removebtn.addEventListener('click',)    
}
