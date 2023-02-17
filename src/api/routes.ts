import { Router } from 'express';

//Features
import petRoutes from './pets/routes';


const router = Router();

router.use('/pets', petRoutes);

router.get('/', (_, res) => {
    res.status(200).send('Welcome To Petsy');
});
export default router;
