import { Handler } from 'aws-lambda';

import { invoke } from '/opt/lambda';

export const handler: Handler = async () => {
    console.log('Echo from source');
    await invoke('target', 'Event', { name: 'jquirossoto' });
};
