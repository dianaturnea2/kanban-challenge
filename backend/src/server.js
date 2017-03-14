var app = require('express')();

app.get('/', (req, res) => {
    res.send({ hello: 'world3' });
})

app.listen(8080, () => {
    console.log('Express server listening...')
});
