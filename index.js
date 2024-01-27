const Express = require('express');
const app = Express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, world');
})

app.listen(port,()=> console.log(`listening on port http://localhost:${port}`));