export class CreateLeadDto {
    userId: number;
    technicianId: number;
    location: string;
    date?: Date;
}