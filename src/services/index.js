import axios from 'axios';

const ApiService = {
    usersList: async () => {
        const path = `http://jsonplaceholder.typicode.com/users`;
        return await axios.get(path)
            .then(response => response)
            .catch(error => error);
    },
    
    postsList: async () => {
        const path = `http://jsonplaceholder.typicode.com/posts`;
        return await axios.get(path)
            .then(response => response)
            .catch(error => error);
    },
    
    albumsList: async () => {
        const path = `http://jsonplaceholder.typicode.com/albums`;
        return await axios.get(path)
            .then(response => response)
            .catch(error => error);
    },
    
    photosList: async () => {
        const path = `http://jsonplaceholder.typicode.com/photos`;
        return await axios.get(path)
            .then(response => response)
            .catch(error => error);
    },
};

export default ApiService;
