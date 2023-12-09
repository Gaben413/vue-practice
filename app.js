const app = Vue.createApp({
    // data, functions
    //template: '<h2> I am the template</h2>'
    data(){
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title){
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, num){
            console.log(e)
            if(num){
                console.log(num)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')