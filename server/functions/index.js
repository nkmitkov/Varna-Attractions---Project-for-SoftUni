const server = require("./server");

const { onRequest } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const logger = require("firebase-functions/logger");

setGlobalOptions({
    region: "europe-west6"
});

exports.api = onRequest((req, res) => {
    server.emit("request", req, res);
});

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
