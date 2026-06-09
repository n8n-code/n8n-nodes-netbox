import type { INodeProperties } from 'n8n-workflow';

export const usersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					]
				}
			},
			"options": [
				{
					"name": "Users Config List",
					"value": "Users Config List",
					"action": "Users Config List",
					"description": "Return the UserConfig for the currently authenticated User.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/config/"
						}
					}
				},
				{
					"name": "Users Groups Bulk Delete",
					"value": "Users Groups Bulk Delete",
					"action": "Users Groups Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/groups/"
						}
					}
				},
				{
					"name": "Users Groups List",
					"value": "Users Groups List",
					"action": "Users Groups List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/groups/"
						}
					}
				},
				{
					"name": "Users Groups Bulk Partial Update",
					"value": "Users Groups Bulk Partial Update",
					"action": "Users Groups Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/groups/"
						}
					}
				},
				{
					"name": "Users Groups Create",
					"value": "Users Groups Create",
					"action": "Users Groups Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/groups/"
						}
					}
				},
				{
					"name": "Users Groups Bulk Update",
					"value": "Users Groups Bulk Update",
					"action": "Users Groups Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/groups/"
						}
					}
				},
				{
					"name": "Users Groups Delete",
					"value": "Users Groups Delete",
					"action": "Users Groups Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Users Groups Read",
					"value": "Users Groups Read",
					"action": "Users Groups Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Users Groups Partial Update",
					"value": "Users Groups Partial Update",
					"action": "Users Groups Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Users Groups Update",
					"value": "Users Groups Update",
					"action": "Users Groups Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Users Permissions Bulk Delete",
					"value": "Users Permissions Bulk Delete",
					"action": "Users Permissions Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/permissions/"
						}
					}
				},
				{
					"name": "Users Permissions List",
					"value": "Users Permissions List",
					"action": "Users Permissions List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/permissions/"
						}
					}
				},
				{
					"name": "Users Permissions Bulk Partial Update",
					"value": "Users Permissions Bulk Partial Update",
					"action": "Users Permissions Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/permissions/"
						}
					}
				},
				{
					"name": "Users Permissions Create",
					"value": "Users Permissions Create",
					"action": "Users Permissions Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/permissions/"
						}
					}
				},
				{
					"name": "Users Permissions Bulk Update",
					"value": "Users Permissions Bulk Update",
					"action": "Users Permissions Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/permissions/"
						}
					}
				},
				{
					"name": "Users Permissions Delete",
					"value": "Users Permissions Delete",
					"action": "Users Permissions Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/permissions/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Users Permissions Read",
					"value": "Users Permissions Read",
					"action": "Users Permissions Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/permissions/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Users Permissions Partial Update",
					"value": "Users Permissions Partial Update",
					"action": "Users Permissions Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/permissions/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Users Permissions Update",
					"value": "Users Permissions Update",
					"action": "Users Permissions Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/permissions/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Users Tokens Bulk Delete",
					"value": "Users Tokens Bulk Delete",
					"action": "Users Tokens Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/tokens/"
						}
					}
				},
				{
					"name": "Users Tokens List",
					"value": "Users Tokens List",
					"action": "Users Tokens List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/tokens/"
						}
					}
				},
				{
					"name": "Users Tokens Bulk Partial Update",
					"value": "Users Tokens Bulk Partial Update",
					"action": "Users Tokens Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/tokens/"
						}
					}
				},
				{
					"name": "Users Tokens Create",
					"value": "Users Tokens Create",
					"action": "Users Tokens Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/tokens/"
						}
					}
				},
				{
					"name": "Users Tokens Bulk Update",
					"value": "Users Tokens Bulk Update",
					"action": "Users Tokens Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/tokens/"
						}
					}
				},
				{
					"name": "Users Tokens Provision Create",
					"value": "Users Tokens Provision Create",
					"action": "Users Tokens Provision Create",
					"description": "Non-authenticated REST API endpoint via which a user may create a Token.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/tokens/provision/"
						}
					}
				},
				{
					"name": "Users Tokens Delete",
					"value": "Users Tokens Delete",
					"action": "Users Tokens Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/tokens/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Users Tokens Read",
					"value": "Users Tokens Read",
					"action": "Users Tokens Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/tokens/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Users Tokens Partial Update",
					"value": "Users Tokens Partial Update",
					"action": "Users Tokens Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/tokens/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Users Tokens Update",
					"value": "Users Tokens Update",
					"action": "Users Tokens Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/tokens/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Users Users Bulk Delete",
					"value": "Users Users Bulk Delete",
					"action": "Users Users Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/users/"
						}
					}
				},
				{
					"name": "Users Users List",
					"value": "Users Users List",
					"action": "Users Users List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/users/"
						}
					}
				},
				{
					"name": "Users Users Bulk Partial Update",
					"value": "Users Users Bulk Partial Update",
					"action": "Users Users Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/users/"
						}
					}
				},
				{
					"name": "Users Users Create",
					"value": "Users Users Create",
					"action": "Users Users Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/users/"
						}
					}
				},
				{
					"name": "Users Users Bulk Update",
					"value": "Users Users Bulk Update",
					"action": "Users Users Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/users/"
						}
					}
				},
				{
					"name": "Users Users Delete",
					"value": "Users Users Delete",
					"action": "Users Users Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/users/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Users Users Read",
					"value": "Users Users Read",
					"action": "Users Users Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/users/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Users Users Partial Update",
					"value": "Users Users Partial Update",
					"action": "Users Users Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/users/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Users Users Update",
					"value": "Users Users Update",
					"action": "Users Users Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/users/{{$parameter[\"id\"]}}/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/config/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Config List"
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
						"Users"
					],
					"operation": [
						"Users Config List"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Bulk Delete"
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
						"Users"
					],
					"operation": [
						"Users Groups Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /users/groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Id N",
			"name": "id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Id Lte",
			"name": "id__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Id Lt",
			"name": "id__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Id Gte",
			"name": "id__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Id Gt",
			"name": "id__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Name N",
			"name": "name__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Name Ic",
			"name": "name__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Name Nic",
			"name": "name__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Name Iew",
			"name": "name__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Name Niew",
			"name": "name__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Name Isw",
			"name": "name__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Name Nisw",
			"name": "name__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Name Ie",
			"name": "name__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Name Nie",
			"name": "name__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Name Empty",
			"name": "name__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Ordering",
			"name": "ordering",
			"description": "Which field to use when ordering the results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ordering",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of results to return per page.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "The initial index from which to return the results.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups List"
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
						"Users"
					],
					"operation": [
						"Users Groups List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "User Count",
			"name": "user_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "user_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Bulk Partial Update"
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
						"Users"
					],
					"operation": [
						"Users Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /users/groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Create"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Create"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Create"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Create"
					]
				}
			}
		},
		{
			"displayName": "User Count",
			"name": "user_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "user_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Create"
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
						"Users"
					],
					"operation": [
						"Users Groups Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "User Count",
			"name": "user_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "user_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Bulk Update"
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
						"Users"
					],
					"operation": [
						"Users Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Delete"
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
						"Users"
					],
					"operation": [
						"Users Groups Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /users/groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Read"
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
						"Users"
					],
					"operation": [
						"Users Groups Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "User Count",
			"name": "user_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "user_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Partial Update"
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
						"Users"
					],
					"operation": [
						"Users Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Update"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Update"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Update"
					]
				}
			}
		},
		{
			"displayName": "User Count",
			"name": "user_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "user_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Groups Update"
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
						"Users"
					],
					"operation": [
						"Users Groups Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/permissions/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Delete"
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
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /users/permissions/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "enabled",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Object Types",
			"name": "object_types",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_types",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "user_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "user",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "group_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Id N",
			"name": "id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Id Lte",
			"name": "id__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Id Lt",
			"name": "id__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Id Gte",
			"name": "id__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Id Gt",
			"name": "id__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Name N",
			"name": "name__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Name Ic",
			"name": "name__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Name Nic",
			"name": "name__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Name Iew",
			"name": "name__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Name Niew",
			"name": "name__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Name Isw",
			"name": "name__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Name Nisw",
			"name": "name__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Name Ie",
			"name": "name__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Name Nie",
			"name": "name__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Name Empty",
			"name": "name__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "name__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Object Types N",
			"name": "object_types__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_types__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Description N",
			"name": "description__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Description Ic",
			"name": "description__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Description Nic",
			"name": "description__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Description Iew",
			"name": "description__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Description Niew",
			"name": "description__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Description Isw",
			"name": "description__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Description Nisw",
			"name": "description__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Description Ie",
			"name": "description__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Description Nie",
			"name": "description__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Description Empty",
			"name": "description__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "User Id N",
			"name": "user_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "User N",
			"name": "user__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Group Id N",
			"name": "group_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Group N",
			"name": "group__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Ordering",
			"name": "ordering",
			"description": "Which field to use when ordering the results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ordering",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of results to return per page.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "The initial index from which to return the results.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions List"
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
						"Users"
					],
					"operation": [
						"Users Permissions List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/permissions/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Actions",
			"name": "actions",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of actions granted by this permission",
			"routing": {
				"send": {
					"property": "actions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Constraints",
			"name": "constraints",
			"type": "json",
			"default": "{}",
			"description": "Queryset filter matching the applicable objects of the selected type(s)",
			"routing": {
				"send": {
					"property": "constraints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Object Types",
			"name": "object_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "object_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Users",
			"name": "users",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "users",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Partial Update"
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
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /users/permissions/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Actions",
			"name": "actions",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of actions granted by this permission",
			"routing": {
				"send": {
					"property": "actions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Create"
					]
				}
			}
		},
		{
			"displayName": "Constraints",
			"name": "constraints",
			"type": "json",
			"default": "{}",
			"description": "Queryset filter matching the applicable objects of the selected type(s)",
			"routing": {
				"send": {
					"property": "constraints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Create"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Create"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Create"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Create"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Create"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Object Types",
			"name": "object_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "object_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Create"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Create"
					]
				}
			}
		},
		{
			"displayName": "Users",
			"name": "users",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "users",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Create"
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
						"Users"
					],
					"operation": [
						"Users Permissions Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/permissions/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Actions",
			"name": "actions",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of actions granted by this permission",
			"routing": {
				"send": {
					"property": "actions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Constraints",
			"name": "constraints",
			"type": "json",
			"default": "{}",
			"description": "Queryset filter matching the applicable objects of the selected type(s)",
			"routing": {
				"send": {
					"property": "constraints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Object Types",
			"name": "object_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "object_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Users",
			"name": "users",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "users",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Update"
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
						"Users"
					],
					"operation": [
						"Users Permissions Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/permissions/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Delete"
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
						"Users"
					],
					"operation": [
						"Users Permissions Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /users/permissions/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Read"
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
						"Users"
					],
					"operation": [
						"Users Permissions Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/permissions/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Actions",
			"name": "actions",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of actions granted by this permission",
			"routing": {
				"send": {
					"property": "actions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Constraints",
			"name": "constraints",
			"type": "json",
			"default": "{}",
			"description": "Queryset filter matching the applicable objects of the selected type(s)",
			"routing": {
				"send": {
					"property": "constraints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Object Types",
			"name": "object_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "object_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Users",
			"name": "users",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "users",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Partial Update"
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
						"Users"
					],
					"operation": [
						"Users Permissions Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/permissions/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Actions",
			"name": "actions",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of actions granted by this permission",
			"routing": {
				"send": {
					"property": "actions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Update"
					]
				}
			}
		},
		{
			"displayName": "Constraints",
			"name": "constraints",
			"type": "json",
			"default": "{}",
			"description": "Queryset filter matching the applicable objects of the selected type(s)",
			"routing": {
				"send": {
					"property": "constraints",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Update"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Update"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Update"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Update"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Object Types",
			"name": "object_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "object_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Update"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Update"
					]
				}
			}
		},
		{
			"displayName": "Users",
			"name": "users",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "users",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Permissions Update"
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
						"Users"
					],
					"operation": [
						"Users Permissions Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/tokens/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Delete"
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
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /users/tokens/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Write Enabled",
			"name": "write_enabled",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "write_enabled",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "user_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "User",
			"name": "user",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Created Gte",
			"name": "created__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Created Lte",
			"name": "created__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Expires",
			"name": "expires",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expires",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Expires Gte",
			"name": "expires__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expires__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Expires Lte",
			"name": "expires__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expires__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Id N",
			"name": "id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Id Lte",
			"name": "id__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Id Lt",
			"name": "id__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Id Gte",
			"name": "id__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Id Gt",
			"name": "id__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Key N",
			"name": "key__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Key Ic",
			"name": "key__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Key Nic",
			"name": "key__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Key Iew",
			"name": "key__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Key Niew",
			"name": "key__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Key Isw",
			"name": "key__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Key Nisw",
			"name": "key__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Key Ie",
			"name": "key__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Key Nie",
			"name": "key__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Key Empty",
			"name": "key__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Description N",
			"name": "description__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Description Ic",
			"name": "description__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Description Nic",
			"name": "description__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Description Iew",
			"name": "description__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Description Niew",
			"name": "description__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Description Isw",
			"name": "description__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Description Nisw",
			"name": "description__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Description Ie",
			"name": "description__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Description Nie",
			"name": "description__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Description Empty",
			"name": "description__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "User Id N",
			"name": "user_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "User N",
			"name": "user__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Ordering",
			"name": "ordering",
			"description": "Which field to use when ordering the results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ordering",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of results to return per page.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "The initial index from which to return the results.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens List"
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
						"Users"
					],
					"operation": [
						"Users Tokens List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/tokens/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Allowed Ips",
			"name": "allowed_ips",
			"type": "json",
			"default": "[]",
			"routing": {
				"send": {
					"property": "allowed_ips",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Expires",
			"name": "expires",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expires",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Last Used",
			"name": "last_used",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_used",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User",
			"name": "user",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Write Enabled",
			"name": "write_enabled",
			"type": "boolean",
			"default": true,
			"description": "Permit create/update/delete operations using this key",
			"routing": {
				"send": {
					"property": "write_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Partial Update"
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
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /users/tokens/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Create"
					]
				}
			}
		},
		{
			"displayName": "Allowed Ips",
			"name": "allowed_ips",
			"type": "json",
			"default": "[]",
			"routing": {
				"send": {
					"property": "allowed_ips",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Create"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Create"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Create"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Create"
					]
				}
			}
		},
		{
			"displayName": "Expires",
			"name": "expires",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expires",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Create"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Create"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Create"
					]
				}
			}
		},
		{
			"displayName": "Last Used",
			"name": "last_used",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_used",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Create"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User",
			"name": "user",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Create"
					]
				}
			}
		},
		{
			"displayName": "Write Enabled",
			"name": "write_enabled",
			"type": "boolean",
			"default": true,
			"description": "Permit create/update/delete operations using this key",
			"routing": {
				"send": {
					"property": "write_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Create"
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
						"Users"
					],
					"operation": [
						"Users Tokens Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/tokens/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Allowed Ips",
			"name": "allowed_ips",
			"type": "json",
			"default": "[]",
			"routing": {
				"send": {
					"property": "allowed_ips",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Expires",
			"name": "expires",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expires",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Last Used",
			"name": "last_used",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_used",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User",
			"name": "user",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Write Enabled",
			"name": "write_enabled",
			"type": "boolean",
			"default": true,
			"description": "Permit create/update/delete operations using this key",
			"routing": {
				"send": {
					"property": "write_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Update"
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
						"Users"
					],
					"operation": [
						"Users Tokens Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "POST /users/tokens/provision/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Provision Create"
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
						"Users"
					],
					"operation": [
						"Users Tokens Provision Create"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/tokens/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Delete"
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
						"Users"
					],
					"operation": [
						"Users Tokens Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /users/tokens/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Read"
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
						"Users"
					],
					"operation": [
						"Users Tokens Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/tokens/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Allowed Ips",
			"name": "allowed_ips",
			"type": "json",
			"default": "[]",
			"routing": {
				"send": {
					"property": "allowed_ips",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Expires",
			"name": "expires",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expires",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Last Used",
			"name": "last_used",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_used",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User",
			"name": "user",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Write Enabled",
			"name": "write_enabled",
			"type": "boolean",
			"default": true,
			"description": "Permit create/update/delete operations using this key",
			"routing": {
				"send": {
					"property": "write_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Partial Update"
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
						"Users"
					],
					"operation": [
						"Users Tokens Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/tokens/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Update"
					]
				}
			}
		},
		{
			"displayName": "Allowed Ips",
			"name": "allowed_ips",
			"type": "json",
			"default": "[]",
			"routing": {
				"send": {
					"property": "allowed_ips",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Update"
					]
				}
			}
		},
		{
			"displayName": "Created",
			"name": "created",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "created",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Update"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Update"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Update"
					]
				}
			}
		},
		{
			"displayName": "Expires",
			"name": "expires",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expires",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Update"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Update"
					]
				}
			}
		},
		{
			"displayName": "Last Used",
			"name": "last_used",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_used",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Update"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User",
			"name": "user",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "user",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Update"
					]
				}
			}
		},
		{
			"displayName": "Write Enabled",
			"name": "write_enabled",
			"type": "boolean",
			"default": true,
			"description": "Permit create/update/delete operations using this key",
			"routing": {
				"send": {
					"property": "write_enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Tokens Update"
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
						"Users"
					],
					"operation": [
						"Users Tokens Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/users/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Delete"
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
						"Users"
					],
					"operation": [
						"Users Users Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /users/users/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "first_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Is Staff",
			"name": "is_staff",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "is_staff",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "is_active",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Q",
			"name": "q",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "q",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Group Id",
			"name": "group_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Id N",
			"name": "id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Id Lte",
			"name": "id__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Id Lt",
			"name": "id__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Id Gte",
			"name": "id__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Id Gt",
			"name": "id__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "id__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Username N",
			"name": "username__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Username Ic",
			"name": "username__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Username Nic",
			"name": "username__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Username Iew",
			"name": "username__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Username Niew",
			"name": "username__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Username Isw",
			"name": "username__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Username Nisw",
			"name": "username__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Username Ie",
			"name": "username__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Username Nie",
			"name": "username__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Username Empty",
			"name": "username__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "First Name N",
			"name": "first_name__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "first_name__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "First Name Ic",
			"name": "first_name__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "first_name__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "First Name Nic",
			"name": "first_name__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "first_name__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "First Name Iew",
			"name": "first_name__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "first_name__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "First Name Niew",
			"name": "first_name__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "first_name__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "First Name Isw",
			"name": "first_name__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "first_name__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "First Name Nisw",
			"name": "first_name__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "first_name__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "First Name Ie",
			"name": "first_name__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "first_name__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "First Name Nie",
			"name": "first_name__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "first_name__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "First Name Empty",
			"name": "first_name__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "first_name__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Last Name N",
			"name": "last_name__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_name__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Last Name Ic",
			"name": "last_name__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_name__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Last Name Nic",
			"name": "last_name__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_name__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Last Name Iew",
			"name": "last_name__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_name__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Last Name Niew",
			"name": "last_name__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_name__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Last Name Isw",
			"name": "last_name__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_name__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Last Name Nisw",
			"name": "last_name__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_name__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Last Name Ie",
			"name": "last_name__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_name__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Last Name Nie",
			"name": "last_name__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_name__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Last Name Empty",
			"name": "last_name__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_name__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Email N",
			"name": "email__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Email Ic",
			"name": "email__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Email Nic",
			"name": "email__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Email Iew",
			"name": "email__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Email Niew",
			"name": "email__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Email Isw",
			"name": "email__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Email Nisw",
			"name": "email__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Email Ie",
			"name": "email__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Email Nie",
			"name": "email__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Email Empty",
			"name": "email__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Group Id N",
			"name": "group_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Group N",
			"name": "group__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Ordering",
			"name": "ordering",
			"description": "Which field to use when ordering the results.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ordering",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of results to return per page.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "The initial index from which to return the results.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users List"
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
						"Users"
					],
					"operation": [
						"Users Users List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/users/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Date Joined",
			"name": "date_joined",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "date_joined",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "groups",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The groups this user belongs to. A user will get all permissions granted to each of their groups.",
			"routing": {
				"send": {
					"property": "groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"type": "boolean",
			"default": true,
			"description": "Designates whether this user should be treated as active. Unselect this instead of deleting accounts.",
			"routing": {
				"send": {
					"property": "is_active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Is Staff",
			"name": "is_staff",
			"type": "boolean",
			"default": true,
			"description": "Designates whether the user can log into this admin site.",
			"routing": {
				"send": {
					"property": "is_staff",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"description": "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Partial Update"
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
						"Users"
					],
					"operation": [
						"Users Users Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /users/users/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Create"
					]
				}
			}
		},
		{
			"displayName": "Date Joined",
			"name": "date_joined",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "date_joined",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Create"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Create"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Create"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Create"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "groups",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The groups this user belongs to. A user will get all permissions granted to each of their groups.",
			"routing": {
				"send": {
					"property": "groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Create"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Create"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"type": "boolean",
			"default": true,
			"description": "Designates whether this user should be treated as active. Unselect this instead of deleting accounts.",
			"routing": {
				"send": {
					"property": "is_active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Create"
					]
				}
			}
		},
		{
			"displayName": "Is Staff",
			"name": "is_staff",
			"type": "boolean",
			"default": true,
			"description": "Designates whether the user can log into this admin site.",
			"routing": {
				"send": {
					"property": "is_staff",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Create"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Create"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"description": "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Create"
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
						"Users"
					],
					"operation": [
						"Users Users Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/users/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Date Joined",
			"name": "date_joined",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "date_joined",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "groups",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The groups this user belongs to. A user will get all permissions granted to each of their groups.",
			"routing": {
				"send": {
					"property": "groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"type": "boolean",
			"default": true,
			"description": "Designates whether this user should be treated as active. Unselect this instead of deleting accounts.",
			"routing": {
				"send": {
					"property": "is_active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Is Staff",
			"name": "is_staff",
			"type": "boolean",
			"default": true,
			"description": "Designates whether the user can log into this admin site.",
			"routing": {
				"send": {
					"property": "is_staff",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"description": "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Bulk Update"
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
						"Users"
					],
					"operation": [
						"Users Users Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/users/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Delete"
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
						"Users"
					],
					"operation": [
						"Users Users Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /users/users/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Read"
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
						"Users"
					],
					"operation": [
						"Users Users Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/users/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Date Joined",
			"name": "date_joined",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "date_joined",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Partial Update"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "groups",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The groups this user belongs to. A user will get all permissions granted to each of their groups.",
			"routing": {
				"send": {
					"property": "groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"type": "boolean",
			"default": true,
			"description": "Designates whether this user should be treated as active. Unselect this instead of deleting accounts.",
			"routing": {
				"send": {
					"property": "is_active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Is Staff",
			"name": "is_staff",
			"type": "boolean",
			"default": true,
			"description": "Designates whether the user can log into this admin site.",
			"routing": {
				"send": {
					"property": "is_staff",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"description": "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Partial Update"
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
						"Users"
					],
					"operation": [
						"Users Users Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/users/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Update"
					]
				}
			}
		},
		{
			"displayName": "Date Joined",
			"name": "date_joined",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "date_joined",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Update"
					]
				}
			}
		},
		{
			"displayName": "Display",
			"name": "display",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "display",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Update"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Update"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Update"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "groups",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The groups this user belongs to. A user will get all permissions granted to each of their groups.",
			"routing": {
				"send": {
					"property": "groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Update"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Update"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"type": "boolean",
			"default": true,
			"description": "Designates whether this user should be treated as active. Unselect this instead of deleting accounts.",
			"routing": {
				"send": {
					"property": "is_active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Update"
					]
				}
			}
		},
		{
			"displayName": "Is Staff",
			"name": "is_staff",
			"type": "boolean",
			"default": true,
			"description": "Designates whether the user can log into this admin site.",
			"routing": {
				"send": {
					"property": "is_staff",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Update"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Update"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"description": "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Users Users Update"
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
						"Users"
					],
					"operation": [
						"Users Users Update"
					]
				}
			}
		},
];
