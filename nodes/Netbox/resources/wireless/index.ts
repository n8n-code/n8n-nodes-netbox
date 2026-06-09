import type { INodeProperties } from 'n8n-workflow';

export const wirelessDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					]
				}
			},
			"options": [
				{
					"name": "Wireless Wireless Lan Groups Bulk Delete",
					"value": "Wireless Wireless Lan Groups Bulk Delete",
					"action": "Wireless Wireless Lan Groups Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/wireless/wireless-lan-groups/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lan Groups List",
					"value": "Wireless Wireless Lan Groups List",
					"action": "Wireless Wireless Lan Groups List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/wireless/wireless-lan-groups/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lan Groups Bulk Partial Update",
					"value": "Wireless Wireless Lan Groups Bulk Partial Update",
					"action": "Wireless Wireless Lan Groups Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/wireless/wireless-lan-groups/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lan Groups Create",
					"value": "Wireless Wireless Lan Groups Create",
					"action": "Wireless Wireless Lan Groups Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/wireless/wireless-lan-groups/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lan Groups Bulk Update",
					"value": "Wireless Wireless Lan Groups Bulk Update",
					"action": "Wireless Wireless Lan Groups Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/wireless/wireless-lan-groups/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lan Groups Delete",
					"value": "Wireless Wireless Lan Groups Delete",
					"action": "Wireless Wireless Lan Groups Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/wireless/wireless-lan-groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lan Groups Read",
					"value": "Wireless Wireless Lan Groups Read",
					"action": "Wireless Wireless Lan Groups Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/wireless/wireless-lan-groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lan Groups Partial Update",
					"value": "Wireless Wireless Lan Groups Partial Update",
					"action": "Wireless Wireless Lan Groups Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/wireless/wireless-lan-groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lan Groups Update",
					"value": "Wireless Wireless Lan Groups Update",
					"action": "Wireless Wireless Lan Groups Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/wireless/wireless-lan-groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lans Bulk Delete",
					"value": "Wireless Wireless Lans Bulk Delete",
					"action": "Wireless Wireless Lans Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/wireless/wireless-lans/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lans List",
					"value": "Wireless Wireless Lans List",
					"action": "Wireless Wireless Lans List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/wireless/wireless-lans/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lans Bulk Partial Update",
					"value": "Wireless Wireless Lans Bulk Partial Update",
					"action": "Wireless Wireless Lans Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/wireless/wireless-lans/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lans Create",
					"value": "Wireless Wireless Lans Create",
					"action": "Wireless Wireless Lans Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/wireless/wireless-lans/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lans Bulk Update",
					"value": "Wireless Wireless Lans Bulk Update",
					"action": "Wireless Wireless Lans Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/wireless/wireless-lans/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lans Delete",
					"value": "Wireless Wireless Lans Delete",
					"action": "Wireless Wireless Lans Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/wireless/wireless-lans/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lans Read",
					"value": "Wireless Wireless Lans Read",
					"action": "Wireless Wireless Lans Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/wireless/wireless-lans/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lans Partial Update",
					"value": "Wireless Wireless Lans Partial Update",
					"action": "Wireless Wireless Lans Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/wireless/wireless-lans/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Wireless Wireless Lans Update",
					"value": "Wireless Wireless Lans Update",
					"action": "Wireless Wireless Lans Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/wireless/wireless-lans/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Wireless Wireless Links Bulk Delete",
					"value": "Wireless Wireless Links Bulk Delete",
					"action": "Wireless Wireless Links Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/wireless/wireless-links/"
						}
					}
				},
				{
					"name": "Wireless Wireless Links List",
					"value": "Wireless Wireless Links List",
					"action": "Wireless Wireless Links List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/wireless/wireless-links/"
						}
					}
				},
				{
					"name": "Wireless Wireless Links Bulk Partial Update",
					"value": "Wireless Wireless Links Bulk Partial Update",
					"action": "Wireless Wireless Links Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/wireless/wireless-links/"
						}
					}
				},
				{
					"name": "Wireless Wireless Links Create",
					"value": "Wireless Wireless Links Create",
					"action": "Wireless Wireless Links Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/wireless/wireless-links/"
						}
					}
				},
				{
					"name": "Wireless Wireless Links Bulk Update",
					"value": "Wireless Wireless Links Bulk Update",
					"action": "Wireless Wireless Links Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/wireless/wireless-links/"
						}
					}
				},
				{
					"name": "Wireless Wireless Links Delete",
					"value": "Wireless Wireless Links Delete",
					"action": "Wireless Wireless Links Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/wireless/wireless-links/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Wireless Wireless Links Read",
					"value": "Wireless Wireless Links Read",
					"action": "Wireless Wireless Links Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/wireless/wireless-links/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Wireless Wireless Links Partial Update",
					"value": "Wireless Wireless Links Partial Update",
					"action": "Wireless Wireless Links Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/wireless/wireless-links/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Wireless Wireless Links Update",
					"value": "Wireless Wireless Links Update",
					"action": "Wireless Wireless Links Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/wireless/wireless-links/{{$parameter[\"id\"]}}/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /wireless/wireless-lan-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Delete"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /wireless/wireless-lan-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /wireless/wireless-lan-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Wirelesslan Count",
			"name": "wirelesslan_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "wirelesslan_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /wireless/wireless-lan-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Create"
					]
				}
			}
		},
		{
			"displayName": "Wirelesslan Count",
			"name": "wirelesslan_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "wirelesslan_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /wireless/wireless-lan-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Wirelesslan Count",
			"name": "wirelesslan_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "wirelesslan_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /wireless/wireless-lan-groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Delete"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /wireless/wireless-lan-groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Read"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /wireless/wireless-lan-groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Wirelesslan Count",
			"name": "wirelesslan_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "wirelesslan_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /wireless/wireless-lan-groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Update"
					]
				}
			}
		},
		{
			"displayName": "Wirelesslan Count",
			"name": "wirelesslan_count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "wirelesslan_count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lan Groups Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /wireless/wireless-lans/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Delete"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /wireless/wireless-lans/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk",
			"name": "auth_psk",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Tenant Group ID",
			"name": "tenant_group_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenant_group_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Tenant Group",
			"name": "tenant_group",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenant_group",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Tenant ID",
			"name": "tenant_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenant_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenant",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Vlan ID",
			"name": "vlan_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "vlan_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Auth Type",
			"name": "auth_type",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Auth Cipher",
			"name": "auth_cipher",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_cipher",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Ssid N",
			"name": "ssid__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Ic",
			"name": "ssid__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Nic",
			"name": "ssid__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Iew",
			"name": "ssid__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Niew",
			"name": "ssid__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Isw",
			"name": "ssid__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Nisw",
			"name": "ssid__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Ie",
			"name": "ssid__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Nie",
			"name": "ssid__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Empty",
			"name": "ssid__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk N",
			"name": "auth_psk__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Ic",
			"name": "auth_psk__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Nic",
			"name": "auth_psk__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Iew",
			"name": "auth_psk__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Niew",
			"name": "auth_psk__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Isw",
			"name": "auth_psk__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Nisw",
			"name": "auth_psk__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Ie",
			"name": "auth_psk__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Nie",
			"name": "auth_psk__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Empty",
			"name": "auth_psk__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Tenant Group ID N",
			"name": "tenant_group_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenant_group_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Tenant Group N",
			"name": "tenant_group__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenant_group__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Tenant ID N",
			"name": "tenant_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenant_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Tenant N",
			"name": "tenant__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenant__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Status N",
			"name": "status__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "status__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Vlan ID N",
			"name": "vlan_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "vlan_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Auth Type N",
			"name": "auth_type__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_type__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "Auth Cipher N",
			"name": "auth_cipher__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_cipher__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /wireless/wireless-lans/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Cipher",
			"name": "auth_cipher",
			"type": "options",
			"default": "auto",
			"options": [
				{
					"name": "Auto",
					"value": "auto"
				},
				{
					"name": "Tkip",
					"value": "tkip"
				},
				{
					"name": "Aes",
					"value": "aes"
				}
			],
			"routing": {
				"send": {
					"property": "auth_cipher",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk",
			"name": "auth_psk",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "auth_psk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Type",
			"name": "auth_type",
			"type": "options",
			"default": "open",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Wep",
					"value": "wep"
				},
				{
					"name": "Wpa Personal",
					"value": "wpa-personal"
				},
				{
					"name": "Wpa Enterprise",
					"value": "wpa-enterprise"
				}
			],
			"routing": {
				"send": {
					"property": "auth_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ssid",
			"name": "ssid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "ssid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Reserved",
					"value": "reserved"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Deprecated",
					"value": "deprecated"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /wireless/wireless-lans/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
					]
				}
			}
		},
		{
			"displayName": "Auth Cipher",
			"name": "auth_cipher",
			"type": "options",
			"default": "auto",
			"options": [
				{
					"name": "Auto",
					"value": "auto"
				},
				{
					"name": "Tkip",
					"value": "tkip"
				},
				{
					"name": "Aes",
					"value": "aes"
				}
			],
			"routing": {
				"send": {
					"property": "auth_cipher",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk",
			"name": "auth_psk",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "auth_psk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
					]
				}
			}
		},
		{
			"displayName": "Auth Type",
			"name": "auth_type",
			"type": "options",
			"default": "open",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Wep",
					"value": "wep"
				},
				{
					"name": "Wpa Personal",
					"value": "wpa-personal"
				},
				{
					"name": "Wpa Enterprise",
					"value": "wpa-enterprise"
				}
			],
			"routing": {
				"send": {
					"property": "auth_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ssid",
			"name": "ssid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "ssid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Reserved",
					"value": "reserved"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Deprecated",
					"value": "deprecated"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /wireless/wireless-lans/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Cipher",
			"name": "auth_cipher",
			"type": "options",
			"default": "auto",
			"options": [
				{
					"name": "Auto",
					"value": "auto"
				},
				{
					"name": "Tkip",
					"value": "tkip"
				},
				{
					"name": "Aes",
					"value": "aes"
				}
			],
			"routing": {
				"send": {
					"property": "auth_cipher",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk",
			"name": "auth_psk",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "auth_psk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Type",
			"name": "auth_type",
			"type": "options",
			"default": "open",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Wep",
					"value": "wep"
				},
				{
					"name": "Wpa Personal",
					"value": "wpa-personal"
				},
				{
					"name": "Wpa Enterprise",
					"value": "wpa-enterprise"
				}
			],
			"routing": {
				"send": {
					"property": "auth_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ssid",
			"name": "ssid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "ssid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Reserved",
					"value": "reserved"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Deprecated",
					"value": "deprecated"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /wireless/wireless-lans/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Delete"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /wireless/wireless-lans/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Read"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /wireless/wireless-lans/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Cipher",
			"name": "auth_cipher",
			"type": "options",
			"default": "auto",
			"options": [
				{
					"name": "Auto",
					"value": "auto"
				},
				{
					"name": "Tkip",
					"value": "tkip"
				},
				{
					"name": "Aes",
					"value": "aes"
				}
			],
			"routing": {
				"send": {
					"property": "auth_cipher",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk",
			"name": "auth_psk",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "auth_psk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Type",
			"name": "auth_type",
			"type": "options",
			"default": "open",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Wep",
					"value": "wep"
				},
				{
					"name": "Wpa Personal",
					"value": "wpa-personal"
				},
				{
					"name": "Wpa Enterprise",
					"value": "wpa-enterprise"
				}
			],
			"routing": {
				"send": {
					"property": "auth_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ssid",
			"name": "ssid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "ssid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Reserved",
					"value": "reserved"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Deprecated",
					"value": "deprecated"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /wireless/wireless-lans/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Cipher",
			"name": "auth_cipher",
			"type": "options",
			"default": "auto",
			"options": [
				{
					"name": "Auto",
					"value": "auto"
				},
				{
					"name": "Tkip",
					"value": "tkip"
				},
				{
					"name": "Aes",
					"value": "aes"
				}
			],
			"routing": {
				"send": {
					"property": "auth_cipher",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk",
			"name": "auth_psk",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "auth_psk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Type",
			"name": "auth_type",
			"type": "options",
			"default": "open",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Wep",
					"value": "wep"
				},
				{
					"name": "Wpa Personal",
					"value": "wpa-personal"
				},
				{
					"name": "Wpa Enterprise",
					"value": "wpa-enterprise"
				}
			],
			"routing": {
				"send": {
					"property": "auth_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ssid",
			"name": "ssid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "ssid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Reserved",
					"value": "reserved"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Deprecated",
					"value": "deprecated"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
					]
				}
			}
		},
		{
			"displayName": "Vlan",
			"name": "vlan",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Lans Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /wireless/wireless-links/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Delete"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /wireless/wireless-links/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk",
			"name": "auth_psk",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Tenant Group ID",
			"name": "tenant_group_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenant_group_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Tenant Group",
			"name": "tenant_group",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenant_group",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Tenant ID",
			"name": "tenant_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenant_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenant",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Interface A ID",
			"name": "interface_a_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interface_a_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Interface B ID",
			"name": "interface_b_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interface_b_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Auth Type",
			"name": "auth_type",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Auth Cipher",
			"name": "auth_cipher",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_cipher",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Ssid N",
			"name": "ssid__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Ic",
			"name": "ssid__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Nic",
			"name": "ssid__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Iew",
			"name": "ssid__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Niew",
			"name": "ssid__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Isw",
			"name": "ssid__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Nisw",
			"name": "ssid__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Ie",
			"name": "ssid__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Nie",
			"name": "ssid__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Ssid Empty",
			"name": "ssid__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssid__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk N",
			"name": "auth_psk__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Ic",
			"name": "auth_psk__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Nic",
			"name": "auth_psk__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Iew",
			"name": "auth_psk__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Niew",
			"name": "auth_psk__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Isw",
			"name": "auth_psk__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Nisw",
			"name": "auth_psk__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Ie",
			"name": "auth_psk__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Nie",
			"name": "auth_psk__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk Empty",
			"name": "auth_psk__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_psk__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Tenant Group ID N",
			"name": "tenant_group_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenant_group_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Tenant Group N",
			"name": "tenant_group__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenant_group__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Tenant ID N",
			"name": "tenant_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenant_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Tenant N",
			"name": "tenant__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tenant__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Interface A ID N",
			"name": "interface_a_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interface_a_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Interface A ID Lte",
			"name": "interface_a_id__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interface_a_id__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Interface A ID Lt",
			"name": "interface_a_id__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interface_a_id__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Interface A ID Gte",
			"name": "interface_a_id__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interface_a_id__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Interface A ID Gt",
			"name": "interface_a_id__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interface_a_id__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Interface B ID N",
			"name": "interface_b_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interface_b_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Interface B ID Lte",
			"name": "interface_b_id__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interface_b_id__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Interface B ID Lt",
			"name": "interface_b_id__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interface_b_id__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Interface B ID Gte",
			"name": "interface_b_id__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interface_b_id__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Interface B ID Gt",
			"name": "interface_b_id__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interface_b_id__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Status N",
			"name": "status__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "status__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Auth Type N",
			"name": "auth_type__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_type__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "Auth Cipher N",
			"name": "auth_cipher__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_cipher__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /wireless/wireless-links/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Cipher",
			"name": "auth_cipher",
			"type": "options",
			"default": "auto",
			"options": [
				{
					"name": "Auto",
					"value": "auto"
				},
				{
					"name": "Tkip",
					"value": "tkip"
				},
				{
					"name": "Aes",
					"value": "aes"
				}
			],
			"routing": {
				"send": {
					"property": "auth_cipher",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk",
			"name": "auth_psk",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "auth_psk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Type",
			"name": "auth_type",
			"type": "options",
			"default": "open",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Wep",
					"value": "wep"
				},
				{
					"name": "Wpa Personal",
					"value": "wpa-personal"
				},
				{
					"name": "Wpa Enterprise",
					"value": "wpa-enterprise"
				}
			],
			"routing": {
				"send": {
					"property": "auth_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Interface A",
			"name": "interface_a",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "interface_a",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Interface B",
			"name": "interface_b",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "interface_b",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "ssid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "connected",
			"options": [
				{
					"name": "Connected",
					"value": "connected"
				},
				{
					"name": "Planned",
					"value": "planned"
				},
				{
					"name": "Decommissioning",
					"value": "decommissioning"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /wireless/wireless-links/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
					]
				}
			}
		},
		{
			"displayName": "Auth Cipher",
			"name": "auth_cipher",
			"type": "options",
			"default": "auto",
			"options": [
				{
					"name": "Auto",
					"value": "auto"
				},
				{
					"name": "Tkip",
					"value": "tkip"
				},
				{
					"name": "Aes",
					"value": "aes"
				}
			],
			"routing": {
				"send": {
					"property": "auth_cipher",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk",
			"name": "auth_psk",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "auth_psk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
					]
				}
			}
		},
		{
			"displayName": "Auth Type",
			"name": "auth_type",
			"type": "options",
			"default": "open",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Wep",
					"value": "wep"
				},
				{
					"name": "Wpa Personal",
					"value": "wpa-personal"
				},
				{
					"name": "Wpa Enterprise",
					"value": "wpa-enterprise"
				}
			],
			"routing": {
				"send": {
					"property": "auth_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Interface A",
			"name": "interface_a",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "interface_a",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Interface B",
			"name": "interface_b",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "interface_b",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "ssid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "connected",
			"options": [
				{
					"name": "Connected",
					"value": "connected"
				},
				{
					"name": "Planned",
					"value": "planned"
				},
				{
					"name": "Decommissioning",
					"value": "decommissioning"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /wireless/wireless-links/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Cipher",
			"name": "auth_cipher",
			"type": "options",
			"default": "auto",
			"options": [
				{
					"name": "Auto",
					"value": "auto"
				},
				{
					"name": "Tkip",
					"value": "tkip"
				},
				{
					"name": "Aes",
					"value": "aes"
				}
			],
			"routing": {
				"send": {
					"property": "auth_cipher",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk",
			"name": "auth_psk",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "auth_psk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Type",
			"name": "auth_type",
			"type": "options",
			"default": "open",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Wep",
					"value": "wep"
				},
				{
					"name": "Wpa Personal",
					"value": "wpa-personal"
				},
				{
					"name": "Wpa Enterprise",
					"value": "wpa-enterprise"
				}
			],
			"routing": {
				"send": {
					"property": "auth_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Interface A",
			"name": "interface_a",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "interface_a",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Interface B",
			"name": "interface_b",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "interface_b",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "ssid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "connected",
			"options": [
				{
					"name": "Connected",
					"value": "connected"
				},
				{
					"name": "Planned",
					"value": "planned"
				},
				{
					"name": "Decommissioning",
					"value": "decommissioning"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /wireless/wireless-links/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Delete"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /wireless/wireless-links/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Read"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /wireless/wireless-links/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Cipher",
			"name": "auth_cipher",
			"type": "options",
			"default": "auto",
			"options": [
				{
					"name": "Auto",
					"value": "auto"
				},
				{
					"name": "Tkip",
					"value": "tkip"
				},
				{
					"name": "Aes",
					"value": "aes"
				}
			],
			"routing": {
				"send": {
					"property": "auth_cipher",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk",
			"name": "auth_psk",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "auth_psk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Type",
			"name": "auth_type",
			"type": "options",
			"default": "open",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Wep",
					"value": "wep"
				},
				{
					"name": "Wpa Personal",
					"value": "wpa-personal"
				},
				{
					"name": "Wpa Enterprise",
					"value": "wpa-enterprise"
				}
			],
			"routing": {
				"send": {
					"property": "auth_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Interface A",
			"name": "interface_a",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "interface_a",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Interface B",
			"name": "interface_b",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "interface_b",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "ssid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "connected",
			"options": [
				{
					"name": "Connected",
					"value": "connected"
				},
				{
					"name": "Planned",
					"value": "planned"
				},
				{
					"name": "Decommissioning",
					"value": "decommissioning"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /wireless/wireless-links/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Cipher",
			"name": "auth_cipher",
			"type": "options",
			"default": "auto",
			"options": [
				{
					"name": "Auto",
					"value": "auto"
				},
				{
					"name": "Tkip",
					"value": "tkip"
				},
				{
					"name": "Aes",
					"value": "aes"
				}
			],
			"routing": {
				"send": {
					"property": "auth_cipher",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Psk",
			"name": "auth_psk",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "auth_psk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
					]
				}
			}
		},
		{
			"displayName": "Auth Type",
			"name": "auth_type",
			"type": "options",
			"default": "open",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Wep",
					"value": "wep"
				},
				{
					"name": "Wpa Personal",
					"value": "wpa-personal"
				},
				{
					"name": "Wpa Enterprise",
					"value": "wpa-enterprise"
				}
			],
			"routing": {
				"send": {
					"property": "auth_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Interface A",
			"name": "interface_a",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "interface_a",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Interface B",
			"name": "interface_b",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "interface_b",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
					]
				}
			}
		},
		{
			"displayName": "Ssid",
			"name": "ssid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "ssid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "connected",
			"options": [
				{
					"name": "Connected",
					"value": "connected"
				},
				{
					"name": "Planned",
					"value": "planned"
				},
				{
					"name": "Decommissioning",
					"value": "decommissioning"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
					]
				}
			}
		},
		{
			"displayName": "Tenant",
			"name": "tenant",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tenant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
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
						"Wireless"
					],
					"operation": [
						"Wireless Wireless Links Update"
					]
				}
			}
		},
];
