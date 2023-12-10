/*
Filename: ComplexApp.js
Description: A complex JavaScript application that simulates a social media platform with users, posts, and likes.
*/

// User class represents a user in the social media platform
class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.posts = [];
  }

  createPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
  }

  likePost(post) {
    post.addLike(this);
  }
}

// Post class represents a post made by a user
class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;
    this.likes = [];
  }

  addLike(user) {
    this.likes.push(user);
  }
}

// User Database stores all user records
class UserDatabase {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  getUserById(id) {
    return this.users.find((user) => user.id === id);
  }
}

// Initialize User Database and some example users
const userDb = new UserDatabase();
const user1 = new User(1, "John", 25);
const user2 = new User(2, "Jane", 30);
userDb.addUser(user1);
userDb.addUser(user2);


// Simulate user actions
user1.createPost("Hello, world!");
user2.createPost("I love social media!");
user1.likePost(user2.posts[0]);

// Output user information and their posts
console.log(`${user1.name} (${user1.age} years old)`);
user1.posts.forEach((post) => {
  console.log(`Post: ${post.content}`);
  console.log(`Likes: ${post.likes.length}`);
});

console.log(`${user2.name} (${user2.age} years old)`);
user2.posts.forEach((post) => {
  console.log(`Post: ${post.content}`);
  console.log(`Likes: ${post.likes.length}`);
});

// Get a user by their ID from the User Database
const retrievedUser = userDb.getUserById(2);
console.log(`Retrieved User: ${retrievedUser.name} (${retrievedUser.age} years old)`);