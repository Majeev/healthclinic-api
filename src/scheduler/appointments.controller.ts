import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentsService.create(createAppointmentDto);
  }

  @Get()
  index() {
    return this.appointmentsService.getAllAppointments();
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.appointmentsService.getAppointmentById(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentsService.updateAppointmentById(
      +id,
      updateAppointmentDto,
    );
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    this.appointmentsService.removeAppointmentById(+id);
    return `Appointment with id: ${id} has been removed from database`;
  }
}
