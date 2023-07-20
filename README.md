# Map Colonies Capabilities Parser




**(Table of Contents)**

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
#### Functions
`getWMTSCapabilities(url, queryParams, headersParams)`

#### Purpse/ Usage
Requets capabilities by URL and returns a Promise - parsed XML of capabilities.

#### Output
`Promise<{}>` - JSON of capabilities. 
When response did not Succeded - Error("Failed to retrieve WMTS capabilities")
When request capabilites failed - Error(`Error retrieving WMTS capabilities: ${originalMessage}`)
retrives capabilities successfully.

#### Example

`const capbilities = await getWMTSCapabilities(
    "https://mapproxyurl/v1",
    { token: authToken }
  );`

### End
