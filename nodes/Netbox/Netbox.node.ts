import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { circuitsDescription } from './resources/circuits';
import { dcimDescription } from './resources/dcim';
import { extrasDescription } from './resources/extras';
import { ipamDescription } from './resources/ipam';
import { statusDescription } from './resources/status';
import { tenancyDescription } from './resources/tenancy';
import { usersDescription } from './resources/users';
import { virtualizationDescription } from './resources/virtualization';
import { wirelessDescription } from './resources/wireless';

export class Netbox implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Netbox',
		name: 'N8nDevNetbox',
		icon: { light: 'file:./netbox.svg', dark: 'file:./netbox.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'API to access NetBox',
		defaults: { name: 'Netbox' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevNetboxApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Circuits",
					"value": "Circuits",
					"description": ""
				},
				{
					"name": "Dcim",
					"value": "Dcim",
					"description": ""
				},
				{
					"name": "Extras",
					"value": "Extras",
					"description": ""
				},
				{
					"name": "Ipam",
					"value": "Ipam",
					"description": ""
				},
				{
					"name": "Status",
					"value": "Status",
					"description": ""
				},
				{
					"name": "Tenancy",
					"value": "Tenancy",
					"description": ""
				},
				{
					"name": "Users",
					"value": "Users",
					"description": ""
				},
				{
					"name": "Virtualization",
					"value": "Virtualization",
					"description": ""
				},
				{
					"name": "Wireless",
					"value": "Wireless",
					"description": ""
				}
			],
			"default": ""
		},
		...circuitsDescription,
		...dcimDescription,
		...extrasDescription,
		...ipamDescription,
		...statusDescription,
		...tenancyDescription,
		...usersDescription,
		...virtualizationDescription,
		...wirelessDescription
		],
	};
}
