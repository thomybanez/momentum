const backGround = document.createElement('div'); //display background
backGround.setAttribute('name','backGround');
backGround.setAttribute('class','backGround')
const divTop = document.createElement('div');
divTop.setAttribute('name','divTop');
const divMid = document.createElement('div');
divMid.setAttribute('name','divMid');
const divBottom = document.createElement('div');
divBottom.setAttribute('name','divBottom');
const divNavBar = document.createElement('div');
divNavBar.setAttribute('name','divNavBar');
const timeSlot = document.createElement('span');  //display time
timeSlot.setAttribute('name','timeSlot');
timeSlot.setAttribute('class','heartbeat');
const QUOTE_SLOT = document.createElement('p');
QUOTE_SLOT.setAttribute('name','QUOTE_SLOT')
timeSlot.setAttribute('name','timeSlot');
const greetingTextSlot = document.createElement('span'); //display greetings
greetingTextSlot.setAttribute('name','greetingTextSlot');
const hamBurger = document.createElement('button');
hamBurger.setAttribute('name','hamBurger');
let divNavBarItems = document.createElement('ul');
divNavBarItems.setAttribute('name','divNavBarItems');
const divNavBarItemsTask = document.createElement('li');
divNavBarItemsTask.setAttribute('name','divNavBarItemsTask');
const DIVNAVBARITEMSTASKINPUT = document.createElement('input');
DIVNAVBARITEMSTASKINPUT.setAttribute('name','DIVNAVBARITEMSTASKINPUT');

const DISPLAY_MORE = document.createElement('span');
DISPLAY_MORE.setAttribute('name','DISPLAY_MORE');
const MORE_DELETE = document.createElement('span');
MORE_DELETE.setAttribute('name','MORE_DELETE');
const MORE_EDIT = document.createElement('span');
MORE_EDIT.setAttribute('name','MORE_EDIT');
const BODY = document.querySelectorAll('*');

const taskBar = document.createElement('form');
taskBar.setAttribute('name','taskBar')
taskBar.setAttribute("onsubmit","return false")
taskBar.setAttribute("id","formsDiv")
taskBar.setAttribute("autocomplete","off")

const inputTaskBar = document.createElement('input');
inputTaskBar.setAttribute('name','inputTaskBar')
inputTaskBar.addEventListener("focus", (event) => {
  inputTaskBar.style.outlineWidth = 0;  
});

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
const nameTextSlot = name; //name to display


timeSlot.style.cssText = 
"font-size: 4em; color: white;"

greetingTextSlot.style.cssText =
"font-size: 2em; color: white; margin-Top: 5px"

QUOTE_SLOT.style.cssText = 
"height: 100%; width: 500px; color: white; background-color:transparent; font-size:1.5em; font-style:italic;"+
"display:flex; align-items: center; justify-content:center;"


inputTaskBar.style.cssText =
"border:transparent; border-bottom: white 2px solid;"+
"height:1em; width:200px; background-color: transparent;"+
"font-size: 2em; color:white;text-align:center;"+
"autofocus;position:absolute;"

taskBar.style.cssText = 
"display:flex; align-items:center;justify-content:center;text-align:center;"+
"flex-direction:column;height:3em;width:250px; margin: 0 0;"+
"padding: 0; box-sizing:borderbox;"

//---------------------

function time() {
  let d = new Date();  
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours() % 12;
  let ap = d.getHours() >= 12 ? 'PM' : 'AM';
  timeFrame = d.getHours();

  if (h==0){
    h = 12;
  }

  timeSlot.innerText = 
  (h)+":"+
  (m).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+
  (s).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+" "+ap;

  greetingText = (timeFrame >= 12 && timeFrame < 18)? "Afternoon, ": 
                 (timeFrame >= 0 && timeFrame < 12) ?"Morning, ":
                 "Night, ";
                
  greetingTextSlot.innerText = "Good "+ greetingText + nameTextSlot;
}

let lastRandomNumber = -1;
function changeImage() {
  const picture = [
    "1.webp",
    "2.jpeg",
    "4.jpg",
    "6.jpg",
    "7.webp",
    "8.webp",
    "9.jpg",
  ];

  let randomNumber = Math.floor(Math.random() * picture.length);

  // Check if the randomly generated number is the same as the previous one
  if (randomNumber === lastRandomNumber) {
    // If it is, generate a new random number and try again
    return changeImage();
  }

  // Get the element with the class "backGround"
  const element = document.querySelector('.backGround');

  // Make sure the element exists before trying to set its style.backgroundImage property
  if (element) {
    element.style.backgroundImage = `url(./assets/${picture[randomNumber]})`;
    lastRandomNumber = randomNumber;
  }
}

if(!QUOTE_SLOT.innerText){
  changeQuote();
}


function changeQuote (){  
  const quote = [
    ["Art is a collaboration between God and the artist, and the less the artist does the better - Andre Gide"],
     ["Those who do not want to imitate anything, produce nothing - Salvador Dali"],
     ["A little impatience will spoil great plans - Anonymous"],
     ["A crisis is an opportunity riding the dangerous wind. - Anonymous"],
     ["An inch of time is an inch of gold but you can't buy that inch of time with an inch of gold - Anonymous"],
     ["Even a hare will bite when it is cornered - Anonymous"]
  ]


  let randomNumber = (Math.floor(Math.random()*quote.length));

  if (randomNumber == lastRandomNumber){
    return changeQuote();
  }

 QUOTE_SLOT.innerText = quote[randomNumber][0];
  lastRandomNumber = randomNumber;
  return randomNumber;
}

setInterval(time, 1000);
setInterval(changeImage, 10000);
setInterval(changeQuote, 10000)
document.body.append(backGround)

//-----------------
backGround.append(divTop) //green
divTop.append(QUOTE_SLOT)

//-----------------
backGround.append(divMid) //blue
divMid.append(timeSlot)
divMid.append(greetingTextSlot)

//-----------------
backGround.append(divBottom) //violet
divBottom.append(taskBar)
divBottom.append(divNavBar)
taskBar.append(inputTaskBar)

divNavBar.append(hamBurger)
divMid.append(divNavBarItems)
divNavBarItems.append(DIVNAVBARITEMSTASKINPUT)
divNavBarItems.append(divNavBarItemsTask)

document.body.style.cssText = 
"overflow: hidden; margin: 0; padding:0; box-sizing: borderbox;"

backGround.style.cssText = 
"height:100vh; width:100vw;"+
"display: flex; align-items: center; justify-content:center; flex-direction: column;"+
"background-repeat:no-repeat; background-size:cover; background-position:center;"+
"background-image: url(./assets/1.webp)"

divTop.style.cssText = 
"height: 100%; width: 100vw; display:flex; align-items:center; justify-content:center; "

divMid.style.cssText = 
"height:fit-content; width: 100vw;"+
"display: flex; align-items: center; justify-content:center;"+
"flex-direction: column; flex-wrap:wrap; text-align:center;"

divBottom.style.cssText = 
"height: 100%; width: 100vw;"+
"display: flex; align-items:center; justify-content:center; flex-wrap:wrap; flex-direction:column;"

divNavBar.style.cssText =
"height: 50px; width: 100%;"+
"bottom: 0; position: fixed; overflow:hidden;"

divNavBarItems.style.cssText =
"height: fit-content; width: calc(70vmin);box-sizing:border-box;"+
"position: absolute; left:0; bottom:50px; background: transparent; padding:0; margin:0;"+
"display:flex; flex-direction:column-reverse; align-items:center; justify-content:center;"+
"overflow:hidden; border-radius: 15px 15px 15px 0px; background-color:gray;"

divNavBarItems.style.transition = "opacity 1s";
divNavBarItems.style.opacity = "0";


DIVNAVBARITEMSTASKINPUT.style.cssText = 
"margin: 10px 0; padding: 0 15%"+
"border-bottom: white 2px solid;"+
"height:1em; width:200px; background-color: transparent;"+
"font-size: 2em; color:white; text-align:center;"+
"autofocus;"

let notes =   [];
DIVNAVBARITEMSTASKINPUT.addEventListener('keypress', function(event){
  if (event.key === "Enter") {   
    addNotes(DIVNAVBARITEMSTASKINPUT.value);
    DIVNAVBARITEMSTASKINPUT.value = " "
  }  
});

function addNotes(note){
  notes.push(note);
  const noteItem = document.createElement("div");
  noteItem.setAttribute('name','noteItem');
  noteItem.style.cssText = 
  "margin:0 0 ; padding: 0 0; background-color:white;"
  noteItem.classList.add("name-item");
  noteItem.innerHTML = `
    <span class="note" draggable="true" style="background-color:white; font-size:2em;padding:5px">${note}</span>
    <button class="edit-button">Edit</button>
    <button class="delete-button">Delete</button>
    <button type="radio" class="strike-button">Strike</button>
  `;
  divNavBarItemsTask.appendChild(noteItem);

  const noteElement = noteItem.querySelector(".note");

  noteElement.addEventListener("dragstart", event => {
    event.dataTransfer.setData("text/plain", event.target.innerHTML);
    event.target.style.opacity = "0.5";
  });

  noteElement.addEventListener("dragend", event => {
    event.target.style.opacity = "";
  });

  divNavBarItemsTask.addEventListener("dragenter", event => {
    event.preventDefault();
    if (event.target.classList.contains("name-item")) {
      event.target.style.backgroundColor = "lightblue";
    }
  });

  divNavBarItemsTask.addEventListener("dragleave", event => {
    event.preventDefault();
    if (event.target.classList.contains("name-item")) {
      event.target.style.backgroundColor = "";
    }
  });

  divNavBarItemsTask.addEventListener("dragover", event => {
    event.preventDefault();
  });

  divNavBarItemsTask.addEventListener("drop", event => {
    event.preventDefault();
    const draggedElement = event.dataTransfer.getData("text/plain");
    const draggedElementIndex = notes.indexOf(draggedElement);
    const targetElement = event.target;
    if (targetElement.classList.contains("name-item")) {
      const targetElementIndex = Array.from(divNavBarItemsTask.children).indexOf(targetElement);
      if (draggedElementIndex < targetElementIndex) {
        divNavBarItemsTask.insertBefore(event.target, event.target.previousElementSibling);
      } else {
        divNavBarItemsTask.insertBefore(event.target, event.target.nextElementSibling.nextElementSibling);
      }
      notes.splice(targetElementIndex, 0, notes.splice(draggedElementIndex, 1)[0]);
      event.target.style.backgroundColor = "";
    }
  
  });

  const editButton = noteItem.querySelector(".edit-button");
  editButton.addEventListener("click", () => {
    // Get the name element and the current name
    const nameElement = editButton.previousElementSibling;
    const currentName = nameElement.textContent;

    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.value = currentName;

    inputElement.addEventListener("keypress", () => {
      if (event.key === "Enter") {
      const index = notes.indexOf(currentName);
      notes[index] = inputElement.value;
      nameElement.textContent = inputElement.value;
      noteItem.replaceChild(nameElement, inputElement);
      }
    });
    noteItem.replaceChild(inputElement, nameElement);
    inputElement.focus();
  });

  const deleteButton = noteItem.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    divNavBarItemsTask.removeChild(noteItem);
    const index = notes.indexOf(note);
    notes.splice(index, 1);
  });

  const strikeButton = noteItem.querySelector(".strike-button");
  strikeButton.addEventListener("click", () => {
    if (noteElement.style.textDecoration === "line-through") {
      noteElement.style.textDecoration = "none";
    } else {
      noteElement.style.textDecoration = "line-through";
    }
  });    
}



divNavBarItemsTask.style.cssText =
"height: fit-content; width:fit-content; background-color:transparent; list-style:none;"
"margin:0; padding: 20px; box-sizing:border-box; font-size:2em;color:white;text-align:left;list-style-type:none;"
//---------------------------DISPLAY TASK AFTER INPUT--------------------------------------
let TASK_DISPLAYED = document.createElement('p');
TASK_DISPLAYED.setAttribute('name','TASK_DISPLAYED')
TASK_DISPLAYED.style.cssText = 
"font-size: 2em; color:white;text-align:center;height:fit-content;width:fit-content;position:absolute;"

TASK_DISPLAYED.style.display = "block"
TASK_DISPLAYED.style.transition = "opacity 1s";
TASK_DISPLAYED.style.opacity = "0";

taskBar.append(TASK_DISPLAYED) ;


//---------------------------BODY LISTENER--------------------------------------------------
BODY.forEach((element) => {
  element.addEventListener('click', (event) => {
    console.log(event.target.getAttribute('name'))

    // if(event.target.getAttribute('name') == 'divTop'){
    //   console.log("divTop is clicked")
    // }

    if(event.target.getAttribute('name') == 'MORE_EDIT'){
      TASK_DISPLAYED.remove();
      MORE_EDIT.remove();
      MORE_DELETE.remove();
      inputTaskBar.value = TASK_DISPLAYED.innerText;
      taskBar.append(inputTaskBar);
      inputTaskBar.focus();
      taskBar.append(TASK_DISPLAYED);
      fadeOutTaskDisplay();
    }

    if (event.target.getAttribute('name') == 'MORE_DELETE'){
      TASK_DISPLAYED.remove();
      MORE_EDIT.remove();
      MORE_DELETE.remove();
      inputTaskBar.value = " "; 
      taskBar.append(inputTaskBar);
      inputTaskBar.focus();
      taskBar.append(TASK_DISPLAYED);      
      fadeOutTaskDisplay();
    }

})
})



//------------SHOW MORE---------------
DISPLAY_MORE.innerText = "more_horiz"
DISPLAY_MORE.classList.add("material-symbols-outlined")
DISPLAY_MORE.title = "Show More"
DISPLAY_MORE.style.cssText =
"color: white; margin-left: 10px;border-radius: 25px 25px;"

//-----------DELETE BUTTON------------
MORE_DELETE.innerText = "delete";
MORE_DELETE.classList.add("material-symbols-outlined")
MORE_DELETE.title = "Delete"
MORE_DELETE.style.cssText =
"color: white; margin-left: 10px; border-radius: 25px 25px;"

//----------EDIT BUTTON---------------
MORE_EDIT.innerText = "edit_document";
MORE_EDIT.classList.add("material-symbols-outlined")
MORE_EDIT.title = "Edit"
MORE_EDIT.style.cssText =
"color: white; margin-left: 10px; border-radius: 25px 25px;"

//-----------SHOW MORE LISTENER------------
DISPLAY_MORE.addEventListener("mouseover", function(){
DISPLAY_MORE.style.backgroundColor = "gray";
})
DISPLAY_MORE.addEventListener("mouseleave", function(){
DISPLAY_MORE.style.backgroundColor = "transparent";
})

DISPLAY_MORE.addEventListener("click", function(){
DISPLAY_MORE.remove()
TASK_DISPLAYED.append(MORE_EDIT)
TASK_DISPLAYED.append(MORE_DELETE)
})
//--------------------------------------------------------



inputTaskBar.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {    
    TASK_DISPLAYED.innerText = inputTaskBar.value;
    inputTaskBar.remove();    
    TASK_DISPLAYED.append(DISPLAY_MORE);
    fadeInTaskDisplay();
  }  
});

function fadeInTaskDisplay(){
  console.log('1')
  TASK_DISPLAYED.style.opacity = '1';
}

function fadeOutTaskDisplay(){
  console.log('0')
  TASK_DISPLAYED.style.opacity = '0';
}


  hamBurger.classList.add("menuIcon","material-icons")
  hamBurger.title = "To-Do List"
  hamBurger.innerText = "menu";
  hamBurger.style.cssText =
  "height:50px; width: 50px; background-color:transparent; color:white; font-size:2em;border:transparent;"
  
  hamBurger.addEventListener('mouseover', function(){
    hamBurger.style.backgroundColor = "gray"
    hamBurger.style.fontSize = 1.7 + "em";
    })

  hamBurger.addEventListener('mouseout', function(){
    hamBurger.style.backgroundColor = "transparent"
    hamBurger.style.fontSize = 2 + "em";
    })

//---------------------------FADE IN FADE OUT BUTTON ANYWHERE----------------------------
    hamBurger.addEventListener('click',function(){  
    if (divNavBarItems.style.opacity === '0'){
      console.log(divNavBarItems.style.opacity == 0)        
      fadeIn();
    }
    else if (divNavBarItems.style.opacity === '1'){
      console.log(divNavBarItems.style.opacity == 1)      
      fadeOut();     
    }        
  })

  divTop.addEventListener('click',function(){
    if (event.target.getAttribute('name') == "divTop" && divNavBarItems.style.opacity === '0'){ 
      fadeIn();
    }  
    else if (event.target.getAttribute('name') == "divTop" && divNavBarItems.style.opacity === '1'){ 
      fadeOut();
    } 
  })

  divMid.addEventListener('click',function(){
    if (event.target.getAttribute('name') == "divMid" && divNavBarItems.style.opacity === '0'){ 
      fadeIn();
    }  
    else if (event.target.getAttribute('name') == "divMid" && divNavBarItems.style.opacity === '1'){ 
      fadeOut();
    } 
  })

  divBottom.addEventListener('click',function(){
    if (event.target.getAttribute('name') == "divBottom" && divNavBarItems.style.opacity === '0'){ 
      fadeIn();
    }  
    else if (event.target.getAttribute('name') == "divBottom" && divNavBarItems.style.opacity === '1'){ 
      fadeOut();
    } 
  })

  divNavBar.addEventListener('click',function(){
    if (event.target.getAttribute('name') == "divNavBar" && divNavBarItems.style.opacity === '0'){ 
      fadeIn();
    }  
    else if (event.target.getAttribute('name') == "divNavBar" && divNavBarItems.style.opacity === '1'){ 
      fadeOut();
    } 
  })

  taskBar.addEventListener('click',function(){
    if (event.target.getAttribute('name') == "taskBar" && divNavBarItems.style.opacity === '0'){ 
      fadeIn();
    }  
    else if (event.target.getAttribute('name') == "taskBar" && divNavBarItems.style.opacity === '1'){ 
      fadeOut();
    } 
  })
  
  function fadeIn(){
    divNavBarItems.style.opacity = "1";
    divNavBarItems.style.left = 0;
    hamBurger.style.backgroundColor = "gray"
    hamBurger.style.fontSize = 1.7 + "em";
  }
  function fadeOut(){
    divNavBarItems.style.opacity = "0";
    divNavBarItems.style.left = -100 +"vw";
    hamBurger.style.backgroundColor = "transparent"
    hamBurger.style.fontSize = 2 + "em";
  } 
  //------------------------------------------------------------------------

  
  
  