import { Body, Controller, Get, Post, Patch, Param, Delete, HttpCode, HttpStatus,  } from '@nestjs/common';
import { CreateTableDto} from './dto/create-table.dto';
import { UpdateTableDto } from './dto/uptade-table.dto';
import { TableService } from './table.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Table } from './entities/table.entity';
@ApiTags("table")
@Controller('table')
export class TableController {
  constructor(private TableService: TableService) {}

  @Get()
  @ApiOperation({
    summary: 'Visualizar todas as mesas',
  })
  findAll() {
    return this.TableService.findAll();
  }


  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar uma mesa',
  })
  findOne(@Param('id') id: string): Promise<Table> {
    return this.TableService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar uma mesa',
  })
  create(@Body() createTableDto: CreateTableDto) {
    return this.TableService.create(createTableDto);
  }


  @Patch(':id')  
  @ApiOperation({
      summary: 'Editar uma mesa pelo ID',
    })
    update(@Param('id') id: string, @Body() dto: UpdateTableDto): Promise<Table> {
      return this.TableService.update(id, dto);
    }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover uma mesa pelo ID',
  })
  delete(@Param('id') id: string) {
    this.TableService.delete(id);
  }
}
