//adding to local storage
const addToLocal = (id) => {
    let assignPeople;
    const assignedPerson = localStorage.getItem('tasks');
    if (assignedPerson) {
        assignPeople = JSON.parse(assignedPerson);
    }
    else {
        assignPeople = {};
    }

    const quantity = assignPeople[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        assignPeople[id] = newQuantity;
    }
    else {
        assignPeople[id] = 1;
    }
    localStorage.setItem('tasks', JSON.stringify(assignPeople));
}

//removing from local storage
const removeFromLocal = (id) => {
    const assignedPerson = localStorage.getItem('tasks');
    if(assignedPerson){
        const assignPeople = JSON.parse(assignedPerson);
        if(id in assignPeople){
            delete assignPeople[id];
            localStorage.setItem('tasks', JSON.stringify(assignPeople));
        }
    }
}

//removing all tasks from all persons
const removeAllTasks = () => {
    localStorage.removeItem('tasks');
}

//total salary with reduce
const allTotalsellary = (sellary) => {
    const reducer = (previous, current) => previous + current.sellary;
    const total = sellary.reduce(reducer, 0);
    return total;
}

export { addToLocal, removeFromLocal, allTotalsellary }