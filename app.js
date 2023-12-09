const app = Vue.createApp({
    // data, functions
    //template: '<h2> I am the template</h2>'
    data(){
        return {
            showBooks: true,
            books: [
                {
                    title: 'name of the wind',
                    author: 'patrick rothfuss'
                },
                {
                    title: 'the way of kings',
                    author: 'brandon sanderson'
                },
                {
                    title: 'the final empire',
                    author: 'brandon sanderson'
                }
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },

    }
})

app.mount('#app')