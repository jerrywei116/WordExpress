import * as settings from '../settings/settings';
import { WordExpressDefinitions, WordExpressDatabase, WordExpressResolvers } from 'wordexpress-schema';

//returns WordExpressDatabase object that has provides connectors to the database;
const Database = new WordExpressDatabase(settings);
const Connectors = Database.connectors;

//Reolving functions that use the database connections to resolve GraphQL queries
const Resolvers = WordExpressResolvers(Connectors, settings.publicSettings);

//GraphQL schema definitions
const Definitions = WordExpressDefinitions;

export { Connectors, Resolvers, Definitions }; 
