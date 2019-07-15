const express = require('express')
const app = express()


let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
]

//item verwijderen
app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    res.status(204).end()
})

//één item opvragen
app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    if(person) {
        res.send(person)
    } else {
        res.status(404).end()
    }
})

//informatie over lijst
app.get('/api/info', (req, res) => {
    const numberofpeople = persons.length
    const date = new Date()
    console.log(date)
    res.write(`<p>Phonebook has info on ${numberofpeople} people.</p>`)
    res.write(`<p>${date}</p>`)
    res.end()
})

//volledige lijst krijgen
app.get('/api/persons', (req, res) => {
    res.json(persons)
})

const port = 3001
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})