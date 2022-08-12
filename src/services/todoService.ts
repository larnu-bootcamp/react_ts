import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  description: string;
}

class TodoService {

  public getAllTodos(): Promise<Todo[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ id: 1, title: "Learn TypeScript", completed: false, description: "Learn TypeScript" }]);
      }, 3000);
    });
    // return new Promise((resolve, reject) => {
    //   axios.get('http://localhost:3000/todos')
    //   .then(response => {
    //     resolve(response.data);
    //   })
    //   .catch(error => {reject(error)});
    // });
  }

}

export default TodoService;