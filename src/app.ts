import express, { Application } from 'express';
import initApp from './loaders';
import bootApp from './bootstrap'

const app: Application = express();

initApp(app);
bootApp(app);

// for testing
module.exports = app;
