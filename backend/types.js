const zod = require("zod");

/*'
{
title : string
description : string
}

{for the second one we need nothing}

{
id: string;}
 

*/

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};
