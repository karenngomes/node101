const express = require('express');
const { v4 } = require('uuid');

const app = express();
app.use(express.json());

const projects = []

app.get('/projects', (request, response) => {
    return response.json(projects)
})

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;
    const id = v4();

    const project = { id, title, owner };

    projects.push(project);

    return response.json(project);
})

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;

    const { title, owner } = request.body;
    
    const projectIndex = projects.findIndex((project) => project.id === id);

    if (projectIndex < 0) {
        // return response.sendStatus(400);
        return response.status(400).json({ error: 'Project not found' });
    } 

    const project = { id, title, owner };

    projects[projectIndex] = project;

    return response.json(project);
})

// app.put('/projects/:id/owner/:owner_id', (request, response) => {
//     const params = request.params;
//     console.log(params)

//     return response.json([
//         'Project 5',
//         'Project 2',
//         'Project 3',
//         'Project 4'
//     ])
// })

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex((project) => project.id === id);

    if (projectIndex < 0) {
        return response.status(400).json({ error: 'Project not found' });
    }

    projects.splice(projectIndex, 1);

    return response.sendStatus(204);
})

app.listen(3333, () => {
    console.log('Backend started!');
});


