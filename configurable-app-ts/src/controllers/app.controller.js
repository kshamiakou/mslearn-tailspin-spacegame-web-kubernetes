"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRootRequest = void 0;
const handleRootRequest = (request, response) => {
    response.send({ ga: 1 });
};
exports.handleRootRequest = handleRootRequest;
