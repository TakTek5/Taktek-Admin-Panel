// create-agent.dto.ts
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAgentDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  companyId: string;
}
