export class CreateTicketDto {
    title: string;
    description: string;
    status: string;
    assignee_id: string;
    created_by_id: string;
    created_at: Date;
    updated_at: Date;
}
