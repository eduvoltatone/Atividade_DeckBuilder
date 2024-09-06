import { Document } from 'mongoose';

export interface Deck extends Document {
    readonly commander: any;
    readonly cards: any[];
}