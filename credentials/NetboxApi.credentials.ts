import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class NetboxApi implements ICredentialType {
        name = 'N8nDevNetboxApi';

        displayName = 'Netbox API';

        icon: Icon = { light: 'file:../nodes/Netbox/netbox.svg', dark: 'file:../nodes/Netbox/netbox.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://demo.netbox.dev/api',
                        required: true,
                        placeholder: 'https://demo.netbox.dev/api',
                        description: 'The base URL of your Netbox API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
