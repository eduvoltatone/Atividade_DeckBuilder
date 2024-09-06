import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { DeckService } from './deck.service';
import { JwtAuthGuard } from '../auth/jwt.auth.guard'; // Certifique-se de que o caminho está correto

@Controller('deck')
export class DeckController {
    constructor(private readonly deckService: DeckService) { }

    @Post()
    @UseGuards(JwtAuthGuard)
    async createDeck(@Body() deckData: any) {
        return this.deckService.createDeck(deckData);
    }

    @Get(':id')
    async getDeck(@Param('id') id: string) {
        return this.deckService.getDeck(id);
    }
}
