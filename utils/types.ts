export type Service = {
    id: number;
    service: string;
    status: 'up' | 'warning' | 'error' | 'unexpectedStatus';
};