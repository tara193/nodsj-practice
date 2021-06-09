const event = {
    name:'Birthday party',
    guessList : ['x', 'y', 'z'],
    printGuestList () {
        console.log('The' + this.name)
        this.guessList.forEach((guest)=> {
            console.log('Invited ' + guest + ' to ' + this.name)
        })
    }
}

//event.printGuestList()

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo () {
        return this.tasks.filter((task)=>task.completed === false)
    }
}

console.log(tasks.getTasksToDo())