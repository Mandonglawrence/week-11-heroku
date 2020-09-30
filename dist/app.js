"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var express_graphql_1 = require("express-graphql");
var morgan_1 = __importDefault(require("morgan"));
var graphqlModel_1 = __importDefault(require("./models/graphqlModel"));
var connection_1 = __importDefault(require("./bin/www/connection"));
connection_1.default();
exports.app = express_1.default();
exports.app.use(morgan_1.default("dev"));
exports.app.use("/graphql", express_graphql_1.graphqlHTTP({
    schema: graphqlModel_1.default,
    graphiql: true
}));
exports.default = exports.app;
