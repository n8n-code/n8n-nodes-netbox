import type { INodeProperties } from 'n8n-workflow';

export const virtualizationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					]
				}
			},
			"options": [
				{
					"name": "Virtualization Cluster Groups Bulk Delete",
					"value": "Virtualization Cluster Groups Bulk Delete",
					"action": "Virtualization Cluster Groups Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/virtualization/cluster-groups/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Groups List",
					"value": "Virtualization Cluster Groups List",
					"action": "Virtualization Cluster Groups List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/virtualization/cluster-groups/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Groups Bulk Partial Update",
					"value": "Virtualization Cluster Groups Bulk Partial Update",
					"action": "Virtualization Cluster Groups Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/virtualization/cluster-groups/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Groups Create",
					"value": "Virtualization Cluster Groups Create",
					"action": "Virtualization Cluster Groups Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/virtualization/cluster-groups/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Groups Bulk Update",
					"value": "Virtualization Cluster Groups Bulk Update",
					"action": "Virtualization Cluster Groups Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/virtualization/cluster-groups/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Groups Delete",
					"value": "Virtualization Cluster Groups Delete",
					"action": "Virtualization Cluster Groups Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/virtualization/cluster-groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Groups Read",
					"value": "Virtualization Cluster Groups Read",
					"action": "Virtualization Cluster Groups Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/virtualization/cluster-groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Groups Partial Update",
					"value": "Virtualization Cluster Groups Partial Update",
					"action": "Virtualization Cluster Groups Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/virtualization/cluster-groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Groups Update",
					"value": "Virtualization Cluster Groups Update",
					"action": "Virtualization Cluster Groups Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/virtualization/cluster-groups/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Types Bulk Delete",
					"value": "Virtualization Cluster Types Bulk Delete",
					"action": "Virtualization Cluster Types Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/virtualization/cluster-types/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Types List",
					"value": "Virtualization Cluster Types List",
					"action": "Virtualization Cluster Types List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/virtualization/cluster-types/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Types Bulk Partial Update",
					"value": "Virtualization Cluster Types Bulk Partial Update",
					"action": "Virtualization Cluster Types Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/virtualization/cluster-types/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Types Create",
					"value": "Virtualization Cluster Types Create",
					"action": "Virtualization Cluster Types Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/virtualization/cluster-types/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Types Bulk Update",
					"value": "Virtualization Cluster Types Bulk Update",
					"action": "Virtualization Cluster Types Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/virtualization/cluster-types/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Types Delete",
					"value": "Virtualization Cluster Types Delete",
					"action": "Virtualization Cluster Types Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/virtualization/cluster-types/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Types Read",
					"value": "Virtualization Cluster Types Read",
					"action": "Virtualization Cluster Types Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/virtualization/cluster-types/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Types Partial Update",
					"value": "Virtualization Cluster Types Partial Update",
					"action": "Virtualization Cluster Types Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/virtualization/cluster-types/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Cluster Types Update",
					"value": "Virtualization Cluster Types Update",
					"action": "Virtualization Cluster Types Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/virtualization/cluster-types/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Clusters Bulk Delete",
					"value": "Virtualization Clusters Bulk Delete",
					"action": "Virtualization Clusters Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/virtualization/clusters/"
						}
					}
				},
				{
					"name": "Virtualization Clusters List",
					"value": "Virtualization Clusters List",
					"action": "Virtualization Clusters List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/virtualization/clusters/"
						}
					}
				},
				{
					"name": "Virtualization Clusters Bulk Partial Update",
					"value": "Virtualization Clusters Bulk Partial Update",
					"action": "Virtualization Clusters Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/virtualization/clusters/"
						}
					}
				},
				{
					"name": "Virtualization Clusters Create",
					"value": "Virtualization Clusters Create",
					"action": "Virtualization Clusters Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/virtualization/clusters/"
						}
					}
				},
				{
					"name": "Virtualization Clusters Bulk Update",
					"value": "Virtualization Clusters Bulk Update",
					"action": "Virtualization Clusters Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/virtualization/clusters/"
						}
					}
				},
				{
					"name": "Virtualization Clusters Delete",
					"value": "Virtualization Clusters Delete",
					"action": "Virtualization Clusters Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/virtualization/clusters/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Clusters Read",
					"value": "Virtualization Clusters Read",
					"action": "Virtualization Clusters Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/virtualization/clusters/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Clusters Partial Update",
					"value": "Virtualization Clusters Partial Update",
					"action": "Virtualization Clusters Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/virtualization/clusters/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Clusters Update",
					"value": "Virtualization Clusters Update",
					"action": "Virtualization Clusters Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/virtualization/clusters/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Interfaces Bulk Delete",
					"value": "Virtualization Interfaces Bulk Delete",
					"action": "Virtualization Interfaces Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/virtualization/interfaces/"
						}
					}
				},
				{
					"name": "Virtualization Interfaces List",
					"value": "Virtualization Interfaces List",
					"action": "Virtualization Interfaces List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/virtualization/interfaces/"
						}
					}
				},
				{
					"name": "Virtualization Interfaces Bulk Partial Update",
					"value": "Virtualization Interfaces Bulk Partial Update",
					"action": "Virtualization Interfaces Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/virtualization/interfaces/"
						}
					}
				},
				{
					"name": "Virtualization Interfaces Create",
					"value": "Virtualization Interfaces Create",
					"action": "Virtualization Interfaces Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/virtualization/interfaces/"
						}
					}
				},
				{
					"name": "Virtualization Interfaces Bulk Update",
					"value": "Virtualization Interfaces Bulk Update",
					"action": "Virtualization Interfaces Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/virtualization/interfaces/"
						}
					}
				},
				{
					"name": "Virtualization Interfaces Delete",
					"value": "Virtualization Interfaces Delete",
					"action": "Virtualization Interfaces Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/virtualization/interfaces/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Interfaces Read",
					"value": "Virtualization Interfaces Read",
					"action": "Virtualization Interfaces Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/virtualization/interfaces/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Interfaces Partial Update",
					"value": "Virtualization Interfaces Partial Update",
					"action": "Virtualization Interfaces Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/virtualization/interfaces/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Interfaces Update",
					"value": "Virtualization Interfaces Update",
					"action": "Virtualization Interfaces Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/virtualization/interfaces/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Virtual Machines Bulk Delete",
					"value": "Virtualization Virtual Machines Bulk Delete",
					"action": "Virtualization Virtual Machines Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/virtualization/virtual-machines/"
						}
					}
				},
				{
					"name": "Virtualization Virtual Machines List",
					"value": "Virtualization Virtual Machines List",
					"action": "Virtualization Virtual Machines List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/virtualization/virtual-machines/"
						}
					}
				},
				{
					"name": "Virtualization Virtual Machines Bulk Partial Update",
					"value": "Virtualization Virtual Machines Bulk Partial Update",
					"action": "Virtualization Virtual Machines Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/virtualization/virtual-machines/"
						}
					}
				},
				{
					"name": "Virtualization Virtual Machines Create",
					"value": "Virtualization Virtual Machines Create",
					"action": "Virtualization Virtual Machines Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/virtualization/virtual-machines/"
						}
					}
				},
				{
					"name": "Virtualization Virtual Machines Bulk Update",
					"value": "Virtualization Virtual Machines Bulk Update",
					"action": "Virtualization Virtual Machines Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/virtualization/virtual-machines/"
						}
					}
				},
				{
					"name": "Virtualization Virtual Machines Delete",
					"value": "Virtualization Virtual Machines Delete",
					"action": "Virtualization Virtual Machines Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/virtualization/virtual-machines/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Virtual Machines Read",
					"value": "Virtualization Virtual Machines Read",
					"action": "Virtualization Virtual Machines Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/virtualization/virtual-machines/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Virtual Machines Partial Update",
					"value": "Virtualization Virtual Machines Partial Update",
					"action": "Virtualization Virtual Machines Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/virtualization/virtual-machines/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Virtualization Virtual Machines Update",
					"value": "Virtualization Virtual Machines Update",
					"action": "Virtualization Virtual Machines Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/virtualization/virtual-machines/{{$parameter[\"id\"]}}/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /virtualization/cluster-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Delete"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /virtualization/cluster-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /virtualization/cluster-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /virtualization/cluster-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /virtualization/cluster-groups/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /virtualization/cluster-groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Delete"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /virtualization/cluster-groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Read"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /virtualization/cluster-groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /virtualization/cluster-groups/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Groups Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /virtualization/cluster-types/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Delete"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /virtualization/cluster-types/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /virtualization/cluster-types/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /virtualization/cluster-types/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /virtualization/cluster-types/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /virtualization/cluster-types/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Delete"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /virtualization/cluster-types/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Read"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /virtualization/cluster-types/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /virtualization/cluster-types/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Cluster Types Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /virtualization/clusters/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Delete"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /virtualization/clusters/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Tenant Group Id",
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id",
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Region Id",
			"name": "region_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "region_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Region",
			"name": "region",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "region",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Site Group Id",
			"name": "site_group_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "site_group_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Site Group",
			"name": "site_group",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "site_group",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "site_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "site_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Site",
			"name": "site",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "site",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Type Id",
			"name": "type_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Tenant Group Id N",
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id N",
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Region Id N",
			"name": "region_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "region_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Region N",
			"name": "region__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "region__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Site Group Id N",
			"name": "site_group_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "site_group_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Site Group N",
			"name": "site_group__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "site_group__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Site Id N",
			"name": "site_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "site_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Site N",
			"name": "site__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "site__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Type Id N",
			"name": "type_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "Type N",
			"name": "type__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /virtualization/clusters/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Site",
			"name": "site",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "site",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "planned",
			"options": [
				{
					"name": "Planned",
					"value": "planned"
				},
				{
					"name": "Staging",
					"value": "staging"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Decommissioning",
					"value": "decommissioning"
				},
				{
					"name": "Offline",
					"value": "offline"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /virtualization/clusters/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
					]
				}
			}
		},
		{
			"displayName": "Site",
			"name": "site",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "site",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "planned",
			"options": [
				{
					"name": "Planned",
					"value": "planned"
				},
				{
					"name": "Staging",
					"value": "staging"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Decommissioning",
					"value": "decommissioning"
				},
				{
					"name": "Offline",
					"value": "offline"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /virtualization/clusters/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Site",
			"name": "site",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "site",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "planned",
			"options": [
				{
					"name": "Planned",
					"value": "planned"
				},
				{
					"name": "Staging",
					"value": "staging"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Decommissioning",
					"value": "decommissioning"
				},
				{
					"name": "Offline",
					"value": "offline"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /virtualization/clusters/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Delete"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /virtualization/clusters/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Read"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /virtualization/clusters/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Site",
			"name": "site",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "site",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "planned",
			"options": [
				{
					"name": "Planned",
					"value": "planned"
				},
				{
					"name": "Staging",
					"value": "staging"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Decommissioning",
					"value": "decommissioning"
				},
				{
					"name": "Offline",
					"value": "offline"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /virtualization/clusters/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
					]
				}
			}
		},
		{
			"displayName": "Site",
			"name": "site",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "site",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "planned",
			"options": [
				{
					"name": "Planned",
					"value": "planned"
				},
				{
					"name": "Staging",
					"value": "staging"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Decommissioning",
					"value": "decommissioning"
				},
				{
					"name": "Offline",
					"value": "offline"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Clusters Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /virtualization/interfaces/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Delete"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /virtualization/interfaces/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Mtu",
			"name": "mtu",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mtu",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Cluster Id",
			"name": "cluster_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Cluster",
			"name": "cluster",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Virtual Machine Id",
			"name": "virtual_machine_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "virtual_machine_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Virtual Machine",
			"name": "virtual_machine",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "virtual_machine",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Parent Id",
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Bridge Id",
			"name": "bridge_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "bridge_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address",
			"name": "mac_address",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Vrf Id",
			"name": "vrf_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "vrf_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Vrf",
			"name": "vrf",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "vrf",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "L 2 Vpn Id",
			"name": "l2vpn_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "l2vpn_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "L 2 Vpn",
			"name": "l2vpn",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "l2vpn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Mtu N",
			"name": "mtu__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mtu__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Mtu Lte",
			"name": "mtu__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mtu__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Mtu Lt",
			"name": "mtu__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mtu__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Mtu Gte",
			"name": "mtu__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mtu__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Mtu Gt",
			"name": "mtu__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mtu__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Cluster Id N",
			"name": "cluster_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Cluster N",
			"name": "cluster__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Virtual Machine Id N",
			"name": "virtual_machine_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "virtual_machine_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Virtual Machine N",
			"name": "virtual_machine__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "virtual_machine__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Parent Id N",
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Bridge Id N",
			"name": "bridge_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "bridge_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address N",
			"name": "mac_address__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address Ic",
			"name": "mac_address__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address Nic",
			"name": "mac_address__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address Iew",
			"name": "mac_address__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address Niew",
			"name": "mac_address__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address Isw",
			"name": "mac_address__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address Nisw",
			"name": "mac_address__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address Ie",
			"name": "mac_address__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address Nie",
			"name": "mac_address__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Vrf Id N",
			"name": "vrf_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "vrf_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "Vrf N",
			"name": "vrf__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "vrf__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "L 2 Vpn Id N",
			"name": "l2vpn_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "l2vpn_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "L 2 Vpn N",
			"name": "l2vpn__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "l2vpn__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /virtualization/interfaces/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Bridge",
			"name": "bridge",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "bridge",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Count Fhrp Groups",
			"name": "count_fhrp_groups",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "count_fhrp_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Count Ipaddresses",
			"name": "count_ipaddresses",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "count_ipaddresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "L 2 Vpn Termination",
			"name": "l2vpn_termination",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "l2vpn_termination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Mac Address",
			"name": "mac_address",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mac_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "mode",
			"type": "options",
			"default": "access",
			"options": [
				{
					"name": "Access",
					"value": "access"
				},
				{
					"name": "Tagged",
					"value": "tagged"
				},
				{
					"name": "Tagged All",
					"value": "tagged-all"
				}
			],
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Mtu",
			"name": "mtu",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "mtu",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tagged Vlans",
			"name": "tagged_vlans",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tagged_vlans",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Untagged Vlan",
			"name": "untagged_vlan",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "untagged_vlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Virtual Machine",
			"name": "virtual_machine",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "virtual_machine",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Vrf",
			"name": "vrf",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vrf",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /virtualization/interfaces/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
					]
				}
			}
		},
		{
			"displayName": "Bridge",
			"name": "bridge",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "bridge",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
					]
				}
			}
		},
		{
			"displayName": "Count Fhrp Groups",
			"name": "count_fhrp_groups",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "count_fhrp_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
					]
				}
			}
		},
		{
			"displayName": "Count Ipaddresses",
			"name": "count_ipaddresses",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "count_ipaddresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
					]
				}
			}
		},
		{
			"displayName": "L 2 Vpn Termination",
			"name": "l2vpn_termination",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "l2vpn_termination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
					]
				}
			}
		},
		{
			"displayName": "Mac Address",
			"name": "mac_address",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mac_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "mode",
			"type": "options",
			"default": "access",
			"options": [
				{
					"name": "Access",
					"value": "access"
				},
				{
					"name": "Tagged",
					"value": "tagged"
				},
				{
					"name": "Tagged All",
					"value": "tagged-all"
				}
			],
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
					]
				}
			}
		},
		{
			"displayName": "Mtu",
			"name": "mtu",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "mtu",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
					]
				}
			}
		},
		{
			"displayName": "Tagged Vlans",
			"name": "tagged_vlans",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tagged_vlans",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
					]
				}
			}
		},
		{
			"displayName": "Untagged Vlan",
			"name": "untagged_vlan",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "untagged_vlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Virtual Machine",
			"name": "virtual_machine",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "virtual_machine",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
					]
				}
			}
		},
		{
			"displayName": "Vrf",
			"name": "vrf",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vrf",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /virtualization/interfaces/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Bridge",
			"name": "bridge",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "bridge",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Count Fhrp Groups",
			"name": "count_fhrp_groups",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "count_fhrp_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Count Ipaddresses",
			"name": "count_ipaddresses",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "count_ipaddresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "L 2 Vpn Termination",
			"name": "l2vpn_termination",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "l2vpn_termination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Mac Address",
			"name": "mac_address",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mac_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "mode",
			"type": "options",
			"default": "access",
			"options": [
				{
					"name": "Access",
					"value": "access"
				},
				{
					"name": "Tagged",
					"value": "tagged"
				},
				{
					"name": "Tagged All",
					"value": "tagged-all"
				}
			],
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Mtu",
			"name": "mtu",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "mtu",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Tagged Vlans",
			"name": "tagged_vlans",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tagged_vlans",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Untagged Vlan",
			"name": "untagged_vlan",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "untagged_vlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Virtual Machine",
			"name": "virtual_machine",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "virtual_machine",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Vrf",
			"name": "vrf",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vrf",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /virtualization/interfaces/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Delete"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /virtualization/interfaces/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Read"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /virtualization/interfaces/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Bridge",
			"name": "bridge",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "bridge",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Count Fhrp Groups",
			"name": "count_fhrp_groups",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "count_fhrp_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Count Ipaddresses",
			"name": "count_ipaddresses",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "count_ipaddresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
					]
				}
			}
		},
		{
			"displayName": "L 2 Vpn Termination",
			"name": "l2vpn_termination",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "l2vpn_termination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Mac Address",
			"name": "mac_address",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mac_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "mode",
			"type": "options",
			"default": "access",
			"options": [
				{
					"name": "Access",
					"value": "access"
				},
				{
					"name": "Tagged",
					"value": "tagged"
				},
				{
					"name": "Tagged All",
					"value": "tagged-all"
				}
			],
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Mtu",
			"name": "mtu",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "mtu",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tagged Vlans",
			"name": "tagged_vlans",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tagged_vlans",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Untagged Vlan",
			"name": "untagged_vlan",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "untagged_vlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Virtual Machine",
			"name": "virtual_machine",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "virtual_machine",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Vrf",
			"name": "vrf",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vrf",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /virtualization/interfaces/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
					]
				}
			}
		},
		{
			"displayName": "Bridge",
			"name": "bridge",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "bridge",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
					]
				}
			}
		},
		{
			"displayName": "Count Fhrp Groups",
			"name": "count_fhrp_groups",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "count_fhrp_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
					]
				}
			}
		},
		{
			"displayName": "Count Ipaddresses",
			"name": "count_ipaddresses",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "count_ipaddresses",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
					]
				}
			}
		},
		{
			"displayName": "L 2 Vpn Termination",
			"name": "l2vpn_termination",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "l2vpn_termination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
					]
				}
			}
		},
		{
			"displayName": "Mac Address",
			"name": "mac_address",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mac_address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "mode",
			"type": "options",
			"default": "access",
			"options": [
				{
					"name": "Access",
					"value": "access"
				},
				{
					"name": "Tagged",
					"value": "tagged"
				},
				{
					"name": "Tagged All",
					"value": "tagged-all"
				}
			],
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
					]
				}
			}
		},
		{
			"displayName": "Mtu",
			"name": "mtu",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "mtu",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
					]
				}
			}
		},
		{
			"displayName": "Tagged Vlans",
			"name": "tagged_vlans",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tagged_vlans",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
					]
				}
			}
		},
		{
			"displayName": "Untagged Vlan",
			"name": "untagged_vlan",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "untagged_vlan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Virtual Machine",
			"name": "virtual_machine",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "virtual_machine",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
					]
				}
			}
		},
		{
			"displayName": "Vrf",
			"name": "vrf",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vrf",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Interfaces Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /virtualization/virtual-machines/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Delete"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /virtualization/virtual-machines/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Cluster",
			"name": "cluster",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Vcpus",
			"name": "vcpus",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "vcpus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Memory",
			"name": "memory",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "memory",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Disk",
			"name": "disk",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "disk",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Tenant Group Id",
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id",
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Local Context Data",
			"name": "local_context_data",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "local_context_data",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Cluster Group Id",
			"name": "cluster_group_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster_group_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Cluster Group",
			"name": "cluster_group",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster_group",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Cluster Type Id",
			"name": "cluster_type_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster_type_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Cluster Type",
			"name": "cluster_type",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Cluster Id",
			"name": "cluster_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Device Id",
			"name": "device_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "device_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Device",
			"name": "device",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "device",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Region Id",
			"name": "region_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "region_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Region",
			"name": "region",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "region",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Site Group Id",
			"name": "site_group_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "site_group_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Site Group",
			"name": "site_group",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "site_group",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Site Id",
			"name": "site_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "site_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Site",
			"name": "site",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "site",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Role Id",
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Platform Id",
			"name": "platform_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "platform_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Platform",
			"name": "platform",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "platform",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address",
			"name": "mac_address",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Has Primary Ip",
			"name": "has_primary_ip",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "has_primary_ip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Cluster N",
			"name": "cluster__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Vcpus N",
			"name": "vcpus__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "vcpus__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Vcpus Lte",
			"name": "vcpus__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "vcpus__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Vcpus Lt",
			"name": "vcpus__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "vcpus__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Vcpus Gte",
			"name": "vcpus__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "vcpus__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Vcpus Gt",
			"name": "vcpus__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "vcpus__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Memory N",
			"name": "memory__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "memory__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Memory Lte",
			"name": "memory__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "memory__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Memory Lt",
			"name": "memory__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "memory__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Memory Gte",
			"name": "memory__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "memory__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Memory Gt",
			"name": "memory__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "memory__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Disk N",
			"name": "disk__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "disk__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Disk Lte",
			"name": "disk__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "disk__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Disk Lt",
			"name": "disk__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "disk__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Disk Gte",
			"name": "disk__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "disk__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Disk Gt",
			"name": "disk__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "disk__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Tenant Group Id N",
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id N",
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Cluster Group Id N",
			"name": "cluster_group_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster_group_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Cluster Group N",
			"name": "cluster_group__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster_group__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Cluster Type Id N",
			"name": "cluster_type_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster_type_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Cluster Type N",
			"name": "cluster_type__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster_type__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Cluster Id N",
			"name": "cluster_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cluster_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Device Id N",
			"name": "device_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "device_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Device N",
			"name": "device__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "device__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Region Id N",
			"name": "region_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "region_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Region N",
			"name": "region__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "region__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Site Group Id N",
			"name": "site_group_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "site_group_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Site Group N",
			"name": "site_group__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "site_group__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Site Id N",
			"name": "site_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "site_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Site N",
			"name": "site__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "site__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Role Id N",
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Platform Id N",
			"name": "platform_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "platform_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Platform N",
			"name": "platform__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "platform__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address N",
			"name": "mac_address__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address Ic",
			"name": "mac_address__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address Nic",
			"name": "mac_address__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address Iew",
			"name": "mac_address__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address Niew",
			"name": "mac_address__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address Isw",
			"name": "mac_address__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address Nisw",
			"name": "mac_address__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address Ie",
			"name": "mac_address__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "Mac Address Nie",
			"name": "mac_address__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "mac_address__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /virtualization/virtual-machines/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Cluster",
			"name": "cluster",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "cluster",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Config Context",
			"name": "config_context",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "config_context",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Device",
			"name": "device",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "device",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Disk",
			"name": "disk",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "disk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Local Context Data",
			"name": "local_context_data",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "local_context_data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Memory",
			"name": "memory",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "memory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Platform",
			"name": "platform",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "platform",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Primary Ip",
			"name": "primary_ip",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "primary_ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Primary Ip 4",
			"name": "primary_ip4",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "primary_ip4",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Primary Ip 6",
			"name": "primary_ip6",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "primary_ip6",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
					]
				}
			}
		},
		{
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Site",
			"name": "site",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "site",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "offline",
			"options": [
				{
					"name": "Offline",
					"value": "offline"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Planned",
					"value": "planned"
				},
				{
					"name": "Staged",
					"value": "staged"
				},
				{
					"name": "Failed",
					"value": "failed"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Vcpus",
			"name": "vcpus",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vcpus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /virtualization/virtual-machines/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
					]
				}
			}
		},
		{
			"displayName": "Cluster",
			"name": "cluster",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "cluster",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
					]
				}
			}
		},
		{
			"displayName": "Config Context",
			"name": "config_context",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "config_context",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
					]
				}
			}
		},
		{
			"displayName": "Device",
			"name": "device",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "device",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
					]
				}
			}
		},
		{
			"displayName": "Disk",
			"name": "disk",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "disk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
					]
				}
			}
		},
		{
			"displayName": "Local Context Data",
			"name": "local_context_data",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "local_context_data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
					]
				}
			}
		},
		{
			"displayName": "Memory",
			"name": "memory",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "memory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
					]
				}
			}
		},
		{
			"displayName": "Platform",
			"name": "platform",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "platform",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
					]
				}
			}
		},
		{
			"displayName": "Primary Ip",
			"name": "primary_ip",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "primary_ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
					]
				}
			}
		},
		{
			"displayName": "Primary Ip 4",
			"name": "primary_ip4",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "primary_ip4",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
					]
				}
			}
		},
		{
			"displayName": "Primary Ip 6",
			"name": "primary_ip6",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "primary_ip6",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
					]
				}
			}
		},
		{
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
					]
				}
			}
		},
		{
			"displayName": "Site",
			"name": "site",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "site",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "offline",
			"options": [
				{
					"name": "Offline",
					"value": "offline"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Planned",
					"value": "planned"
				},
				{
					"name": "Staged",
					"value": "staged"
				},
				{
					"name": "Failed",
					"value": "failed"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
					]
				}
			}
		},
		{
			"displayName": "Vcpus",
			"name": "vcpus",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vcpus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /virtualization/virtual-machines/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Cluster",
			"name": "cluster",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "cluster",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Config Context",
			"name": "config_context",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "config_context",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Device",
			"name": "device",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "device",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Disk",
			"name": "disk",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "disk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Local Context Data",
			"name": "local_context_data",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "local_context_data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Memory",
			"name": "memory",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "memory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Platform",
			"name": "platform",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "platform",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Primary Ip",
			"name": "primary_ip",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "primary_ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Primary Ip 4",
			"name": "primary_ip4",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "primary_ip4",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Primary Ip 6",
			"name": "primary_ip6",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "primary_ip6",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
					]
				}
			}
		},
		{
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Site",
			"name": "site",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "site",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "offline",
			"options": [
				{
					"name": "Offline",
					"value": "offline"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Planned",
					"value": "planned"
				},
				{
					"name": "Staged",
					"value": "staged"
				},
				{
					"name": "Failed",
					"value": "failed"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Vcpus",
			"name": "vcpus",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vcpus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /virtualization/virtual-machines/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Delete"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /virtualization/virtual-machines/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Read"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /virtualization/virtual-machines/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Cluster",
			"name": "cluster",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "cluster",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Config Context",
			"name": "config_context",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "config_context",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Device",
			"name": "device",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "device",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Disk",
			"name": "disk",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "disk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Local Context Data",
			"name": "local_context_data",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "local_context_data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Memory",
			"name": "memory",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "memory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Platform",
			"name": "platform",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "platform",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Primary Ip",
			"name": "primary_ip",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "primary_ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Primary Ip 4",
			"name": "primary_ip4",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "primary_ip4",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Primary Ip 6",
			"name": "primary_ip6",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "primary_ip6",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
					]
				}
			}
		},
		{
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Site",
			"name": "site",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "site",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "offline",
			"options": [
				{
					"name": "Offline",
					"value": "offline"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Planned",
					"value": "planned"
				},
				{
					"name": "Staged",
					"value": "staged"
				},
				{
					"name": "Failed",
					"value": "failed"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Vcpus",
			"name": "vcpus",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vcpus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /virtualization/virtual-machines/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
					]
				}
			}
		},
		{
			"displayName": "Cluster",
			"name": "cluster",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "cluster",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
					]
				}
			}
		},
		{
			"displayName": "Config Context",
			"name": "config_context",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "config_context",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
					]
				}
			}
		},
		{
			"displayName": "Device",
			"name": "device",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "device",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
					]
				}
			}
		},
		{
			"displayName": "Disk",
			"name": "disk",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "disk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
					]
				}
			}
		},
		{
			"displayName": "Local Context Data",
			"name": "local_context_data",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "local_context_data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
					]
				}
			}
		},
		{
			"displayName": "Memory",
			"name": "memory",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "memory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
					]
				}
			}
		},
		{
			"displayName": "Platform",
			"name": "platform",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "platform",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
					]
				}
			}
		},
		{
			"displayName": "Primary Ip",
			"name": "primary_ip",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "primary_ip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
					]
				}
			}
		},
		{
			"displayName": "Primary Ip 4",
			"name": "primary_ip4",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "primary_ip4",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
					]
				}
			}
		},
		{
			"displayName": "Primary Ip 6",
			"name": "primary_ip6",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "primary_ip6",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
					]
				}
			}
		},
		{
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
					]
				}
			}
		},
		{
			"displayName": "Site",
			"name": "site",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "site",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "offline",
			"options": [
				{
					"name": "Offline",
					"value": "offline"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Planned",
					"value": "planned"
				},
				{
					"name": "Staged",
					"value": "staged"
				},
				{
					"name": "Failed",
					"value": "failed"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
					]
				}
			}
		},
		{
			"displayName": "Vcpus",
			"name": "vcpus",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "vcpus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
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
						"Virtualization"
					],
					"operation": [
						"Virtualization Virtual Machines Update"
					]
				}
			}
		},
];
