function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Gallery{
  constructor(element){
  this.container = element;
  this.list = [...element.querySelectorAll(".img")];

  this.modal = getElement(".modal");
  this.mainImage = getElement(".main-img");
  this.imageName = getElement(".image-name");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.prevBtn = getElement(".prev-btn");
  this.nextBtn = getElement(".next-btn");
  // bind functions
  // this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  this.choseImage = this.choseImage.bind(this);
  this.nextImage = this.nextImage.bind(this);
  // container event
  this.container.addEventListener(
    'click',
    function(e){
      if(e.target.classList.contains('img')){
        this.openModal(e.target, this.list)
      }
    }.bind(this)
  )
}
openModal(selectedImage, list){
  this.setMainImage(selectedImage);
  this.modalImages.innerHTML = list
        .map(function(image){
          return `<img src="${image.src}" title="${image.title}" data-id="${image.dataset.id} class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}"/>`
        }).join('');
  this.modal.classList.add('open');
  this.closeBtn.addEventListener('click', this.closeModal)
  this.nextBtn.addEventListener('click', this.nextImage)
  this.modalImages.addEventListener('click', this.choseImage)

}
setMainImage(selectedImage){
  this.mainImage.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
}

nextImage(){
  const selected = this.modalImages.querySelector('.selected');
  console.log(selected)
  const next = selected.nextElementSibling || this.modalImages.firstElementChild;
      selected.classList.remove('selected');
      next.classList.add('selected');
      this.setMainImage(next)
}


closeModal(){
  this.modal.classList.remove('open');
  this.modalImages.removeEventListener('click',this.shoseImage);
}
choseImage(e){
  if(e.target.classList.contains('modal-img')){
    const selected = this.modalImages.querySelector('.selected');
    console.log(selected)
    selected.classList.remove('selected');
    this.setMainImage(e.target);
    e.target.classList.add('selected')
  }
}
}

const nature = new Gallery(getElement('.nature'))