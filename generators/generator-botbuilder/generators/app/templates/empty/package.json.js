{
    "name": "<%= botname %>",
    "version": "1.0.0",
    "description": "<%= botDescription %>",
    "author": "Generated using Microsoft Bot Builder Yeoman generator v<%= version %>",
    "license": "MIT",
    "main": "<%= npmMain %>",
    "scripts": {
        "lint": "./node_modules/.bin/eslint .",
        "start": "node ./index.js",
        "test": "echo \"Error: no test specified\" && exit 1",
        "watch": "nodemon ./index.js"
    },
    "repository": {
        "type": "git",
        "url": "https://github.com"
    },
    "dependencies": {
        "botbuilder": "^4.3.0",
        "restify": "^7.7.0"
    },
    "devDependencies": {
        "eslint": "^5.13.0",
        "eslint-config-standard": "^12.0.0",
        "eslint-plugin-import": "^2.16.0",
        "eslint-plugin-node": "^8.0.1",
        "eslint-plugin-promise": "^4.0.1",
        "eslint-plugin-standard": "^4.0.0",
        "nodemon": "^1.18.10"
    }
}