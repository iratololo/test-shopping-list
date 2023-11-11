import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";
const BASE_URL = 'https://books-backend.p.goit.global/books';

const bookList = document.querySelector(".book-list");



bookList.addEventListener("click", handlerBookInfo);

function fetchAllBook() {
    const END_POINT = '/category';
    const params = new URLSearchParams({
        category: "Hardcover Fiction",
    })
    return fetch(`${BASE_URL}${END_POINT}?${params}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }
            return resp.json();
    })
}

fetchAllBook()
    .then((books) => {
        bookList.innerHTML = createBooksMurkup(books);
        console.log( books);
    }
    )
    .catch((err) => console.log(err));

const bookArr = [];
// let counter = 0;

function handlerBookInfo(e) {
    e.preventDefault();
    if (!e.target.closest(".book-item")) {
        return;
    }
    // console.log(e.target.closest(".book-item"));
    const selectedEl = e.target.closest(".book-item");
    const bookId = selectedEl.dataset.id;
    // console.log('bookId', bookId);
    fetchBook(bookId)
    .then((book) => {
        // bookList.innerHTML = createBooksMurkup(books);
        const { _id, author, book_image, title, description, buy_links } = book;
        console.log("data",book);
        const instance = basicLightbox.create(`
	<div class="book-card-info">
        <div class="book-info-common">
          <img src="${book_image}" alt="${title}" />
          <div class="book-info-detail">
            <h3 class="book-title">${title}</h3>
            <p class="book-author">${author}</p>
            <p class="book-description">${description}</p>
            <ul class="book-list">
              <li class="book-list-item">
                <a href="" class="book-link"></a>
              </li>
            </ul>
          </div>
        </div>
        <button class="book-list-btn" type="button" data-id="${_id}">Add to shopping list</button>
      </div>
`)
        // const bookArr = [];
        instance.show(() => {})
            // console.log('lightbox now visible');
        
            const addBtn = document.querySelector(".book-list-btn");
            addBtn.addEventListener("click", handlerAddList);
            // counter += 1;
            // console.log('counter', counter);
            function handlerAddList(e) {
                let idByBook = e.target.dataset.id;
                const LOCAL_KEY = "booklist"
                // const bookArr = [];
                bookArr.push(book);
                localStorage.setItem(LOCAL_KEY, JSON.stringify(bookArr));
                // fetchBook(idByBook)
                //     .then((book) => {
                //         console.log('book :>> ', book);
                //         const { _id, author, book_image, title, description, buy_links, list_name } = book;
                //         const bookObj = {
                //             _id,
                //             author,
                //             book_image,
                //             title,
                //             description,
                //             buy_links,
                //             list_name,
                //         }
                //         bookArr.push(bookObj);
                //         // // localStorage.setItem(LOCAL_KEY, JSON.stringify(bookArr));
                //         // localStorage.setItem(counter, JSON.stringify(bookObj));
                //         for (let i = 0; i < bookArr.length; i++) {
                //         localStorage.setItem(LOCAL_KEY, JSON.stringify(bookArr));
                //         }
                //     })
                // .catch((err) => console.log(err));
                // let LOCAL_KEY = e.target.dataset.id;
                // console.log('bookArr', bookArr);
            }
        
    }
    )
    .catch((err) => console.log(err));

}


function fetchBook(id) {
    const END_POINT = `/${id}`;
    return fetch(`${BASE_URL}${END_POINT}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }
            return resp.json();
    })
}







function createBooksMurkup(arr) {
    return arr.map(({ _id, title, author, book_image}) =>
        ` <a href="" class="book-item" data-id="${_id}">
          <img src="${book_image}" alt="${title}">
          <p>${author}</p>
          <h3>${title}</h3>
        </a>`).join("");
}




// LOCALE STORAGE ADD




// localStorage.clear();