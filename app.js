const express = require('express')
const app = express()
const fibonacci = require('./src/fibonacci.js')

app.get('/', (request, response) => {
  let n = request.query.n;
  console.log("Calculate Fibonacci number for input " + n);

  try {
    let r = fibonacci(n);
    console.log("Fibonacci for number " + n + " is " + r);
    response.send({ number:n, result:r });
  } catch (Error e) {
    console.error(e);
    response.send({ error:e });
  }
})

let PORT = process.env.PORT || 1235;
app.listen(PORT, () => console.log(`Fibonacci service is listening on port ${PORT}`))
