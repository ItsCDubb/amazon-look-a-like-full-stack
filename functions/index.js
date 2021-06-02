const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  // eslint-disable-next-line max-len
  "sk_test_51Iwtd6JqM4UAAfiFNeoFvWO4aFGdEZiNMsZwgbU7KhrBDVfip7e8NOts9h2oEdoQjtdhSmtioHCyPfLQgWKleIDd00A6XF3O5v"
);

// Setting up API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
// Demonstration
app.get("/", (request, response) => response.status(200).send("Hello World!"));
app.get("/chris", (request, response) =>
  response.status(200).send("Hello Chris!")
);
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recevied", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // Subunits of the currency
    currency: "usd",
  });
  // Ok - Created something
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example
// http://localhost:5001/full-stack-91e38/us-central1/api
