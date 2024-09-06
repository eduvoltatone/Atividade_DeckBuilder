import { Controller, Get } from '@nestjs/common';
import { PermissionsDecorator } from '../common/decorators/permissions.decorator';
import { Permissions } from '../common/enums/permissions.enum';

@Controller('some')
export class SomeController {
  @Get('secure-endpoint')
  @PermissionsDecorator(Permissions.READ)
  secureEndpoint() {
    // lógica da rota protegida
  }
}
