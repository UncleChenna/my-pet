// importing the modules

import { Schema, model, Document } from 'mongoose';
import { nanoid } from 'nanoid';

export interface PetDocument extends Document {
    petId: Schema.Types.ObjectId;
    name: string;
    breed: string;
    color: string;
}

const petSchema: Schema<PetDocument> = new Schema(
    {
        petId: {
            type: Schema.Types.ObjectId,
            default: () => nanoid(12)
        },

        name: {
            type: String,
            required: [true, 'Pet Must Have A Name!'],
            trim: true,
            lowercase: true,
        },
        
        breed: {
            type: String,
            required: [true, 'Pet Must Have A Breed!'],
            trim: true,
            lowercase: true,
        },
        
        color: {
            type: String,
            required: [true, 'Pet Must Have A Color!'],
            trim: true,
            lowercase: true,
        },
    },

    {
        toJSON: { 
            versionKey: false,
        },

        toObject: { versionKey: false },

        timestamps: true,
    }
);

petSchema.pre<PetDocument>('save', async function (next) {
    next();
});

// PET METHODS

const Pet = model('Pet', petSchema);

export default Pet;
