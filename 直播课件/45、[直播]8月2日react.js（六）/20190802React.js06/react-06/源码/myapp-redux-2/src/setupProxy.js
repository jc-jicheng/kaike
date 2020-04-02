const proxy = require('http-proxy-middleware');

// console.log(process.env);


module.exports = function(app) {
    app.use(
        proxy('/api', {
            target: 'http://localhost:7777/',
            pathRewrite: {
                '^/api': ''
            }
        })
    );
    // app.use(
    //     proxy('/server', {
    //         target: 'http://localhost:9999/',
    //         pathRewrite: {
    //             '^/server': ''
    //         }
    //     })
    // );
};