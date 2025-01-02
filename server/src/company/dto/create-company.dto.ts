export class CreateCompanyDto {
    name: string;
    email: string;
    phone: string;
    location: string;
    serviceIds: number[];
    amountDue?: number;
}