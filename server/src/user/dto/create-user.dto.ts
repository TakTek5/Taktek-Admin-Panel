export class CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location?: { lat: number; long: number };
}