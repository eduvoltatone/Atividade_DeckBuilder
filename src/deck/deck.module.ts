import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeckService } from './deck.service';
import { DeckController } from './deck.controller';
import { DeckSchema } from './deck.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Deck', schema: DeckSchema }])],
    providers: [DeckService],
    controllers: [DeckController],
})
export class DeckModule { }