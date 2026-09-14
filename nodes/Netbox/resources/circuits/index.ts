import type { INodeProperties } from 'n8n-workflow';

export const circuitsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					]
				}
			},
			"options": [
				{
					"name": "Circuits Circuit Terminations Bulk Delete",
					"value": "Circuits Circuit Terminations Bulk Delete",
					"action": "Circuits Circuit Terminations Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/circuits/circuit-terminations/"
						}
					}
				},
				{
					"name": "Circuits Circuit Terminations List",
					"value": "Circuits Circuit Terminations List",
					"action": "Circuits Circuit Terminations List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/circuits/circuit-terminations/"
						}
					}
				},
				{
					"name": "Circuits Circuit Terminations Bulk Partial Update",
					"value": "Circuits Circuit Terminations Bulk Partial Update",
					"action": "Circuits Circuit Terminations Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/circuits/circuit-terminations/"
						}
					}
				},
				{
					"name": "Circuits Circuit Terminations Create",
					"value": "Circuits Circuit Terminations Create",
					"action": "Circuits Circuit Terminations Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/circuits/circuit-terminations/"
						}
					}
				},
				{
					"name": "Circuits Circuit Terminations Bulk Update",
					"value": "Circuits Circuit Terminations Bulk Update",
					"action": "Circuits Circuit Terminations Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/circuits/circuit-terminations/"
						}
					}
				},
				{
					"name": "Circuits Circuit Terminations Delete",
					"value": "Circuits Circuit Terminations Delete",
					"action": "Circuits Circuit Terminations Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/circuits/circuit-terminations/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Circuit Terminations Read",
					"value": "Circuits Circuit Terminations Read",
					"action": "Circuits Circuit Terminations Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/circuits/circuit-terminations/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Circuit Terminations Partial Update",
					"value": "Circuits Circuit Terminations Partial Update",
					"action": "Circuits Circuit Terminations Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/circuits/circuit-terminations/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Circuit Terminations Update",
					"value": "Circuits Circuit Terminations Update",
					"action": "Circuits Circuit Terminations Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/circuits/circuit-terminations/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Circuit Terminations Paths",
					"value": "Circuits Circuit Terminations Paths",
					"action": "Circuits Circuit Terminations Paths",
					"description": "Return all CablePaths which traverse a given pass-through port.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/circuits/circuit-terminations/{{$parameter[\"id\"]}}/paths/"
						}
					}
				},
				{
					"name": "Circuits Circuit Types Bulk Delete",
					"value": "Circuits Circuit Types Bulk Delete",
					"action": "Circuits Circuit Types Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/circuits/circuit-types/"
						}
					}
				},
				{
					"name": "Circuits Circuit Types List",
					"value": "Circuits Circuit Types List",
					"action": "Circuits Circuit Types List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/circuits/circuit-types/"
						}
					}
				},
				{
					"name": "Circuits Circuit Types Bulk Partial Update",
					"value": "Circuits Circuit Types Bulk Partial Update",
					"action": "Circuits Circuit Types Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/circuits/circuit-types/"
						}
					}
				},
				{
					"name": "Circuits Circuit Types Create",
					"value": "Circuits Circuit Types Create",
					"action": "Circuits Circuit Types Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/circuits/circuit-types/"
						}
					}
				},
				{
					"name": "Circuits Circuit Types Bulk Update",
					"value": "Circuits Circuit Types Bulk Update",
					"action": "Circuits Circuit Types Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/circuits/circuit-types/"
						}
					}
				},
				{
					"name": "Circuits Circuit Types Delete",
					"value": "Circuits Circuit Types Delete",
					"action": "Circuits Circuit Types Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/circuits/circuit-types/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Circuit Types Read",
					"value": "Circuits Circuit Types Read",
					"action": "Circuits Circuit Types Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/circuits/circuit-types/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Circuit Types Partial Update",
					"value": "Circuits Circuit Types Partial Update",
					"action": "Circuits Circuit Types Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/circuits/circuit-types/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Circuit Types Update",
					"value": "Circuits Circuit Types Update",
					"action": "Circuits Circuit Types Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/circuits/circuit-types/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Circuits Bulk Delete",
					"value": "Circuits Circuits Bulk Delete",
					"action": "Circuits Circuits Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/circuits/circuits/"
						}
					}
				},
				{
					"name": "Circuits Circuits List",
					"value": "Circuits Circuits List",
					"action": "Circuits Circuits List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/circuits/circuits/"
						}
					}
				},
				{
					"name": "Circuits Circuits Bulk Partial Update",
					"value": "Circuits Circuits Bulk Partial Update",
					"action": "Circuits Circuits Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/circuits/circuits/"
						}
					}
				},
				{
					"name": "Circuits Circuits Create",
					"value": "Circuits Circuits Create",
					"action": "Circuits Circuits Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/circuits/circuits/"
						}
					}
				},
				{
					"name": "Circuits Circuits Bulk Update",
					"value": "Circuits Circuits Bulk Update",
					"action": "Circuits Circuits Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/circuits/circuits/"
						}
					}
				},
				{
					"name": "Circuits Circuits Delete",
					"value": "Circuits Circuits Delete",
					"action": "Circuits Circuits Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/circuits/circuits/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Circuits Read",
					"value": "Circuits Circuits Read",
					"action": "Circuits Circuits Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/circuits/circuits/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Circuits Partial Update",
					"value": "Circuits Circuits Partial Update",
					"action": "Circuits Circuits Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/circuits/circuits/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Circuits Update",
					"value": "Circuits Circuits Update",
					"action": "Circuits Circuits Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/circuits/circuits/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Provider Networks Bulk Delete",
					"value": "Circuits Provider Networks Bulk Delete",
					"action": "Circuits Provider Networks Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/circuits/provider-networks/"
						}
					}
				},
				{
					"name": "Circuits Provider Networks List",
					"value": "Circuits Provider Networks List",
					"action": "Circuits Provider Networks List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/circuits/provider-networks/"
						}
					}
				},
				{
					"name": "Circuits Provider Networks Bulk Partial Update",
					"value": "Circuits Provider Networks Bulk Partial Update",
					"action": "Circuits Provider Networks Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/circuits/provider-networks/"
						}
					}
				},
				{
					"name": "Circuits Provider Networks Create",
					"value": "Circuits Provider Networks Create",
					"action": "Circuits Provider Networks Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/circuits/provider-networks/"
						}
					}
				},
				{
					"name": "Circuits Provider Networks Bulk Update",
					"value": "Circuits Provider Networks Bulk Update",
					"action": "Circuits Provider Networks Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/circuits/provider-networks/"
						}
					}
				},
				{
					"name": "Circuits Provider Networks Delete",
					"value": "Circuits Provider Networks Delete",
					"action": "Circuits Provider Networks Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/circuits/provider-networks/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Provider Networks Read",
					"value": "Circuits Provider Networks Read",
					"action": "Circuits Provider Networks Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/circuits/provider-networks/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Provider Networks Partial Update",
					"value": "Circuits Provider Networks Partial Update",
					"action": "Circuits Provider Networks Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/circuits/provider-networks/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Provider Networks Update",
					"value": "Circuits Provider Networks Update",
					"action": "Circuits Provider Networks Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/circuits/provider-networks/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Providers Bulk Delete",
					"value": "Circuits Providers Bulk Delete",
					"action": "Circuits Providers Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/circuits/providers/"
						}
					}
				},
				{
					"name": "Circuits Providers List",
					"value": "Circuits Providers List",
					"action": "Circuits Providers List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/circuits/providers/"
						}
					}
				},
				{
					"name": "Circuits Providers Bulk Partial Update",
					"value": "Circuits Providers Bulk Partial Update",
					"action": "Circuits Providers Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/circuits/providers/"
						}
					}
				},
				{
					"name": "Circuits Providers Create",
					"value": "Circuits Providers Create",
					"action": "Circuits Providers Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/circuits/providers/"
						}
					}
				},
				{
					"name": "Circuits Providers Bulk Update",
					"value": "Circuits Providers Bulk Update",
					"action": "Circuits Providers Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/circuits/providers/"
						}
					}
				},
				{
					"name": "Circuits Providers Delete",
					"value": "Circuits Providers Delete",
					"action": "Circuits Providers Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/circuits/providers/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Providers Read",
					"value": "Circuits Providers Read",
					"action": "Circuits Providers Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/circuits/providers/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Providers Partial Update",
					"value": "Circuits Providers Partial Update",
					"action": "Circuits Providers Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/circuits/providers/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Circuits Providers Update",
					"value": "Circuits Providers Update",
					"action": "Circuits Providers Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/circuits/providers/{{$parameter[\"id\"]}}/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /circuits/circuit-terminations/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Delete"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /circuits/circuit-terminations/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Term Side",
			"name": "term_side",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "term_side",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Port Speed",
			"name": "port_speed",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "port_speed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Upstream Speed",
			"name": "upstream_speed",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "upstream_speed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Xconnect ID",
			"name": "xconnect_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "xconnect_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Cable End",
			"name": "cable_end",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cable_end",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Cabled",
			"name": "cabled",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cabled",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Occupied",
			"name": "occupied",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "occupied",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Circuit ID",
			"name": "circuit_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "circuit_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Site ID",
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Provider Network ID",
			"name": "provider_network_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "provider_network_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Term Side N",
			"name": "term_side__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "term_side__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Port Speed N",
			"name": "port_speed__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "port_speed__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Port Speed Lte",
			"name": "port_speed__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "port_speed__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Port Speed Lt",
			"name": "port_speed__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "port_speed__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Port Speed Gte",
			"name": "port_speed__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "port_speed__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Port Speed Gt",
			"name": "port_speed__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "port_speed__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Upstream Speed N",
			"name": "upstream_speed__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "upstream_speed__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Upstream Speed Lte",
			"name": "upstream_speed__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "upstream_speed__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Upstream Speed Lt",
			"name": "upstream_speed__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "upstream_speed__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Upstream Speed Gte",
			"name": "upstream_speed__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "upstream_speed__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Upstream Speed Gt",
			"name": "upstream_speed__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "upstream_speed__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Xconnect ID N",
			"name": "xconnect_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "xconnect_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Xconnect ID Ic",
			"name": "xconnect_id__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "xconnect_id__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Xconnect ID Nic",
			"name": "xconnect_id__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "xconnect_id__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Xconnect ID Iew",
			"name": "xconnect_id__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "xconnect_id__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Xconnect ID Niew",
			"name": "xconnect_id__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "xconnect_id__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Xconnect ID Isw",
			"name": "xconnect_id__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "xconnect_id__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Xconnect ID Nisw",
			"name": "xconnect_id__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "xconnect_id__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Xconnect ID Ie",
			"name": "xconnect_id__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "xconnect_id__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Xconnect ID Nie",
			"name": "xconnect_id__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "xconnect_id__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Xconnect ID Empty",
			"name": "xconnect_id__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "xconnect_id__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Cable End N",
			"name": "cable_end__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cable_end__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Circuit ID N",
			"name": "circuit_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "circuit_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Site ID N",
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "Provider Network ID N",
			"name": "provider_network_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "provider_network_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /circuits/circuit-terminations/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Occupied",
			"name": "_occupied",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "_occupied",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Cable",
			"name": "cable",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Cable End",
			"name": "cable_end",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "cable_end",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Circuit",
			"name": "circuit",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "circuit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Link Peers",
			"name": "link_peers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "\nReturn the appropriate serializer for the link termination model.\n",
			"routing": {
				"send": {
					"property": "link_peers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Link Peers Type",
			"name": "link_peers_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "link_peers_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Mark Connected",
			"name": "mark_connected",
			"type": "boolean",
			"default": true,
			"description": "Treat as if a cable is connected",
			"routing": {
				"send": {
					"property": "mark_connected",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Port Speed",
			"name": "port_speed",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "port_speed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Pp Info",
			"name": "pp_info",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pp_info",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Provider Network",
			"name": "provider_network",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "provider_network",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Term Side",
			"name": "term_side",
			"type": "options",
			"default": "A",
			"options": [
				{
					"name": "A",
					"value": "A"
				},
				{
					"name": "Z",
					"value": "Z"
				}
			],
			"routing": {
				"send": {
					"property": "term_side",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Upstream Speed",
			"name": "upstream_speed",
			"type": "number",
			"default": 0,
			"description": "Upstream speed, if different from port speed",
			"routing": {
				"send": {
					"property": "upstream_speed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Xconnect ID",
			"name": "xconnect_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "xconnect_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /circuits/circuit-terminations/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
					]
				}
			}
		},
		{
			"displayName": "Occupied",
			"name": "_occupied",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "_occupied",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
					]
				}
			}
		},
		{
			"displayName": "Cable",
			"name": "cable",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
					]
				}
			}
		},
		{
			"displayName": "Cable End",
			"name": "cable_end",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "cable_end",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Circuit",
			"name": "circuit",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "circuit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
					]
				}
			}
		},
		{
			"displayName": "Link Peers",
			"name": "link_peers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "\nReturn the appropriate serializer for the link termination model.\n",
			"routing": {
				"send": {
					"property": "link_peers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
					]
				}
			}
		},
		{
			"displayName": "Link Peers Type",
			"name": "link_peers_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "link_peers_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
					]
				}
			}
		},
		{
			"displayName": "Mark Connected",
			"name": "mark_connected",
			"type": "boolean",
			"default": true,
			"description": "Treat as if a cable is connected",
			"routing": {
				"send": {
					"property": "mark_connected",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
					]
				}
			}
		},
		{
			"displayName": "Port Speed",
			"name": "port_speed",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "port_speed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
					]
				}
			}
		},
		{
			"displayName": "Pp Info",
			"name": "pp_info",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pp_info",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
					]
				}
			}
		},
		{
			"displayName": "Provider Network",
			"name": "provider_network",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "provider_network",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Term Side",
			"name": "term_side",
			"type": "options",
			"default": "A",
			"options": [
				{
					"name": "A",
					"value": "A"
				},
				{
					"name": "Z",
					"value": "Z"
				}
			],
			"routing": {
				"send": {
					"property": "term_side",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
					]
				}
			}
		},
		{
			"displayName": "Upstream Speed",
			"name": "upstream_speed",
			"type": "number",
			"default": 0,
			"description": "Upstream speed, if different from port speed",
			"routing": {
				"send": {
					"property": "upstream_speed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
					]
				}
			}
		},
		{
			"displayName": "Xconnect ID",
			"name": "xconnect_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "xconnect_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /circuits/circuit-terminations/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Occupied",
			"name": "_occupied",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "_occupied",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Cable",
			"name": "cable",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Cable End",
			"name": "cable_end",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "cable_end",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Circuit",
			"name": "circuit",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "circuit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Link Peers",
			"name": "link_peers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "\nReturn the appropriate serializer for the link termination model.\n",
			"routing": {
				"send": {
					"property": "link_peers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Link Peers Type",
			"name": "link_peers_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "link_peers_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Mark Connected",
			"name": "mark_connected",
			"type": "boolean",
			"default": true,
			"description": "Treat as if a cable is connected",
			"routing": {
				"send": {
					"property": "mark_connected",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Port Speed",
			"name": "port_speed",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "port_speed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Pp Info",
			"name": "pp_info",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pp_info",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Provider Network",
			"name": "provider_network",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "provider_network",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Term Side",
			"name": "term_side",
			"type": "options",
			"default": "A",
			"options": [
				{
					"name": "A",
					"value": "A"
				},
				{
					"name": "Z",
					"value": "Z"
				}
			],
			"routing": {
				"send": {
					"property": "term_side",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Upstream Speed",
			"name": "upstream_speed",
			"type": "number",
			"default": 0,
			"description": "Upstream speed, if different from port speed",
			"routing": {
				"send": {
					"property": "upstream_speed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Xconnect ID",
			"name": "xconnect_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "xconnect_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /circuits/circuit-terminations/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Delete"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /circuits/circuit-terminations/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Read"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /circuits/circuit-terminations/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Occupied",
			"name": "_occupied",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "_occupied",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Cable",
			"name": "cable",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Cable End",
			"name": "cable_end",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "cable_end",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Circuit",
			"name": "circuit",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "circuit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Link Peers",
			"name": "link_peers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "\nReturn the appropriate serializer for the link termination model.\n",
			"routing": {
				"send": {
					"property": "link_peers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Link Peers Type",
			"name": "link_peers_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "link_peers_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Mark Connected",
			"name": "mark_connected",
			"type": "boolean",
			"default": true,
			"description": "Treat as if a cable is connected",
			"routing": {
				"send": {
					"property": "mark_connected",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Port Speed",
			"name": "port_speed",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "port_speed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Pp Info",
			"name": "pp_info",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pp_info",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Provider Network",
			"name": "provider_network",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "provider_network",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Term Side",
			"name": "term_side",
			"type": "options",
			"default": "A",
			"options": [
				{
					"name": "A",
					"value": "A"
				},
				{
					"name": "Z",
					"value": "Z"
				}
			],
			"routing": {
				"send": {
					"property": "term_side",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Upstream Speed",
			"name": "upstream_speed",
			"type": "number",
			"default": 0,
			"description": "Upstream speed, if different from port speed",
			"routing": {
				"send": {
					"property": "upstream_speed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Xconnect ID",
			"name": "xconnect_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "xconnect_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /circuits/circuit-terminations/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
					]
				}
			}
		},
		{
			"displayName": "Occupied",
			"name": "_occupied",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "_occupied",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
					]
				}
			}
		},
		{
			"displayName": "Cable",
			"name": "cable",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cable",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
					]
				}
			}
		},
		{
			"displayName": "Cable End",
			"name": "cable_end",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "cable_end",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Circuit",
			"name": "circuit",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "circuit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
					]
				}
			}
		},
		{
			"displayName": "Link Peers",
			"name": "link_peers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "\nReturn the appropriate serializer for the link termination model.\n",
			"routing": {
				"send": {
					"property": "link_peers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
					]
				}
			}
		},
		{
			"displayName": "Link Peers Type",
			"name": "link_peers_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "link_peers_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
					]
				}
			}
		},
		{
			"displayName": "Mark Connected",
			"name": "mark_connected",
			"type": "boolean",
			"default": true,
			"description": "Treat as if a cable is connected",
			"routing": {
				"send": {
					"property": "mark_connected",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
					]
				}
			}
		},
		{
			"displayName": "Port Speed",
			"name": "port_speed",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "port_speed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
					]
				}
			}
		},
		{
			"displayName": "Pp Info",
			"name": "pp_info",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pp_info",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
					]
				}
			}
		},
		{
			"displayName": "Provider Network",
			"name": "provider_network",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "provider_network",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Term Side",
			"name": "term_side",
			"type": "options",
			"default": "A",
			"options": [
				{
					"name": "A",
					"value": "A"
				},
				{
					"name": "Z",
					"value": "Z"
				}
			],
			"routing": {
				"send": {
					"property": "term_side",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
					]
				}
			}
		},
		{
			"displayName": "Upstream Speed",
			"name": "upstream_speed",
			"type": "number",
			"default": 0,
			"description": "Upstream speed, if different from port speed",
			"routing": {
				"send": {
					"property": "upstream_speed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
					]
				}
			}
		},
		{
			"displayName": "Xconnect ID",
			"name": "xconnect_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "xconnect_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Update"
					]
				}
			}
		},
		{
			"displayName": "GET /circuits/circuit-terminations/{id}/paths/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Paths"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Terminations Paths"
					]
				}
			}
		},
		{
			"displayName": "DELETE /circuits/circuit-types/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Delete"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /circuits/circuit-types/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /circuits/circuit-types/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /circuits/circuit-types/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /circuits/circuit-types/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /circuits/circuit-types/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Delete"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /circuits/circuit-types/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Read"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /circuits/circuit-types/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /circuits/circuit-types/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuit Types Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /circuits/circuits/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Delete"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /circuits/circuits/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Cid",
			"name": "cid",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Install Date",
			"name": "install_date",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "install_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Termination Date",
			"name": "termination_date",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "termination_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Commit Rate",
			"name": "commit_rate",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "commit_rate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Provider ID",
			"name": "provider_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "provider_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Provider",
			"name": "provider",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "provider",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Provider Network ID",
			"name": "provider_network_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "provider_network_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Type ID",
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Region ID",
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Site Group ID",
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Site ID",
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Cid N",
			"name": "cid__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cid__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Cid Ic",
			"name": "cid__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cid__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Cid Nic",
			"name": "cid__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cid__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Cid Iew",
			"name": "cid__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cid__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Cid Niew",
			"name": "cid__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cid__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Cid Isw",
			"name": "cid__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cid__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Cid Nisw",
			"name": "cid__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cid__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Cid Ie",
			"name": "cid__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cid__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Cid Nie",
			"name": "cid__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cid__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Cid Empty",
			"name": "cid__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cid__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Install Date N",
			"name": "install_date__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "install_date__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Install Date Lte",
			"name": "install_date__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "install_date__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Install Date Lt",
			"name": "install_date__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "install_date__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Install Date Gte",
			"name": "install_date__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "install_date__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Install Date Gt",
			"name": "install_date__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "install_date__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Termination Date N",
			"name": "termination_date__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "termination_date__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Termination Date Lte",
			"name": "termination_date__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "termination_date__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Termination Date Lt",
			"name": "termination_date__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "termination_date__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Termination Date Gte",
			"name": "termination_date__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "termination_date__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Termination Date Gt",
			"name": "termination_date__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "termination_date__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Commit Rate N",
			"name": "commit_rate__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "commit_rate__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Commit Rate Lte",
			"name": "commit_rate__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "commit_rate__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Commit Rate Lt",
			"name": "commit_rate__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "commit_rate__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Commit Rate Gte",
			"name": "commit_rate__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "commit_rate__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Commit Rate Gt",
			"name": "commit_rate__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "commit_rate__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Provider ID N",
			"name": "provider_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "provider_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Provider N",
			"name": "provider__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "provider__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Provider Network ID N",
			"name": "provider_network_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "provider_network_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Type ID N",
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Region ID N",
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Site Group ID N",
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "Site ID N",
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /circuits/circuits/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cid",
			"name": "cid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "cid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Commit Rate",
			"name": "commit_rate",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "commit_rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Install Date",
			"name": "install_date",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "install_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Provider",
			"name": "provider",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "provider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
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
					"name": "Provisioning",
					"value": "provisioning"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Offline",
					"value": "offline"
				},
				{
					"name": "Deprovisioning",
					"value": "deprovisioning"
				},
				{
					"name": "Decommissioned",
					"value": "decommissioned"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Termination A",
			"name": "termination_a",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "termination_a",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Termination Date",
			"name": "termination_date",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "termination_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Termination Z",
			"name": "termination_z",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "termination_z",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /circuits/circuits/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cid",
			"name": "cid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "cid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
					]
				}
			}
		},
		{
			"displayName": "Commit Rate",
			"name": "commit_rate",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "commit_rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
					]
				}
			}
		},
		{
			"displayName": "Install Date",
			"name": "install_date",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "install_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Provider",
			"name": "provider",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "provider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
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
					"name": "Provisioning",
					"value": "provisioning"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Offline",
					"value": "offline"
				},
				{
					"name": "Deprovisioning",
					"value": "deprovisioning"
				},
				{
					"name": "Decommissioned",
					"value": "decommissioned"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
					]
				}
			}
		},
		{
			"displayName": "Termination A",
			"name": "termination_a",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "termination_a",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
					]
				}
			}
		},
		{
			"displayName": "Termination Date",
			"name": "termination_date",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "termination_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
					]
				}
			}
		},
		{
			"displayName": "Termination Z",
			"name": "termination_z",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "termination_z",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /circuits/circuits/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cid",
			"name": "cid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "cid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Commit Rate",
			"name": "commit_rate",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "commit_rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Install Date",
			"name": "install_date",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "install_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Provider",
			"name": "provider",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "provider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
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
					"name": "Provisioning",
					"value": "provisioning"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Offline",
					"value": "offline"
				},
				{
					"name": "Deprovisioning",
					"value": "deprovisioning"
				},
				{
					"name": "Decommissioned",
					"value": "decommissioned"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Termination A",
			"name": "termination_a",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "termination_a",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Termination Date",
			"name": "termination_date",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "termination_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Termination Z",
			"name": "termination_z",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "termination_z",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /circuits/circuits/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Delete"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /circuits/circuits/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Read"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /circuits/circuits/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cid",
			"name": "cid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "cid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Commit Rate",
			"name": "commit_rate",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "commit_rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Install Date",
			"name": "install_date",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "install_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Provider",
			"name": "provider",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "provider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
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
					"name": "Provisioning",
					"value": "provisioning"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Offline",
					"value": "offline"
				},
				{
					"name": "Deprovisioning",
					"value": "deprovisioning"
				},
				{
					"name": "Decommissioned",
					"value": "decommissioned"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Termination A",
			"name": "termination_a",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "termination_a",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Termination Date",
			"name": "termination_date",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "termination_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Termination Z",
			"name": "termination_z",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "termination_z",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /circuits/circuits/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cid",
			"name": "cid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "cid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
					]
				}
			}
		},
		{
			"displayName": "Commit Rate",
			"name": "commit_rate",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "commit_rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
					]
				}
			}
		},
		{
			"displayName": "Install Date",
			"name": "install_date",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "install_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Provider",
			"name": "provider",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "provider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
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
					"name": "Provisioning",
					"value": "provisioning"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Offline",
					"value": "offline"
				},
				{
					"name": "Deprovisioning",
					"value": "deprovisioning"
				},
				{
					"name": "Decommissioned",
					"value": "decommissioned"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
					]
				}
			}
		},
		{
			"displayName": "Termination A",
			"name": "termination_a",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "termination_a",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
					]
				}
			}
		},
		{
			"displayName": "Termination Date",
			"name": "termination_date",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "termination_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
					]
				}
			}
		},
		{
			"displayName": "Termination Z",
			"name": "termination_z",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "termination_z",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Circuits Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /circuits/provider-networks/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Delete"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /circuits/provider-networks/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
					]
				}
			}
		},
		{
			"displayName": "Service ID",
			"name": "service_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "service_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
					]
				}
			}
		},
		{
			"displayName": "Provider ID",
			"name": "provider_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "provider_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
					]
				}
			}
		},
		{
			"displayName": "Provider",
			"name": "provider",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "provider",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
					]
				}
			}
		},
		{
			"displayName": "Service ID N",
			"name": "service_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "service_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
					]
				}
			}
		},
		{
			"displayName": "Service ID Ic",
			"name": "service_id__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "service_id__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
					]
				}
			}
		},
		{
			"displayName": "Service ID Nic",
			"name": "service_id__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "service_id__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
					]
				}
			}
		},
		{
			"displayName": "Service ID Iew",
			"name": "service_id__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "service_id__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
					]
				}
			}
		},
		{
			"displayName": "Service ID Niew",
			"name": "service_id__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "service_id__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
					]
				}
			}
		},
		{
			"displayName": "Service ID Isw",
			"name": "service_id__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "service_id__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
					]
				}
			}
		},
		{
			"displayName": "Service ID Nisw",
			"name": "service_id__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "service_id__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
					]
				}
			}
		},
		{
			"displayName": "Service ID Ie",
			"name": "service_id__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "service_id__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
					]
				}
			}
		},
		{
			"displayName": "Service ID Nie",
			"name": "service_id__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "service_id__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
					]
				}
			}
		},
		{
			"displayName": "Service ID Empty",
			"name": "service_id__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "service_id__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
					]
				}
			}
		},
		{
			"displayName": "Provider ID N",
			"name": "provider_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "provider_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
					]
				}
			}
		},
		{
			"displayName": "Provider N",
			"name": "provider__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "provider__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /circuits/provider-networks/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Provider",
			"name": "provider",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "provider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Service ID",
			"name": "service_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "service_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /circuits/provider-networks/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Provider",
			"name": "provider",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "provider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Create"
					]
				}
			}
		},
		{
			"displayName": "Service ID",
			"name": "service_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "service_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /circuits/provider-networks/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Provider",
			"name": "provider",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "provider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Service ID",
			"name": "service_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "service_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /circuits/provider-networks/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Delete"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /circuits/provider-networks/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Read"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /circuits/provider-networks/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Provider",
			"name": "provider",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "provider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Service ID",
			"name": "service_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "service_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /circuits/provider-networks/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Provider",
			"name": "provider",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "provider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Update"
					]
				}
			}
		},
		{
			"displayName": "Service ID",
			"name": "service_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "service_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Provider Networks Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /circuits/providers/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Delete"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /circuits/providers/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Account",
			"name": "account",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "account",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Region ID",
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Site Group ID",
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Site ID",
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Asn ID",
			"name": "asn_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "asn_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Account N",
			"name": "account__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "account__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Account Ic",
			"name": "account__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "account__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Account Nic",
			"name": "account__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "account__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Account Iew",
			"name": "account__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "account__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Account Niew",
			"name": "account__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "account__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Account Isw",
			"name": "account__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "account__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Account Nisw",
			"name": "account__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "account__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Account Ie",
			"name": "account__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "account__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Account Nie",
			"name": "account__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "account__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Account Empty",
			"name": "account__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "account__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Region ID N",
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Site Group ID N",
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Site ID N",
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "Asn ID N",
			"name": "asn_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "asn_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /circuits/providers/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Account",
			"name": "account",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Asns",
			"name": "asns",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "asns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /circuits/providers/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Create"
					]
				}
			}
		},
		{
			"displayName": "Account",
			"name": "account",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Create"
					]
				}
			}
		},
		{
			"displayName": "Asns",
			"name": "asns",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "asns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Create"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /circuits/providers/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Account",
			"name": "account",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Asns",
			"name": "asns",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "asns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /circuits/providers/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Delete"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /circuits/providers/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Read"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /circuits/providers/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Account",
			"name": "account",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Asns",
			"name": "asns",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "asns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Partial Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /circuits/providers/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Update"
					]
				}
			}
		},
		{
			"displayName": "Account",
			"name": "account",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Update"
					]
				}
			}
		},
		{
			"displayName": "Asns",
			"name": "asns",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "asns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Circuits"
					],
					"operation": [
						"Circuits Providers Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Update"
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
						"Circuits"
					],
					"operation": [
						"Circuits Providers Update"
					]
				}
			}
		},
];
