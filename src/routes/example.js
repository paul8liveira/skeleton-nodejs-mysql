import express from 'express';
import ExampleController from '../controllers/example';
import Example from '../models/example';

const router = express.Router();
const exampleController = new ExampleController(Example);

router.get('/', (req, res, next) => exampleController.get(req, res, next));

export default router;