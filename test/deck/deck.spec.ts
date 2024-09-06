import { Test, TestingModule } from '@nestjs/testing';
import { DeckService } from '../src/deck/deck.service';
import { DeckController } from '../src/deck/deck.controller';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deck } from '../src/deck/deck.interface';
import { mockDeck } from './mocks/deck.mock';

describe('DeckController', () => {
    let deckController: DeckController;
    let deckService: DeckService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DeckController],
            providers: [
                DeckService,
                {
                    provide: getModelToken('Deck'),
                    useValue: {
                        findById: jest.fn().mockResolvedValue(mockDeck),
                        create: jest.fn().mockResolvedValue(mockDeck),
                    },
                },
            ],
        }).compile();

        deckController = module.get<DeckController>(DeckController);
        deckService = module.get<DeckService>(DeckService);
    });

    it('should be defined', () => {
        expect(deckController).toBeDefined();
        expect(deckService).toBeDefined();
    });

    it('should get a deck by id', async () => {
        const result = await deckController.getDeck('some-id');
        expect(result).toEqual(mockDeck);
    });

    it('should create a deck', async () => {
        const result = await deckController.createDeck(mockDeck);
        expect(result).toEqual(mockDeck);
    });
});