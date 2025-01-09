const Post = require("./Post");

class Author {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }

  criaPost(title) {
    const novoPost = new Post(title, this);
    this.posts.push(novoPost);
    return novoPost;
  }
}

module.exports = Author;
