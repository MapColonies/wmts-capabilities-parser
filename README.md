# Map Colonies Capabilities Parser





**目录 (Table of Contents)**

[TOC]

# Intro

WMTSCapabilitiesParser automates getting XML Capabilities and parsing them to a json.
Capabilities
-------------

Can deal with base Url and capabilities Url.

Deliver pasrsed xml or json from KVP capabilities 

Deliver parsed xml  or json from RESTful capabilities

Deliver parsed capabilities from base URL

Custom query params

Custom headers

----
Service
-------------

`getWMTSCapabilities(url, queryParams, headersParams)`
Requets capabilities by URL and returns a Promise - parsed XML of capabilities.

Promise<{}> - json of capabilities. 
When response did not Succeded - Error("Failed to retrieve WMTS capabilities")
When request capabilites failed - 
Error(`Error retrieving WMTS capabilities: ${originalMessage}`)

retrives capabilities successfully .


### End
