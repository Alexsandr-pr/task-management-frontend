import axios from "axios"






// Одна таска должна будет храниться локально в state страницы и иметь пустой массив изначально
// при переходен на страницу запрос и показывать информацию


class TaskAction {
    //добавление task
    async addTask(
        name, 
        category, 
        description, 
        dataAssessment, 
        video, 
        image 
    ) {
        try {
            const response = await axios.post(`${_API_URL}`, {
                name, category, description, dataAssessment, video, image
            })
            if(response.status === 200) {
                return "The addition was successful";
            }
        } catch(e) {
            throw new Error("Error when adding a task")
        }
    }

     //получение одной task
    async getTaskById(id) {
        try {
            const response = await axios.get(`${_API_URL}/task/${id}`);
            if(response.status === 200) {
                return response.data;
            }
        } catch(e) {
            throw new Error("Error when receiving a task")
        }
    }

    // получение всех task
    async getAllTask(id) {
        try {
            const response = await axios.get(`${_API_URL}/task/${id}`);
            if(response.status === 200) {
                return response.data;
            }
        } catch(e) {
            throw new Error("Error when receiving all tasks")
        }
    }

    async changeTask(id, data) {
        try {
            const response = await axios.put(`${_API_URL}/task/${id}`, {data});
            if(response.status === 200) {
                return "The change was successful";
            }
        } catch(e) {
            throw new Error("Error when trying to modify task files")
        }
    }

    //delete task
    async deleteTask(id) {
        try {
            const response = await axios.delete(`${_API_URL}/task/${id}`);
            if(response.status === 200) {
                return "The deleting was successful";
            }
        } catch(e) {
            throw new Error("Error when deleting a task")
        }
    }
}



export default TaskAction