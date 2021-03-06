"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../utils/logger");
function testV1(req, res, next) {
    logger_1.logger.info('testV1');
    res.json(200, '测试接口版本功能，返回指定的版本V1');
    return next();
}
exports.testV1 = testV1;
function testV2(req, res, next) {
    logger_1.logger.info('testV2');
    res.json(200, '测试接口版本功能，默认请求最新的版本V2');
    return next();
}
exports.testV2 = testV2;
//# sourceMappingURL=test.controller.js.map