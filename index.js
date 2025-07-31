// importo express

const express = require('express')

const app = express()

const port = 3000

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.send('server del mio blog')
})

app.get('/list', (req, res) =>{
    const list =  [
        {
            title: "giacomo",
            contenuto: "Lorem ipsum",
            immagine: "img/fanta4.png",
            tags: "Lorem ipsum"
        },
        {
            title: "giacomo",
            contenuto: "Lorem ipsum",
            immagine: "img/fanta4.png",
            tags: "Lorem ipsum"
        },
        {
            title: "giacomo",
            contenuto: "Lorem ipsum",
            immagine: "img/fanta4.png",
            tags: "Lorem ipsum"
        },
        {
            title: "giacomo",
            contenuto: "Lorem ipsum",
            immagine: "img/fanta4.png",
            tags: "Lorem ipsum"
        },
        {
            title: "giacomo",
            contenuto: "Lorem ipsum",
            immagine: "img/fanta4.png",
            tags: "Lorem ipsum"
        },
        
    ]
})


app.listen(port, ()=>{
    console.log('Server del mio blog')
})