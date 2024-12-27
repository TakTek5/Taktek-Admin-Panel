export class CreateTechnicianDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    photo: string;
    location: string;
    companyId: number;
    status?: boolean;
    rating?: number;
}