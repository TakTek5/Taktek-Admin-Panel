export class CreateReviewDto {
    description: string;
    rating: number;
    serviceProviderId: number;  // Assuming this refers to a `ServiceProvider` record
}