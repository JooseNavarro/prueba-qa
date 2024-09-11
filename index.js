const express = require('express');
const app = express();
app.use(express.json());

let resource1 = [{ id: 1, name: "Recurso 1" }];
let users = [{ id: 1, username: "admin", password: "admin", token: "123456" }];
let resource3 = [{ id: 1, name: "Recurso 3" }];
let resource4 = [{ id: 1, name: "Recurso 4" }];

// GET /api/v1/resource1
app.get('/api/v1/resource1', (req, res) => {
    res.status(200).json(resource1);
});

// POST /api/v1/resource2
app.post('/api/v1/resource2', (req, res) => {
    const newResource = { id: resource1.length + 1, ...req.body };
    resource1.push(newResource);
    res.status(201).json(newResource);
});

// PUT /api/v1/resource3/:id
app.put('/api/v1/resource3/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const resource = resource3.find(r => r.id === id);
    if (!resource) {
        return res.status(404).json({ error: "Resource not found" });
    }
    Object.assign(resource, req.body);
    res.status(200).json(resource);
});

// DELETE /api/v1/resource4/:id
app.delete('/api/v1/resource4/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const resourceIndex = resource4.findIndex(r => r.id === id);
    if (resourceIndex === -1) {
        return res.status(404).json({ error: "Resource not found" });
    }
    resource4.splice(resourceIndex, 1);
    res.status(204).send();
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
