import { Handler } from 'aws-lambda';

export const handler: Handler = (event: unknown) => {
    console.log('Echo from target', JSON.stringify(event));
};
