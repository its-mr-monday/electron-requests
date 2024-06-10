const { ipcMain } = require('electron');
const axios = require('axios');
const https = require('https');

class HTTPError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }

};

class HTTPAtributes {
    constructor() {

    }
};

const InitializeRequests = (attributes) => {
    //attributes must be of type HTTPAtributes
    if (attributes instanceof HTTPAtributes) {

    }
    throw new HTTPError('attributes must be of type HTTPAtributes');
}

module.exports = {
    InitializeRequests,
    HTTPAtributes
}
