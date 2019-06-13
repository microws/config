"use strict";

let [env, modifier] = (process.env.NODE_ENV || "development/local").split('/', 2);
let isLocal = modifier == "local";
module.exports = {
    env,
    isLocal
}
