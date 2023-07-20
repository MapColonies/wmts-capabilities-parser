# Map Colonies Capabilities Parser


# Intro

WMTSCapabilitiesParser automates getting XML Capabilities and parsing them to a json.
Capabilities
-------------

Can deal with base Url and capabilities Url.

Deliver parsed xml or json from KVP capabilities 

Deliver parsed xml  or json from RESTful capabilities

Deliver parsed capabilities from the base URL

Custom query params

Custom headers

----
How To use
-------------
`npm i wmts-capabilities-parser`

`import { getWMTSCapabilities } from "@map-colonies/wmts-capabilities-parser";`

----
Service
-------------
#### Functions
`getWMTSCapabilities(url, queryParams, headersParams)`

#### Purpose/ Usage
Requests capabilities by URL and returns a Promise - parsed XML of capabilities.

#### Output
`Promise<{}>` - JSON of capabilities. 
When response did not Succeded - Error("Failed to retrieve WMTS capabilities")
When request capabilities failed - Error(`Error retrieving WMTS capabilities: ${originalMessage}`)
retrieves capabilities successfully.

#### Example

`const capabilities = await getWMTSCapabilities(
    "https://mapproxyurl/v1",
    { token: authToken }
  );`

### End
