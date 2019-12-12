const express = require('express');

const PORT = 3000;
const app = express();

app.use('/users', (req, res, next) => {
    let template = '<h1>Users page</h1>';
    template += '<ul>';
    template += '<li>User 1</li>';
    template += '<li>User 2</li>';
    template += '<li>User 3</li>';
    template += '</ul>';
    template += '<p><a href="/">Home</a></p>';
    res.send(template);
});

app.use('/', (req, res, next) => {
    let template = '<h1>Users homepage</h1>';
    template += '<p><a href="/users">See all users</a></p>';
    res.send(template);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});