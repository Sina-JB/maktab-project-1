/*--------------------------add-task-----------------------*/
document.querySelector("form").addEventListener('submit', function (event) {
    event.preventDefault();
    const task = {};
    task.name = document.querySelector('input').value;
    document.querySelector("input").value = "";
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


//choose time(slecet tag options) list
for (let i = -1; i < 24; i++) {
    let timeCounteValue = (`${Math.ceil(i / 2) + 8}:${i % 2 ? "00" : "30"}`)
    // console.log(`${Math.ceil(i / 2) + 8}:${i % 2 ? "00" : "30"}`);
    let timeCounter = `<option value="${timeCounteValue}">${timeCounteValue}</option>`
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