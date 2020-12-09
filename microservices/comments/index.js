const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPost = {};

app.get("/posts/:id/comments", (req,res) => {
    res.send(commentsByPostId[req.params.id] || []);
});