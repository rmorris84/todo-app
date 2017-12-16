## TODO LIST APP API

Build a JSON API with node and mongodb

## DATA

Field: Type

name: String
completed: Boolean
createdDate: Date

## Routes

<!-- prettier-ignore -->
Verb 		Route 							Description
----------------------------------------

<!-- prettier-ignore -->
GET 		/api/todos 					List all todos
POST 		/api/todos 					Create new todo
GET 		/api/todos/:todoId 	Retrieve a todo
PUT 		/api/todos/:todoId 	Update a todo
DELETE 	/api/todos/:todoId 	Delete a todo
