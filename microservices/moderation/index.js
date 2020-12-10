const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const comment = req.body;
  //some logic for moderation
  axios.post("http://localhost:4005/events", {
    type: "CommentModerated",
    data: { id: commentId, content, postId, status: "moderated" },
  });
});

app.listen(400);
