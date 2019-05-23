const express = require('express')
const app = express()
const fibonacci = require('./src/fibonacci.js')

app.get('/', (request, response) => {
  let n = request.query.n;
  console.log("Calculate Fibonacci number for input " + n);

  let r = fibonacci(n);
  console.log("Fibonacci for number " + n + " is " + r);

  response.send({ number:n, result:r });
})

let PORT = process.env.PORT || 1235;
app.listen(PORT, () => console.log(`Fibonacci service is listening on port ${PORT}`))
