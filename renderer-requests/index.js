import { ipcRenderer } from 'electron';

export default class requests {
    constructor() {

    }

    static async get(url, headers = {}) {

    }

    static async post(url, data, headers = {}) {

    }

    static async put(url, data, headers = {}) {

    }

    static async delete(url, headers = {}) {

    }
};

export class HTTPResponse {
    constructor(status, data, headers) {
        this.status = status;
        this.data = data;
        this.headers = headers;
    }
};