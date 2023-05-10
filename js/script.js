const { createApp } = Vue;

createApp({
    data() {
        return {
            newToDo: {
                text: "",
                done: false
            },
            toDoList: [
                {
                    text: "fare la spesa",
                    done: true
                },
                {
                    text: "pagare le bollette",
                    done: false
                },
                {
                    text: "comprare un nuovo mouse",
                    done: false
                }
            ]
        };
    },
    methods: {
        isDone(i) {
            return (this.toDoList[i].done) ? "done" : null
        },
        deleteToDo(i) {
            this.toDoList.splice(i, 1)
        },
        addToDo() {
            let toAdd = { ...this.newToDo }
            this.toDoList.push(toAdd)
        },
        changeStatus(i) {
            this.toDoList[i].done = !this.toDoList[i].done
        }

    },
}).mount("#app");