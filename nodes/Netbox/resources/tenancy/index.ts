import type { INodeProperties } from 'n8n-workflow';

export const tenancyDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					]
				}
			},
			"options": [
				{
					"name": "Tenancy Contact Assignments Bulk Delete",
					"value": "Tenancy Contact Assignments Bulk Delete",
					"action": "Tenancy Contact Assignments Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenancy/contact-assignments/"
						}
					}
				},
				{
					"name": "Tenancy Contact Assignments List",
					"value": "Tenancy Contact Assignments List",
					"action": "Tenancy Contact Assignments List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenancy/contact-assignments/"
						}
					}
				},
				{
					"name": "Tenancy Contact Assignments Bulk Partial Update",
					"value": "Tenancy Contact Assignments Bulk Partial Update",
					"action": "Tenancy Contact Assignments Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenancy/contact-assignments/"
						}
					}
				},
				{
					"name": "Tenancy Contact Assignments Create",
					"value": "Tenancy Contact Assignments Create",
					"action": "Tenancy Contact Assignments Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenancy/contact-assignments/"
						}
					}
				},
				{
					"name": "Tenancy Contact Assignments Bulk Update",
					"value": "Tenancy Contact Assignments Bulk Update",
					"action": "Tenancy Contact Assignments Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tenancy/contact-assignments/"
						}
					}
				},
				{
					"name": "Tenancy Contact Assignments Delete",
					"value": "Tenancy Contact Assignments Delete",
					"action": "Tenancy Contact Assignments Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenancy/contact-assignments/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Contact Assignments Read",
					"value": "Tenancy Contact Assignments Read",
					"action": "Tenancy Contact Assignments Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenancy/contact-assignments/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Contact Assignments Partial Update",
					"value": "Tenancy Contact Assignments Partial Update",
					"action": "Tenancy Contact Assignments Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenancy/contact-assignments/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Contact Assignments Update",
					"value": "Tenancy Contact Assignments Update",
					"action": "Tenancy Contact Assignments Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tenancy/contact-assignments/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Contact Groups Bulk Delete",
					"value": "Tenancy Contact Groups Bulk Delete",
					"action": "Tenancy Contact Groups Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenancy/contact-groups/"
						}
					}
				},
				{
					"name": "Tenancy Contact Groups List",
					"value": "Tenancy Contact Groups List",
					"action": "Tenancy Contact Groups List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenancy/contact-groups/"
						}
					}
				},
				{
					"name": "Tenancy Contact Groups Bulk Partial Update",
					"value": "Tenancy Contact Groups Bulk Partial Update",
					"action": "Tenancy Contact Groups Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenancy/contact-groups/"
						}
					}
				},
				{
					"name": "Tenancy Contact Groups Create",
					"value": "Tenancy Contact Groups Create",
					"action": "Tenancy Contact Groups Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenancy/contact-groups/"
						}
					}
				},
				{
					"name": "Tenancy Contact Groups Bulk Update",
					"value": "Tenancy Contact Groups Bulk Update",
					"action": "Tenancy Contact Groups Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tenancy/contact-groups/"
						}
					}
				},
				{
					"name": "Tenancy Contact Groups Delete",
					"value": "Tenancy Contact Groups Delete",
					"action": "Tenancy Contact Groups Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenancy/contact-groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Contact Groups Read",
					"value": "Tenancy Contact Groups Read",
					"action": "Tenancy Contact Groups Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenancy/contact-groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Contact Groups Partial Update",
					"value": "Tenancy Contact Groups Partial Update",
					"action": "Tenancy Contact Groups Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenancy/contact-groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Contact Groups Update",
					"value": "Tenancy Contact Groups Update",
					"action": "Tenancy Contact Groups Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tenancy/contact-groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Contact Roles Bulk Delete",
					"value": "Tenancy Contact Roles Bulk Delete",
					"action": "Tenancy Contact Roles Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenancy/contact-roles/"
						}
					}
				},
				{
					"name": "Tenancy Contact Roles List",
					"value": "Tenancy Contact Roles List",
					"action": "Tenancy Contact Roles List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenancy/contact-roles/"
						}
					}
				},
				{
					"name": "Tenancy Contact Roles Bulk Partial Update",
					"value": "Tenancy Contact Roles Bulk Partial Update",
					"action": "Tenancy Contact Roles Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenancy/contact-roles/"
						}
					}
				},
				{
					"name": "Tenancy Contact Roles Create",
					"value": "Tenancy Contact Roles Create",
					"action": "Tenancy Contact Roles Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenancy/contact-roles/"
						}
					}
				},
				{
					"name": "Tenancy Contact Roles Bulk Update",
					"value": "Tenancy Contact Roles Bulk Update",
					"action": "Tenancy Contact Roles Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tenancy/contact-roles/"
						}
					}
				},
				{
					"name": "Tenancy Contact Roles Delete",
					"value": "Tenancy Contact Roles Delete",
					"action": "Tenancy Contact Roles Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenancy/contact-roles/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Contact Roles Read",
					"value": "Tenancy Contact Roles Read",
					"action": "Tenancy Contact Roles Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenancy/contact-roles/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Contact Roles Partial Update",
					"value": "Tenancy Contact Roles Partial Update",
					"action": "Tenancy Contact Roles Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenancy/contact-roles/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Contact Roles Update",
					"value": "Tenancy Contact Roles Update",
					"action": "Tenancy Contact Roles Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tenancy/contact-roles/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Contacts Bulk Delete",
					"value": "Tenancy Contacts Bulk Delete",
					"action": "Tenancy Contacts Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenancy/contacts/"
						}
					}
				},
				{
					"name": "Tenancy Contacts List",
					"value": "Tenancy Contacts List",
					"action": "Tenancy Contacts List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenancy/contacts/"
						}
					}
				},
				{
					"name": "Tenancy Contacts Bulk Partial Update",
					"value": "Tenancy Contacts Bulk Partial Update",
					"action": "Tenancy Contacts Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenancy/contacts/"
						}
					}
				},
				{
					"name": "Tenancy Contacts Create",
					"value": "Tenancy Contacts Create",
					"action": "Tenancy Contacts Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenancy/contacts/"
						}
					}
				},
				{
					"name": "Tenancy Contacts Bulk Update",
					"value": "Tenancy Contacts Bulk Update",
					"action": "Tenancy Contacts Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tenancy/contacts/"
						}
					}
				},
				{
					"name": "Tenancy Contacts Delete",
					"value": "Tenancy Contacts Delete",
					"action": "Tenancy Contacts Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenancy/contacts/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Contacts Read",
					"value": "Tenancy Contacts Read",
					"action": "Tenancy Contacts Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenancy/contacts/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Contacts Partial Update",
					"value": "Tenancy Contacts Partial Update",
					"action": "Tenancy Contacts Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenancy/contacts/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Contacts Update",
					"value": "Tenancy Contacts Update",
					"action": "Tenancy Contacts Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tenancy/contacts/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Tenant Groups Bulk Delete",
					"value": "Tenancy Tenant Groups Bulk Delete",
					"action": "Tenancy Tenant Groups Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenancy/tenant-groups/"
						}
					}
				},
				{
					"name": "Tenancy Tenant Groups List",
					"value": "Tenancy Tenant Groups List",
					"action": "Tenancy Tenant Groups List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenancy/tenant-groups/"
						}
					}
				},
				{
					"name": "Tenancy Tenant Groups Bulk Partial Update",
					"value": "Tenancy Tenant Groups Bulk Partial Update",
					"action": "Tenancy Tenant Groups Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenancy/tenant-groups/"
						}
					}
				},
				{
					"name": "Tenancy Tenant Groups Create",
					"value": "Tenancy Tenant Groups Create",
					"action": "Tenancy Tenant Groups Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenancy/tenant-groups/"
						}
					}
				},
				{
					"name": "Tenancy Tenant Groups Bulk Update",
					"value": "Tenancy Tenant Groups Bulk Update",
					"action": "Tenancy Tenant Groups Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tenancy/tenant-groups/"
						}
					}
				},
				{
					"name": "Tenancy Tenant Groups Delete",
					"value": "Tenancy Tenant Groups Delete",
					"action": "Tenancy Tenant Groups Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenancy/tenant-groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Tenant Groups Read",
					"value": "Tenancy Tenant Groups Read",
					"action": "Tenancy Tenant Groups Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenancy/tenant-groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Tenant Groups Partial Update",
					"value": "Tenancy Tenant Groups Partial Update",
					"action": "Tenancy Tenant Groups Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenancy/tenant-groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Tenant Groups Update",
					"value": "Tenancy Tenant Groups Update",
					"action": "Tenancy Tenant Groups Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tenancy/tenant-groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Tenants Bulk Delete",
					"value": "Tenancy Tenants Bulk Delete",
					"action": "Tenancy Tenants Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenancy/tenants/"
						}
					}
				},
				{
					"name": "Tenancy Tenants List",
					"value": "Tenancy Tenants List",
					"action": "Tenancy Tenants List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenancy/tenants/"
						}
					}
				},
				{
					"name": "Tenancy Tenants Bulk Partial Update",
					"value": "Tenancy Tenants Bulk Partial Update",
					"action": "Tenancy Tenants Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenancy/tenants/"
						}
					}
				},
				{
					"name": "Tenancy Tenants Create",
					"value": "Tenancy Tenants Create",
					"action": "Tenancy Tenants Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/tenancy/tenants/"
						}
					}
				},
				{
					"name": "Tenancy Tenants Bulk Update",
					"value": "Tenancy Tenants Bulk Update",
					"action": "Tenancy Tenants Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tenancy/tenants/"
						}
					}
				},
				{
					"name": "Tenancy Tenants Delete",
					"value": "Tenancy Tenants Delete",
					"action": "Tenancy Tenants Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/tenancy/tenants/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Tenants Read",
					"value": "Tenancy Tenants Read",
					"action": "Tenancy Tenants Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tenancy/tenants/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Tenants Partial Update",
					"value": "Tenancy Tenants Partial Update",
					"action": "Tenancy Tenants Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/tenancy/tenants/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Tenancy Tenants Update",
					"value": "Tenancy Tenants Update",
					"action": "Tenancy Tenants Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/tenancy/tenants/{{$parameter[\"id\"]}}/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /tenancy/contact-assignments/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Delete"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /tenancy/contact-assignments/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Content Type ID",
			"name": "content_type_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Object ID",
			"name": "object_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "priority",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "content_type",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Contact ID",
			"name": "contact_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "contact_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Role ID",
			"name": "role_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "role_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Role",
			"name": "role",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "role",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "ID N",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "ID Lte",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "ID Lt",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "ID Gte",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "ID Gt",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Content Type ID N",
			"name": "content_type_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Object ID N",
			"name": "object_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Object ID Lte",
			"name": "object_id__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_id__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Object ID Lt",
			"name": "object_id__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_id__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Object ID Gte",
			"name": "object_id__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_id__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Object ID Gt",
			"name": "object_id__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_id__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Priority N",
			"name": "priority__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "priority__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Created N",
			"name": "created__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Created Lt",
			"name": "created__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Created Gt",
			"name": "created__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated N",
			"name": "last_updated__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Lte",
			"name": "last_updated__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Lt",
			"name": "last_updated__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Gte",
			"name": "last_updated__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Gt",
			"name": "last_updated__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Content Type N",
			"name": "content_type__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Contact ID N",
			"name": "contact_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "contact_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Role ID N",
			"name": "role_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "role_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "Role N",
			"name": "role__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "role__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenancy/contact-assignments/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Contact",
			"name": "contact",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Type",
			"name": "content_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "content_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Object",
			"name": "object",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "object",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Object ID",
			"name": "object_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "object_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "options",
			"default": "primary",
			"options": [
				{
					"name": "Primary",
					"value": "primary"
				},
				{
					"name": "Secondary",
					"value": "secondary"
				},
				{
					"name": "Tertiary",
					"value": "tertiary"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				}
			],
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Role",
			"name": "role",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /tenancy/contact-assignments/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Contact",
			"name": "contact",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Type",
			"name": "content_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "content_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Create"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Create"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Create"
					]
				}
			}
		},
		{
			"displayName": "Object",
			"name": "object",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "object",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Object ID",
			"name": "object_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "object_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Create"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "options",
			"default": "primary",
			"options": [
				{
					"name": "Primary",
					"value": "primary"
				},
				{
					"name": "Secondary",
					"value": "secondary"
				},
				{
					"name": "Tertiary",
					"value": "tertiary"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				}
			],
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Role",
			"name": "role",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Create"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /tenancy/contact-assignments/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Contact",
			"name": "contact",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Type",
			"name": "content_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "content_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Object",
			"name": "object",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "object",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Object ID",
			"name": "object_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "object_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "options",
			"default": "primary",
			"options": [
				{
					"name": "Primary",
					"value": "primary"
				},
				{
					"name": "Secondary",
					"value": "secondary"
				},
				{
					"name": "Tertiary",
					"value": "tertiary"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				}
			],
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Role",
			"name": "role",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenancy/contact-assignments/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Delete"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /tenancy/contact-assignments/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Read"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenancy/contact-assignments/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Contact",
			"name": "contact",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Type",
			"name": "content_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "content_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Partial Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Object",
			"name": "object",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "object",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Object ID",
			"name": "object_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "object_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "options",
			"default": "primary",
			"options": [
				{
					"name": "Primary",
					"value": "primary"
				},
				{
					"name": "Secondary",
					"value": "secondary"
				},
				{
					"name": "Tertiary",
					"value": "tertiary"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				}
			],
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Role",
			"name": "role",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Partial Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /tenancy/contact-assignments/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Contact",
			"name": "contact",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Type",
			"name": "content_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "content_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Update"
					]
				}
			}
		},
		{
			"displayName": "Object",
			"name": "object",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "object",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Object ID",
			"name": "object_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "object_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Update"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "options",
			"default": "primary",
			"options": [
				{
					"name": "Primary",
					"value": "primary"
				},
				{
					"name": "Secondary",
					"value": "secondary"
				},
				{
					"name": "Tertiary",
					"value": "tertiary"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				}
			],
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Role",
			"name": "role",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Assignments Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenancy/contact-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Delete"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /tenancy/contact-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Tag",
			"name": "tag",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Parent ID",
			"name": "parent_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "parent_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "parent",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "ID N",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "ID Lte",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "ID Lt",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "ID Gte",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "ID Gt",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug N",
			"name": "slug__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Ic",
			"name": "slug__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Nic",
			"name": "slug__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Iew",
			"name": "slug__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Niew",
			"name": "slug__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Isw",
			"name": "slug__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Nisw",
			"name": "slug__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Ie",
			"name": "slug__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Nie",
			"name": "slug__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Empty",
			"name": "slug__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Created N",
			"name": "created__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Created Lt",
			"name": "created__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Created Gt",
			"name": "created__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated N",
			"name": "last_updated__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Lte",
			"name": "last_updated__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Lt",
			"name": "last_updated__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Gte",
			"name": "last_updated__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Gt",
			"name": "last_updated__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Tag N",
			"name": "tag__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tag__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Parent ID N",
			"name": "parent_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "parent_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "Parent N",
			"name": "parent__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "parent__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenancy/contact-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Depth",
			"name": "_depth",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "_depth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Contact Count",
			"name": "contact_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "contact_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /tenancy/contact-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Create"
					]
				}
			}
		},
		{
			"displayName": "Depth",
			"name": "_depth",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "_depth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Create"
					]
				}
			}
		},
		{
			"displayName": "Contact Count",
			"name": "contact_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "contact_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Create"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Create"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Create"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Create"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Create"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Create"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /tenancy/contact-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Depth",
			"name": "_depth",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "_depth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Contact Count",
			"name": "contact_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "contact_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenancy/contact-groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Delete"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /tenancy/contact-groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Read"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenancy/contact-groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Depth",
			"name": "_depth",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "_depth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Contact Count",
			"name": "contact_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "contact_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /tenancy/contact-groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Update"
					]
				}
			}
		},
		{
			"displayName": "Depth",
			"name": "_depth",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "_depth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Update"
					]
				}
			}
		},
		{
			"displayName": "Contact Count",
			"name": "contact_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "contact_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Update"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Groups Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenancy/contact-roles/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Delete"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /tenancy/contact-roles/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Tag",
			"name": "tag",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "ID N",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "ID Lte",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "ID Lt",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "ID Gte",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "ID Gt",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Slug N",
			"name": "slug__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Slug Ic",
			"name": "slug__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Slug Nic",
			"name": "slug__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Slug Iew",
			"name": "slug__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Slug Niew",
			"name": "slug__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Slug Isw",
			"name": "slug__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Slug Nisw",
			"name": "slug__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Slug Ie",
			"name": "slug__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Slug Nie",
			"name": "slug__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Slug Empty",
			"name": "slug__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Created N",
			"name": "created__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Created Lt",
			"name": "created__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Created Gt",
			"name": "created__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated N",
			"name": "last_updated__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Lte",
			"name": "last_updated__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Lt",
			"name": "last_updated__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Gte",
			"name": "last_updated__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Gt",
			"name": "last_updated__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "Tag N",
			"name": "tag__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tag__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenancy/contact-roles/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /tenancy/contact-roles/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Create"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Create"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Create"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Create"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Create"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /tenancy/contact-roles/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenancy/contact-roles/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Delete"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /tenancy/contact-roles/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Read"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenancy/contact-roles/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Partial Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Partial Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /tenancy/contact-roles/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contact Roles Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenancy/contacts/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Delete"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /tenancy/contacts/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "phone",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Link",
			"name": "link",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Tag",
			"name": "tag",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "ID N",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "ID Lte",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "ID Lt",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "ID Gte",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "ID Gt",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Title N",
			"name": "title__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Title Ic",
			"name": "title__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Title Nic",
			"name": "title__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Title Iew",
			"name": "title__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Title Niew",
			"name": "title__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Title Isw",
			"name": "title__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Title Nisw",
			"name": "title__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Title Ie",
			"name": "title__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Title Nie",
			"name": "title__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Title Empty",
			"name": "title__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Phone N",
			"name": "phone__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "phone__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Phone Ic",
			"name": "phone__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "phone__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Phone Nic",
			"name": "phone__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "phone__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Phone Iew",
			"name": "phone__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "phone__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Phone Niew",
			"name": "phone__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "phone__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Phone Isw",
			"name": "phone__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "phone__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Phone Nisw",
			"name": "phone__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "phone__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Phone Ie",
			"name": "phone__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "phone__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Phone Nie",
			"name": "phone__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "phone__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Phone Empty",
			"name": "phone__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "phone__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Address N",
			"name": "address__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Address Ic",
			"name": "address__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Address Nic",
			"name": "address__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Address Iew",
			"name": "address__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Address Niew",
			"name": "address__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Address Isw",
			"name": "address__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Address Nisw",
			"name": "address__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Address Ie",
			"name": "address__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Address Nie",
			"name": "address__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Address Empty",
			"name": "address__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "address__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Link N",
			"name": "link__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Link Ic",
			"name": "link__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Link Nic",
			"name": "link__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Link Iew",
			"name": "link__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Link Niew",
			"name": "link__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Link Isw",
			"name": "link__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Link Nisw",
			"name": "link__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Link Ie",
			"name": "link__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Link Nie",
			"name": "link__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Link Empty",
			"name": "link__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Created N",
			"name": "created__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Created Lt",
			"name": "created__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Created Gt",
			"name": "created__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated N",
			"name": "last_updated__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Lte",
			"name": "last_updated__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Lt",
			"name": "last_updated__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Gte",
			"name": "last_updated__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Gt",
			"name": "last_updated__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Tag N",
			"name": "tag__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tag__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "Group ID N",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenancy/contacts/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Link",
			"name": "link",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "link",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /tenancy/contacts/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
					]
				}
			}
		},
		{
			"displayName": "Link",
			"name": "link",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "link",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /tenancy/contacts/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Link",
			"name": "link",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "link",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenancy/contacts/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Delete"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /tenancy/contacts/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Read"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenancy/contacts/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Link",
			"name": "link",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "link",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /tenancy/contacts/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Link",
			"name": "link",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "link",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "phone",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Contacts Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenancy/tenant-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Delete"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /tenancy/tenant-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Tag",
			"name": "tag",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Parent ID",
			"name": "parent_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "parent_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "parent",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "ID N",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "ID Lte",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "ID Lt",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "ID Gte",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "ID Gt",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug N",
			"name": "slug__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Ic",
			"name": "slug__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Nic",
			"name": "slug__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Iew",
			"name": "slug__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Niew",
			"name": "slug__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Isw",
			"name": "slug__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Nisw",
			"name": "slug__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Ie",
			"name": "slug__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Nie",
			"name": "slug__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Slug Empty",
			"name": "slug__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Created N",
			"name": "created__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Created Lt",
			"name": "created__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Created Gt",
			"name": "created__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated N",
			"name": "last_updated__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Lte",
			"name": "last_updated__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Lt",
			"name": "last_updated__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Gte",
			"name": "last_updated__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Gt",
			"name": "last_updated__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Tag N",
			"name": "tag__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tag__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Parent ID N",
			"name": "parent_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "parent_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "Parent N",
			"name": "parent__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "parent__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenancy/tenant-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Depth",
			"name": "_depth",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "_depth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tenant Count",
			"name": "tenant_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tenant_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /tenancy/tenant-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Create"
					]
				}
			}
		},
		{
			"displayName": "Depth",
			"name": "_depth",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "_depth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Create"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Create"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Create"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Create"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Create"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Create"
					]
				}
			}
		},
		{
			"displayName": "Tenant Count",
			"name": "tenant_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tenant_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Create"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /tenancy/tenant-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Depth",
			"name": "_depth",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "_depth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Tenant Count",
			"name": "tenant_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tenant_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenancy/tenant-groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Delete"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /tenancy/tenant-groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Read"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenancy/tenant-groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Depth",
			"name": "_depth",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "_depth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tenant Count",
			"name": "tenant_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tenant_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /tenancy/tenant-groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Update"
					]
				}
			}
		},
		{
			"displayName": "Depth",
			"name": "_depth",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "_depth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Update"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Update"
					]
				}
			}
		},
		{
			"displayName": "Tenant Count",
			"name": "tenant_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tenant_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenant Groups Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenancy/tenants/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Delete"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /tenancy/tenants/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Slug",
			"name": "slug",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Tag",
			"name": "tag",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Contact",
			"name": "contact",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "contact",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Contact Role",
			"name": "contact_role",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "contact_role",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Contact Group",
			"name": "contact_group",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "contact_group",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "ID N",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "ID Lte",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "ID Lt",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "ID Gte",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "ID Gt",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Slug N",
			"name": "slug__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Slug Ic",
			"name": "slug__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Slug Nic",
			"name": "slug__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Slug Iew",
			"name": "slug__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Slug Niew",
			"name": "slug__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Slug Isw",
			"name": "slug__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Slug Nisw",
			"name": "slug__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Slug Ie",
			"name": "slug__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Slug Nie",
			"name": "slug__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Slug Empty",
			"name": "slug__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "slug__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Created N",
			"name": "created__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Created Lt",
			"name": "created__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Created Gt",
			"name": "created__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated N",
			"name": "last_updated__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Lte",
			"name": "last_updated__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Lt",
			"name": "last_updated__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Gte",
			"name": "last_updated__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Last Updated Gt",
			"name": "last_updated__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "last_updated__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Tag N",
			"name": "tag__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tag__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Contact N",
			"name": "contact__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "contact__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Contact Role N",
			"name": "contact_role__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "contact_role__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Contact Group N",
			"name": "contact_group__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "contact_group__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "Group ID N",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenancy/tenants/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Circuit Count",
			"name": "circuit_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "circuit_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Cluster Count",
			"name": "cluster_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "cluster_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Device Count",
			"name": "device_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "device_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Ipaddress Count",
			"name": "ipaddress_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "ipaddress_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Prefix Count",
			"name": "prefix_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "prefix_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Rack Count",
			"name": "rack_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "rack_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Site Count",
			"name": "site_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "site_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Virtualmachine Count",
			"name": "virtualmachine_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "virtualmachine_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Vlan Count",
			"name": "vlan_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vlan_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Vrf Count",
			"name": "vrf_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vrf_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /tenancy/tenants/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "Circuit Count",
			"name": "circuit_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "circuit_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "Cluster Count",
			"name": "cluster_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "cluster_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "Device Count",
			"name": "device_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "device_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "Ipaddress Count",
			"name": "ipaddress_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "ipaddress_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "Prefix Count",
			"name": "prefix_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "prefix_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "Rack Count",
			"name": "rack_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "rack_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "Site Count",
			"name": "site_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "site_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "Virtualmachine Count",
			"name": "virtualmachine_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "virtualmachine_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "Vlan Count",
			"name": "vlan_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vlan_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "Vrf Count",
			"name": "vrf_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vrf_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /tenancy/tenants/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Circuit Count",
			"name": "circuit_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "circuit_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Cluster Count",
			"name": "cluster_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "cluster_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Device Count",
			"name": "device_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "device_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Ipaddress Count",
			"name": "ipaddress_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "ipaddress_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Prefix Count",
			"name": "prefix_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "prefix_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Rack Count",
			"name": "rack_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "rack_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Site Count",
			"name": "site_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "site_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Virtualmachine Count",
			"name": "virtualmachine_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "virtualmachine_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Vlan Count",
			"name": "vlan_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vlan_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Vrf Count",
			"name": "vrf_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vrf_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /tenancy/tenants/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Delete"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /tenancy/tenants/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Read"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /tenancy/tenants/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Circuit Count",
			"name": "circuit_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "circuit_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Cluster Count",
			"name": "cluster_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "cluster_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Device Count",
			"name": "device_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "device_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Ipaddress Count",
			"name": "ipaddress_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "ipaddress_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Prefix Count",
			"name": "prefix_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "prefix_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Rack Count",
			"name": "rack_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "rack_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Site Count",
			"name": "site_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "site_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Virtualmachine Count",
			"name": "virtualmachine_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "virtualmachine_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Vlan Count",
			"name": "vlan_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vlan_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Vrf Count",
			"name": "vrf_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vrf_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /tenancy/tenants/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "Circuit Count",
			"name": "circuit_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "circuit_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "Cluster Count",
			"name": "cluster_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "cluster_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "Custom Fields",
			"name": "custom_fields",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "custom_fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "Device Count",
			"name": "device_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "device_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "Group",
			"name": "group",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "group",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "Ipaddress Count",
			"name": "ipaddress_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "ipaddress_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "Last Updated",
			"name": "last_updated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_updated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "Prefix Count",
			"name": "prefix_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "prefix_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "Rack Count",
			"name": "rack_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "rack_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "Site Count",
			"name": "site_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "site_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Slug",
			"name": "slug",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "slug",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "URL",
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "Virtualmachine Count",
			"name": "virtualmachine_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "virtualmachine_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "Vlan Count",
			"name": "vlan_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vlan_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
		{
			"displayName": "Vrf Count",
			"name": "vrf_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vrf_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
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
						"Tenancy"
					],
					"operation": [
						"Tenancy Tenants Update"
					]
				}
			}
		},
];
