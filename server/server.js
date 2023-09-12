const express = require('express')
const app = express()
const PORT = 3000


app.use(express.json());

app.get('/', (req, res) => {
  // res.send({"message": "Hello World!"})

  const message = JSON.stringify('Hello!!!')

  return res.status(200).send(message);
})


app.use('*', (req, res) => {
  res.status(404).send('The address doesn\'t exist')
})

//GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})