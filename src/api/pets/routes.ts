// importing the modules

import { Router } from 'express';

import Controller from './controller';

const {
    createPet,
    getAllPets,
    getPet,
    updatePet,
    deletePet
} = Controller;

const router = Router();

router.get('/', getAllPets);

router.get('/:_id/single', getPet);

router.route('/')
      .post(createPet);

router.route('/:_id/single')
      .patch(updatePet)
      .delete(deletePet);

export default router;
