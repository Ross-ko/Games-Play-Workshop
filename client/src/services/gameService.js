import request from "../utils/request.js";


const baseUrl = "http://localhost:3030/jsonstore/games";

export default {
    create(gameData) {
        return request.post(baseUrl, gameData);
    },

    getAll() {
        return request.get(baseUrl);
    },
};
