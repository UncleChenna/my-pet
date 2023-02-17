
// PET MODULES
import petService from "./service";

import { Response, NextFunction, Request } from "express";


const NAME = "Pet";

class PetController {

  constructor(public PetService = petService) {

  }

  createPet =
    async (req: Request, res: Response, next: NextFunction) => {

      try {
        const petDetails = { ...req.body };
        const { pet } = await this.PetService.create(petDetails);

        res.status(200).json({
          status: "SUCCESS",
          message: `${NAME} created successfully.`,
          pet,
        });
      } catch (error) {
        next(error)
      }
    };

  getPet =
    async (req: Request, res: Response, next: NextFunction) => {

      try {
        const queryFields = req.params;

        const { pet } = await this.PetService.get({  _id: queryFields._id });

        res.status(200).json({
          status: "SUCCESS",
          message: `${NAME} fetched successfully.`,
          pet,
        });
      } catch (error) {
        next(error)
      }
    };

  getAllPets = async (req: Request, res: Response, next: NextFunction) => {

    try {
      const queryFields = req.query;

      const { pets } = await this.PetService.getAll(queryFields);

      res.status(200).json({
        status: "SUCCESS",
        message: `${NAME}s fetched successfully.`,
        pets,
      });
    } catch (error) {
      next(error)
    }
  };

  updatePet = 
    async (req: Request, res: Response, next: NextFunction) => {
 
      try {
        const queryParams = { ...req.params };

        const queryFields = { ...req.body };


        const { pet } = await this.PetService.update({ _id: queryParams._id }, queryFields);

        res.status(200).json({
          status: "SUCCESS",
          message: `${NAME}s updated successfully.`,
          pet,
        });
      } catch (error) {
        next(error);
      }
      
    };

  deletePet = 
    async (req: Request, res: Response, next: NextFunction) => {
    
      try {
        const queryFields = { ...req.params };

        await this.PetService.delete({  _id: queryFields._id });

        res.status(201).json({
          status: "SUCCESS",
          message: `${NAME} deleted successfully.`,

        });
      } catch (error) {
        next(error)
      }
    };
}

const petCntrl = new PetController();

export default petCntrl;
