import express from 'express';
import exampleRoute from './example';
import token from '../middlewares/tokenHandler';

const router = express.Router();

router.use('/example', exampleRoute); 
router.get('/', (req, res, next) => {
    res.send(res.__('app title'));
});

export default router;
