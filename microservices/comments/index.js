const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPost = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
    const postId = req.params.id;
    const comments = commentsByPost[postId].comments || [];
    
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;
    const comment = {commentId,content};

    comments.push(comment);

    commentsByPost[postId] = comments;

    await axios.post(
        "http://localhost:4005/events",
        {
            type: "CommentCreated",
            data: {id: commentId, content, postId}
        });

    res.status(201).send(comments);
});
 
app.listen(4001, () => {
    console.log('Listening on 4001');
  });

