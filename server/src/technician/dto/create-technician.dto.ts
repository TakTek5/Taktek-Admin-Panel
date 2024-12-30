export class CreateTechnicianDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    photo: string;
    location?: { lat: number; long: number };
    companyId: number;
    status?: boolean;
    rating?: number;
}