const Comment = require("./Comment");

class Post {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.comments = [];
  }
  addComment(comments) {
    this.comments.push(new Comment(comments));
  }
}

module.exports = Post;
