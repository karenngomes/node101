const express = require('express');

const app = express();
app.use(express.json());

app.get('/projects', (request, response) => {
    // return response.send('Hello World'); // enviar como string
    const { title } = request.query;
    console.log(title)
    return response.json([
        'Project 1',
        'Project 2',
        'Project 3'
    ])
})

app.post('/projects', (request, response) => {
    const body = request.body;

    console.log(body)

    return response.json([
        'Project 1',
        'Project 2',
        'Project 3',
        'Project 4'
    ])
})

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    console.log(id)

    return response.json([
        'Project 5',
        'Project 2',
        'Project 3',
        'Project 4'
    ])
})

app.put('/projects/:id/owner/:owner_id', (request, response) => {
    const params = request.params;
    console.log(params)

    return response.json([
        'Project 5',
        'Project 2',
        'Project 3',
        'Project 4'
    ])
})

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Project 5',
        'Project 2',
        'Project 4'
    ])
})

app.listen(3333, () => {
    console.log('Backend started!');
});


