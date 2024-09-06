import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deck } from './deck.interface';

@Injectable()
export class DeckService {
    constructor(@InjectModel('Deck') private readonly deckModel: Model<Deck>) { }

    async createDeck(deckData: any): Promise<Deck> {
        const createdDeck = new this.deckModel(deckData);
        return await createdDeck.save();
    }

    async getDeck(id: string): Promise<Deck> {
        return await this.deckModel.findById(id).exec();
    }
}