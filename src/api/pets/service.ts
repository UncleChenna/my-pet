import { Model } from 'mongoose';
import PetsModel, { PetDocument } from './Model';


type CustomModel = Model<PetDocument> & PetDocument;

class PetService {

    constructor(
        protected PetModel = PetsModel as CustomModel,
    ) {
    }

    async create(details: Record<string, unknown>) {
        const pet = await this.PetModel.create({
            ...details,
        });

        return { pet };
    };

    async get(query: Record<string, unknown>) {
        let pet = await this.PetModel.findOne({ ...query })

        if (!pet) {
            throw new Error('Invalid Pet. Pet Does Not Exist!');
        }

        return { pet };
    };

    async getAll(query: Record<string, unknown>) {
        let pets = await this.PetModel.find(query);

        return { pets };

    };

    async delete(query: Record<string, unknown>) {
        const pet = await this.PetModel.findOneAndDelete({ ...query });

        if (!pet) {
            throw new Error('Invalid Pet. Pet Does Not Exist!');
        }
        
        return { pet };
    };

    async update(query: Record<string, unknown>, details: Record<string, unknown>) {
        const pet = await this.PetModel.findOneAndUpdate(
            query,
            { ...details },
            {
                new: true,
                runValidators: true,
            }
        );

        if (!pet) {
            throw new Error('Invalid Pet. Pet Does Not Exist!');

        }

        return { pet }
    };
}

export default new PetService();
