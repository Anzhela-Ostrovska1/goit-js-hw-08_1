// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });

const gallery = document.querySelector(".gallery");
const imagesMarkup = makeImagesMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", imagesMarkup);

function makeImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
      .join("");
    
}

const listItems = document.getElementsByTagName('li')
  for (let i = 0; i < listItems.length; i++) {
      listItems[i].style.listStyle = "none";
    }

    const lightbox = new SimpleLightbox('.gallery a', { 
    
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250

     });
      
   
lightbox.on('show.simplelightbox', function (evt) {
	 evt.preventDefault()
});
    



  



// function fn(arr, cashDesk) {
//     const obj = {}

//     for (let i = 1; i <= cashDesk; i += 1){
//         obj[i] = 0
           
//     }
  
//     arr.forEach(customer => {
//      const values = Object.values(obj)
//         const minValue = Math.min(...values)
//         const currentCustomer = values.indexOf(minValue) + 1
//         obj[currentCustomer] +=customer
//     })
//     return obj
// }
// console.log(fn([5, 6, 9, 8, 1, 6, 7, 9], 3))

