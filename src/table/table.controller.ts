import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { TableService } from './table.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("table")
@Controller('table')
export class TableController {
  constructor(private TableService: TableService) {}

  @Get()
  findAll() {
    return this.TableService.findAll();
  }

  @Post()
  create(@Body() createTableDto: CreateTableDto) {
    return this.TableService.create(createTableDto);
  }
}
