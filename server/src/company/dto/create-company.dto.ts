export class CreateCompanyDto {
    name: string;
    email: string;
    phone: string;
    location: string;
    serviceId: number;
    amountDue?: number;
}