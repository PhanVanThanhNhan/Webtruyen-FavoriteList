
const del = document.querySelector('.js-delete')
const modalDel = document.querySelector('.js-modal-delete')
const modalContainerDel = document.querySelector('.js-modal-container-delete')
const modalCloseDel = document.querySelector('.js-modal-close-delete')
        
        
function showModalDel(){
    modalDel.classList.add('open')
}
        
        
function hideModalDel(){
    modalDel.classList.remove('open')
}    

del.addEventListener('click', showModalDel)
  
modalCloseDel.addEventListener('click',hideModalDel)
modalDel.addEventListener('click',hideModalDel)
modalContainerDel.addEventListener('click', function(event){
    event.stopPropagation()
})