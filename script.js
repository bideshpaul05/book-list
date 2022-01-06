// const tbody = document.querySelector('tbody')
// const del = document.createElement('button')
// del.textContent = "delete"
// // titleInput.addEventListener('click',()=>{
// //     console.log("checked")
// // })

function getread() {
    if (checkbox.checked == true)
        return "Read"
    else return "Unread"
}
// function resetForm() {
//     titleInput.value = ""
//     authorInput.value = ""
//     pagesInput.value = ""
// }
// // }
// // function changeStatus(bk)
// // {
// //     if(bk.read=== true) return bk.read= false
// //     else bk.read = true;

// // }
// // function addBookToList(mag)
// // {

// //    let readstatus 
// //    if(mag.read== true) readstatus = "Read"
// //    else readstatus = "Unread"

// //    const row = document.createElement('tr')
// //    row.innerHTML = `
// //    <td>${mag.title}</td>
// //    <td>${mag.author}</td>
// //    <td>${mag.pages}</td>

// //    <td id="readstatus">${readstatus}</td> 
// //    <td> <button id = changebtn> Change Read status </button> </td>
// //    <td> <button class="delete" id = deletebtn> Delete </button> </td>
// //    <td> <button id = editbtn> Edit</button> </td>`




// //    tbody.appendChild(row)
// //    const dlt=document.querySelector('.delete')
// //    const change = document.getElementById('changebtn')
// //    const status = document.getElementById('readstatus')


// //   change.addEventListener('click',()=>{
// //     readstatus= changeStatus(mag)
// //     if(readstatus== true) readstatus = "Read"
// //     else readstatus = "Unread"

// //     status.textContent = readstatus

// //   })

// // }
// // function UI()
// // {
// //  const books = myLibrary
// //  addBookToList(books[myLibrary.length-1]) 
// // }

// submitbtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     if (titleInput.value === '' || pagesInput.value === '' || authorInput.value === '') {
//         alert("Try again after filling all the sections of form correctly :)")
//         return
//     }

//     createCard()
//     addBookToLibrary()


//     console.log(myLibrary.length)
// })
// let myLibrary = [
//     {
//         title: "harry potter",
//         author: "J.K Rowling",
//         pages: 300,
//         read: false

//     }
// ]

// function book(title, author, pages, read) {

//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read

// }
// function addBookToLibrary() {

//     let title = titleInput.value;
//     let author = authorInput.value;
//     let pages = pagesInput.value;
//     let read = getread();
//     let newBook = new book(title, author, pages, read)

//     myLibrary.push(newBook)
//     // console.log(newBook)
//     resetForm()

// }

// function createCard() {

//     //create the card to container
    //     readbtn.addEventListener('click',()=>{
//         if(readdiv.textContent==='Read') {
//             readdiv.textContent='Unread'
//             readbtn.textContent='Unread'
//             readbtn.style.backgroundColor = 'red'
//         }
//         else{
//             readdiv.textContent='Read'
//             readbtn.textContent='Read'
//             readbtn.style.backgroundColor = 'green'
//         }
//     })
//     removebtn.addEventListener('click',()=>{
//         container.removeChild(carddiv)
//         for(let i=0;i<myLibrary.length;i++)
//         {
//             if(myLibrary[i].title === booknamediv.textContent && myLibrary[i].author === authordiv.textContent && myLibrary[i].pages === pagesdiv.textContent)
//             {
//                 myLibrary.splice(i,1)
//             }
//         }  
//     })

//     //   removebtn.addEventListener('click',)    
// }
const container = document.querySelector(".container")
const checkbox = document.getElementById("checkid")
const titleInput = document.getElementById("bookid")
const authorInput = document.getElementById("authorid")
const pagesInput = document.getElementById("pagesid")
const submitbtn = document.getElementById('submit')

class book {
    constructor(bookname,author,pages,check)
    {
        this.bookname = bookname
        this.author = author
        this.pages = pages
        this.check = check
    }
}
    //take the input from the form
    
    //push the input to array 
    //save it to localstorage
    //get items from array
    //creatediv
class UI{
    static displayBooks(){
        const myLibrary = store.getbook()
            
        
        const books = myLibrary
        books.forEach((book)=>UI.addBookToList(book))

    }
    static addBookToList(mag){
        const carddiv = document.createElement("div")
        carddiv.classList.add("card")
        //add card to the container
        container.appendChild(carddiv)
        //create divs and add book details 
        const authordiv = document.createElement("div")
        const booknamediv = document.createElement("div")
        const pagesdiv = document.createElement("div")
        const readdiv = document.createElement("div")
        booknamediv.textContent = mag.bookname
        authordiv.textContent = mag.author
        pagesdiv.textContent = mag.pages
        readdiv.textContent = mag.check
        carddiv.appendChild(booknamediv).classList.add('booknamediv')
        carddiv.appendChild(authordiv).classList.add('authordiv')
        carddiv.appendChild(pagesdiv).classList.add('pagesdiv')
        carddiv.appendChild(readdiv).classList.add('read-div')
        // adding buttons to card       
        const readbtn = document.createElement("button")
        readbtn.classList.add('readbtn')

        const removebtn = document.createElement("button")
        removebtn.classList.add('removebtn')

        removebtn.textContent = "REMOVE"
        readbtn.textContent = "READ"
        carddiv.appendChild(readbtn).classList.add("button")
        carddiv.appendChild(removebtn).classList.add("button")
        removebtn.classList.add('delete')
        readbtn.classList.add('read')

         
    }
    static read(element){
        if(element.classList.contains('read'))
        {
            if(element.textContent==='READ')
            {
                element.textContent = 'UNREAD'
                element.style.backgroundColor = 'red'
                document.querySelector('.read-div').textContent = 'Unread'

            }
            else{
                element.textContent='READ'
                element.style.backgroundColor = 'green'
                document.querySelector('.read-div').textContent = 'Read'


            }
        }
    }
    static delete(element,t,a,p){
        if(element.classList.contains('delete')){
            
            element.parentElement.remove()
            store.removebook(t,a,p)
            
        }

    }
    static clearfield()
    {
        titleInput.value = ''
        authorInput.value = ''
        pagesInput.value = ''


    }



}
class store{
    static getbook(){
        let books
        if(localStorage.getItem('books')=== null)
        {
            books = []
        }
        else{
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books;
    }

    static setbook(book){
        const books = store.getbook()
        books.push(book)
        localStorage.setItem('books',JSON.stringify(books))
    }
    static removebook(tle,athr,pg){
        const books = store.getbook()
        
        for(let i=0;i<books.length;i++){
        if(JSON.parse(localStorage.getItem('books'))[i].bookname == tle && JSON.parse(localStorage.getItem('books'))[i].author == athr && JSON.parse(localStorage.getItem('books'))[i].pages == pg)
        {
            // localStorage.getItem('books')[i]
            // JSON.parse(localStorage.getItem('books')).splice(i,1)
            // JSON.parse(localStorage.getItem('books')).splice(i,1)
            
                books.splice(i,1)
                localStorage.setItem('books',JSON.stringify(books))

        } 

    }
}
}
document.addEventListener('DOMContentLoaded',UI.displayBooks())
submitbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const title = titleInput.value
    const author = authorInput.value
    const pages = pagesInput.value
    const check = getread()
    if(title==='' || author === '' || pages==='')
    {
        alert('please correctly fill all the sections of the form and try again :)')
        return
    }
    const bookie = new book(title,author,pages,check) 
    UI.addBookToList(bookie)
    store.setbook(bookie)
    // console.log(bookie)
    UI.clearfield()
})
// document.querySelector('.removebtn').addEventListener('click',(e)=>{
//     // const carddiv = document.querySelector('.card')
//     // e.classList.add('delete')

//     console.log(e)
//     // UI.delete(e.target)

//     // container.removeChild(carddiv)
// })
container.addEventListener('click',(e)=>{

    
    let pages = e.target.parentElement.querySelector('.pagesdiv').textContent
    let author = e.target.parentElement.querySelector('.authordiv').textContent
    let title = e.target.parentElement.querySelector('.booknamediv').textContent
    
    
    
    
    UI.delete(e.target,title,author,pages)
    console.log(title,author,pages)

        UI.read(e.target)
    
})

// UPDATES
//Made total Javascript code with class , Integrated data to local storages
//Challenges: Retriving data from the card div to delete when remove button will be clicked

