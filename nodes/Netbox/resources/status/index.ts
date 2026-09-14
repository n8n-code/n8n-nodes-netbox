import type { INodeProperties } from 'n8n-workflow';

export const statusDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					]
				}
			},
			"options": [
				{
					"name": "Status List",
					"value": "Status List",
					"action": "Status List",
					"description": "A lightweight read-only endpoint for conveying NetBox's current operational status.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/status/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /status/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Status List"
					]
				}
			}
		},
		{
			"displayName": "Bearer API Key",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "API key for Bearer (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Status List"
					]
				}
			}
		},
];
