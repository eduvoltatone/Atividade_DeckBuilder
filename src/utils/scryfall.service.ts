import axios from 'axios';

export class ScryfallService {
    static async fetchCommanderAndDeck(commanderId: string) {
        const commanderResponse = await axios.get(`https://api.scryfall.com/cards/${commanderId}`);
        const commander = commanderResponse.data;
        const colors = commander.colors.join(',');

        const deckResponse = await axios.get(`https://api.scryfall.com/cards/search?q=colors:${colors}`);
        const deckCards = deckResponse.data.data;

        const uniqueCards = Array.from(new Set(deckCards.map(card => card.id)))
            .slice(0, 99);

        return {
            commander: commander,
            cards: uniqueCards
        };
    }
}