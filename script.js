const addItem1 = document.getElementById("addItem1");
const addItem2 = document.getElementById("addItem2");
const formPopUp = document.getElementById("formPopUp");
const formPopUpSubmitButton = document.getElementById('formPopUpSubmitButton');
const previewContainer = document.getElementById('previewContainer')
const formPopUpBookTitle = document.getElementById('BookTitle');
const formPopUpBookAuthor = document.getElementById('BookAuthor');

function displayFormPopUp(){
  formPopUp.style.display = 'block';
};

addItem1.addEventListener("click", displayFormPopUp);

addItem2.addEventListener("click", displayFormPopUp);

formPopUpSubmitButton.addEventListener('click', function(){ 
  formPopUp.style.display = 'none';
  addPreview();
})

formPopUp.addEventListener('submit', function(event){
  event.preventDefault();
});

function addPreview(){
  let bookTitle = formPopUpBookTitle.value;
  let author = formPopUpBookAuthor.value;

  previewContainer.innerHTML += `
  <div class="col d-flex justify-content-center mb-5 mt-5">
            <div class="card" style="width: 20rem; height: 25rem;">
              <img src="images/image placeholder.svg" alt="" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${bookTitle}</h5>
                <h6 class="card-subtitle text-muted">${author}</h6>
                <button class="btn btn-primary mt-4">Open</button>
                <button class="btn btn-secondary mt-4">Share</button>
              </div>
            </div>
          </div>
  `;
}