new Vue({
    el:'#app',
    data: {
        list: [
            { title: "bread", done: false, id: Math.random() },
            { title: "butter", done: false, id: Math.random() },
            { title: "milk", done: false, id: Math.random() },
            { title: "shrimps", done: false, id: Math.random() },
            { title: "potato", done: false, id: Math.random() },
            { title: "water", done: false, id: Math.random() },
        ],
        task: ''
    },
    computed: {
        classObject() {
            return {
                red: this.list.filter(item => !item.done).length === this.list.length,
                green: this.list.filter(item => item.done).length === this.list.length,
                yellow: this.list.filter(item => !item.done).length < this.list.length,
            }
        }
    },
    methods: {
        removeTask(id) {
            this.list = this.list.filter(item => item.id !== id)
        },
        addTask(task) {                  
            if (this.task.trim()) {
                const newTask = { title: this.task, done: false, id: `${Math.random()}` }
                this.list = [...this.list, newTask]
                this.task = ''
            }
        }
    }
})