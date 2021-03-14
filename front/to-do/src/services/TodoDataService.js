import http from "../http-common";

class TodoDataService {

    create(data){
        return http.post("/todos", data);
    }

    getAll() {
        return http.get("/todos");
    }

    delete(id) {
        return http.delete(`/todos/${id}`);
    }
}

export default new TodoDataService();