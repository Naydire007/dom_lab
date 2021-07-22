document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');

  const addItem = document.querySelector('#new-item-form');
    addItem.addEventListener('submit', handleAddItem);


})

const handleAddItem = function(event){
  event.preventDefault();
  const readyList = createList(event.target)
  const displayList = document.querySelector('#reading-list')
  displayList.appendChild(readyList)
  event.target.reset()
  
}

const createList = function(form){
  const newListItem = document.createElement('li');
  newListItem.classList.add('ready-list')

  const title = document.createElement('h3');
  title.textContent = form.title.value
  newListItem.appendChild(title)

  return newListItem

}


// document.getElementById("myForm").reset();

// const handleFormSubmit = function(event){
//   // event.preventDefault()
  // // console.log(event.target.first_name.value,event.target.last_name.value)
  // const resultParagraph = document.querySelector('#form-result')
  // resultParagraph.textContent =`
  // Your Name:
  // ${this.first_name.value}
  // ${this.last_name.value}




    // const newListItem = document.createElement('li');
    // newListItem.textContent = 'Purple';
    // newListItem.classList.add('purple');

    // const list = document.querySelector('ul');
    // list.appendChild(newListItem);