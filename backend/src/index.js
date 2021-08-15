const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    // return response.send('Hello World'); // enviar como string
    return response.json([
        'Project 1',
        'Project 2',
        'Project 3'
    ])
})

app.post('/projects', (request, response) => {
    return response.json([
        'Project 1',
        'Project 2',
        'Project 3',
        'Project 4'
    ])
})

app.put('/projects', (request, response) => {
    return response.json([
        'Project 5',
        'Project 2',
        'Project 3',
        'Project 4'
    ])
})

app.delete('/projects', (request, response) => {
    return response.json([
        'Project 5',
        'Project 2',
        'Project 4'
    ])
})

app.listen(3333, () => {
    console.log('Backend started!');
});


