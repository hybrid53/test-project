const modal = document.getElementById("modal")
const openModalButton = document.getElementById("openModal")
const closeModalButton = document.getElementById("closeModal")


//open the Modal
openModalButton.addEventListener("click", ()=> {
    modal.style.display = "flex"
})

//close the Modal
closeModalButton.addEventListener("click", ()=> {
    modal.style.display ="none"
})