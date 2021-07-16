const { Post } = require("../models");

const postData = [
  {
    post_url: "https://handlebarsjs.com/guide/",
    title: "Handlebars Docs",
    created_at: new Date(),
    vote_count: 10,
    comments: [{}, {}],
    user: {
      username: "test_user",
    }
  },
  {
    post_url: "https://www.jumpingjackalope.com",
    title: "Jumping Jackalope",
    created_at: new Date(),
    vote_count: 10,
    comments: [{}, {}],
    user: {
      username: "test_user2",
    }
  },
  {
    post_url: "https://www.facebook.com",
    title: "Facebook",
    created_at: new Date(),
    vote_count: 10,
    comments: [{}, {}],
    user: {
      username: "test_user3",
    }
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
