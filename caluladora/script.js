const addCharacters = (character) => {
  const characters = document.querySelector(".display").value
  document.querySelector(".display").value = characters + character
}
function clearScreen () {
  document.querySelector(".display").value= ""
}
function calculate(){
    const characters = document.querySelector(".display").value
    document.querySelector(".display").value = eval(characters)
}
function invertValue(){
    const characters = document.querySelector(".display").value
    document.querySelector(".display").value = characters * -1  
}