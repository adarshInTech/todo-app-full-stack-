/*
*Todo {
title : string;
description : string;
completed: boolean

*/

const mongoose = require("mongoose");

// this is not the right way to do it it has to be in .env file
mongoose.connect();
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo: todo,
};
