# @n8n-dev/n8n-nodes-netbox

![netbox Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-netbox.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-netbox)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing netbox API integrations by hand.**

Every time you connect n8n to netbox, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to netbox took 5 minutes, not half a day?**

This node gives you **9+ resources** out of the box: **Circuits**, **Dcim**, **Extras**, **Ipam**, **Status**, and 4 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-netbox
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-netbox`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **netbox API** → paste your API key
3. Drag the **netbox** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Circuits</b> (46 operations)</summary>

- Delete Circuits Circuit Terminations Bulk Delete
- Get Circuits Circuit Terminations List
- Patch Circuits Circuit Terminations Bulk Partial Update
- Post Circuits Circuit Terminations Create
- Put Circuits Circuit Terminations Bulk Update
- Delete Circuits Circuit Terminations Delete
- Get Circuits Circuit Terminations Read
- Patch Circuits Circuit Terminations Partial Update
- Put Circuits Circuit Terminations Update
- Get Circuits Circuit Terminations Paths
- Delete Circuits Circuit Types Bulk Delete
- Get Circuits Circuit Types List
- Patch Circuits Circuit Types Bulk Partial Update
- Post Circuits Circuit Types Create
- Put Circuits Circuit Types Bulk Update
- Delete Circuits Circuit Types Delete
- Get Circuits Circuit Types Read
- Patch Circuits Circuit Types Partial Update
- Put Circuits Circuit Types Update
- Delete Circuits Circuits Bulk Delete
- Get Circuits Circuits List
- Patch Circuits Circuits Bulk Partial Update
- Post Circuits Circuits Create
- Put Circuits Circuits Bulk Update
- Delete Circuits Circuits Delete
- Get Circuits Circuits Read
- Patch Circuits Circuits Partial Update
- Put Circuits Circuits Update
- Delete Circuits Provider Networks Bulk Delete
- Get Circuits Provider Networks List
- Patch Circuits Provider Networks Bulk Partial Update
- Post Circuits Provider Networks Create
- Put Circuits Provider Networks Bulk Update
- Delete Circuits Provider Networks Delete
- Get Circuits Provider Networks Read
- Patch Circuits Provider Networks Partial Update
- Put Circuits Provider Networks Update
- Delete Circuits Providers Bulk Delete
- Get Circuits Providers List
- Patch Circuits Providers Bulk Partial Update
- Post Circuits Providers Create
- Put Circuits Providers Bulk Update
- Delete Circuits Providers Delete
- Get Circuits Providers Read
- Patch Circuits Providers Partial Update
- Put Circuits Providers Update

</details>

<details>
<summary><b>Dcim</b> (380 operations)</summary>

- Delete Dcim Cable Terminations Bulk Delete
- Get Dcim Cable Terminations List
- Patch Dcim Cable Terminations Bulk Partial Update
- Post Dcim Cable Terminations Create
- Put Dcim Cable Terminations Bulk Update
- Delete Dcim Cable Terminations Delete
- Get Dcim Cable Terminations Read
- Patch Dcim Cable Terminations Partial Update
- Put Dcim Cable Terminations Update
- Delete Dcim Cables Bulk Delete
- Get Dcim Cables List
- Patch Dcim Cables Bulk Partial Update
- Post Dcim Cables Create
- Put Dcim Cables Bulk Update
- Delete Dcim Cables Delete
- Get Dcim Cables Read
- Patch Dcim Cables Partial Update
- Put Dcim Cables Update
- Get Dcim Connected Device List
- Delete Dcim Console Port Templates Bulk Delete
- Get Dcim Console Port Templates List
- Patch Dcim Console Port Templates Bulk Partial Update
- Post Dcim Console Port Templates Create
- Put Dcim Console Port Templates Bulk Update
- Delete Dcim Console Port Templates Delete
- Get Dcim Console Port Templates Read
- Patch Dcim Console Port Templates Partial Update
- Put Dcim Console Port Templates Update
- Delete Dcim Console Ports Bulk Delete
- Get Dcim Console Ports List
- Patch Dcim Console Ports Bulk Partial Update
- Post Dcim Console Ports Create
- Put Dcim Console Ports Bulk Update
- Delete Dcim Console Ports Delete
- Get Dcim Console Ports Read
- Patch Dcim Console Ports Partial Update
- Put Dcim Console Ports Update
- Get Dcim Console Ports Trace
- Delete Dcim Console Server Port Templates Bulk Delete
- Get Dcim Console Server Port Templates List
- Patch Dcim Console Server Port Templates Bulk Partial Update
- Post Dcim Console Server Port Templates Create
- Put Dcim Console Server Port Templates Bulk Update
- Delete Dcim Console Server Port Templates Delete
- Get Dcim Console Server Port Templates Read
- Patch Dcim Console Server Port Templates Partial Update
- Put Dcim Console Server Port Templates Update
- Delete Dcim Console Server Ports Bulk Delete
- Get Dcim Console Server Ports List
- Patch Dcim Console Server Ports Bulk Partial Update
- Post Dcim Console Server Ports Create
- Put Dcim Console Server Ports Bulk Update
- Delete Dcim Console Server Ports Delete
- Get Dcim Console Server Ports Read
- Patch Dcim Console Server Ports Partial Update
- Put Dcim Console Server Ports Update
- Get Dcim Console Server Ports Trace
- Delete Dcim Device Bay Templates Bulk Delete
- Get Dcim Device Bay Templates List
- Patch Dcim Device Bay Templates Bulk Partial Update
- Post Dcim Device Bay Templates Create
- Put Dcim Device Bay Templates Bulk Update
- Delete Dcim Device Bay Templates Delete
- Get Dcim Device Bay Templates Read
- Patch Dcim Device Bay Templates Partial Update
- Put Dcim Device Bay Templates Update
- Delete Dcim Device Bays Bulk Delete
- Get Dcim Device Bays List
- Patch Dcim Device Bays Bulk Partial Update
- Post Dcim Device Bays Create
- Put Dcim Device Bays Bulk Update
- Delete Dcim Device Bays Delete
- Get Dcim Device Bays Read
- Patch Dcim Device Bays Partial Update
- Put Dcim Device Bays Update
- Delete Dcim Device Roles Bulk Delete
- Get Dcim Device Roles List
- Patch Dcim Device Roles Bulk Partial Update
- Post Dcim Device Roles Create
- Put Dcim Device Roles Bulk Update
- Delete Dcim Device Roles Delete
- Get Dcim Device Roles Read
- Patch Dcim Device Roles Partial Update
- Put Dcim Device Roles Update
- Delete Dcim Device Types Bulk Delete
- Get Dcim Device Types List
- Patch Dcim Device Types Bulk Partial Update
- Post Dcim Device Types Create
- Put Dcim Device Types Bulk Update
- Delete Dcim Device Types Delete
- Get Dcim Device Types Read
- Patch Dcim Device Types Partial Update
- Put Dcim Device Types Update
- Delete Dcim Devices Bulk Delete
- Get Dcim Devices List
- Patch Dcim Devices Bulk Partial Update
- Post Dcim Devices Create
- Put Dcim Devices Bulk Update
- Delete Dcim Devices Delete
- Get Dcim Devices Read
- Patch Dcim Devices Partial Update
- Put Dcim Devices Update
- Get Dcim Devices Napalm
- Delete Dcim Front Port Templates Bulk Delete
- Get Dcim Front Port Templates List
- Patch Dcim Front Port Templates Bulk Partial Update
- Post Dcim Front Port Templates Create
- Put Dcim Front Port Templates Bulk Update
- Delete Dcim Front Port Templates Delete
- Get Dcim Front Port Templates Read
- Patch Dcim Front Port Templates Partial Update
- Put Dcim Front Port Templates Update
- Delete Dcim Front Ports Bulk Delete
- Get Dcim Front Ports List
- Patch Dcim Front Ports Bulk Partial Update
- Post Dcim Front Ports Create
- Put Dcim Front Ports Bulk Update
- Delete Dcim Front Ports Delete
- Get Dcim Front Ports Read
- Patch Dcim Front Ports Partial Update
- Put Dcim Front Ports Update
- Get Dcim Front Ports Paths
- Delete Dcim Interface Templates Bulk Delete
- Get Dcim Interface Templates List
- Patch Dcim Interface Templates Bulk Partial Update
- Post Dcim Interface Templates Create
- Put Dcim Interface Templates Bulk Update
- Delete Dcim Interface Templates Delete
- Get Dcim Interface Templates Read
- Patch Dcim Interface Templates Partial Update
- Put Dcim Interface Templates Update
- Delete Dcim Interfaces Bulk Delete
- Get Dcim Interfaces List
- Patch Dcim Interfaces Bulk Partial Update
- Post Dcim Interfaces Create
- Put Dcim Interfaces Bulk Update
- Delete Dcim Interfaces Delete
- Get Dcim Interfaces Read
- Patch Dcim Interfaces Partial Update
- Put Dcim Interfaces Update
- Get Dcim Interfaces Trace
- Delete Dcim Inventory Item Roles Bulk Delete
- Get Dcim Inventory Item Roles List
- Patch Dcim Inventory Item Roles Bulk Partial Update
- Post Dcim Inventory Item Roles Create
- Put Dcim Inventory Item Roles Bulk Update
- Delete Dcim Inventory Item Roles Delete
- Get Dcim Inventory Item Roles Read
- Patch Dcim Inventory Item Roles Partial Update
- Put Dcim Inventory Item Roles Update
- Delete Dcim Inventory Item Templates Bulk Delete
- Get Dcim Inventory Item Templates List
- Patch Dcim Inventory Item Templates Bulk Partial Update
- Post Dcim Inventory Item Templates Create
- Put Dcim Inventory Item Templates Bulk Update
- Delete Dcim Inventory Item Templates Delete
- Get Dcim Inventory Item Templates Read
- Patch Dcim Inventory Item Templates Partial Update
- Put Dcim Inventory Item Templates Update
- Delete Dcim Inventory Items Bulk Delete
- Get Dcim Inventory Items List
- Patch Dcim Inventory Items Bulk Partial Update
- Post Dcim Inventory Items Create
- Put Dcim Inventory Items Bulk Update
- Delete Dcim Inventory Items Delete
- Get Dcim Inventory Items Read
- Patch Dcim Inventory Items Partial Update
- Put Dcim Inventory Items Update
- Delete Dcim Locations Bulk Delete
- Get Dcim Locations List
- Patch Dcim Locations Bulk Partial Update
- Post Dcim Locations Create
- Put Dcim Locations Bulk Update
- Delete Dcim Locations Delete
- Get Dcim Locations Read
- Patch Dcim Locations Partial Update
- Put Dcim Locations Update
- Delete Dcim Manufacturers Bulk Delete
- Get Dcim Manufacturers List
- Patch Dcim Manufacturers Bulk Partial Update
- Post Dcim Manufacturers Create
- Put Dcim Manufacturers Bulk Update
- Delete Dcim Manufacturers Delete
- Get Dcim Manufacturers Read
- Patch Dcim Manufacturers Partial Update
- Put Dcim Manufacturers Update
- Delete Dcim Module Bay Templates Bulk Delete
- Get Dcim Module Bay Templates List
- Patch Dcim Module Bay Templates Bulk Partial Update
- Post Dcim Module Bay Templates Create
- Put Dcim Module Bay Templates Bulk Update
- Delete Dcim Module Bay Templates Delete
- Get Dcim Module Bay Templates Read
- Patch Dcim Module Bay Templates Partial Update
- Put Dcim Module Bay Templates Update
- Delete Dcim Module Bays Bulk Delete
- Get Dcim Module Bays List
- Patch Dcim Module Bays Bulk Partial Update
- Post Dcim Module Bays Create
- Put Dcim Module Bays Bulk Update
- Delete Dcim Module Bays Delete
- Get Dcim Module Bays Read
- Patch Dcim Module Bays Partial Update
- Put Dcim Module Bays Update
- Delete Dcim Module Types Bulk Delete
- Get Dcim Module Types List
- Patch Dcim Module Types Bulk Partial Update
- Post Dcim Module Types Create
- Put Dcim Module Types Bulk Update
- Delete Dcim Module Types Delete
- Get Dcim Module Types Read
- Patch Dcim Module Types Partial Update
- Put Dcim Module Types Update
- Delete Dcim Modules Bulk Delete
- Get Dcim Modules List
- Patch Dcim Modules Bulk Partial Update
- Post Dcim Modules Create
- Put Dcim Modules Bulk Update
- Delete Dcim Modules Delete
- Get Dcim Modules Read
- Patch Dcim Modules Partial Update
- Put Dcim Modules Update
- Delete Dcim Platforms Bulk Delete
- Get Dcim Platforms List
- Patch Dcim Platforms Bulk Partial Update
- Post Dcim Platforms Create
- Put Dcim Platforms Bulk Update
- Delete Dcim Platforms Delete
- Get Dcim Platforms Read
- Patch Dcim Platforms Partial Update
- Put Dcim Platforms Update
- Delete Dcim Power Feeds Bulk Delete
- Get Dcim Power Feeds List
- Patch Dcim Power Feeds Bulk Partial Update
- Post Dcim Power Feeds Create
- Put Dcim Power Feeds Bulk Update
- Delete Dcim Power Feeds Delete
- Get Dcim Power Feeds Read
- Patch Dcim Power Feeds Partial Update
- Put Dcim Power Feeds Update
- Get Dcim Power Feeds Trace
- Delete Dcim Power Outlet Templates Bulk Delete
- Get Dcim Power Outlet Templates List
- Patch Dcim Power Outlet Templates Bulk Partial Update
- Post Dcim Power Outlet Templates Create
- Put Dcim Power Outlet Templates Bulk Update
- Delete Dcim Power Outlet Templates Delete
- Get Dcim Power Outlet Templates Read
- Patch Dcim Power Outlet Templates Partial Update
- Put Dcim Power Outlet Templates Update
- Delete Dcim Power Outlets Bulk Delete
- Get Dcim Power Outlets List
- Patch Dcim Power Outlets Bulk Partial Update
- Post Dcim Power Outlets Create
- Put Dcim Power Outlets Bulk Update
- Delete Dcim Power Outlets Delete
- Get Dcim Power Outlets Read
- Patch Dcim Power Outlets Partial Update
- Put Dcim Power Outlets Update
- Get Dcim Power Outlets Trace
- Delete Dcim Power Panels Bulk Delete
- Get Dcim Power Panels List
- Patch Dcim Power Panels Bulk Partial Update
- Post Dcim Power Panels Create
- Put Dcim Power Panels Bulk Update
- Delete Dcim Power Panels Delete
- Get Dcim Power Panels Read
- Patch Dcim Power Panels Partial Update
- Put Dcim Power Panels Update
- Delete Dcim Power Port Templates Bulk Delete
- Get Dcim Power Port Templates List
- Patch Dcim Power Port Templates Bulk Partial Update
- Post Dcim Power Port Templates Create
- Put Dcim Power Port Templates Bulk Update
- Delete Dcim Power Port Templates Delete
- Get Dcim Power Port Templates Read
- Patch Dcim Power Port Templates Partial Update
- Put Dcim Power Port Templates Update
- Delete Dcim Power Ports Bulk Delete
- Get Dcim Power Ports List
- Patch Dcim Power Ports Bulk Partial Update
- Post Dcim Power Ports Create
- Put Dcim Power Ports Bulk Update
- Delete Dcim Power Ports Delete
- Get Dcim Power Ports Read
- Patch Dcim Power Ports Partial Update
- Put Dcim Power Ports Update
- Get Dcim Power Ports Trace
- Delete Dcim Rack Reservations Bulk Delete
- Get Dcim Rack Reservations List
- Patch Dcim Rack Reservations Bulk Partial Update
- Post Dcim Rack Reservations Create
- Put Dcim Rack Reservations Bulk Update
- Delete Dcim Rack Reservations Delete
- Get Dcim Rack Reservations Read
- Patch Dcim Rack Reservations Partial Update
- Put Dcim Rack Reservations Update
- Delete Dcim Rack Roles Bulk Delete
- Get Dcim Rack Roles List
- Patch Dcim Rack Roles Bulk Partial Update
- Post Dcim Rack Roles Create
- Put Dcim Rack Roles Bulk Update
- Delete Dcim Rack Roles Delete
- Get Dcim Rack Roles Read
- Patch Dcim Rack Roles Partial Update
- Put Dcim Rack Roles Update
- Delete Dcim Racks Bulk Delete
- Get Dcim Racks List
- Patch Dcim Racks Bulk Partial Update
- Post Dcim Racks Create
- Put Dcim Racks Bulk Update
- Delete Dcim Racks Delete
- Get Dcim Racks Read
- Patch Dcim Racks Partial Update
- Put Dcim Racks Update
- Get Dcim Racks Elevation
- Delete Dcim Rear Port Templates Bulk Delete
- Get Dcim Rear Port Templates List
- Patch Dcim Rear Port Templates Bulk Partial Update
- Post Dcim Rear Port Templates Create
- Put Dcim Rear Port Templates Bulk Update
- Delete Dcim Rear Port Templates Delete
- Get Dcim Rear Port Templates Read
- Patch Dcim Rear Port Templates Partial Update
- Put Dcim Rear Port Templates Update
- Delete Dcim Rear Ports Bulk Delete
- Get Dcim Rear Ports List
- Patch Dcim Rear Ports Bulk Partial Update
- Post Dcim Rear Ports Create
- Put Dcim Rear Ports Bulk Update
- Delete Dcim Rear Ports Delete
- Get Dcim Rear Ports Read
- Patch Dcim Rear Ports Partial Update
- Put Dcim Rear Ports Update
- Get Dcim Rear Ports Paths
- Delete Dcim Regions Bulk Delete
- Get Dcim Regions List
- Patch Dcim Regions Bulk Partial Update
- Post Dcim Regions Create
- Put Dcim Regions Bulk Update
- Delete Dcim Regions Delete
- Get Dcim Regions Read
- Patch Dcim Regions Partial Update
- Put Dcim Regions Update
- Delete Dcim Site Groups Bulk Delete
- Get Dcim Site Groups List
- Patch Dcim Site Groups Bulk Partial Update
- Post Dcim Site Groups Create
- Put Dcim Site Groups Bulk Update
- Delete Dcim Site Groups Delete
- Get Dcim Site Groups Read
- Patch Dcim Site Groups Partial Update
- Put Dcim Site Groups Update
- Delete Dcim Sites Bulk Delete
- Get Dcim Sites List
- Patch Dcim Sites Bulk Partial Update
- Post Dcim Sites Create
- Put Dcim Sites Bulk Update
- Delete Dcim Sites Delete
- Get Dcim Sites Read
- Patch Dcim Sites Partial Update
- Put Dcim Sites Update
- Delete Dcim Virtual Chassis Bulk Delete
- Get Dcim Virtual Chassis List
- Patch Dcim Virtual Chassis Bulk Partial Update
- Post Dcim Virtual Chassis Create
- Put Dcim Virtual Chassis Bulk Update
- Delete Dcim Virtual Chassis Delete
- Get Dcim Virtual Chassis Read
- Patch Dcim Virtual Chassis Partial Update
- Put Dcim Virtual Chassis Update
- Delete Dcim Virtual Device Contexts Bulk Delete
- Get Dcim Virtual Device Contexts List
- Patch Dcim Virtual Device Contexts Bulk Partial Update
- Post Dcim Virtual Device Contexts Create
- Put Dcim Virtual Device Contexts Bulk Update
- Delete Dcim Virtual Device Contexts Delete
- Get Dcim Virtual Device Contexts Read
- Patch Dcim Virtual Device Contexts Partial Update
- Put Dcim Virtual Device Contexts Update

</details>

<details>
<summary><b>Extras</b> (92 operations)</summary>

- Delete Extras Config Contexts Bulk Delete
- Get Extras Config Contexts List
- Patch Extras Config Contexts Bulk Partial Update
- Post Extras Config Contexts Create
- Put Extras Config Contexts Bulk Update
- Delete Extras Config Contexts Delete
- Get Extras Config Contexts Read
- Patch Extras Config Contexts Partial Update
- Put Extras Config Contexts Update
- Get Extras Content Types List
- Get Extras Content Types Read
- Delete Extras Custom Fields Bulk Delete
- Get Extras Custom Fields List
- Patch Extras Custom Fields Bulk Partial Update
- Post Extras Custom Fields Create
- Put Extras Custom Fields Bulk Update
- Delete Extras Custom Fields Delete
- Get Extras Custom Fields Read
- Patch Extras Custom Fields Partial Update
- Put Extras Custom Fields Update
- Delete Extras Custom Links Bulk Delete
- Get Extras Custom Links List
- Patch Extras Custom Links Bulk Partial Update
- Post Extras Custom Links Create
- Put Extras Custom Links Bulk Update
- Delete Extras Custom Links Delete
- Get Extras Custom Links Read
- Patch Extras Custom Links Partial Update
- Put Extras Custom Links Update
- Delete Extras Export Templates Bulk Delete
- Get Extras Export Templates List
- Patch Extras Export Templates Bulk Partial Update
- Post Extras Export Templates Create
- Put Extras Export Templates Bulk Update
- Delete Extras Export Templates Delete
- Get Extras Export Templates Read
- Patch Extras Export Templates Partial Update
- Put Extras Export Templates Update
- Delete Extras Image Attachments Bulk Delete
- Get Extras Image Attachments List
- Patch Extras Image Attachments Bulk Partial Update
- Post Extras Image Attachments Create
- Put Extras Image Attachments Bulk Update
- Delete Extras Image Attachments Delete
- Get Extras Image Attachments Read
- Patch Extras Image Attachments Partial Update
- Put Extras Image Attachments Update
- Get Extras Job Results List
- Get Extras Job Results Read
- Delete Extras Journal Entries Bulk Delete
- Get Extras Journal Entries List
- Patch Extras Journal Entries Bulk Partial Update
- Post Extras Journal Entries Create
- Put Extras Journal Entries Bulk Update
- Delete Extras Journal Entries Delete
- Get Extras Journal Entries Read
- Patch Extras Journal Entries Partial Update
- Put Extras Journal Entries Update
- Get Extras Object Changes List
- Get Extras Object Changes Read
- Get Extras Reports List
- Get Extras Reports Read
- Post Extras Reports Run
- Delete Extras Saved Filters Bulk Delete
- Get Extras Saved Filters List
- Patch Extras Saved Filters Bulk Partial Update
- Post Extras Saved Filters Create
- Put Extras Saved Filters Bulk Update
- Delete Extras Saved Filters Delete
- Get Extras Saved Filters Read
- Patch Extras Saved Filters Partial Update
- Put Extras Saved Filters Update
- Get Extras Scripts List
- Get Extras Scripts Read
- Delete Extras Tags Bulk Delete
- Get Extras Tags List
- Patch Extras Tags Bulk Partial Update
- Post Extras Tags Create
- Put Extras Tags Bulk Update
- Delete Extras Tags Delete
- Get Extras Tags Read
- Patch Extras Tags Partial Update
- Put Extras Tags Update
- Delete Extras Webhooks Bulk Delete
- Get Extras Webhooks List
- Patch Extras Webhooks Bulk Partial Update
- Post Extras Webhooks Create
- Put Extras Webhooks Bulk Update
- Delete Extras Webhooks Delete
- Get Extras Webhooks Read
- Patch Extras Webhooks Partial Update
- Put Extras Webhooks Update

</details>

<details>
<summary><b>Ipam</b> (161 operations)</summary>

- Delete Ipam Aggregates Bulk Delete
- Get Ipam Aggregates List
- Patch Ipam Aggregates Bulk Partial Update
- Post Ipam Aggregates Create
- Put Ipam Aggregates Bulk Update
- Delete Ipam Aggregates Delete
- Get Ipam Aggregates Read
- Patch Ipam Aggregates Partial Update
- Put Ipam Aggregates Update
- Delete Ipam Asns Bulk Delete
- Get Ipam Asns List
- Patch Ipam Asns Bulk Partial Update
- Post Ipam Asns Create
- Put Ipam Asns Bulk Update
- Delete Ipam Asns Delete
- Get Ipam Asns Read
- Patch Ipam Asns Partial Update
- Put Ipam Asns Update
- Delete Ipam Fhrp Group Assignments Bulk Delete
- Get Ipam Fhrp Group Assignments List
- Patch Ipam Fhrp Group Assignments Bulk Partial Update
- Post Ipam Fhrp Group Assignments Create
- Put Ipam Fhrp Group Assignments Bulk Update
- Delete Ipam Fhrp Group Assignments Delete
- Get Ipam Fhrp Group Assignments Read
- Patch Ipam Fhrp Group Assignments Partial Update
- Put Ipam Fhrp Group Assignments Update
- Delete Ipam Fhrp Groups Bulk Delete
- Get Ipam Fhrp Groups List
- Patch Ipam Fhrp Groups Bulk Partial Update
- Post Ipam Fhrp Groups Create
- Put Ipam Fhrp Groups Bulk Update
- Delete Ipam Fhrp Groups Delete
- Get Ipam Fhrp Groups Read
- Patch Ipam Fhrp Groups Partial Update
- Put Ipam Fhrp Groups Update
- Delete Ipam Ip Addresses Bulk Delete
- Get Ipam Ip Addresses List
- Patch Ipam Ip Addresses Bulk Partial Update
- Post Ipam Ip Addresses Create
- Put Ipam Ip Addresses Bulk Update
- Delete Ipam Ip Addresses Delete
- Get Ipam Ip Addresses Read
- Patch Ipam Ip Addresses Partial Update
- Put Ipam Ip Addresses Update
- Delete Ipam Ip Ranges Bulk Delete
- Get Ipam Ip Ranges List
- Patch Ipam Ip Ranges Bulk Partial Update
- Post Ipam Ip Ranges Create
- Put Ipam Ip Ranges Bulk Update
- Delete Ipam Ip Ranges Delete
- Get Ipam Ip Ranges Read
- Patch Ipam Ip Ranges Partial Update
- Put Ipam Ip Ranges Update
- Get Ipam Ip Ranges Available Ips List
- Post Ipam Ip Ranges Available Ips Create
- Delete Ipam L 2 Vpn Terminations Bulk Delete
- Get Ipam L 2 Vpn Terminations List
- Patch Ipam L 2 Vpn Terminations Bulk Partial Update
- Post Ipam L 2 Vpn Terminations Create
- Put Ipam L 2 Vpn Terminations Bulk Update
- Delete Ipam L 2 Vpn Terminations Delete
- Get Ipam L 2 Vpn Terminations Read
- Patch Ipam L 2 Vpn Terminations Partial Update
- Put Ipam L 2 Vpn Terminations Update
- Delete Ipam L 2 Vpns Bulk Delete
- Get Ipam L 2 Vpns List
- Patch Ipam L 2 Vpns Bulk Partial Update
- Post Ipam L 2 Vpns Create
- Put Ipam L 2 Vpns Bulk Update
- Delete Ipam L 2 Vpns Delete
- Get Ipam L 2 Vpns Read
- Patch Ipam L 2 Vpns Partial Update
- Put Ipam L 2 Vpns Update
- Delete Ipam Prefixes Bulk Delete
- Get Ipam Prefixes List
- Patch Ipam Prefixes Bulk Partial Update
- Post Ipam Prefixes Create
- Put Ipam Prefixes Bulk Update
- Delete Ipam Prefixes Delete
- Get Ipam Prefixes Read
- Patch Ipam Prefixes Partial Update
- Put Ipam Prefixes Update
- Get Ipam Prefixes Available Ips List
- Post Ipam Prefixes Available Ips Create
- Get Ipam Prefixes Available Prefixes List
- Post Ipam Prefixes Available Prefixes Create
- Delete Ipam Rirs Bulk Delete
- Get Ipam Rirs List
- Patch Ipam Rirs Bulk Partial Update
- Post Ipam Rirs Create
- Put Ipam Rirs Bulk Update
- Delete Ipam Rirs Delete
- Get Ipam Rirs Read
- Patch Ipam Rirs Partial Update
- Put Ipam Rirs Update
- Delete Ipam Roles Bulk Delete
- Get Ipam Roles List
- Patch Ipam Roles Bulk Partial Update
- Post Ipam Roles Create
- Put Ipam Roles Bulk Update
- Delete Ipam Roles Delete
- Get Ipam Roles Read
- Patch Ipam Roles Partial Update
- Put Ipam Roles Update
- Delete Ipam Route Targets Bulk Delete
- Get Ipam Route Targets List
- Patch Ipam Route Targets Bulk Partial Update
- Post Ipam Route Targets Create
- Put Ipam Route Targets Bulk Update
- Delete Ipam Route Targets Delete
- Get Ipam Route Targets Read
- Patch Ipam Route Targets Partial Update
- Put Ipam Route Targets Update
- Delete Ipam Service Templates Bulk Delete
- Get Ipam Service Templates List
- Patch Ipam Service Templates Bulk Partial Update
- Post Ipam Service Templates Create
- Put Ipam Service Templates Bulk Update
- Delete Ipam Service Templates Delete
- Get Ipam Service Templates Read
- Patch Ipam Service Templates Partial Update
- Put Ipam Service Templates Update
- Delete Ipam Services Bulk Delete
- Get Ipam Services List
- Patch Ipam Services Bulk Partial Update
- Post Ipam Services Create
- Put Ipam Services Bulk Update
- Delete Ipam Services Delete
- Get Ipam Services Read
- Patch Ipam Services Partial Update
- Put Ipam Services Update
- Delete Ipam Vlan Groups Bulk Delete
- Get Ipam Vlan Groups List
- Patch Ipam Vlan Groups Bulk Partial Update
- Post Ipam Vlan Groups Create
- Put Ipam Vlan Groups Bulk Update
- Delete Ipam Vlan Groups Delete
- Get Ipam Vlan Groups Read
- Patch Ipam Vlan Groups Partial Update
- Put Ipam Vlan Groups Update
- Get Ipam Vlan Groups Available Vlans List
- Post Ipam Vlan Groups Available Vlans Create
- Delete Ipam Vlans Bulk Delete
- Get Ipam Vlans List
- Patch Ipam Vlans Bulk Partial Update
- Post Ipam Vlans Create
- Put Ipam Vlans Bulk Update
- Delete Ipam Vlans Delete
- Get Ipam Vlans Read
- Patch Ipam Vlans Partial Update
- Put Ipam Vlans Update
- Delete Ipam Vrfs Bulk Delete
- Get Ipam Vrfs List
- Patch Ipam Vrfs Bulk Partial Update
- Post Ipam Vrfs Create
- Put Ipam Vrfs Bulk Update
- Delete Ipam Vrfs Delete
- Get Ipam Vrfs Read
- Patch Ipam Vrfs Partial Update
- Put Ipam Vrfs Update

</details>

<details>
<summary><b>Status</b> (1 operations)</summary>

- Get Status List

</details>

<details>
<summary><b>Tenancy</b> (54 operations)</summary>

- Delete Tenancy Contact Assignments Bulk Delete
- Get Tenancy Contact Assignments List
- Patch Tenancy Contact Assignments Bulk Partial Update
- Post Tenancy Contact Assignments Create
- Put Tenancy Contact Assignments Bulk Update
- Delete Tenancy Contact Assignments Delete
- Get Tenancy Contact Assignments Read
- Patch Tenancy Contact Assignments Partial Update
- Put Tenancy Contact Assignments Update
- Delete Tenancy Contact Groups Bulk Delete
- Get Tenancy Contact Groups List
- Patch Tenancy Contact Groups Bulk Partial Update
- Post Tenancy Contact Groups Create
- Put Tenancy Contact Groups Bulk Update
- Delete Tenancy Contact Groups Delete
- Get Tenancy Contact Groups Read
- Patch Tenancy Contact Groups Partial Update
- Put Tenancy Contact Groups Update
- Delete Tenancy Contact Roles Bulk Delete
- Get Tenancy Contact Roles List
- Patch Tenancy Contact Roles Bulk Partial Update
- Post Tenancy Contact Roles Create
- Put Tenancy Contact Roles Bulk Update
- Delete Tenancy Contact Roles Delete
- Get Tenancy Contact Roles Read
- Patch Tenancy Contact Roles Partial Update
- Put Tenancy Contact Roles Update
- Delete Tenancy Contacts Bulk Delete
- Get Tenancy Contacts List
- Patch Tenancy Contacts Bulk Partial Update
- Post Tenancy Contacts Create
- Put Tenancy Contacts Bulk Update
- Delete Tenancy Contacts Delete
- Get Tenancy Contacts Read
- Patch Tenancy Contacts Partial Update
- Put Tenancy Contacts Update
- Delete Tenancy Tenant Groups Bulk Delete
- Get Tenancy Tenant Groups List
- Patch Tenancy Tenant Groups Bulk Partial Update
- Post Tenancy Tenant Groups Create
- Put Tenancy Tenant Groups Bulk Update
- Delete Tenancy Tenant Groups Delete
- Get Tenancy Tenant Groups Read
- Patch Tenancy Tenant Groups Partial Update
- Put Tenancy Tenant Groups Update
- Delete Tenancy Tenants Bulk Delete
- Get Tenancy Tenants List
- Patch Tenancy Tenants Bulk Partial Update
- Post Tenancy Tenants Create
- Put Tenancy Tenants Bulk Update
- Delete Tenancy Tenants Delete
- Get Tenancy Tenants Read
- Patch Tenancy Tenants Partial Update
- Put Tenancy Tenants Update

</details>

<details>
<summary><b>Users</b> (38 operations)</summary>

- Get Users Config List
- Delete Users Groups Bulk Delete
- Get Users Groups List
- Patch Users Groups Bulk Partial Update
- Post Users Groups Create
- Put Users Groups Bulk Update
- Delete Users Groups Delete
- Get Users Groups Read
- Patch Users Groups Partial Update
- Put Users Groups Update
- Delete Users Permissions Bulk Delete
- Get Users Permissions List
- Patch Users Permissions Bulk Partial Update
- Post Users Permissions Create
- Put Users Permissions Bulk Update
- Delete Users Permissions Delete
- Get Users Permissions Read
- Patch Users Permissions Partial Update
- Put Users Permissions Update
- Delete Users Tokens Bulk Delete
- Get Users Tokens List
- Patch Users Tokens Bulk Partial Update
- Post Users Tokens Create
- Put Users Tokens Bulk Update
- Post Users Tokens Provision Create
- Delete Users Tokens Delete
- Get Users Tokens Read
- Patch Users Tokens Partial Update
- Put Users Tokens Update
- Delete Users Users Bulk Delete
- Get Users Users List
- Patch Users Users Bulk Partial Update
- Post Users Users Create
- Put Users Users Bulk Update
- Delete Users Users Delete
- Get Users Users Read
- Patch Users Users Partial Update
- Put Users Users Update

</details>

<details>
<summary><b>Virtualization</b> (45 operations)</summary>

- Delete Virtualization Cluster Groups Bulk Delete
- Get Virtualization Cluster Groups List
- Patch Virtualization Cluster Groups Bulk Partial Update
- Post Virtualization Cluster Groups Create
- Put Virtualization Cluster Groups Bulk Update
- Delete Virtualization Cluster Groups Delete
- Get Virtualization Cluster Groups Read
- Patch Virtualization Cluster Groups Partial Update
- Put Virtualization Cluster Groups Update
- Delete Virtualization Cluster Types Bulk Delete
- Get Virtualization Cluster Types List
- Patch Virtualization Cluster Types Bulk Partial Update
- Post Virtualization Cluster Types Create
- Put Virtualization Cluster Types Bulk Update
- Delete Virtualization Cluster Types Delete
- Get Virtualization Cluster Types Read
- Patch Virtualization Cluster Types Partial Update
- Put Virtualization Cluster Types Update
- Delete Virtualization Clusters Bulk Delete
- Get Virtualization Clusters List
- Patch Virtualization Clusters Bulk Partial Update
- Post Virtualization Clusters Create
- Put Virtualization Clusters Bulk Update
- Delete Virtualization Clusters Delete
- Get Virtualization Clusters Read
- Patch Virtualization Clusters Partial Update
- Put Virtualization Clusters Update
- Delete Virtualization Interfaces Bulk Delete
- Get Virtualization Interfaces List
- Patch Virtualization Interfaces Bulk Partial Update
- Post Virtualization Interfaces Create
- Put Virtualization Interfaces Bulk Update
- Delete Virtualization Interfaces Delete
- Get Virtualization Interfaces Read
- Patch Virtualization Interfaces Partial Update
- Put Virtualization Interfaces Update
- Delete Virtualization Virtual Machines Bulk Delete
- Get Virtualization Virtual Machines List
- Patch Virtualization Virtual Machines Bulk Partial Update
- Post Virtualization Virtual Machines Create
- Put Virtualization Virtual Machines Bulk Update
- Delete Virtualization Virtual Machines Delete
- Get Virtualization Virtual Machines Read
- Patch Virtualization Virtual Machines Partial Update
- Put Virtualization Virtual Machines Update

</details>

<details>
<summary><b>Wireless</b> (27 operations)</summary>

- Delete Wireless Wireless Lan Groups Bulk Delete
- Get Wireless Wireless Lan Groups List
- Patch Wireless Wireless Lan Groups Bulk Partial Update
- Post Wireless Wireless Lan Groups Create
- Put Wireless Wireless Lan Groups Bulk Update
- Delete Wireless Wireless Lan Groups Delete
- Get Wireless Wireless Lan Groups Read
- Patch Wireless Wireless Lan Groups Partial Update
- Put Wireless Wireless Lan Groups Update
- Delete Wireless Wireless Lans Bulk Delete
- Get Wireless Wireless Lans List
- Patch Wireless Wireless Lans Bulk Partial Update
- Post Wireless Wireless Lans Create
- Put Wireless Wireless Lans Bulk Update
- Delete Wireless Wireless Lans Delete
- Get Wireless Wireless Lans Read
- Patch Wireless Wireless Lans Partial Update
- Put Wireless Wireless Lans Update
- Delete Wireless Wireless Links Bulk Delete
- Get Wireless Wireless Links List
- Patch Wireless Wireless Links Bulk Partial Update
- Post Wireless Wireless Links Create
- Put Wireless Wireless Links Bulk Update
- Delete Wireless Wireless Links Delete
- Get Wireless Wireless Links Read
- Patch Wireless Wireless Links Partial Update
- Put Wireless Wireless Links Update

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from netbox docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official netbox OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **netbox** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the netbox API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
