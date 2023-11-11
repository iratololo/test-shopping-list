// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// // const _ = require('lodash');


// const LOCAL_KEY = "booklist";
// const container = document.querySelector("#pagination");
// const cartList = document.querySelector(".cart-list");
// const emptyCart = document.querySelector(".empty-cart");

// const options = {
//   totalItems: 0,
//   itemsPerPage: 1,
//   visiblePages: 3,
//   page: 1,
//   firstItemClassName: 'tui-first-child',
//   lastItemClassName: 'tui-last-child',
// };

// const startPage = 1;

// let currentPage = 1;
// const itemPerPage = 3;


// let data = [];

// document.addEventListener("click", handlerDeleteCart);


//     try {
//         data = JSON.parse(localStorage.getItem(LOCAL_KEY));
//         if (!data.length) {
//             emptyCart.style.display = "block";
//             return;
//         } 
//         emptyCart.style.display = "none";
//         cartList.innerHTML = test(data);
//         options.totalItems = data.length;
//         if (data.length <= 3) {
//            pagination.reset();
//         }
//         const pagination = new Pagination(container, options);
//         pagination.on('beforeMove', (event) => {
//             currentPage = event.page;
//             options.page = currentPage;
//             cartList.innerHTML = test(data);
//     });
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//   }






// // ----------------------------------------------------------------------------------------РОЗМІТКА



// function test(arr) {
//     cartList.innerHTML = "";
//     const start = itemPerPage * (currentPage-1);
//     const end = start + itemPerPage;
//     const paginatedData = arr.slice(start, end);
//     return paginatedData.map(({ _id, author, book_image, title, description, buy_links: [{url:amazon}, {url:appleBook}], list_name }) =>
//         ` <li class="cart-item" data-id ="${_id}">
//             <img src="${book_image}" alt="${title}" class="cart-item-img">
//             <div class="cart-item-content">
//             <div class="cart-content-header">
//                 <h3 class="cart-item-title">${title}</h3>
//                 <p class="cart-item-category cart-item-label">${list_name}</p>
//             </div>
//                 <p class="cart-item-description">${description}</p>
//                 <p class="cart-item-author cart-item-label">${author}</p>
//                 <button class="cart-item-delete"></button>
//                 <ul class="cart-item-links">
//                 <li><a href="${amazon}" class="cart-item-link">amazon</a></li>
//                 <li><a href="${appleBook}" class="cart-item-link">apple book</a></li>
//                 </ul>
//             </div>
//         </li>`).join("");
// }

// const addItems = array =>
//   array
//     .map(({ _id, author, book_image, title, description, buy_links: [{url:amazon}, {url:appleBook}], list_name }) =>
//         ` <li class="cart-item" data-id ="${_id}">
//             <img src="${book_image}" alt="${title}" class="cart-item-img">
//             <div class="cart-item-content">
//             <div class="cart-content-header">
//                 <h3 class="cart-item-title">${title}</h3>
//                 <p class="cart-item-category cart-item-label">${list_name}</p>
//             </div>
//                 <p class="cart-item-description">${description}</p>
//                 <p class="cart-item-author cart-item-label">${author}</p>
//                 <button class="cart-item-delete"></button>
//                 <ul class="cart-item-links">
//                 <li><a href="${amazon}" class="cart-item-link">amazon</a></li>
//                 <li><a href="${appleBook}" class="cart-item-link">apple book</a></li>
//                 </ul>
//             </div>
//         </li>`)
//     .slice(0, 3)
//         .join(' ');
    
// const updatePage = str => (cartList.innerHTML = str);
        

// const addPagination = () => {
//   const pagination = new Pagination('pagination', options);
//   pagination.on('beforeMove',  evt => {
//     const { page } = evt;
//     const { results } =  getData(page);

//     if (results) {
//       updatePage(addItems(results));
//     } else {
//       return false;
//     }
//   });
// };

// // ----------------------------------------------------------------------------------------ВИДАЛЕННЯ ЕЛЕМЕНТІВ КОРЗИНИ

// function handlerDeleteCart(e) {
//     if (!e.target.classList.contains("cart-item-delete")) return;
   
//     const idOfBook = e.target.closest(".cart-item").dataset.id; 
//     try {
//         const products = data.filter(({ _id }) => _id !== idOfBook);
//         localStorage.setItem(LOCAL_KEY, JSON.stringify(products));
//         data = JSON.parse(localStorage.getItem(LOCAL_KEY));
//         options.visiblePages = Math.ceil(data.length / itemPerPage);
//        cartList.innerHTML = test(data);
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//     }
//     if (!data.length) {
//     emptyCart.style.display = "block";
// }
// }





// let data = [];
// const itemPerPage = 3;
// const visiblePage = 3;
// let currentPage = 1;
// // const currentPage = pagination.getCurrentPage();

// document.addEventListener("click", handlerDeleteCart);

// const options = {
//             totalItems: 0,
//             itemsPerPage: itemPerPage,
//             visiblePages: visiblePage,
//             page: currentPage,
//             centerAlign: false,
//             }
// let pagination = new Pagination(container, options);
            
// const age = pagination.getCurrentPage();

//     try {
//         data = JSON.parse(localStorage.getItem(LOCAL_KEY));
//         if (!data.length) {
//             emptyCart.style.display = "block";
//             return;
//         }
//         emptyCart.style.display = "none";
//         // const portionsOfProducts = [];
//         // for (let index = 0; index < data.length / itemPerPage; index++) {
//         //     let arr = data.slice(0, itemPerPage);
//         //      portionsOfProducts.push(arr)
//         // }
//         // console.log('MURKUP data :>> ', data);
//         cartList.innerHTML = test(data);

//         if (data.length > itemPerPage) {

//             // const options = {
//             // totalItems: data.length,
//             // itemsPerPage: itemPerPage,
//             //     // visiblePages: Math.ceil(data.length / itemPerPage),
//             // visiblePages: visiblePage,
//             // page: currentPage,
//             // centerAlign: false,
//             // }
    
//             // const pagination = new Pagination(container, options);


//             options.totalItems = data.length;
//             const pagination = new Pagination(container, options);
//             pagination.on('afterMove',  function(eventData) {
//                 // alert('The current page is ' + eventData.page);
//                 console.log('totalItemsMURCUP :>> ', options.totalItems);
//             currentPage = eventData.page;
//                 console.log('currentPageonMURCUP :>> ', currentPage);
            
            
//             // if (currentPage > Math.ceil(data.length / itemPerPage)) {
//             //     // options.visiblePages = 1;
//             //      return false;
//             // }
//             cartList.innerHTML = test(data);
//             });
//             console.log('optionsPage :>> ', options.page);
            
//         }
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//   }





// function test(arr) {
//     cartList.innerHTML = "";
//     const start = itemPerPage * (currentPage-1);
//     const end = start + itemPerPage;
//     const paginatedData = arr.slice(start, end);
//     // console.log('paginatedData :>> ', paginatedData);
//     return paginatedData.map(({ _id, author, book_image, title, description, buy_links, list_name}) =>
//         ` <li class="cart-item" data-id ="${_id}">
//             <img src="${book_image}" alt="${title}" class="cart-item-img">
//             <div class="cart-item-content">
//             <div class="cart-content-header">
//                 <h3 class="cart-item-title">${title}</h3>
//                 <p class="cart-item-category cart-item-label">${list_name}</p>
//             </div>
//                 <p class="cart-item-description">${description}</p>
//                 <p class="cart-item-author cart-item-label">${author}</p>
//                 <button class="cart-item-delete"></button>
//             </div>
//             <ul class="cart-item-links">
//             </ul>
//         </li>`).join("");
// //    for (let index = 0; index < arr.length; index++) {
// //     //    console.log('arr[i] :>> ', arr[index]);
       
// //        return arr[index].map(({ _id, author, book_image, title, description, buy_links, list_name}) =>
// //         ` <li class="cart-item" data-id ="${_id}">
// //             <img src="${book_image}" alt="${title}" class="cart-item-img">
// //             <div class="cart-item-content">
// //             <div class="cart-content-header">
// //                 <h3 class="cart-item-title">${title}</h3>
// //                 <p class="cart-item-category cart-item-label">${list_name}</p>
// //             </div>
// //                 <p class="cart-item-description">${description}</p>
// //                 <p class="cart-item-author cart-item-label">${author}</p>
// //                 <button class="cart-item-delete"></button>
// //             </div>
// //             <ul class="cart-item-links">
// //             </ul>
// //         </li>`).join("");
    
// //    }
// }



// // ----------------------------------------------------------------------------------------РОЗМІТКА



// // function createCartMurkup(arr) {
// //     return arr.map(({ _id, author, book_image, title, description, buy_links, list_name}) =>
// //         ` <li class="cart-item" data-id ="${_id}">
// //             <img src="${book_image}" alt="${title}" class="cart-item-img">
// //             <div class="cart-item-content">
// //             <div class="cart-content-header">
// //                 <h3 class="cart-item-title">${title}</h3>
// //                 <p class="cart-item-category cart-item-label">${list_name}</p>
// //             </div>
// //                 <p class="cart-item-description">${description}</p>
// //                 <p class="cart-item-author cart-item-label">${author}</p>
// //                 <button class="cart-item-delete"></button>
// //             </div>
// //             <ul class="cart-item-links">
// //             </ul>
// //         </li>`).join("");
// // }





// // pagination.on('beforeMove', (event) => {
// //     const currentPage = event.page;

// //     if (currentPage === 10) {
// //         return false;
// //         // return true;
// //     }
// // });


// // pagination.on('afterMove', function(eventData) {
// //         alert('The current page is ' + eventData.page);
// //     });



// // ----------------------------------------------------------------------------------------ВИДАЛЕННЯ ЕЛЕМЕНТІВ КОРЗИНИ

// function handlerDeleteCart(e) {
//     if (!e.target.classList.contains("cart-item-delete")) return;
   
//     const idOfBook = e.target.closest(".cart-item").dataset.id;
    
    
//     const products = data.filter(({ _id }) => _id !== idOfBook);
//     localStorage.setItem(LOCAL_KEY, JSON.stringify(products));
    
//     try {
//         data = JSON.parse(localStorage.getItem(LOCAL_KEY));
//         // cartList.innerHTML = test(products);
//         // if (data.length > itemPerPage) {

//         //     // if(Math.ceil(data.length / itemPerPage) < )
        
//         //     const options = {
//         //         totalItems: data.length,
//         //         itemsPerPage: itemPerPage,
//         //         visiblePages: visiblePage,
//         //         page: currentPage,
//         //         centerAlign: false,
//         //     }
    
//         //     const pagination = new Pagination(container, options);
//         //     pagination.on()
//         //     _.throttle(, 1000)
//         // }
//         //     pagination.on('beforeMove', function(eventData) {
//         //         // alert('The current page is ' + eventData.page);
//         //         // console.log('eventData :>> ', eventData);
//         //         currentPage = eventData.page;
//         //         console.log('currentPageDelete:>> ', currentPage);
//         //         // console.log('currentPageDeleteLENGTH:>> ',currentPage.length);
//         //         // if (currentPage > Math.ceil(data.length / itemPerPage)) {
//         //         //     // options.visiblePages = 1;
//         //         //      return false;
//         //         // }
//         //          console.log('data 4 :>> ', data);
//         //         // cartList.innerHTML = test(data);
//         //     });
         

//         //     console.log('dataDelete :>> ', data.length);
//         //     // cartList.innerHTML = test(products);
//         // }
//         cartList.innerHTML = test(products);
//         //  options.totalItems = data.length;
//     //      pagination.on('beforeMove', function (eventData) {
//     //          data = JSON.parse(localStorage.getItem(LOCAL_KEY));
//     //          options.totalItems = data.length;
//     //         currentPage = eventData.page;
//     //         cartList.innerHTML = test(products);
//     // });
//     // cartList.innerHTML = createCartMurkup(products);
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//     }
//     if (!data.length) {
//     emptyCart.style.display = "block";
//     // return;
// }
//     // cartList.innerHTML = createCartMurkup(products);
// }












// const options = {
//     totalItems: 500,
//   itemsPerPage: 3,
//   visiblePages: 3,
//   page: 1,
//   centerAlign: false,
// }

// const pagination = new Pagination(container, options);




// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("Scroll handler call every 300ms");
//   }, 1000)
// );

// _.throttle(, 1000)





// ----------------------------------------------------------------------------------------ВАРІАНТ БЕЗ ПАГІНАЦІЇ


// const LOCAL_KEY = "booklist";
// const cartList = document.querySelector(".cart-list");
// const emptyCart = document.querySelector(".empty-cart");


// let data = [];

// document.addEventListener("click", handlerDeleteCart);


//     try {
//         data = JSON.parse(localStorage.getItem(LOCAL_KEY));
//         if (!data.length) {
//             emptyCart.style.display = "block";
//             return;
//         }
//         emptyCart.style.display = "none";
//         cartList.innerHTML = createCartMurkup(data);
//         if (data.length > itemPerPage) {
//         }
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//   }




// // ----------------------------------------------------------------------------------------РОЗМІТКА



// function createCartMurkup(arr) {
//     return arr.map(({ _id, author, book_image, title, description, buy_links: [{url:amazon}, {url:appleBook}], list_name }) =>
//         ` <li class="cart-item" data-id ="${_id}">
//             <img src="${book_image}" alt="${title}" class="cart-item-img">
//             <div class="cart-item-content">
//             <div class="cart-content-header">
//                 <h3 class="cart-item-title">${title}</h3>
//                 <p class="cart-item-category cart-item-label">${list_name}</p>
//             </div>
//                 <p class="cart-item-description">${description}</p>
//                 <p class="cart-item-author cart-item-label">${author}</p>
//                 <button class="cart-item-delete"></button>
//                 <ul class="cart-item-links">
//                 <li><a href="${amazon}" class="cart-item-link">amazon</a></li>
//                 <li><a href="${appleBook}" class="cart-item-link">apple book</a></li>
//                 </ul>
//             </div>
//         </li>`).join("");
// }


// // ----------------------------------------------------------------------------------------ВИДАЛЕННЯ ЕЛЕМЕНТІВ КОРЗИНИ

// function handlerDeleteCart(e) {
//     if (!e.target.classList.contains("cart-item-delete")) return;
   
//     const idOfBook = e.target.closest(".cart-item").dataset.id;
//     try {
//         const products = data.filter(({ _id }) => _id !== idOfBook);
//         localStorage.setItem(LOCAL_KEY, JSON.stringify(products));
//         data = JSON.parse(localStorage.getItem(LOCAL_KEY));
//         cartList.innerHTML = createCartMurkup(products);
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//     }
//     if (!data.length) {
//     emptyCart.style.display = "block";
// }
// }



// ----------------------------------------------------------------------------------------ВАРІАНТ З ПАГІНАЦІЄЮ але без видалення

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// const _ = require('lodash');


const LOCAL_KEY = "booklist";
const container = document.querySelector("#pagination");
const cartList = document.querySelector(".cart-list");
const emptyCart = document.querySelector(".empty-cart");

const options = {
    totalItems: 500,
    itemsPerPage: 3,
    visiblePages: 3,
    page: 1,
    centerAlign: false,
}

let currentPage = 1;
const itemPerPage = 3;


let data = [];

document.addEventListener("click", handlerDeleteCart);


    try {
        data = JSON.parse(localStorage.getItem(LOCAL_KEY));
        if (!data.length) {
            emptyCart.style.display = "block";
            return;
        } 
        emptyCart.style.display = "none";
        cartList.innerHTML = test(data);
        options.totalItems = data.length;
        if (data.length <= 3) {
           pagination.reset();
        }
        const pagination = new Pagination(container, options);
        pagination.on('beforeMove', (event) => {
            currentPage = event.page;
            options.page = currentPage;
            cartList.innerHTML = test(data);
    });
  } catch (error) {
    console.error("Get state error: ", error.message);
  }






// ----------------------------------------------------------------------------------------РОЗМІТКА



function test(arr) {
    cartList.innerHTML = "";
    const start = itemPerPage * (currentPage-1);
    const end = start + itemPerPage;
    const paginatedData = arr.slice(start, end);
    return paginatedData.map(({ _id, author, book_image, title, description, buy_links: [{url:amazon}, {url:appleBook}], list_name }) =>
        ` <li class="cart-item" data-id ="${_id}">
            <img src="${book_image}" alt="${title}" class="cart-item-img">
            <div class="cart-item-content">
            <div class="cart-content-header">
                <h3 class="cart-item-title">${title}</h3>
                <p class="cart-item-category cart-item-label">${list_name}</p>
            </div>
                <p class="cart-item-description">${description}</p>
                <p class="cart-item-author cart-item-label">${author}</p>
                <button class="cart-item-delete"></button>
                <ul class="cart-item-links">
                <li><a href="${amazon}" class="cart-item-link">amazon</a></li>
                <li><a href="${appleBook}" class="cart-item-link">apple book</a></li>
                </ul>
            </div>
        </li>`).join("");
}


// ----------------------------------------------------------------------------------------ВИДАЛЕННЯ ЕЛЕМЕНТІВ КОРЗИНИ

function handlerDeleteCart(e) {
    if (!e.target.classList.contains("cart-item-delete")) return;
   
    const idOfBook = e.target.closest(".cart-item").dataset.id; 
    try {
        const products = data.filter(({ _id }) => _id !== idOfBook);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(products));
        data = JSON.parse(localStorage.getItem(LOCAL_KEY));
        options.visiblePages = Math.ceil(data.length / itemPerPage);
       cartList.innerHTML = test(data);
  } catch (error) {
    console.error("Get state error: ", error.message);
    }
    if (!data.length) {
    emptyCart.style.display = "block";
}
}