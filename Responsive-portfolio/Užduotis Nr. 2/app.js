// VARIABLES
const togglerBtn = document.querySelector('.fa-bars');
const navigation = document.querySelector('.navigation');
const gallery = document.querySelector('#gallery');
// FUNCTIONS
const toggleMenu = () => navigation.classList.toggle('active');

//return a list of file names
const getImgList = (start, stop) => {
  let imgList = [];
  for (i = start; i <= stop; i++) {
    let fileName = `./assets/img${i}.jpg`;
    imgList.push(fileName);
  }
  console.log(imgList);
  return imgList;
};

// render gallery of images
const renderImgGallery = (arr) => {
  let galleryBody = arr.reduce((output, currentImg) => {
    output += `
<div class="img-item"><img src="${currentImg}"></div>
`;
    return output;
  }, '');

  gallery.innerHTML = galleryBody;
};

// EVENTS
togglerBtn.addEventListener('click', toggleMenu);
document.addEventListener('DOMContentLoaded', () => {
  renderImgGallery(getImgList(1, 10));
});
