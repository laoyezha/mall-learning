const TopClient = require('./top-sdk').ApiClient;
const config = require('./config/config.json')



var client = new TopClient({
    'appkey':config['appKey'],
    'appsecret':config['appSecret'],
    'url':'http://gw.api.taobao.com/router/rest'
});


function execute(apiname, params) {
    return new Promise((resolve, reject) => {
        client.execute(apiname, params, function (error, response) {
            if (!error) {
                resolve(response);
                // console.log(response);
            }
            else {
                reject(error);
                // console.log(error);
            }
        })
    })
}

function executeWithHeader(apiname, params, httpHeaders) {
    return new Promise((resolve, reject) => {
        client.executeWithHeader(apiname, params, httpHeaders, function (error, response) {
            if (!error) {
                resolve(response);
            }
            else {
                reject(error);
            }
        })
    })
}

function get(apiname, params) {
    return new Promise((resolve, reject) => {
        client.get(apiname, params, function (error, response) {
            if (!error) {
                resolve(response);
            }
            else {
                reject(error);
            }
        })
    })
}


module.exports = {
    execute: execute,
    executeWithHeader: executeWithHeader,
	get: get
};
