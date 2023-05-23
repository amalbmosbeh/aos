/*  // apiGateway.js
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

// Charger les fichiers proto pour les users et postes
const userProtoPath = require("./models/User.proto");
const postProtoPath = require("./models/Post.proto");

const resolvers = require("./graphql/resolvers/index");

const typeDefs = require("./graphql/typeDefs");

// Créer une nouvelle application Express
const app = express();

const userProtoDefinition = protoLoader.loadSync(userProtoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const postProtoDefinition = protoLoader.loadSync(postProtoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const userProto = grpc.loadPackageDefinition(userProtoDefinition).user;
const postProto = grpc.loadPackageDefinition(postProtoDefinition).post;

// Créer une instance ApolloServer avec le schéma et les résolveurs importés
const server = new ApolloServer({ typeDefs, resolvers });
// Appliquer le middleware ApolloServer à l'application Express
server.start().then(() => {
  app.use(cors(), bodyParser.json(), expressMiddleware(server));
});
  */
