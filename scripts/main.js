
//choose time(slecet tag options) list
for (let i = -1; i < 24; i++) {
    let timeCounteValue = (`${Math.ceil(i / 2) + 8}:${i % 2 ? "00" : "30"}`);
//
if (i < 23) {
    let timeCounteValueArr = [];
    timeCounteValueArr[i] = (`${Math.ceil(i / 2) + 8}:${i % 2 ? "00" : "30"}`)
    let timeCounteValueArrPlus = [];
    timeCounteValueArrPlus[i] = (`${Math.ceil((i+1) / 2) + 8}:${(i+1) % 2 ? "00" : "30"}`)
    // console.log(`${Math.ceil(i / 2) + 8}:${i % 2 ? "00" : "30"}`);
    var timeSelection = [];
    timeSelection[i] = (`${timeCounteValueArr[i]} - ${timeCounteValueArrPlus[i]}`);
    
}
    let timeCounter = `<option value="${timeCounteValue}">${timeCounteValue}</option>`
    // console.log(timeCountValue + timeCounter );
    if (i === -1) {
        document.querySelector(".add-task-select-input option:first-child").remove();
    } else {
        document.querySelector(".add-task-select-input option:last-child").innerHTML += ` - ${timeCounteValue}`
    }
    document.querySelector(".add-task-select-input").innerHTML += timeCounter
    if (i === 23) {
        document.querySelector(".add-task-select-input option:last-child").innerHTML += ` - ${`${Math.ceil((i + 1) / 2) + 8}:${(i + 1) % 2 ? "00" : "30"}`}`
    }
}

/*--------------------------add-task-----------------------*/
document.querySelector("form").addEventListener('submit', function (event) {
    event.preventDefault();
    const task = {};
    task.name = document.querySelector('input').value;
    document.querySelector(".add-task-first-input").value = "";
    task.date = document.querySelector(".add-task-date-input").value
    // console.log(document.querySelector(".add-task-date-input").value);
    document.querySelector(".add-task-date-input").value = "";
    task.time = document.querySelector(".add-task-select-input").value;
    document.querySelector(".add-task-select-input").value = "";
    task.type = document.getElementsByName('radio').value;
    let radio = document.getElementsByName('radio');
    for (let i of radio) {
        if (i.checked) {
            task.type = i.value;
            console.log(i);
        }

    }
    task.description = document.querySelector("#add-task-2ndtxt-area").value;
    //local storage
    let storageArray = JSON.parse(localStorage.getItem('task')) || []
    storageArray.push(task)
    localStorage.setItem('task', JSON.stringify(storageArray));

});
// JSON.parse(localStorage.getItem)[5].date



/*-------------------------------Home------------------------*/

// function taskCard(name, date, time, type) {
   
//    for (let i = 0; i < task.length; i++) {
// if (task.name && task.date && task.time && task.task.type) {
//     for (let j = 0; j < 23; j++) {
//         let liContent = document.querySelector(".home-second-ul:nth-child(j)")
// if (liContent === timeSelection[j]) {
//     document.querySelector(".home-line:nth-child(j)").innerHTML = `<strong>${task.name}</strong> <br> ${task.description} <span></span>`
//     const homeTaskDot = document.queryCommandIndeterm(".home-line:nth-child(j) span");
//     homeTaskDot.style.width = "10px";
//     homeTaskDot.style.height = "10px";
//     homeTaskDot.style.borderRadius = "60%"
//     for (let t = 0; t < 5; t++) {
//         homeTaskDotColor = document.querySelector(".add-task-tasks-div label:nth-child(t)").style.backgroundColor ; 
//     }
//     homeTaskDot.style.backgroundColor = `${homeTaskDotColor}`
//     homeTaskDot.style.position = "absolute"
//     homeTaskDot.style.right = "25px"
//     const homeTaskCard = document.querySelector(".home-line:nth-child(j)");
//     homeTaskCard.style.backgroundColor = `${homeTaskDotColor}`;

//     }
// }
//    }
// }
