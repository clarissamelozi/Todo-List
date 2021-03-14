<template>
  <div class="card">
    <h1>To-do List</h1>
    <div class="listagem">
      <ul class="list-group">
        <li class="list-group-item"
            v-for="todo in todos"
            :key="todo._id"
        >
          {{ todo.todoText }}
          <font-awesome-icon style="align-items: end" v-on:click="deleteList(todo.id)" icon="trash" class="icon-delete" />
          <font-awesome-icon style="align-items: end" v-on:click="deleteList(todo.id)" icon="check" class="icon-check" />
        </li>
      </ul>
    </div>
    <div class="adicionar-item-lista">
      <h2>Add to-do</h2>
      <input type="text"
             class="form-control"
             id="todoText"
             required
             v-model="todo.todoText"
             name="todoText" placeholder="Type something here"  />
      <button @click="saveList">Add</button>
    </div>
  </div>
</template>

<script>
import TodoDataService from "@/services/TodoDataService";

export default {
  name: "todo",
  data(){
    return {
      todo: {
        todoText: ""
      },
      todos: [],
      currentIndex: -1,
    };
  },
  methods: {
    saveList(){
      var data = {
        todoText: this.todo.todoText
      };

      TodoDataService.create(data)
          .then(response => {
            this.todo.id = response.data.id;
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
    },
    deleteList(id){
     TodoDataService.delete(id)
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
    },
    retrieveList() {
      TodoDataService.getAll()
          .then(response => {
            this.todos = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    refreshList() {
      this.retrieveList();
      this.currentIndex = -1;
      this.todo.todoText = "";
    },
  },
  mounted() {
    this.retrieveList();
  }
};
</script>

<style lang="less">
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

.card {
  max-width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  background-color: #FE5F55;
  border-radius: 2px;
  margin: auto;
  padding: 15px 15px;
}
.listagem {
  margin-top: 2rem;
  margin-bottom: 1rem;
  li {

    background-color: white;
    min-width: 300px;
    min-height: 25px;
    margin-bottom: 1.5rem;
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
  }
  .icon-delete {
    float: right;
  }
  .icon-delete:hover {
    cursor: pointer;
  }
  .icon-check{
    float: right;
    padding-right: 19px;
  }
  .icon-check{
    cursor: pointer;
  }

}
.adicionar-item-lista {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 1rem;
  }

  input {
    margin-bottom: 1rem;
  }
  input:focus {
    outline: none;
    border: none;
  }

  button {
    background-color: white;
    border-radius: none;
    box-shadow: none;
    width: 100px;
    height: 30px;
    border: none;
    color: indianred;
    border-radius: 5px;
    border: 2px solid;
  }
  button:focus {
    border: none;
    color: purple;
    border-radius: 5px;
    border: 2px solid;
    outline: none;
  }
}
</style>
