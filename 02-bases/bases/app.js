const app = Vue.createApp({
    // template: `
    // <h1>Hola mundo</h1>
    // <p>{{ 1 + 1 }}</p>
    // `
    // methods:{},
    // watch: {},
    // setup(){}
    data(){
        return{
            message: "Hola mundo",
            quote: "I'm batman",
            author: "Bruce wayne"
        }
    },
    methods:{
        changeQuote( ){
           this.author = "Isaac Bicri";
           this.capitalize();
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount("#app")