const app = Vue.createApp({
    // data, functions
    //template: '<h2> I am the template</h2>'
    data(){
        return {
            url: 'https://www.google.com',
            showBooks: true,
            books: [
                {
                    title: 'name of the wind',
                    author: 'patrick rothfuss',
                    img: 'assets/img1.jpg',
                    isFav: true
                },
                {
                    title: 'the way of kings',
                    author: 'brandon sanderson',
                    img: 'assets/img2.png',
                    isFav: false
                },
                {
                    title: 'the final empire',
                    author: 'brandon sanderson',
                    img: 'assets/img3.jpeg',
                    isFav: true
                }
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },
        toggleFav(book){
            book.isFav = !book.isFav;
        }

    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')