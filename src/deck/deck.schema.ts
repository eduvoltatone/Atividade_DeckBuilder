import { Schema } from 'mongoose';

export const DeckSchema = new Schema({
    commander: { type: Object, required: true },
    cards: [{ type: Object, required: true }],
});