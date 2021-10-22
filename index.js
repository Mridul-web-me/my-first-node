const express = require('express');
const cors = require('cors');
const { response } = require('express');
const app = express();

app.use(cors())
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello');
});

const users = [
    {
        id: 0, name: 'Mridul', email: 'md.mridul.23@gmail.com',
        phone: 01312453357
    },
    {
        id: 1, name: 'akash', email: 'md.mridul.23@gmail.com',
        phone: 01312453357
    },
    {
        id: 2, name: 'Shaon', email: 'md.mridul.23@gmail.com',
        phone: 01312453357
    },
    {
        id: 3, name: 'Mafi', email: 'md.mridul.23@gmail.com',
        phone: 01312453357
    },
    {
        id: 4, name: 'Siam', email: 'md.mridul.23@gmail.com',
        phone: 01312453357
    },
    {
        id: 5, name: 'Saamoe', email: 'md.mridul.23@gmail.com',
        phone: 01312453357
    },
    {
        id: 6, name: 'mariyam', email: 'md.mridul.23@gmail.com',
        phone: 01312453357
    },
    {
        id: 7, name: 'mehadi', email: 'md.mridul.23@gmail.com',
        phone: 01312453357,
    },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // console.log(req.query.search);
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})

// App.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})
// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'guava',]);
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy Fazli');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})