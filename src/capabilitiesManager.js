import { isEnvFrontend } from './Environment.js';
import { domToJson, getCapabilitiesUrl } from './utils.js';
import { Capabilities } from './capabilities.js';
import xmlDom from 'xmldom';

let currentCapabilities = new Capabilities();
const SUCCESS_STATUS_CODE = 200;

async function requestParsedCapabilities(url, queryParams, headerParams, parser) {
  try {
    const reqXmlUrl = getCapabilitiesUrl(url, queryParams);
    const response = await fetch(reqXmlUrl, { headers: headerParams });

    if (response.status === SUCCESS_STATUS_CODE) {
      const capabilitiesXml = await response.text();
      const parsedXml = parser.parseFromString(capabilitiesXml, 'text/xml');
      currentCapabilities = new Capabilities(url, domToJson(parsedXml.documentElement));
      return currentCapabilities;
    } else {
      throw new Error('Failed to retrieve WMTS capabilities');
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : JSON.stringify(error);
    throw new Error(`Error retrieving WMTS capabilities: ${message}`);
  }
}
async function backendGetCapabilities(url, queryParams, headerParams) {
  if (!currentCapabilities.isLatest() || !currentCapabilities.requestUrl === url) {
    try {
      const parser = new xmlDom.DOMParser();
      return (await requestParsedCapabilities(url, queryParams, headerParams, parser)).content;
    } catch (error) {
      const message = error instanceof Error ? error.message : JSON.stringify(error);
      throw new Error(`Error retrieving WMTS capabilities: ${message}`);
    }
  } else {
    return currentCapabilities.content;
  }
}

async function frontendGetCapabilities(url, queryParams, headerParams) {
  const parser = new DOMParser();
  const objCapabilities = window.localStorage.getItem('capabilities');
  const jsonCapabilities = JSON.parse(objCapabilities);

  if (jsonCapabilities == null || jsonCapabilities == undefined) {
    const parsedCapabilities = await requestParsedCapabilities(url, queryParams, headerParams, parser);
    window.localStorage.setItem('capabilities', JSON.stringify(parsedCapabilities));
    return currentCapabilities.content;
  } else {
    const capabilities = new Capabilities(jsonCapabilities.requestUrl, jsonCapabilities.content, jsonCapabilities.lastUpdatedTime);
    
    if (capabilities.isLatest() && capabilities.requestUrl === url) {
      return capabilities.content;
    } else {
      const parsedCapabilities = await requestParsedCapabilities(url, queryParams, headerParams, parser);
      window.localStorage.setItem('capabilities', JSON.stringify(parsedCapabilities));
      return currentCapabilities.content;
    }
  }
}

export async function getWMTSCapabilities(url, queryParams, headerParams) {
  if (isEnvFrontend()) {
    return await frontendGetCapabilities(url, queryParams, headerParams);
  } else {
    return await backendGetCapabilities(url, queryParams, headerParams);
  }
}
