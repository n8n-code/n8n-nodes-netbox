import type { INodeProperties } from 'n8n-workflow';

export const extrasDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					]
				}
			},
			"options": [
				{
					"name": "Extras Config Contexts Bulk Delete",
					"value": "Extras Config Contexts Bulk Delete",
					"action": "Extras Config Contexts Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/config-contexts/"
						}
					}
				},
				{
					"name": "Extras Config Contexts List",
					"value": "Extras Config Contexts List",
					"action": "Extras Config Contexts List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/config-contexts/"
						}
					}
				},
				{
					"name": "Extras Config Contexts Bulk Partial Update",
					"value": "Extras Config Contexts Bulk Partial Update",
					"action": "Extras Config Contexts Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/config-contexts/"
						}
					}
				},
				{
					"name": "Extras Config Contexts Create",
					"value": "Extras Config Contexts Create",
					"action": "Extras Config Contexts Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/extras/config-contexts/"
						}
					}
				},
				{
					"name": "Extras Config Contexts Bulk Update",
					"value": "Extras Config Contexts Bulk Update",
					"action": "Extras Config Contexts Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/config-contexts/"
						}
					}
				},
				{
					"name": "Extras Config Contexts Delete",
					"value": "Extras Config Contexts Delete",
					"action": "Extras Config Contexts Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/config-contexts/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Config Contexts Read",
					"value": "Extras Config Contexts Read",
					"action": "Extras Config Contexts Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/config-contexts/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Config Contexts Partial Update",
					"value": "Extras Config Contexts Partial Update",
					"action": "Extras Config Contexts Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/config-contexts/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Config Contexts Update",
					"value": "Extras Config Contexts Update",
					"action": "Extras Config Contexts Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/config-contexts/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Content Types List",
					"value": "Extras Content Types List",
					"action": "Extras Content Types List",
					"description": "Read-only list of ContentTypes. Limit results to ContentTypes pertinent to NetBox objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/content-types/"
						}
					}
				},
				{
					"name": "Extras Content Types Read",
					"value": "Extras Content Types Read",
					"action": "Extras Content Types Read",
					"description": "Read-only list of ContentTypes. Limit results to ContentTypes pertinent to NetBox objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/content-types/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Custom Fields Bulk Delete",
					"value": "Extras Custom Fields Bulk Delete",
					"action": "Extras Custom Fields Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/custom-fields/"
						}
					}
				},
				{
					"name": "Extras Custom Fields List",
					"value": "Extras Custom Fields List",
					"action": "Extras Custom Fields List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/custom-fields/"
						}
					}
				},
				{
					"name": "Extras Custom Fields Bulk Partial Update",
					"value": "Extras Custom Fields Bulk Partial Update",
					"action": "Extras Custom Fields Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/custom-fields/"
						}
					}
				},
				{
					"name": "Extras Custom Fields Create",
					"value": "Extras Custom Fields Create",
					"action": "Extras Custom Fields Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/extras/custom-fields/"
						}
					}
				},
				{
					"name": "Extras Custom Fields Bulk Update",
					"value": "Extras Custom Fields Bulk Update",
					"action": "Extras Custom Fields Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/custom-fields/"
						}
					}
				},
				{
					"name": "Extras Custom Fields Delete",
					"value": "Extras Custom Fields Delete",
					"action": "Extras Custom Fields Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/custom-fields/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Custom Fields Read",
					"value": "Extras Custom Fields Read",
					"action": "Extras Custom Fields Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/custom-fields/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Custom Fields Partial Update",
					"value": "Extras Custom Fields Partial Update",
					"action": "Extras Custom Fields Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/custom-fields/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Custom Fields Update",
					"value": "Extras Custom Fields Update",
					"action": "Extras Custom Fields Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/custom-fields/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Custom Links Bulk Delete",
					"value": "Extras Custom Links Bulk Delete",
					"action": "Extras Custom Links Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/custom-links/"
						}
					}
				},
				{
					"name": "Extras Custom Links List",
					"value": "Extras Custom Links List",
					"action": "Extras Custom Links List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/custom-links/"
						}
					}
				},
				{
					"name": "Extras Custom Links Bulk Partial Update",
					"value": "Extras Custom Links Bulk Partial Update",
					"action": "Extras Custom Links Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/custom-links/"
						}
					}
				},
				{
					"name": "Extras Custom Links Create",
					"value": "Extras Custom Links Create",
					"action": "Extras Custom Links Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/extras/custom-links/"
						}
					}
				},
				{
					"name": "Extras Custom Links Bulk Update",
					"value": "Extras Custom Links Bulk Update",
					"action": "Extras Custom Links Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/custom-links/"
						}
					}
				},
				{
					"name": "Extras Custom Links Delete",
					"value": "Extras Custom Links Delete",
					"action": "Extras Custom Links Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/custom-links/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Custom Links Read",
					"value": "Extras Custom Links Read",
					"action": "Extras Custom Links Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/custom-links/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Custom Links Partial Update",
					"value": "Extras Custom Links Partial Update",
					"action": "Extras Custom Links Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/custom-links/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Custom Links Update",
					"value": "Extras Custom Links Update",
					"action": "Extras Custom Links Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/custom-links/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Export Templates Bulk Delete",
					"value": "Extras Export Templates Bulk Delete",
					"action": "Extras Export Templates Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/export-templates/"
						}
					}
				},
				{
					"name": "Extras Export Templates List",
					"value": "Extras Export Templates List",
					"action": "Extras Export Templates List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/export-templates/"
						}
					}
				},
				{
					"name": "Extras Export Templates Bulk Partial Update",
					"value": "Extras Export Templates Bulk Partial Update",
					"action": "Extras Export Templates Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/export-templates/"
						}
					}
				},
				{
					"name": "Extras Export Templates Create",
					"value": "Extras Export Templates Create",
					"action": "Extras Export Templates Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/extras/export-templates/"
						}
					}
				},
				{
					"name": "Extras Export Templates Bulk Update",
					"value": "Extras Export Templates Bulk Update",
					"action": "Extras Export Templates Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/export-templates/"
						}
					}
				},
				{
					"name": "Extras Export Templates Delete",
					"value": "Extras Export Templates Delete",
					"action": "Extras Export Templates Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/export-templates/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Export Templates Read",
					"value": "Extras Export Templates Read",
					"action": "Extras Export Templates Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/export-templates/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Export Templates Partial Update",
					"value": "Extras Export Templates Partial Update",
					"action": "Extras Export Templates Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/export-templates/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Export Templates Update",
					"value": "Extras Export Templates Update",
					"action": "Extras Export Templates Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/export-templates/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Image Attachments Bulk Delete",
					"value": "Extras Image Attachments Bulk Delete",
					"action": "Extras Image Attachments Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/image-attachments/"
						}
					}
				},
				{
					"name": "Extras Image Attachments List",
					"value": "Extras Image Attachments List",
					"action": "Extras Image Attachments List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/image-attachments/"
						}
					}
				},
				{
					"name": "Extras Image Attachments Bulk Partial Update",
					"value": "Extras Image Attachments Bulk Partial Update",
					"action": "Extras Image Attachments Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/image-attachments/"
						}
					}
				},
				{
					"name": "Extras Image Attachments Create",
					"value": "Extras Image Attachments Create",
					"action": "Extras Image Attachments Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/extras/image-attachments/"
						}
					}
				},
				{
					"name": "Extras Image Attachments Bulk Update",
					"value": "Extras Image Attachments Bulk Update",
					"action": "Extras Image Attachments Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/image-attachments/"
						}
					}
				},
				{
					"name": "Extras Image Attachments Delete",
					"value": "Extras Image Attachments Delete",
					"action": "Extras Image Attachments Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/image-attachments/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Image Attachments Read",
					"value": "Extras Image Attachments Read",
					"action": "Extras Image Attachments Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/image-attachments/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Image Attachments Partial Update",
					"value": "Extras Image Attachments Partial Update",
					"action": "Extras Image Attachments Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/image-attachments/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Image Attachments Update",
					"value": "Extras Image Attachments Update",
					"action": "Extras Image Attachments Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/image-attachments/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Job Results List",
					"value": "Extras Job Results List",
					"action": "Extras Job Results List",
					"description": "Retrieve a list of job results",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/job-results/"
						}
					}
				},
				{
					"name": "Extras Job Results Read",
					"value": "Extras Job Results Read",
					"action": "Extras Job Results Read",
					"description": "Retrieve a list of job results",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/job-results/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Journal Entries Bulk Delete",
					"value": "Extras Journal Entries Bulk Delete",
					"action": "Extras Journal Entries Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/journal-entries/"
						}
					}
				},
				{
					"name": "Extras Journal Entries List",
					"value": "Extras Journal Entries List",
					"action": "Extras Journal Entries List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/journal-entries/"
						}
					}
				},
				{
					"name": "Extras Journal Entries Bulk Partial Update",
					"value": "Extras Journal Entries Bulk Partial Update",
					"action": "Extras Journal Entries Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/journal-entries/"
						}
					}
				},
				{
					"name": "Extras Journal Entries Create",
					"value": "Extras Journal Entries Create",
					"action": "Extras Journal Entries Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/extras/journal-entries/"
						}
					}
				},
				{
					"name": "Extras Journal Entries Bulk Update",
					"value": "Extras Journal Entries Bulk Update",
					"action": "Extras Journal Entries Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/journal-entries/"
						}
					}
				},
				{
					"name": "Extras Journal Entries Delete",
					"value": "Extras Journal Entries Delete",
					"action": "Extras Journal Entries Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/journal-entries/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Journal Entries Read",
					"value": "Extras Journal Entries Read",
					"action": "Extras Journal Entries Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/journal-entries/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Journal Entries Partial Update",
					"value": "Extras Journal Entries Partial Update",
					"action": "Extras Journal Entries Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/journal-entries/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Journal Entries Update",
					"value": "Extras Journal Entries Update",
					"action": "Extras Journal Entries Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/journal-entries/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Object Changes List",
					"value": "Extras Object Changes List",
					"action": "Extras Object Changes List",
					"description": "Retrieve a list of recent changes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/object-changes/"
						}
					}
				},
				{
					"name": "Extras Object Changes Read",
					"value": "Extras Object Changes Read",
					"action": "Extras Object Changes Read",
					"description": "Retrieve a list of recent changes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/object-changes/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Reports List",
					"value": "Extras Reports List",
					"action": "Extras Reports List",
					"description": "Compile all reports and their related results (if any). Result data is deferred in the list view.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/reports/"
						}
					}
				},
				{
					"name": "Extras Reports Read",
					"value": "Extras Reports Read",
					"action": "Extras Reports Read",
					"description": "Retrieve a single Report identified as \"<module>.<report>\".",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/reports/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Reports Run",
					"value": "Extras Reports Run",
					"action": "Extras Reports Run",
					"description": "Run a Report identified as \"<module>.<script>\" and return the pending JobResult as the result",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/extras/reports/{{$parameter[\"id\"]}}/run/"
						}
					}
				},
				{
					"name": "Extras Saved Filters Bulk Delete",
					"value": "Extras Saved Filters Bulk Delete",
					"action": "Extras Saved Filters Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/saved-filters/"
						}
					}
				},
				{
					"name": "Extras Saved Filters List",
					"value": "Extras Saved Filters List",
					"action": "Extras Saved Filters List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/saved-filters/"
						}
					}
				},
				{
					"name": "Extras Saved Filters Bulk Partial Update",
					"value": "Extras Saved Filters Bulk Partial Update",
					"action": "Extras Saved Filters Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/saved-filters/"
						}
					}
				},
				{
					"name": "Extras Saved Filters Create",
					"value": "Extras Saved Filters Create",
					"action": "Extras Saved Filters Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/extras/saved-filters/"
						}
					}
				},
				{
					"name": "Extras Saved Filters Bulk Update",
					"value": "Extras Saved Filters Bulk Update",
					"action": "Extras Saved Filters Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/saved-filters/"
						}
					}
				},
				{
					"name": "Extras Saved Filters Delete",
					"value": "Extras Saved Filters Delete",
					"action": "Extras Saved Filters Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/saved-filters/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Saved Filters Read",
					"value": "Extras Saved Filters Read",
					"action": "Extras Saved Filters Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/saved-filters/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Saved Filters Partial Update",
					"value": "Extras Saved Filters Partial Update",
					"action": "Extras Saved Filters Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/saved-filters/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Saved Filters Update",
					"value": "Extras Saved Filters Update",
					"action": "Extras Saved Filters Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/saved-filters/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Scripts List",
					"value": "Extras Scripts List",
					"action": "Extras Scripts List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/scripts/"
						}
					}
				},
				{
					"name": "Extras Scripts Read",
					"value": "Extras Scripts Read",
					"action": "Extras Scripts Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/scripts/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Tags Bulk Delete",
					"value": "Extras Tags Bulk Delete",
					"action": "Extras Tags Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/tags/"
						}
					}
				},
				{
					"name": "Extras Tags List",
					"value": "Extras Tags List",
					"action": "Extras Tags List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/tags/"
						}
					}
				},
				{
					"name": "Extras Tags Bulk Partial Update",
					"value": "Extras Tags Bulk Partial Update",
					"action": "Extras Tags Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/tags/"
						}
					}
				},
				{
					"name": "Extras Tags Create",
					"value": "Extras Tags Create",
					"action": "Extras Tags Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/extras/tags/"
						}
					}
				},
				{
					"name": "Extras Tags Bulk Update",
					"value": "Extras Tags Bulk Update",
					"action": "Extras Tags Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/tags/"
						}
					}
				},
				{
					"name": "Extras Tags Delete",
					"value": "Extras Tags Delete",
					"action": "Extras Tags Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/tags/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Tags Read",
					"value": "Extras Tags Read",
					"action": "Extras Tags Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/tags/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Tags Partial Update",
					"value": "Extras Tags Partial Update",
					"action": "Extras Tags Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/tags/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Tags Update",
					"value": "Extras Tags Update",
					"action": "Extras Tags Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/tags/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Webhooks Bulk Delete",
					"value": "Extras Webhooks Bulk Delete",
					"action": "Extras Webhooks Bulk Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/webhooks/"
						}
					}
				},
				{
					"name": "Extras Webhooks List",
					"value": "Extras Webhooks List",
					"action": "Extras Webhooks List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/webhooks/"
						}
					}
				},
				{
					"name": "Extras Webhooks Bulk Partial Update",
					"value": "Extras Webhooks Bulk Partial Update",
					"action": "Extras Webhooks Bulk Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/webhooks/"
						}
					}
				},
				{
					"name": "Extras Webhooks Create",
					"value": "Extras Webhooks Create",
					"action": "Extras Webhooks Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/extras/webhooks/"
						}
					}
				},
				{
					"name": "Extras Webhooks Bulk Update",
					"value": "Extras Webhooks Bulk Update",
					"action": "Extras Webhooks Bulk Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/webhooks/"
						}
					}
				},
				{
					"name": "Extras Webhooks Delete",
					"value": "Extras Webhooks Delete",
					"action": "Extras Webhooks Delete",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/extras/webhooks/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Webhooks Read",
					"value": "Extras Webhooks Read",
					"action": "Extras Webhooks Read",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/extras/webhooks/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Webhooks Partial Update",
					"value": "Extras Webhooks Partial Update",
					"action": "Extras Webhooks Partial Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/extras/webhooks/{{$parameter[\"id\"]}}/"
						}
					}
				},
				{
					"name": "Extras Webhooks Update",
					"value": "Extras Webhooks Update",
					"action": "Extras Webhooks Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/extras/webhooks/{{$parameter[\"id\"]}}/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /extras/config-contexts/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/config-contexts/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
					]
				}
			}
		},
		{
			"displayName": "Location Id",
			"name": "location_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "location_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
					]
				}
			}
		},
		{
			"displayName": "Location",
			"name": "location",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "location",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
					]
				}
			}
		},
		{
			"displayName": "Device Type Id",
			"name": "device_type_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "device_type_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
					]
				}
			}
		},
		{
			"displayName": "Tag Id",
			"name": "tag_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tag_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
					]
				}
			}
		},
		{
			"displayName": "Location Id N",
			"name": "location_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "location_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
					]
				}
			}
		},
		{
			"displayName": "Location N",
			"name": "location__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "location__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
					]
				}
			}
		},
		{
			"displayName": "Device Type Id N",
			"name": "device_type_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "device_type_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
					]
				}
			}
		},
		{
			"displayName": "Tag Id N",
			"name": "tag_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tag_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/config-contexts/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Cluster Groups",
			"name": "cluster_groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "cluster_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Cluster Types",
			"name": "cluster_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "cluster_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Clusters",
			"name": "clusters",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "clusters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "data",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Device Types",
			"name": "device_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "device_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"type": "boolean",
			"default": true,
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Locations",
			"name": "locations",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "locations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Platforms",
			"name": "platforms",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "platforms",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Regions",
			"name": "regions",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "regions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Site Groups",
			"name": "site_groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "site_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Sites",
			"name": "sites",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sites",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  null\n]",
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tenant Groups",
			"name": "tenant_groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tenant_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tenants",
			"name": "tenants",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tenants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /extras/config-contexts/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"displayName": "Cluster Groups",
			"name": "cluster_groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "cluster_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"displayName": "Cluster Types",
			"name": "cluster_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "cluster_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"displayName": "Clusters",
			"name": "clusters",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "clusters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "data",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"displayName": "Device Types",
			"name": "device_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "device_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"type": "boolean",
			"default": true,
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"displayName": "Locations",
			"name": "locations",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "locations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"displayName": "Platforms",
			"name": "platforms",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "platforms",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"displayName": "Regions",
			"name": "regions",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "regions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"displayName": "Site Groups",
			"name": "site_groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "site_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"displayName": "Sites",
			"name": "sites",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sites",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  null\n]",
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"displayName": "Tenant Groups",
			"name": "tenant_groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tenant_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"displayName": "Tenants",
			"name": "tenants",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tenants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/config-contexts/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Cluster Groups",
			"name": "cluster_groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "cluster_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Cluster Types",
			"name": "cluster_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "cluster_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Clusters",
			"name": "clusters",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "clusters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "data",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Device Types",
			"name": "device_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "device_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"type": "boolean",
			"default": true,
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Locations",
			"name": "locations",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "locations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Platforms",
			"name": "platforms",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "platforms",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Regions",
			"name": "regions",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "regions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Site Groups",
			"name": "site_groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "site_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Sites",
			"name": "sites",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sites",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  null\n]",
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Tenant Groups",
			"name": "tenant_groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tenant_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Tenants",
			"name": "tenants",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tenants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/config-contexts/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/config-contexts/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Read"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/config-contexts/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Cluster Groups",
			"name": "cluster_groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "cluster_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Cluster Types",
			"name": "cluster_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "cluster_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Clusters",
			"name": "clusters",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "clusters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "data",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Device Types",
			"name": "device_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "device_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"type": "boolean",
			"default": true,
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Locations",
			"name": "locations",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "locations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Platforms",
			"name": "platforms",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "platforms",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Regions",
			"name": "regions",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "regions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Site Groups",
			"name": "site_groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "site_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Sites",
			"name": "sites",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sites",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  null\n]",
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tenant Groups",
			"name": "tenant_groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tenant_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tenants",
			"name": "tenants",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tenants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/config-contexts/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"displayName": "Cluster Groups",
			"name": "cluster_groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "cluster_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"displayName": "Cluster Types",
			"name": "cluster_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "cluster_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"displayName": "Clusters",
			"name": "clusters",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "clusters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "data",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"displayName": "Device Types",
			"name": "device_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "device_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"type": "boolean",
			"default": true,
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"displayName": "Locations",
			"name": "locations",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "locations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"displayName": "Platforms",
			"name": "platforms",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "platforms",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"displayName": "Regions",
			"name": "regions",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "regions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"displayName": "Site Groups",
			"name": "site_groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "site_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"displayName": "Sites",
			"name": "sites",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sites",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  null\n]",
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"displayName": "Tenant Groups",
			"name": "tenant_groups",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tenant_groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"displayName": "Tenants",
			"name": "tenants",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "tenants",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
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
						"Extras"
					],
					"operation": [
						"Extras Config Contexts Update"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/content-types/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Content Types List"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"description": "",
			"default": 0,
			"type": "number",
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
						"Extras"
					],
					"operation": [
						"Extras Content Types List"
					]
				}
			}
		},
		{
			"displayName": "App Label",
			"name": "app_label",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "app_label",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Content Types List"
					]
				}
			}
		},
		{
			"displayName": "Model",
			"name": "model",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "model",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Content Types List"
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
						"Extras"
					],
					"operation": [
						"Extras Content Types List"
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
						"Extras"
					],
					"operation": [
						"Extras Content Types List"
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
						"Extras"
					],
					"operation": [
						"Extras Content Types List"
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
						"Extras"
					],
					"operation": [
						"Extras Content Types List"
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
						"Extras"
					],
					"operation": [
						"Extras Content Types List"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/content-types/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Content Types Read"
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
						"Extras"
					],
					"operation": [
						"Extras Content Types Read"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/custom-fields/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/custom-fields/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Content Types",
			"name": "content_types",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Group Name",
			"name": "group_name",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Required",
			"name": "required",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "required",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Search Weight",
			"name": "search_weight",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search_weight",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Filter Logic",
			"name": "filter_logic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter_logic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Ui Visibility",
			"name": "ui_visibility",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ui_visibility",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id",
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Content Types N",
			"name": "content_types__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Ic",
			"name": "content_types__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Nic",
			"name": "content_types__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Iew",
			"name": "content_types__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Niew",
			"name": "content_types__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Isw",
			"name": "content_types__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Nisw",
			"name": "content_types__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Ie",
			"name": "content_types__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Nie",
			"name": "content_types__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Group Name N",
			"name": "group_name__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Ic",
			"name": "group_name__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Nic",
			"name": "group_name__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Iew",
			"name": "group_name__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Niew",
			"name": "group_name__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Isw",
			"name": "group_name__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Nisw",
			"name": "group_name__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Ie",
			"name": "group_name__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Nie",
			"name": "group_name__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Empty",
			"name": "group_name__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Search Weight N",
			"name": "search_weight__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search_weight__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Search Weight Lte",
			"name": "search_weight__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search_weight__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Search Weight Lt",
			"name": "search_weight__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search_weight__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Search Weight Gte",
			"name": "search_weight__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search_weight__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Search Weight Gt",
			"name": "search_weight__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "search_weight__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Filter Logic N",
			"name": "filter_logic__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter_logic__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Ui Visibility N",
			"name": "ui_visibility__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ui_visibility__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Weight N",
			"name": "weight__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Weight Lte",
			"name": "weight__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Weight Lt",
			"name": "weight__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Weight Gte",
			"name": "weight__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Weight Gt",
			"name": "weight__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id N",
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Lte",
			"name": "content_type_id__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Lt",
			"name": "content_type_id__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Gte",
			"name": "content_type_id__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Gt",
			"name": "content_type_id__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/custom-fields/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Choices",
			"name": "choices",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Comma-separated list of available choices (for selection fields)",
			"routing": {
				"send": {
					"property": "choices",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Data Type",
			"name": "data_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "data_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Default",
			"name": "default",
			"type": "json",
			"default": "{}",
			"description": "Default value for the field (must be a JSON value). Encapsulate strings with double quotes (e.g. \"Foo\").",
			"routing": {
				"send": {
					"property": "default",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Filter Logic",
			"name": "filter_logic",
			"type": "options",
			"default": "disabled",
			"description": "Loose matches any instance of a given string; exact matches the entire field.",
			"options": [
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Loose",
					"value": "loose"
				},
				{
					"name": "Exact",
					"value": "exact"
				}
			],
			"routing": {
				"send": {
					"property": "filter_logic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Group Name",
			"name": "group_name",
			"type": "string",
			"default": "",
			"description": "Custom fields within the same group will be displayed together",
			"routing": {
				"send": {
					"property": "group_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "",
			"description": "Name of the field as displayed to users (if not provided, the field's name will be used)",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
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
			"description": "Internal field name",
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Object Type",
			"name": "object_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "object_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Required",
			"name": "required",
			"type": "boolean",
			"default": true,
			"description": "If true, this field is required when creating new objects or editing an existing object.",
			"routing": {
				"send": {
					"property": "required",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Search Weight",
			"name": "search_weight",
			"type": "number",
			"default": 0,
			"description": "Weighting for search. Lower values are considered more important. Fields with a search weight of zero will be ignored.",
			"routing": {
				"send": {
					"property": "search_weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "text",
			"description": "The type of data this custom field holds",
			"options": [
				{
					"name": "Text",
					"value": "text"
				},
				{
					"name": "Longtext",
					"value": "longtext"
				},
				{
					"name": "Integer",
					"value": "integer"
				},
				{
					"name": "Decimal",
					"value": "decimal"
				},
				{
					"name": "Boolean",
					"value": "boolean"
				},
				{
					"name": "Date",
					"value": "date"
				},
				{
					"name": "Url",
					"value": "url"
				},
				{
					"name": "Json",
					"value": "json"
				},
				{
					"name": "Select",
					"value": "select"
				},
				{
					"name": "Multiselect",
					"value": "multiselect"
				},
				{
					"name": "Object",
					"value": "object"
				},
				{
					"name": "Multiobject",
					"value": "multiobject"
				}
			],
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Ui Visibility",
			"name": "ui_visibility",
			"type": "options",
			"default": "read-write",
			"description": "Specifies the visibility of custom field in the UI",
			"options": [
				{
					"name": "Read Write",
					"value": "read-write"
				},
				{
					"name": "Read Only",
					"value": "read-only"
				},
				{
					"name": "Hidden",
					"value": "hidden"
				}
			],
			"routing": {
				"send": {
					"property": "ui_visibility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Validation Maximum",
			"name": "validation_maximum",
			"type": "number",
			"default": 0,
			"description": "Maximum allowed value (for numeric fields)",
			"routing": {
				"send": {
					"property": "validation_maximum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Validation Minimum",
			"name": "validation_minimum",
			"type": "number",
			"default": 0,
			"description": "Minimum allowed value (for numeric fields)",
			"routing": {
				"send": {
					"property": "validation_minimum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Validation Regex",
			"name": "validation_regex",
			"type": "string",
			"default": "",
			"description": "Regular expression to enforce on text field values. Use ^ and $ to force matching of entire string. For example, <code>^[A-Z]{3}$</code> will limit values to exactly three uppercase letters.",
			"routing": {
				"send": {
					"property": "validation_regex",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"description": "Fields with higher weights appear lower in a form.",
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /extras/custom-fields/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"displayName": "Choices",
			"name": "choices",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Comma-separated list of available choices (for selection fields)",
			"routing": {
				"send": {
					"property": "choices",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"displayName": "Data Type",
			"name": "data_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "data_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"displayName": "Default",
			"name": "default",
			"type": "json",
			"default": "{}",
			"description": "Default value for the field (must be a JSON value). Encapsulate strings with double quotes (e.g. \"Foo\").",
			"routing": {
				"send": {
					"property": "default",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"displayName": "Filter Logic",
			"name": "filter_logic",
			"type": "options",
			"default": "disabled",
			"description": "Loose matches any instance of a given string; exact matches the entire field.",
			"options": [
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Loose",
					"value": "loose"
				},
				{
					"name": "Exact",
					"value": "exact"
				}
			],
			"routing": {
				"send": {
					"property": "filter_logic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"displayName": "Group Name",
			"name": "group_name",
			"type": "string",
			"default": "",
			"description": "Custom fields within the same group will be displayed together",
			"routing": {
				"send": {
					"property": "group_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "",
			"description": "Name of the field as displayed to users (if not provided, the field's name will be used)",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
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
			"description": "Internal field name",
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"displayName": "Object Type",
			"name": "object_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "object_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"displayName": "Required",
			"name": "required",
			"type": "boolean",
			"default": true,
			"description": "If true, this field is required when creating new objects or editing an existing object.",
			"routing": {
				"send": {
					"property": "required",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"displayName": "Search Weight",
			"name": "search_weight",
			"type": "number",
			"default": 0,
			"description": "Weighting for search. Lower values are considered more important. Fields with a search weight of zero will be ignored.",
			"routing": {
				"send": {
					"property": "search_weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "text",
			"description": "The type of data this custom field holds",
			"options": [
				{
					"name": "Text",
					"value": "text"
				},
				{
					"name": "Longtext",
					"value": "longtext"
				},
				{
					"name": "Integer",
					"value": "integer"
				},
				{
					"name": "Decimal",
					"value": "decimal"
				},
				{
					"name": "Boolean",
					"value": "boolean"
				},
				{
					"name": "Date",
					"value": "date"
				},
				{
					"name": "Url",
					"value": "url"
				},
				{
					"name": "Json",
					"value": "json"
				},
				{
					"name": "Select",
					"value": "select"
				},
				{
					"name": "Multiselect",
					"value": "multiselect"
				},
				{
					"name": "Object",
					"value": "object"
				},
				{
					"name": "Multiobject",
					"value": "multiobject"
				}
			],
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"displayName": "Ui Visibility",
			"name": "ui_visibility",
			"type": "options",
			"default": "read-write",
			"description": "Specifies the visibility of custom field in the UI",
			"options": [
				{
					"name": "Read Write",
					"value": "read-write"
				},
				{
					"name": "Read Only",
					"value": "read-only"
				},
				{
					"name": "Hidden",
					"value": "hidden"
				}
			],
			"routing": {
				"send": {
					"property": "ui_visibility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"displayName": "Validation Maximum",
			"name": "validation_maximum",
			"type": "number",
			"default": 0,
			"description": "Maximum allowed value (for numeric fields)",
			"routing": {
				"send": {
					"property": "validation_maximum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"displayName": "Validation Minimum",
			"name": "validation_minimum",
			"type": "number",
			"default": 0,
			"description": "Minimum allowed value (for numeric fields)",
			"routing": {
				"send": {
					"property": "validation_minimum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"displayName": "Validation Regex",
			"name": "validation_regex",
			"type": "string",
			"default": "",
			"description": "Regular expression to enforce on text field values. Use ^ and $ to force matching of entire string. For example, <code>^[A-Z]{3}$</code> will limit values to exactly three uppercase letters.",
			"routing": {
				"send": {
					"property": "validation_regex",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"description": "Fields with higher weights appear lower in a form.",
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/custom-fields/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Choices",
			"name": "choices",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Comma-separated list of available choices (for selection fields)",
			"routing": {
				"send": {
					"property": "choices",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Data Type",
			"name": "data_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "data_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Default",
			"name": "default",
			"type": "json",
			"default": "{}",
			"description": "Default value for the field (must be a JSON value). Encapsulate strings with double quotes (e.g. \"Foo\").",
			"routing": {
				"send": {
					"property": "default",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Filter Logic",
			"name": "filter_logic",
			"type": "options",
			"default": "disabled",
			"description": "Loose matches any instance of a given string; exact matches the entire field.",
			"options": [
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Loose",
					"value": "loose"
				},
				{
					"name": "Exact",
					"value": "exact"
				}
			],
			"routing": {
				"send": {
					"property": "filter_logic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Group Name",
			"name": "group_name",
			"type": "string",
			"default": "",
			"description": "Custom fields within the same group will be displayed together",
			"routing": {
				"send": {
					"property": "group_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "",
			"description": "Name of the field as displayed to users (if not provided, the field's name will be used)",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
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
			"description": "Internal field name",
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Object Type",
			"name": "object_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "object_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Required",
			"name": "required",
			"type": "boolean",
			"default": true,
			"description": "If true, this field is required when creating new objects or editing an existing object.",
			"routing": {
				"send": {
					"property": "required",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Search Weight",
			"name": "search_weight",
			"type": "number",
			"default": 0,
			"description": "Weighting for search. Lower values are considered more important. Fields with a search weight of zero will be ignored.",
			"routing": {
				"send": {
					"property": "search_weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "text",
			"description": "The type of data this custom field holds",
			"options": [
				{
					"name": "Text",
					"value": "text"
				},
				{
					"name": "Longtext",
					"value": "longtext"
				},
				{
					"name": "Integer",
					"value": "integer"
				},
				{
					"name": "Decimal",
					"value": "decimal"
				},
				{
					"name": "Boolean",
					"value": "boolean"
				},
				{
					"name": "Date",
					"value": "date"
				},
				{
					"name": "Url",
					"value": "url"
				},
				{
					"name": "Json",
					"value": "json"
				},
				{
					"name": "Select",
					"value": "select"
				},
				{
					"name": "Multiselect",
					"value": "multiselect"
				},
				{
					"name": "Object",
					"value": "object"
				},
				{
					"name": "Multiobject",
					"value": "multiobject"
				}
			],
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Ui Visibility",
			"name": "ui_visibility",
			"type": "options",
			"default": "read-write",
			"description": "Specifies the visibility of custom field in the UI",
			"options": [
				{
					"name": "Read Write",
					"value": "read-write"
				},
				{
					"name": "Read Only",
					"value": "read-only"
				},
				{
					"name": "Hidden",
					"value": "hidden"
				}
			],
			"routing": {
				"send": {
					"property": "ui_visibility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Validation Maximum",
			"name": "validation_maximum",
			"type": "number",
			"default": 0,
			"description": "Maximum allowed value (for numeric fields)",
			"routing": {
				"send": {
					"property": "validation_maximum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Validation Minimum",
			"name": "validation_minimum",
			"type": "number",
			"default": 0,
			"description": "Minimum allowed value (for numeric fields)",
			"routing": {
				"send": {
					"property": "validation_minimum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Validation Regex",
			"name": "validation_regex",
			"type": "string",
			"default": "",
			"description": "Regular expression to enforce on text field values. Use ^ and $ to force matching of entire string. For example, <code>^[A-Z]{3}$</code> will limit values to exactly three uppercase letters.",
			"routing": {
				"send": {
					"property": "validation_regex",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"description": "Fields with higher weights appear lower in a form.",
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/custom-fields/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/custom-fields/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Read"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/custom-fields/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Choices",
			"name": "choices",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Comma-separated list of available choices (for selection fields)",
			"routing": {
				"send": {
					"property": "choices",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Data Type",
			"name": "data_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "data_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Default",
			"name": "default",
			"type": "json",
			"default": "{}",
			"description": "Default value for the field (must be a JSON value). Encapsulate strings with double quotes (e.g. \"Foo\").",
			"routing": {
				"send": {
					"property": "default",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Filter Logic",
			"name": "filter_logic",
			"type": "options",
			"default": "disabled",
			"description": "Loose matches any instance of a given string; exact matches the entire field.",
			"options": [
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Loose",
					"value": "loose"
				},
				{
					"name": "Exact",
					"value": "exact"
				}
			],
			"routing": {
				"send": {
					"property": "filter_logic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Group Name",
			"name": "group_name",
			"type": "string",
			"default": "",
			"description": "Custom fields within the same group will be displayed together",
			"routing": {
				"send": {
					"property": "group_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "",
			"description": "Name of the field as displayed to users (if not provided, the field's name will be used)",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
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
			"description": "Internal field name",
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Object Type",
			"name": "object_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "object_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Required",
			"name": "required",
			"type": "boolean",
			"default": true,
			"description": "If true, this field is required when creating new objects or editing an existing object.",
			"routing": {
				"send": {
					"property": "required",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Search Weight",
			"name": "search_weight",
			"type": "number",
			"default": 0,
			"description": "Weighting for search. Lower values are considered more important. Fields with a search weight of zero will be ignored.",
			"routing": {
				"send": {
					"property": "search_weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "text",
			"description": "The type of data this custom field holds",
			"options": [
				{
					"name": "Text",
					"value": "text"
				},
				{
					"name": "Longtext",
					"value": "longtext"
				},
				{
					"name": "Integer",
					"value": "integer"
				},
				{
					"name": "Decimal",
					"value": "decimal"
				},
				{
					"name": "Boolean",
					"value": "boolean"
				},
				{
					"name": "Date",
					"value": "date"
				},
				{
					"name": "Url",
					"value": "url"
				},
				{
					"name": "Json",
					"value": "json"
				},
				{
					"name": "Select",
					"value": "select"
				},
				{
					"name": "Multiselect",
					"value": "multiselect"
				},
				{
					"name": "Object",
					"value": "object"
				},
				{
					"name": "Multiobject",
					"value": "multiobject"
				}
			],
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Ui Visibility",
			"name": "ui_visibility",
			"type": "options",
			"default": "read-write",
			"description": "Specifies the visibility of custom field in the UI",
			"options": [
				{
					"name": "Read Write",
					"value": "read-write"
				},
				{
					"name": "Read Only",
					"value": "read-only"
				},
				{
					"name": "Hidden",
					"value": "hidden"
				}
			],
			"routing": {
				"send": {
					"property": "ui_visibility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Validation Maximum",
			"name": "validation_maximum",
			"type": "number",
			"default": 0,
			"description": "Maximum allowed value (for numeric fields)",
			"routing": {
				"send": {
					"property": "validation_maximum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Validation Minimum",
			"name": "validation_minimum",
			"type": "number",
			"default": 0,
			"description": "Minimum allowed value (for numeric fields)",
			"routing": {
				"send": {
					"property": "validation_minimum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Validation Regex",
			"name": "validation_regex",
			"type": "string",
			"default": "",
			"description": "Regular expression to enforce on text field values. Use ^ and $ to force matching of entire string. For example, <code>^[A-Z]{3}$</code> will limit values to exactly three uppercase letters.",
			"routing": {
				"send": {
					"property": "validation_regex",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"description": "Fields with higher weights appear lower in a form.",
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/custom-fields/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"displayName": "Choices",
			"name": "choices",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Comma-separated list of available choices (for selection fields)",
			"routing": {
				"send": {
					"property": "choices",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"displayName": "Data Type",
			"name": "data_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "data_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"displayName": "Default",
			"name": "default",
			"type": "json",
			"default": "{}",
			"description": "Default value for the field (must be a JSON value). Encapsulate strings with double quotes (e.g. \"Foo\").",
			"routing": {
				"send": {
					"property": "default",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"displayName": "Filter Logic",
			"name": "filter_logic",
			"type": "options",
			"default": "disabled",
			"description": "Loose matches any instance of a given string; exact matches the entire field.",
			"options": [
				{
					"name": "Disabled",
					"value": "disabled"
				},
				{
					"name": "Loose",
					"value": "loose"
				},
				{
					"name": "Exact",
					"value": "exact"
				}
			],
			"routing": {
				"send": {
					"property": "filter_logic",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"displayName": "Group Name",
			"name": "group_name",
			"type": "string",
			"default": "",
			"description": "Custom fields within the same group will be displayed together",
			"routing": {
				"send": {
					"property": "group_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "",
			"description": "Name of the field as displayed to users (if not provided, the field's name will be used)",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
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
			"description": "Internal field name",
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"displayName": "Object Type",
			"name": "object_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "object_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"displayName": "Required",
			"name": "required",
			"type": "boolean",
			"default": true,
			"description": "If true, this field is required when creating new objects or editing an existing object.",
			"routing": {
				"send": {
					"property": "required",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"displayName": "Search Weight",
			"name": "search_weight",
			"type": "number",
			"default": 0,
			"description": "Weighting for search. Lower values are considered more important. Fields with a search weight of zero will be ignored.",
			"routing": {
				"send": {
					"property": "search_weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "text",
			"description": "The type of data this custom field holds",
			"options": [
				{
					"name": "Text",
					"value": "text"
				},
				{
					"name": "Longtext",
					"value": "longtext"
				},
				{
					"name": "Integer",
					"value": "integer"
				},
				{
					"name": "Decimal",
					"value": "decimal"
				},
				{
					"name": "Boolean",
					"value": "boolean"
				},
				{
					"name": "Date",
					"value": "date"
				},
				{
					"name": "Url",
					"value": "url"
				},
				{
					"name": "Json",
					"value": "json"
				},
				{
					"name": "Select",
					"value": "select"
				},
				{
					"name": "Multiselect",
					"value": "multiselect"
				},
				{
					"name": "Object",
					"value": "object"
				},
				{
					"name": "Multiobject",
					"value": "multiobject"
				}
			],
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"displayName": "Ui Visibility",
			"name": "ui_visibility",
			"type": "options",
			"default": "read-write",
			"description": "Specifies the visibility of custom field in the UI",
			"options": [
				{
					"name": "Read Write",
					"value": "read-write"
				},
				{
					"name": "Read Only",
					"value": "read-only"
				},
				{
					"name": "Hidden",
					"value": "hidden"
				}
			],
			"routing": {
				"send": {
					"property": "ui_visibility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"displayName": "Validation Maximum",
			"name": "validation_maximum",
			"type": "number",
			"default": 0,
			"description": "Maximum allowed value (for numeric fields)",
			"routing": {
				"send": {
					"property": "validation_maximum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"displayName": "Validation Minimum",
			"name": "validation_minimum",
			"type": "number",
			"default": 0,
			"description": "Minimum allowed value (for numeric fields)",
			"routing": {
				"send": {
					"property": "validation_minimum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"displayName": "Validation Regex",
			"name": "validation_regex",
			"type": "string",
			"default": "",
			"description": "Regular expression to enforce on text field values. Use ^ and $ to force matching of entire string. For example, <code>^[A-Z]{3}$</code> will limit values to exactly three uppercase letters.",
			"routing": {
				"send": {
					"property": "validation_regex",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"description": "Fields with higher weights appear lower in a form.",
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Fields Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/custom-links/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/custom-links/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Content Types",
			"name": "content_types",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Text",
			"name": "link_text",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_text",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Url",
			"name": "link_url",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_url",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Group Name",
			"name": "group_name",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "New Window",
			"name": "new_window",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "new_window",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id",
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Content Types N",
			"name": "content_types__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Ic",
			"name": "content_types__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Nic",
			"name": "content_types__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Iew",
			"name": "content_types__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Niew",
			"name": "content_types__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Isw",
			"name": "content_types__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Nisw",
			"name": "content_types__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Ie",
			"name": "content_types__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Nie",
			"name": "content_types__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Text N",
			"name": "link_text__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_text__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Text Ic",
			"name": "link_text__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_text__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Text Nic",
			"name": "link_text__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_text__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Text Iew",
			"name": "link_text__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_text__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Text Niew",
			"name": "link_text__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_text__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Text Isw",
			"name": "link_text__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_text__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Text Nisw",
			"name": "link_text__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_text__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Text Ie",
			"name": "link_text__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_text__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Text Nie",
			"name": "link_text__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_text__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Url N",
			"name": "link_url__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_url__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Url Ic",
			"name": "link_url__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_url__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Url Nic",
			"name": "link_url__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_url__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Url Iew",
			"name": "link_url__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_url__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Url Niew",
			"name": "link_url__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_url__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Url Isw",
			"name": "link_url__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_url__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Url Nisw",
			"name": "link_url__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_url__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Url Ie",
			"name": "link_url__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_url__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Link Url Nie",
			"name": "link_url__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link_url__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Weight N",
			"name": "weight__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Weight Lte",
			"name": "weight__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Weight Lt",
			"name": "weight__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Weight Gte",
			"name": "weight__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Weight Gt",
			"name": "weight__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Group Name N",
			"name": "group_name__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Ic",
			"name": "group_name__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Nic",
			"name": "group_name__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Iew",
			"name": "group_name__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Niew",
			"name": "group_name__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Isw",
			"name": "group_name__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Nisw",
			"name": "group_name__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Ie",
			"name": "group_name__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Nie",
			"name": "group_name__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Group Name Empty",
			"name": "group_name__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "group_name__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id N",
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Lte",
			"name": "content_type_id__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Lt",
			"name": "content_type_id__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Gte",
			"name": "content_type_id__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Gt",
			"name": "content_type_id__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/custom-links/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Button Class",
			"name": "button_class",
			"type": "options",
			"default": "outline-dark",
			"description": "The class of the first link in a group will be used for the dropdown button",
			"options": [
				{
					"name": "Outline Dark",
					"value": "outline-dark"
				},
				{
					"name": "Blue",
					"value": "blue"
				},
				{
					"name": "Indigo",
					"value": "indigo"
				},
				{
					"name": "Purple",
					"value": "purple"
				},
				{
					"name": "Pink",
					"value": "pink"
				},
				{
					"name": "Red",
					"value": "red"
				},
				{
					"name": "Orange",
					"value": "orange"
				},
				{
					"name": "Yellow",
					"value": "yellow"
				},
				{
					"name": "Green",
					"value": "green"
				},
				{
					"name": "Teal",
					"value": "teal"
				},
				{
					"name": "Cyan",
					"value": "cyan"
				},
				{
					"name": "Gray",
					"value": "gray"
				},
				{
					"name": "Black",
					"value": "black"
				},
				{
					"name": "White",
					"value": "white"
				},
				{
					"name": "Ghost Dark",
					"value": "ghost-dark"
				}
			],
			"routing": {
				"send": {
					"property": "button_class",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Group Name",
			"name": "group_name",
			"type": "string",
			"default": "",
			"description": "Links with the same group will appear as a dropdown menu",
			"routing": {
				"send": {
					"property": "group_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Link Text",
			"name": "link_text",
			"type": "string",
			"default": "",
			"description": "Jinja2 template code for link text",
			"routing": {
				"send": {
					"property": "link_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Link Url",
			"name": "link_url",
			"type": "string",
			"default": "",
			"description": "Jinja2 template code for link URL",
			"routing": {
				"send": {
					"property": "link_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "New Window",
			"name": "new_window",
			"type": "boolean",
			"default": true,
			"description": "Force link to open in a new window",
			"routing": {
				"send": {
					"property": "new_window",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /extras/custom-links/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Create"
					]
				}
			}
		},
		{
			"displayName": "Button Class",
			"name": "button_class",
			"type": "options",
			"default": "outline-dark",
			"description": "The class of the first link in a group will be used for the dropdown button",
			"options": [
				{
					"name": "Outline Dark",
					"value": "outline-dark"
				},
				{
					"name": "Blue",
					"value": "blue"
				},
				{
					"name": "Indigo",
					"value": "indigo"
				},
				{
					"name": "Purple",
					"value": "purple"
				},
				{
					"name": "Pink",
					"value": "pink"
				},
				{
					"name": "Red",
					"value": "red"
				},
				{
					"name": "Orange",
					"value": "orange"
				},
				{
					"name": "Yellow",
					"value": "yellow"
				},
				{
					"name": "Green",
					"value": "green"
				},
				{
					"name": "Teal",
					"value": "teal"
				},
				{
					"name": "Cyan",
					"value": "cyan"
				},
				{
					"name": "Gray",
					"value": "gray"
				},
				{
					"name": "Black",
					"value": "black"
				},
				{
					"name": "White",
					"value": "white"
				},
				{
					"name": "Ghost Dark",
					"value": "ghost-dark"
				}
			],
			"routing": {
				"send": {
					"property": "button_class",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Create"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Create"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Create"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Create"
					]
				}
			}
		},
		{
			"displayName": "Group Name",
			"name": "group_name",
			"type": "string",
			"default": "",
			"description": "Links with the same group will appear as a dropdown menu",
			"routing": {
				"send": {
					"property": "group_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Create"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Create"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Link Text",
			"name": "link_text",
			"type": "string",
			"default": "",
			"description": "Jinja2 template code for link text",
			"routing": {
				"send": {
					"property": "link_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Link Url",
			"name": "link_url",
			"type": "string",
			"default": "",
			"description": "Jinja2 template code for link URL",
			"routing": {
				"send": {
					"property": "link_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Create"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Create"
					]
				}
			}
		},
		{
			"displayName": "New Window",
			"name": "new_window",
			"type": "boolean",
			"default": true,
			"description": "Force link to open in a new window",
			"routing": {
				"send": {
					"property": "new_window",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Create"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Create"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Create"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/custom-links/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Button Class",
			"name": "button_class",
			"type": "options",
			"default": "outline-dark",
			"description": "The class of the first link in a group will be used for the dropdown button",
			"options": [
				{
					"name": "Outline Dark",
					"value": "outline-dark"
				},
				{
					"name": "Blue",
					"value": "blue"
				},
				{
					"name": "Indigo",
					"value": "indigo"
				},
				{
					"name": "Purple",
					"value": "purple"
				},
				{
					"name": "Pink",
					"value": "pink"
				},
				{
					"name": "Red",
					"value": "red"
				},
				{
					"name": "Orange",
					"value": "orange"
				},
				{
					"name": "Yellow",
					"value": "yellow"
				},
				{
					"name": "Green",
					"value": "green"
				},
				{
					"name": "Teal",
					"value": "teal"
				},
				{
					"name": "Cyan",
					"value": "cyan"
				},
				{
					"name": "Gray",
					"value": "gray"
				},
				{
					"name": "Black",
					"value": "black"
				},
				{
					"name": "White",
					"value": "white"
				},
				{
					"name": "Ghost Dark",
					"value": "ghost-dark"
				}
			],
			"routing": {
				"send": {
					"property": "button_class",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Group Name",
			"name": "group_name",
			"type": "string",
			"default": "",
			"description": "Links with the same group will appear as a dropdown menu",
			"routing": {
				"send": {
					"property": "group_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Link Text",
			"name": "link_text",
			"type": "string",
			"default": "",
			"description": "Jinja2 template code for link text",
			"routing": {
				"send": {
					"property": "link_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Link Url",
			"name": "link_url",
			"type": "string",
			"default": "",
			"description": "Jinja2 template code for link URL",
			"routing": {
				"send": {
					"property": "link_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "New Window",
			"name": "new_window",
			"type": "boolean",
			"default": true,
			"description": "Force link to open in a new window",
			"routing": {
				"send": {
					"property": "new_window",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/custom-links/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/custom-links/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Read"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/custom-links/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Button Class",
			"name": "button_class",
			"type": "options",
			"default": "outline-dark",
			"description": "The class of the first link in a group will be used for the dropdown button",
			"options": [
				{
					"name": "Outline Dark",
					"value": "outline-dark"
				},
				{
					"name": "Blue",
					"value": "blue"
				},
				{
					"name": "Indigo",
					"value": "indigo"
				},
				{
					"name": "Purple",
					"value": "purple"
				},
				{
					"name": "Pink",
					"value": "pink"
				},
				{
					"name": "Red",
					"value": "red"
				},
				{
					"name": "Orange",
					"value": "orange"
				},
				{
					"name": "Yellow",
					"value": "yellow"
				},
				{
					"name": "Green",
					"value": "green"
				},
				{
					"name": "Teal",
					"value": "teal"
				},
				{
					"name": "Cyan",
					"value": "cyan"
				},
				{
					"name": "Gray",
					"value": "gray"
				},
				{
					"name": "Black",
					"value": "black"
				},
				{
					"name": "White",
					"value": "white"
				},
				{
					"name": "Ghost Dark",
					"value": "ghost-dark"
				}
			],
			"routing": {
				"send": {
					"property": "button_class",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Group Name",
			"name": "group_name",
			"type": "string",
			"default": "",
			"description": "Links with the same group will appear as a dropdown menu",
			"routing": {
				"send": {
					"property": "group_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Link Text",
			"name": "link_text",
			"type": "string",
			"default": "",
			"description": "Jinja2 template code for link text",
			"routing": {
				"send": {
					"property": "link_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Link Url",
			"name": "link_url",
			"type": "string",
			"default": "",
			"description": "Jinja2 template code for link URL",
			"routing": {
				"send": {
					"property": "link_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Partial Update"
					]
				}
			}
		},
		{
			"displayName": "New Window",
			"name": "new_window",
			"type": "boolean",
			"default": true,
			"description": "Force link to open in a new window",
			"routing": {
				"send": {
					"property": "new_window",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/custom-links/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Update"
					]
				}
			}
		},
		{
			"displayName": "Button Class",
			"name": "button_class",
			"type": "options",
			"default": "outline-dark",
			"description": "The class of the first link in a group will be used for the dropdown button",
			"options": [
				{
					"name": "Outline Dark",
					"value": "outline-dark"
				},
				{
					"name": "Blue",
					"value": "blue"
				},
				{
					"name": "Indigo",
					"value": "indigo"
				},
				{
					"name": "Purple",
					"value": "purple"
				},
				{
					"name": "Pink",
					"value": "pink"
				},
				{
					"name": "Red",
					"value": "red"
				},
				{
					"name": "Orange",
					"value": "orange"
				},
				{
					"name": "Yellow",
					"value": "yellow"
				},
				{
					"name": "Green",
					"value": "green"
				},
				{
					"name": "Teal",
					"value": "teal"
				},
				{
					"name": "Cyan",
					"value": "cyan"
				},
				{
					"name": "Gray",
					"value": "gray"
				},
				{
					"name": "Black",
					"value": "black"
				},
				{
					"name": "White",
					"value": "white"
				},
				{
					"name": "Ghost Dark",
					"value": "ghost-dark"
				}
			],
			"routing": {
				"send": {
					"property": "button_class",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Update"
					]
				}
			}
		},
		{
			"displayName": "Group Name",
			"name": "group_name",
			"type": "string",
			"default": "",
			"description": "Links with the same group will appear as a dropdown menu",
			"routing": {
				"send": {
					"property": "group_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Link Text",
			"name": "link_text",
			"type": "string",
			"default": "",
			"description": "Jinja2 template code for link text",
			"routing": {
				"send": {
					"property": "link_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Link Url",
			"name": "link_url",
			"type": "string",
			"default": "",
			"description": "Jinja2 template code for link URL",
			"routing": {
				"send": {
					"property": "link_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Update"
					]
				}
			}
		},
		{
			"displayName": "New Window",
			"name": "new_window",
			"type": "boolean",
			"default": true,
			"description": "Force link to open in a new window",
			"routing": {
				"send": {
					"property": "new_window",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Update"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Custom Links Update"
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
						"Extras"
					],
					"operation": [
						"Extras Custom Links Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/export-templates/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/export-templates/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "Content Types",
			"name": "content_types",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id",
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "Content Types N",
			"name": "content_types__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Ic",
			"name": "content_types__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Nic",
			"name": "content_types__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Iew",
			"name": "content_types__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Niew",
			"name": "content_types__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Isw",
			"name": "content_types__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Nisw",
			"name": "content_types__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Ie",
			"name": "content_types__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Nie",
			"name": "content_types__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id N",
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Lte",
			"name": "content_type_id__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Lt",
			"name": "content_type_id__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Gte",
			"name": "content_type_id__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Gt",
			"name": "content_type_id__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/export-templates/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "As Attachment",
			"name": "as_attachment",
			"type": "boolean",
			"default": true,
			"description": "Download file as attachment",
			"routing": {
				"send": {
					"property": "as_attachment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "File Extension",
			"name": "file_extension",
			"type": "string",
			"default": "",
			"description": "Extension to append to the rendered filename",
			"routing": {
				"send": {
					"property": "file_extension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Mime Type",
			"name": "mime_type",
			"type": "string",
			"default": "",
			"description": "Defaults to <code>text/plain</code>",
			"routing": {
				"send": {
					"property": "mime_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Template Code",
			"name": "template_code",
			"type": "string",
			"default": "",
			"description": "Jinja2 template code. The list of objects being exported is passed as a context variable named <code>queryset</code>.",
			"routing": {
				"send": {
					"property": "template_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /extras/export-templates/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Create"
					]
				}
			}
		},
		{
			"displayName": "As Attachment",
			"name": "as_attachment",
			"type": "boolean",
			"default": true,
			"description": "Download file as attachment",
			"routing": {
				"send": {
					"property": "as_attachment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Create"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Create"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Create"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Create"
					]
				}
			}
		},
		{
			"displayName": "File Extension",
			"name": "file_extension",
			"type": "string",
			"default": "",
			"description": "Extension to append to the rendered filename",
			"routing": {
				"send": {
					"property": "file_extension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Create"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Create"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Create"
					]
				}
			}
		},
		{
			"displayName": "Mime Type",
			"name": "mime_type",
			"type": "string",
			"default": "",
			"description": "Defaults to <code>text/plain</code>",
			"routing": {
				"send": {
					"property": "mime_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Create"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Template Code",
			"name": "template_code",
			"type": "string",
			"default": "",
			"description": "Jinja2 template code. The list of objects being exported is passed as a context variable named <code>queryset</code>.",
			"routing": {
				"send": {
					"property": "template_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Create"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Create"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/export-templates/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "As Attachment",
			"name": "as_attachment",
			"type": "boolean",
			"default": true,
			"description": "Download file as attachment",
			"routing": {
				"send": {
					"property": "as_attachment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "File Extension",
			"name": "file_extension",
			"type": "string",
			"default": "",
			"description": "Extension to append to the rendered filename",
			"routing": {
				"send": {
					"property": "file_extension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Mime Type",
			"name": "mime_type",
			"type": "string",
			"default": "",
			"description": "Defaults to <code>text/plain</code>",
			"routing": {
				"send": {
					"property": "mime_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Template Code",
			"name": "template_code",
			"type": "string",
			"default": "",
			"description": "Jinja2 template code. The list of objects being exported is passed as a context variable named <code>queryset</code>.",
			"routing": {
				"send": {
					"property": "template_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/export-templates/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/export-templates/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Read"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/export-templates/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Partial Update"
					]
				}
			}
		},
		{
			"displayName": "As Attachment",
			"name": "as_attachment",
			"type": "boolean",
			"default": true,
			"description": "Download file as attachment",
			"routing": {
				"send": {
					"property": "as_attachment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Partial Update"
					]
				}
			}
		},
		{
			"displayName": "File Extension",
			"name": "file_extension",
			"type": "string",
			"default": "",
			"description": "Extension to append to the rendered filename",
			"routing": {
				"send": {
					"property": "file_extension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Mime Type",
			"name": "mime_type",
			"type": "string",
			"default": "",
			"description": "Defaults to <code>text/plain</code>",
			"routing": {
				"send": {
					"property": "mime_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Template Code",
			"name": "template_code",
			"type": "string",
			"default": "",
			"description": "Jinja2 template code. The list of objects being exported is passed as a context variable named <code>queryset</code>.",
			"routing": {
				"send": {
					"property": "template_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/export-templates/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Update"
					]
				}
			}
		},
		{
			"displayName": "As Attachment",
			"name": "as_attachment",
			"type": "boolean",
			"default": true,
			"description": "Download file as attachment",
			"routing": {
				"send": {
					"property": "as_attachment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Update"
					]
				}
			}
		},
		{
			"displayName": "File Extension",
			"name": "file_extension",
			"type": "string",
			"default": "",
			"description": "Extension to append to the rendered filename",
			"routing": {
				"send": {
					"property": "file_extension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Update"
					]
				}
			}
		},
		{
			"displayName": "Mime Type",
			"name": "mime_type",
			"type": "string",
			"default": "",
			"description": "Defaults to <code>text/plain</code>",
			"routing": {
				"send": {
					"property": "mime_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Template Code",
			"name": "template_code",
			"type": "string",
			"default": "",
			"description": "Jinja2 template code. The list of objects being exported is passed as a context variable named <code>queryset</code>.",
			"routing": {
				"send": {
					"property": "template_code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Export Templates Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Update"
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
						"Extras"
					],
					"operation": [
						"Extras Export Templates Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/image-attachments/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/image-attachments/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id",
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
					]
				}
			}
		},
		{
			"displayName": "Object Id",
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id N",
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
					]
				}
			}
		},
		{
			"displayName": "Object Id N",
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
					]
				}
			}
		},
		{
			"displayName": "Object Id Lte",
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
					]
				}
			}
		},
		{
			"displayName": "Object Id Lt",
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
					]
				}
			}
		},
		{
			"displayName": "Object Id Gte",
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
					]
				}
			}
		},
		{
			"displayName": "Object Id Gt",
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/image-attachments/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Image",
			"name": "image",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Image Height",
			"name": "image_height",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "image_height",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Image Width",
			"name": "image_width",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "image_width",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Partial Update"
					]
				}
			}
		},
		{
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Object Id",
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /extras/image-attachments/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Create"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Create"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Create"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Create"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Create"
					]
				}
			}
		},
		{
			"displayName": "Image",
			"name": "image",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Image Height",
			"name": "image_height",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "image_height",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Image Width",
			"name": "image_width",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "image_width",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Create"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Create"
					]
				}
			}
		},
		{
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Object Id",
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Create"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Create"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Create"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/image-attachments/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Image",
			"name": "image",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Image Height",
			"name": "image_height",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "image_height",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Image Width",
			"name": "image_width",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "image_width",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Update"
					]
				}
			}
		},
		{
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Object Id",
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/image-attachments/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/image-attachments/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Read"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/image-attachments/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Image",
			"name": "image",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Image Height",
			"name": "image_height",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "image_height",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Image Width",
			"name": "image_width",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "image_width",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Partial Update"
					]
				}
			}
		},
		{
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Object Id",
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/image-attachments/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Update"
					]
				}
			}
		},
		{
			"displayName": "Image",
			"name": "image",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "image",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Image Height",
			"name": "image_height",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "image_height",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Image Width",
			"name": "image_width",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "image_width",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Update"
					]
				}
			}
		},
		{
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Object Id",
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Update"
					]
				}
			}
		},
		{
			"displayName": "Parent",
			"name": "parent",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "parent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Update"
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
						"Extras"
					],
					"operation": [
						"Extras Image Attachments Update"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/job-results/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Interval",
			"name": "interval",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interval",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Obj Type",
			"name": "obj_type",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "obj_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Created Before",
			"name": "created__before",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__before",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Created After",
			"name": "created__after",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created__after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Scheduled",
			"name": "scheduled",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "scheduled",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Scheduled Before",
			"name": "scheduled__before",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "scheduled__before",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Scheduled After",
			"name": "scheduled__after",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "scheduled__after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Started",
			"name": "started",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "started",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Started Before",
			"name": "started__before",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "started__before",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Started After",
			"name": "started__after",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "started__after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Completed",
			"name": "completed",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "completed",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Completed Before",
			"name": "completed__before",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "completed__before",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Completed After",
			"name": "completed__after",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "completed__after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Interval N",
			"name": "interval__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interval__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Interval Lte",
			"name": "interval__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interval__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Interval Lt",
			"name": "interval__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interval__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Interval Gte",
			"name": "interval__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interval__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Interval Gt",
			"name": "interval__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "interval__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "Obj Type N",
			"name": "obj_type__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "obj_type__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results List"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/job-results/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Job Results Read"
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
						"Extras"
					],
					"operation": [
						"Extras Job Results Read"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/journal-entries/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/journal-entries/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "Assigned Object Type Id",
			"name": "assigned_object_type_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "assigned_object_type_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "Assigned Object Id",
			"name": "assigned_object_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "assigned_object_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "kind",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "Assigned Object Type",
			"name": "assigned_object_type",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "assigned_object_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "Created By Id",
			"name": "created_by_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created_by_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created_by",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "Assigned Object Type Id N",
			"name": "assigned_object_type_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "assigned_object_type_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "Assigned Object Id N",
			"name": "assigned_object_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "assigned_object_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "Assigned Object Id Lte",
			"name": "assigned_object_id__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "assigned_object_id__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "Assigned Object Id Lt",
			"name": "assigned_object_id__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "assigned_object_id__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "Assigned Object Id Gte",
			"name": "assigned_object_id__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "assigned_object_id__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "Assigned Object Id Gt",
			"name": "assigned_object_id__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "assigned_object_id__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "Kind N",
			"name": "kind__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "kind__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "Assigned Object Type N",
			"name": "assigned_object_type__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "assigned_object_type__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "Created By Id N",
			"name": "created_by_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created_by_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "Created By N",
			"name": "created_by__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "created_by__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/journal-entries/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Assigned Object",
			"name": "assigned_object",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "assigned_object",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Assigned Object Id",
			"name": "assigned_object_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "assigned_object_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Assigned Object Type",
			"name": "assigned_object_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "assigned_object_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "options",
			"default": "info",
			"options": [
				{
					"name": "Info",
					"value": "info"
				},
				{
					"name": "Success",
					"value": "success"
				},
				{
					"name": "Warning",
					"value": "warning"
				},
				{
					"name": "Danger",
					"value": "danger"
				}
			],
			"routing": {
				"send": {
					"property": "kind",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /extras/journal-entries/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Create"
					]
				}
			}
		},
		{
			"displayName": "Assigned Object",
			"name": "assigned_object",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "assigned_object",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Assigned Object Id",
			"name": "assigned_object_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "assigned_object_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Assigned Object Type",
			"name": "assigned_object_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "assigned_object_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Create"
					]
				}
			}
		},
		{
			"required": true,
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Create"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Create"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Create"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Create"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Create"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Create"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "options",
			"default": "info",
			"options": [
				{
					"name": "Info",
					"value": "info"
				},
				{
					"name": "Success",
					"value": "success"
				},
				{
					"name": "Warning",
					"value": "warning"
				},
				{
					"name": "Danger",
					"value": "danger"
				}
			],
			"routing": {
				"send": {
					"property": "kind",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Create"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Create"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Create"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Create"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/journal-entries/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Assigned Object",
			"name": "assigned_object",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "assigned_object",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Assigned Object Id",
			"name": "assigned_object_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "assigned_object_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Assigned Object Type",
			"name": "assigned_object_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "assigned_object_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "options",
			"default": "info",
			"options": [
				{
					"name": "Info",
					"value": "info"
				},
				{
					"name": "Success",
					"value": "success"
				},
				{
					"name": "Warning",
					"value": "warning"
				},
				{
					"name": "Danger",
					"value": "danger"
				}
			],
			"routing": {
				"send": {
					"property": "kind",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/journal-entries/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/journal-entries/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Read"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/journal-entries/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Assigned Object",
			"name": "assigned_object",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "assigned_object",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Assigned Object Id",
			"name": "assigned_object_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "assigned_object_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Assigned Object Type",
			"name": "assigned_object_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "assigned_object_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Partial Update"
					]
				}
			}
		},
		{
			"required": true,
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "options",
			"default": "info",
			"options": [
				{
					"name": "Info",
					"value": "info"
				},
				{
					"name": "Success",
					"value": "success"
				},
				{
					"name": "Warning",
					"value": "warning"
				},
				{
					"name": "Danger",
					"value": "danger"
				}
			],
			"routing": {
				"send": {
					"property": "kind",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/journal-entries/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Update"
					]
				}
			}
		},
		{
			"displayName": "Assigned Object",
			"name": "assigned_object",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "assigned_object",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Assigned Object Id",
			"name": "assigned_object_id",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "assigned_object_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Assigned Object Type",
			"name": "assigned_object_type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "assigned_object_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Update"
					]
				}
			}
		},
		{
			"required": true,
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Update"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Update"
					]
				}
			}
		},
		{
			"displayName": "Kind",
			"name": "kind",
			"type": "options",
			"default": "info",
			"options": [
				{
					"name": "Info",
					"value": "info"
				},
				{
					"name": "Success",
					"value": "success"
				},
				{
					"name": "Warning",
					"value": "warning"
				},
				{
					"name": "Danger",
					"value": "danger"
				}
			],
			"routing": {
				"send": {
					"property": "kind",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Update"
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
						"Extras"
					],
					"operation": [
						"Extras Journal Entries Update"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/object-changes/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
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
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
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
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "User Name",
			"name": "user_name",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Request Id",
			"name": "request_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "request_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Action",
			"name": "action",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "action",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Changed Object Type Id",
			"name": "changed_object_type_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "changed_object_type_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Changed Object Id",
			"name": "changed_object_id",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "changed_object_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Object Repr",
			"name": "object_repr",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_repr",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
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
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Time",
			"name": "time",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "time",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Changed Object Type",
			"name": "changed_object_type",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "changed_object_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
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
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
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
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
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
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
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
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
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
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
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
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
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
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "User Name N",
			"name": "user_name__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_name__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "User Name Ic",
			"name": "user_name__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_name__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "User Name Nic",
			"name": "user_name__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_name__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "User Name Iew",
			"name": "user_name__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_name__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "User Name Niew",
			"name": "user_name__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_name__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "User Name Isw",
			"name": "user_name__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_name__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "User Name Nisw",
			"name": "user_name__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_name__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "User Name Ie",
			"name": "user_name__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_name__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "User Name Nie",
			"name": "user_name__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_name__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "User Name Empty",
			"name": "user_name__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "user_name__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Action N",
			"name": "action__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "action__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Changed Object Type Id N",
			"name": "changed_object_type_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "changed_object_type_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Changed Object Id N",
			"name": "changed_object_id__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "changed_object_id__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Changed Object Id Lte",
			"name": "changed_object_id__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "changed_object_id__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Changed Object Id Lt",
			"name": "changed_object_id__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "changed_object_id__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Changed Object Id Gte",
			"name": "changed_object_id__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "changed_object_id__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Changed Object Id Gt",
			"name": "changed_object_id__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "changed_object_id__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Object Repr N",
			"name": "object_repr__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_repr__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Object Repr Ic",
			"name": "object_repr__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_repr__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Object Repr Nic",
			"name": "object_repr__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_repr__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Object Repr Iew",
			"name": "object_repr__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_repr__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Object Repr Niew",
			"name": "object_repr__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_repr__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Object Repr Isw",
			"name": "object_repr__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_repr__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Object Repr Nisw",
			"name": "object_repr__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_repr__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Object Repr Ie",
			"name": "object_repr__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_repr__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Object Repr Nie",
			"name": "object_repr__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_repr__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Object Repr Empty",
			"name": "object_repr__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "object_repr__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "Changed Object Type N",
			"name": "changed_object_type__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "changed_object_type__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
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
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
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
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
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
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
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
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
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
						"Extras"
					],
					"operation": [
						"Extras Object Changes List"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/object-changes/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Object Changes Read"
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
						"Extras"
					],
					"operation": [
						"Extras Object Changes Read"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/reports/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Reports List"
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
						"Extras"
					],
					"operation": [
						"Extras Reports List"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/reports/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Reports Read"
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
						"Extras"
					],
					"operation": [
						"Extras Reports Read"
					]
				}
			}
		},
		{
			"displayName": "POST /extras/reports/{id}/run/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Reports Run"
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
						"Extras"
					],
					"operation": [
						"Extras Reports Run"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/saved-filters/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/saved-filters/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Content Types",
			"name": "content_types",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Shared",
			"name": "shared",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "shared",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id",
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Usable",
			"name": "usable",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "usable",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Content Types N",
			"name": "content_types__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Ic",
			"name": "content_types__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Nic",
			"name": "content_types__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Iew",
			"name": "content_types__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Niew",
			"name": "content_types__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Isw",
			"name": "content_types__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Nisw",
			"name": "content_types__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Ie",
			"name": "content_types__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Nie",
			"name": "content_types__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Weight N",
			"name": "weight__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Weight Lte",
			"name": "weight__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Weight Lt",
			"name": "weight__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Weight Gte",
			"name": "weight__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Weight Gt",
			"name": "weight__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "weight__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id N",
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Lte",
			"name": "content_type_id__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Lt",
			"name": "content_type_id__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Gte",
			"name": "content_type_id__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Gt",
			"name": "content_type_id__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/saved-filters/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Parameters",
			"name": "parameters",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "parameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Shared",
			"name": "shared",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "shared",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Partial Update"
					]
				}
			}
		},
		{
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /extras/saved-filters/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Create"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Create"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Create"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Create"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Create"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Create"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Create"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Parameters",
			"name": "parameters",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "parameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Create"
					]
				}
			}
		},
		{
			"displayName": "Shared",
			"name": "shared",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "shared",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Create"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Create"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Create"
					]
				}
			}
		},
		{
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Create"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Create"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/saved-filters/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Parameters",
			"name": "parameters",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "parameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Shared",
			"name": "shared",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "shared",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Update"
					]
				}
			}
		},
		{
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/saved-filters/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/saved-filters/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Read"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/saved-filters/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Parameters",
			"name": "parameters",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "parameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Shared",
			"name": "shared",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "shared",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Partial Update"
					]
				}
			}
		},
		{
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/saved-filters/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Parameters",
			"name": "parameters",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "parameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Update"
					]
				}
			}
		},
		{
			"displayName": "Shared",
			"name": "shared",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "shared",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Update"
					]
				}
			}
		},
		{
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Update"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Update"
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
						"Extras"
					],
					"operation": [
						"Extras Saved Filters Update"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/scripts/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Scripts List"
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
						"Extras"
					],
					"operation": [
						"Extras Scripts List"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/scripts/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Scripts Read"
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
						"Extras"
					],
					"operation": [
						"Extras Scripts Read"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/tags/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/tags/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "color",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id",
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
					]
				}
			}
		},
		{
			"displayName": "Color N",
			"name": "color__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "color__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags List"
					]
				}
			}
		},
		{
			"displayName": "Color Ic",
			"name": "color__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "color__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags List"
					]
				}
			}
		},
		{
			"displayName": "Color Nic",
			"name": "color__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "color__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags List"
					]
				}
			}
		},
		{
			"displayName": "Color Iew",
			"name": "color__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "color__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags List"
					]
				}
			}
		},
		{
			"displayName": "Color Niew",
			"name": "color__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "color__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags List"
					]
				}
			}
		},
		{
			"displayName": "Color Isw",
			"name": "color__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "color__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags List"
					]
				}
			}
		},
		{
			"displayName": "Color Nisw",
			"name": "color__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "color__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags List"
					]
				}
			}
		},
		{
			"displayName": "Color Ie",
			"name": "color__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "color__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags List"
					]
				}
			}
		},
		{
			"displayName": "Color Nie",
			"name": "color__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "color__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags List"
					]
				}
			}
		},
		{
			"displayName": "Color Empty",
			"name": "color__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "color__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
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
						"Extras"
					],
					"operation": [
						"Extras Tags List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/tags/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tagged Items",
			"name": "tagged_items",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tagged_items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /extras/tags/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Create"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Create"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Create"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Create"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Create"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Create"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Create"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Create"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Create"
					]
				}
			}
		},
		{
			"displayName": "Tagged Items",
			"name": "tagged_items",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tagged_items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Create"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Create"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/tags/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Tagged Items",
			"name": "tagged_items",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tagged_items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/tags/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/tags/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Read"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/tags/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Tagged Items",
			"name": "tagged_items",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tagged_items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/tags/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Update"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Update"
					]
				}
			}
		},
		{
			"displayName": "Tagged Items",
			"name": "tagged_items",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "tagged_items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Tags Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Update"
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
						"Extras"
					],
					"operation": [
						"Extras Tags Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/webhooks/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/webhooks/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Type Create",
			"name": "type_create",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type_create",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Type Update",
			"name": "type_update",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type_update",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Type Delete",
			"name": "type_delete",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type_delete",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Payload Url",
			"name": "payload_url",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "payload_url",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Http Method",
			"name": "http_method",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "http_method",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Http Content Type",
			"name": "http_content_type",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "http_content_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Secret",
			"name": "secret",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "secret",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Ssl Verification",
			"name": "ssl_verification",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ssl_verification",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Ca File Path",
			"name": "ca_file_path",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ca_file_path",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id",
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Content Types",
			"name": "content_types",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Payload Url N",
			"name": "payload_url__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "payload_url__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Payload Url Ic",
			"name": "payload_url__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "payload_url__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Payload Url Nic",
			"name": "payload_url__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "payload_url__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Payload Url Iew",
			"name": "payload_url__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "payload_url__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Payload Url Niew",
			"name": "payload_url__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "payload_url__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Payload Url Isw",
			"name": "payload_url__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "payload_url__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Payload Url Nisw",
			"name": "payload_url__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "payload_url__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Payload Url Ie",
			"name": "payload_url__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "payload_url__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Payload Url Nie",
			"name": "payload_url__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "payload_url__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Payload Url Empty",
			"name": "payload_url__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "payload_url__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Http Method N",
			"name": "http_method__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "http_method__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Http Content Type N",
			"name": "http_content_type__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "http_content_type__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Http Content Type Ic",
			"name": "http_content_type__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "http_content_type__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Http Content Type Nic",
			"name": "http_content_type__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "http_content_type__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Http Content Type Iew",
			"name": "http_content_type__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "http_content_type__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Http Content Type Niew",
			"name": "http_content_type__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "http_content_type__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Http Content Type Isw",
			"name": "http_content_type__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "http_content_type__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Http Content Type Nisw",
			"name": "http_content_type__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "http_content_type__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Http Content Type Ie",
			"name": "http_content_type__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "http_content_type__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Http Content Type Nie",
			"name": "http_content_type__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "http_content_type__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Http Content Type Empty",
			"name": "http_content_type__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "http_content_type__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Secret N",
			"name": "secret__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "secret__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Secret Ic",
			"name": "secret__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "secret__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Secret Nic",
			"name": "secret__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "secret__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Secret Iew",
			"name": "secret__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "secret__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Secret Niew",
			"name": "secret__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "secret__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Secret Isw",
			"name": "secret__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "secret__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Secret Nisw",
			"name": "secret__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "secret__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Secret Ie",
			"name": "secret__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "secret__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Secret Nie",
			"name": "secret__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "secret__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Secret Empty",
			"name": "secret__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "secret__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Ca File Path N",
			"name": "ca_file_path__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ca_file_path__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Ca File Path Ic",
			"name": "ca_file_path__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ca_file_path__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Ca File Path Nic",
			"name": "ca_file_path__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ca_file_path__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Ca File Path Iew",
			"name": "ca_file_path__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ca_file_path__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Ca File Path Niew",
			"name": "ca_file_path__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ca_file_path__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Ca File Path Isw",
			"name": "ca_file_path__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ca_file_path__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Ca File Path Nisw",
			"name": "ca_file_path__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ca_file_path__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Ca File Path Ie",
			"name": "ca_file_path__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ca_file_path__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Ca File Path Nie",
			"name": "ca_file_path__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ca_file_path__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Ca File Path Empty",
			"name": "ca_file_path__empty",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ca_file_path__empty",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id N",
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Lte",
			"name": "content_type_id__lte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Lt",
			"name": "content_type_id__lt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__lt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Gte",
			"name": "content_type_id__gte",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Content Type Id Gt",
			"name": "content_type_id__gt",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_type_id__gt",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Content Types N",
			"name": "content_types__n",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__n",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Ic",
			"name": "content_types__ic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__ic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Nic",
			"name": "content_types__nic",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__nic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Iew",
			"name": "content_types__iew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__iew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Niew",
			"name": "content_types__niew",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__niew",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Isw",
			"name": "content_types__isw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__isw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Nisw",
			"name": "content_types__nisw",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__nisw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Ie",
			"name": "content_types__ie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__ie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "Content Types Nie",
			"name": "content_types__nie",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "content_types__nie",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks List"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/webhooks/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Additional Headers",
			"name": "additional_headers",
			"type": "string",
			"default": "",
			"description": "User-supplied HTTP headers to be sent with the request in addition to the HTTP content type. Headers should be defined in the format <code>Name: Value</code>. Jinja2 template processing is supported with the same context as the request body (below).",
			"routing": {
				"send": {
					"property": "additional_headers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Body Template",
			"name": "body_template",
			"type": "string",
			"default": "",
			"description": "Jinja2 template for a custom request body. If blank, a JSON object representing the change will be included. Available context data includes: <code>event</code>, <code>model</code>, <code>timestamp</code>, <code>username</code>, <code>request_id</code>, and <code>data</code>.",
			"routing": {
				"send": {
					"property": "body_template",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Ca File Path",
			"name": "ca_file_path",
			"type": "string",
			"default": "",
			"description": "The specific CA certificate file to use for SSL verification. Leave blank to use the system defaults.",
			"routing": {
				"send": {
					"property": "ca_file_path",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Conditions",
			"name": "conditions",
			"type": "json",
			"default": "{}",
			"description": "A set of conditions which determine whether the webhook will be generated.",
			"routing": {
				"send": {
					"property": "conditions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Http Content Type",
			"name": "http_content_type",
			"type": "string",
			"default": "",
			"description": "The complete list of official content types is available <a href=\"https://www.iana.org/assignments/media-types/media-types.xhtml\">here</a>.",
			"routing": {
				"send": {
					"property": "http_content_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Http Method",
			"name": "http_method",
			"type": "options",
			"default": "GET",
			"options": [
				{
					"name": "GET",
					"value": "GET"
				},
				{
					"name": "POST",
					"value": "POST"
				},
				{
					"name": "PUT",
					"value": "PUT"
				},
				{
					"name": "PATCH",
					"value": "PATCH"
				},
				{
					"name": "DELETE",
					"value": "DELETE"
				}
			],
			"routing": {
				"send": {
					"property": "http_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payload Url",
			"name": "payload_url",
			"type": "string",
			"default": "",
			"description": "This URL will be called using the HTTP method defined when the webhook is called. Jinja2 template processing is supported with the same context as the request body.",
			"routing": {
				"send": {
					"property": "payload_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Secret",
			"name": "secret",
			"type": "string",
			"default": "",
			"description": "When provided, the request will include a 'X-Hook-Signature' header containing a HMAC hex digest of the payload body using the secret as the key. The secret is not transmitted in the request.",
			"routing": {
				"send": {
					"property": "secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Ssl Verification",
			"name": "ssl_verification",
			"type": "boolean",
			"default": true,
			"description": "Enable SSL certificate verification. Disable with caution!",
			"routing": {
				"send": {
					"property": "ssl_verification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Type Create",
			"name": "type_create",
			"type": "boolean",
			"default": true,
			"description": "Call this webhook when a matching object is created.",
			"routing": {
				"send": {
					"property": "type_create",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Type Delete",
			"name": "type_delete",
			"type": "boolean",
			"default": true,
			"description": "Call this webhook when a matching object is deleted.",
			"routing": {
				"send": {
					"property": "type_delete",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Type Update",
			"name": "type_update",
			"type": "boolean",
			"default": true,
			"description": "Call this webhook when a matching object is updated.",
			"routing": {
				"send": {
					"property": "type_update",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Partial Update"
					]
				}
			}
		},
		{
			"displayName": "POST /extras/webhooks/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
					]
				}
			}
		},
		{
			"displayName": "Additional Headers",
			"name": "additional_headers",
			"type": "string",
			"default": "",
			"description": "User-supplied HTTP headers to be sent with the request in addition to the HTTP content type. Headers should be defined in the format <code>Name: Value</code>. Jinja2 template processing is supported with the same context as the request body (below).",
			"routing": {
				"send": {
					"property": "additional_headers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
					]
				}
			}
		},
		{
			"displayName": "Body Template",
			"name": "body_template",
			"type": "string",
			"default": "",
			"description": "Jinja2 template for a custom request body. If blank, a JSON object representing the change will be included. Available context data includes: <code>event</code>, <code>model</code>, <code>timestamp</code>, <code>username</code>, <code>request_id</code>, and <code>data</code>.",
			"routing": {
				"send": {
					"property": "body_template",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
					]
				}
			}
		},
		{
			"displayName": "Ca File Path",
			"name": "ca_file_path",
			"type": "string",
			"default": "",
			"description": "The specific CA certificate file to use for SSL verification. Leave blank to use the system defaults.",
			"routing": {
				"send": {
					"property": "ca_file_path",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
					]
				}
			}
		},
		{
			"displayName": "Conditions",
			"name": "conditions",
			"type": "json",
			"default": "{}",
			"description": "A set of conditions which determine whether the webhook will be generated.",
			"routing": {
				"send": {
					"property": "conditions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
					]
				}
			}
		},
		{
			"displayName": "Http Content Type",
			"name": "http_content_type",
			"type": "string",
			"default": "",
			"description": "The complete list of official content types is available <a href=\"https://www.iana.org/assignments/media-types/media-types.xhtml\">here</a>.",
			"routing": {
				"send": {
					"property": "http_content_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
					]
				}
			}
		},
		{
			"displayName": "Http Method",
			"name": "http_method",
			"type": "options",
			"default": "GET",
			"options": [
				{
					"name": "GET",
					"value": "GET"
				},
				{
					"name": "POST",
					"value": "POST"
				},
				{
					"name": "PUT",
					"value": "PUT"
				},
				{
					"name": "PATCH",
					"value": "PATCH"
				},
				{
					"name": "DELETE",
					"value": "DELETE"
				}
			],
			"routing": {
				"send": {
					"property": "http_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payload Url",
			"name": "payload_url",
			"type": "string",
			"default": "",
			"description": "This URL will be called using the HTTP method defined when the webhook is called. Jinja2 template processing is supported with the same context as the request body.",
			"routing": {
				"send": {
					"property": "payload_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
					]
				}
			}
		},
		{
			"displayName": "Secret",
			"name": "secret",
			"type": "string",
			"default": "",
			"description": "When provided, the request will include a 'X-Hook-Signature' header containing a HMAC hex digest of the payload body using the secret as the key. The secret is not transmitted in the request.",
			"routing": {
				"send": {
					"property": "secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
					]
				}
			}
		},
		{
			"displayName": "Ssl Verification",
			"name": "ssl_verification",
			"type": "boolean",
			"default": true,
			"description": "Enable SSL certificate verification. Disable with caution!",
			"routing": {
				"send": {
					"property": "ssl_verification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
					]
				}
			}
		},
		{
			"displayName": "Type Create",
			"name": "type_create",
			"type": "boolean",
			"default": true,
			"description": "Call this webhook when a matching object is created.",
			"routing": {
				"send": {
					"property": "type_create",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
					]
				}
			}
		},
		{
			"displayName": "Type Delete",
			"name": "type_delete",
			"type": "boolean",
			"default": true,
			"description": "Call this webhook when a matching object is deleted.",
			"routing": {
				"send": {
					"property": "type_delete",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
					]
				}
			}
		},
		{
			"displayName": "Type Update",
			"name": "type_update",
			"type": "boolean",
			"default": true,
			"description": "Call this webhook when a matching object is updated.",
			"routing": {
				"send": {
					"property": "type_update",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Create"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/webhooks/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Additional Headers",
			"name": "additional_headers",
			"type": "string",
			"default": "",
			"description": "User-supplied HTTP headers to be sent with the request in addition to the HTTP content type. Headers should be defined in the format <code>Name: Value</code>. Jinja2 template processing is supported with the same context as the request body (below).",
			"routing": {
				"send": {
					"property": "additional_headers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Body Template",
			"name": "body_template",
			"type": "string",
			"default": "",
			"description": "Jinja2 template for a custom request body. If blank, a JSON object representing the change will be included. Available context data includes: <code>event</code>, <code>model</code>, <code>timestamp</code>, <code>username</code>, <code>request_id</code>, and <code>data</code>.",
			"routing": {
				"send": {
					"property": "body_template",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Ca File Path",
			"name": "ca_file_path",
			"type": "string",
			"default": "",
			"description": "The specific CA certificate file to use for SSL verification. Leave blank to use the system defaults.",
			"routing": {
				"send": {
					"property": "ca_file_path",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Conditions",
			"name": "conditions",
			"type": "json",
			"default": "{}",
			"description": "A set of conditions which determine whether the webhook will be generated.",
			"routing": {
				"send": {
					"property": "conditions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Http Content Type",
			"name": "http_content_type",
			"type": "string",
			"default": "",
			"description": "The complete list of official content types is available <a href=\"https://www.iana.org/assignments/media-types/media-types.xhtml\">here</a>.",
			"routing": {
				"send": {
					"property": "http_content_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Http Method",
			"name": "http_method",
			"type": "options",
			"default": "GET",
			"options": [
				{
					"name": "GET",
					"value": "GET"
				},
				{
					"name": "POST",
					"value": "POST"
				},
				{
					"name": "PUT",
					"value": "PUT"
				},
				{
					"name": "PATCH",
					"value": "PATCH"
				},
				{
					"name": "DELETE",
					"value": "DELETE"
				}
			],
			"routing": {
				"send": {
					"property": "http_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payload Url",
			"name": "payload_url",
			"type": "string",
			"default": "",
			"description": "This URL will be called using the HTTP method defined when the webhook is called. Jinja2 template processing is supported with the same context as the request body.",
			"routing": {
				"send": {
					"property": "payload_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Secret",
			"name": "secret",
			"type": "string",
			"default": "",
			"description": "When provided, the request will include a 'X-Hook-Signature' header containing a HMAC hex digest of the payload body using the secret as the key. The secret is not transmitted in the request.",
			"routing": {
				"send": {
					"property": "secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Ssl Verification",
			"name": "ssl_verification",
			"type": "boolean",
			"default": true,
			"description": "Enable SSL certificate verification. Disable with caution!",
			"routing": {
				"send": {
					"property": "ssl_verification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Type Create",
			"name": "type_create",
			"type": "boolean",
			"default": true,
			"description": "Call this webhook when a matching object is created.",
			"routing": {
				"send": {
					"property": "type_create",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Type Delete",
			"name": "type_delete",
			"type": "boolean",
			"default": true,
			"description": "Call this webhook when a matching object is deleted.",
			"routing": {
				"send": {
					"property": "type_delete",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "Type Update",
			"name": "type_update",
			"type": "boolean",
			"default": true,
			"description": "Call this webhook when a matching object is updated.",
			"routing": {
				"send": {
					"property": "type_update",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Bulk Update"
					]
				}
			}
		},
		{
			"displayName": "DELETE /extras/webhooks/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Delete"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /extras/webhooks/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Read"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Read"
					]
				}
			}
		},
		{
			"displayName": "PATCH /extras/webhooks/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Additional Headers",
			"name": "additional_headers",
			"type": "string",
			"default": "",
			"description": "User-supplied HTTP headers to be sent with the request in addition to the HTTP content type. Headers should be defined in the format <code>Name: Value</code>. Jinja2 template processing is supported with the same context as the request body (below).",
			"routing": {
				"send": {
					"property": "additional_headers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Body Template",
			"name": "body_template",
			"type": "string",
			"default": "",
			"description": "Jinja2 template for a custom request body. If blank, a JSON object representing the change will be included. Available context data includes: <code>event</code>, <code>model</code>, <code>timestamp</code>, <code>username</code>, <code>request_id</code>, and <code>data</code>.",
			"routing": {
				"send": {
					"property": "body_template",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Ca File Path",
			"name": "ca_file_path",
			"type": "string",
			"default": "",
			"description": "The specific CA certificate file to use for SSL verification. Leave blank to use the system defaults.",
			"routing": {
				"send": {
					"property": "ca_file_path",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Conditions",
			"name": "conditions",
			"type": "json",
			"default": "{}",
			"description": "A set of conditions which determine whether the webhook will be generated.",
			"routing": {
				"send": {
					"property": "conditions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Http Content Type",
			"name": "http_content_type",
			"type": "string",
			"default": "",
			"description": "The complete list of official content types is available <a href=\"https://www.iana.org/assignments/media-types/media-types.xhtml\">here</a>.",
			"routing": {
				"send": {
					"property": "http_content_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Http Method",
			"name": "http_method",
			"type": "options",
			"default": "GET",
			"options": [
				{
					"name": "GET",
					"value": "GET"
				},
				{
					"name": "POST",
					"value": "POST"
				},
				{
					"name": "PUT",
					"value": "PUT"
				},
				{
					"name": "PATCH",
					"value": "PATCH"
				},
				{
					"name": "DELETE",
					"value": "DELETE"
				}
			],
			"routing": {
				"send": {
					"property": "http_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payload Url",
			"name": "payload_url",
			"type": "string",
			"default": "",
			"description": "This URL will be called using the HTTP method defined when the webhook is called. Jinja2 template processing is supported with the same context as the request body.",
			"routing": {
				"send": {
					"property": "payload_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Secret",
			"name": "secret",
			"type": "string",
			"default": "",
			"description": "When provided, the request will include a 'X-Hook-Signature' header containing a HMAC hex digest of the payload body using the secret as the key. The secret is not transmitted in the request.",
			"routing": {
				"send": {
					"property": "secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Ssl Verification",
			"name": "ssl_verification",
			"type": "boolean",
			"default": true,
			"description": "Enable SSL certificate verification. Disable with caution!",
			"routing": {
				"send": {
					"property": "ssl_verification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Type Create",
			"name": "type_create",
			"type": "boolean",
			"default": true,
			"description": "Call this webhook when a matching object is created.",
			"routing": {
				"send": {
					"property": "type_create",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Type Delete",
			"name": "type_delete",
			"type": "boolean",
			"default": true,
			"description": "Call this webhook when a matching object is deleted.",
			"routing": {
				"send": {
					"property": "type_delete",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
					]
				}
			}
		},
		{
			"displayName": "Type Update",
			"name": "type_update",
			"type": "boolean",
			"default": true,
			"description": "Call this webhook when a matching object is updated.",
			"routing": {
				"send": {
					"property": "type_update",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Partial Update"
					]
				}
			}
		},
		{
			"displayName": "PUT /extras/webhooks/{id}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
					]
				}
			}
		},
		{
			"displayName": "Additional Headers",
			"name": "additional_headers",
			"type": "string",
			"default": "",
			"description": "User-supplied HTTP headers to be sent with the request in addition to the HTTP content type. Headers should be defined in the format <code>Name: Value</code>. Jinja2 template processing is supported with the same context as the request body (below).",
			"routing": {
				"send": {
					"property": "additional_headers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
					]
				}
			}
		},
		{
			"displayName": "Body Template",
			"name": "body_template",
			"type": "string",
			"default": "",
			"description": "Jinja2 template for a custom request body. If blank, a JSON object representing the change will be included. Available context data includes: <code>event</code>, <code>model</code>, <code>timestamp</code>, <code>username</code>, <code>request_id</code>, and <code>data</code>.",
			"routing": {
				"send": {
					"property": "body_template",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
					]
				}
			}
		},
		{
			"displayName": "Ca File Path",
			"name": "ca_file_path",
			"type": "string",
			"default": "",
			"description": "The specific CA certificate file to use for SSL verification. Leave blank to use the system defaults.",
			"routing": {
				"send": {
					"property": "ca_file_path",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
					]
				}
			}
		},
		{
			"displayName": "Conditions",
			"name": "conditions",
			"type": "json",
			"default": "{}",
			"description": "A set of conditions which determine whether the webhook will be generated.",
			"routing": {
				"send": {
					"property": "conditions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content Types",
			"name": "content_types",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "content_types",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
					]
				}
			}
		},
		{
			"displayName": "Http Content Type",
			"name": "http_content_type",
			"type": "string",
			"default": "",
			"description": "The complete list of official content types is available <a href=\"https://www.iana.org/assignments/media-types/media-types.xhtml\">here</a>.",
			"routing": {
				"send": {
					"property": "http_content_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
					]
				}
			}
		},
		{
			"displayName": "Http Method",
			"name": "http_method",
			"type": "options",
			"default": "GET",
			"options": [
				{
					"name": "GET",
					"value": "GET"
				},
				{
					"name": "POST",
					"value": "POST"
				},
				{
					"name": "PUT",
					"value": "PUT"
				},
				{
					"name": "PATCH",
					"value": "PATCH"
				},
				{
					"name": "DELETE",
					"value": "DELETE"
				}
			],
			"routing": {
				"send": {
					"property": "http_method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payload Url",
			"name": "payload_url",
			"type": "string",
			"default": "",
			"description": "This URL will be called using the HTTP method defined when the webhook is called. Jinja2 template processing is supported with the same context as the request body.",
			"routing": {
				"send": {
					"property": "payload_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
					]
				}
			}
		},
		{
			"displayName": "Secret",
			"name": "secret",
			"type": "string",
			"default": "",
			"description": "When provided, the request will include a 'X-Hook-Signature' header containing a HMAC hex digest of the payload body using the secret as the key. The secret is not transmitted in the request.",
			"routing": {
				"send": {
					"property": "secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
					]
				}
			}
		},
		{
			"displayName": "Ssl Verification",
			"name": "ssl_verification",
			"type": "boolean",
			"default": true,
			"description": "Enable SSL certificate verification. Disable with caution!",
			"routing": {
				"send": {
					"property": "ssl_verification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
					]
				}
			}
		},
		{
			"displayName": "Type Create",
			"name": "type_create",
			"type": "boolean",
			"default": true,
			"description": "Call this webhook when a matching object is created.",
			"routing": {
				"send": {
					"property": "type_create",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
					]
				}
			}
		},
		{
			"displayName": "Type Delete",
			"name": "type_delete",
			"type": "boolean",
			"default": true,
			"description": "Call this webhook when a matching object is deleted.",
			"routing": {
				"send": {
					"property": "type_delete",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
					]
				}
			}
		},
		{
			"displayName": "Type Update",
			"name": "type_update",
			"type": "boolean",
			"default": true,
			"description": "Call this webhook when a matching object is updated.",
			"routing": {
				"send": {
					"property": "type_update",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
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
						"Extras"
					],
					"operation": [
						"Extras Webhooks Update"
					]
				}
			}
		},
];
