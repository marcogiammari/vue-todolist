const { createApp } = Vue;

createApp({
    data() {
        return {
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
        }
    },
}).mount("#app");