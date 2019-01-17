const express = require('express');
const app = express();
//const mongoose = mongoose();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/public"));

const userRoutes = require("./routes/userRoutes.js");
app.use(userRoutes);

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactfullstack");

// app.get('*', (request, response) => {
// 	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });





app.listen(PORT, function () {
    console.log('Data being served from http://localhost:3001');
});