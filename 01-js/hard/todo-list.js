/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  todo = []

  add(todoItem){
    this.todo.push(todoItem)
  }
  remove(index){
    if(index < this.todo.length) 
       this.todo.splice(index, 1)
  }
  update(index, updateTodo){
    if(index < this.todo.length)
        this.todo[index] = updateTodo
  }
  getAll(){
    return this.todo
  }
  get(index){
    if(index >= this.todo.length) return null
    return this.todo[index]
  }
  clear(){
    this.todo = []
  }
}

module.exports = Todo;
