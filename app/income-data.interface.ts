export interface incomeData {
    payment: number; 
    frequency: string;
    taxableInterest: number;
    unemploymentBenefits: number;
    filingStatus: {
        primary?: string; 
        secondary?: string;
        tertiary?: string;
    },
    dependent: boolean
}