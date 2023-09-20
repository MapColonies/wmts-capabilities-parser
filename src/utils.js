const ELEMENT_NODE = 1;
const TEXT_NODE = 3;
let obj = {};

// Function to process Text Nodes and return their nodeValue as is.
function processTextNode(dom) {
  return dom.nodeValue;
}

// Function to process Element Nodes and convert them to JSON objects.
function processElementNode(dom) {
  // Process attributes of the element, if any.
  if (dom.attributes.length > 0) {
    obj.attributes = processAttributes(dom);
  }

  let childCount = 0;
  for (let child = dom.firstChild; child; child = child.nextSibling) {
    if (child.nodeType === ELEMENT_NODE) {
      const childTag = getChildTagName(child);
      if (!obj[childTag]) {
        obj[childTag] = null;
      }
      // Recursively process child element and add to the parent's JSON object.
      const childObj = domToJson(child);
      if (obj[childTag] === null) {
        obj[childTag] = childObj;
      } else {
        if (!Array.isArray(obj[childTag])) {
          obj[childTag] = [obj[childTag]];
        }
        obj[childTag].push(childObj);
      }
      childCount++;
    } else if (child.nodeType === TEXT_NODE) {
      const textContent = processTextNode(child);
      if (textContent !== '') {
        // Process text content of the element and add to the JSON object.
        obj = processTextNodeContent(obj, dom, textContent);
      }
    }
  }

  // Unwrap the parent's JSON object if it has only one child element.
  obj = unwrapSingleChild(obj);

  return obj;
}

// Function to process attributes of an element and convert them to a JSON object.
function processAttributes(dom) {
  const attributes = {};
  for (let i = 0, len = dom.attributes.length; i < len; ++i) {
    const attr = dom.attributes[i];
    const attrValue = attr.value.trim();
    if (attrValue !== '') {
      // Process attribute names and remove preName of tag (':' can't be read as a property).
      const attributeName = processAttributeName(attr.name);
      attributes[attributeName] = attrValue;
    }
  }

  // If the element has no attributes, return null instead of an empty object.
  if (Object.keys(attributes).length === 0) {
    return null;
  }

  return attributes;
}

// Function to process attribute names and remove preName of tag (':' can't be read as a property).
function processAttributeName(name) {
  return name.includes(':') ? name.substring(name.indexOf(':') + 1) : name;
}

// Function to get the child tag name and remove preName of tag (':' can't be read as a property).
function getChildTagName(child) {
  return child.tagName.includes(':') ? child.tagName.substring(child.tagName.indexOf(':') + 1) : child.tagName;
}

// Function to process the text content of an element and add it to the JSON object.
function processTextNodeContent(obj, dom, textContent) {
  const parentChildCount = dom.childElementCount || 0;
  if (parentChildCount === 1) {
    obj[dom.tagName] = textContent;
  } else {
    obj[`textContent`] = textContent;
  }
  return obj;
}

// Function to unwrap the parent's JSON object if it has only one child element.
function unwrapSingleChild(obj) {
  const childTags = Object.keys(obj);
  if (childTags.length === 1) {
    const singleChildTag = childTags[0];
    if (Array.isArray(obj[singleChildTag])) {
      obj[singleChildTag] = obj[singleChildTag][0];
    }
  }
  return obj;
}

// Main function to start processing based on node type.
export function domToJson(dom) {
  if (dom.nodeType === TEXT_NODE) {
    return processTextNode(dom);
  }

  if (dom.nodeType === ELEMENT_NODE) {
    return processElementNode(dom);
  }

  // Return null for non-element and non-text nodes.
  return null;
}

export function getCapabilitiesUrl(url, queryParams) {
  if (url.includes('WMTSCapabilities.xml') || url.includes('REQUEST=GetCapabilities&SERVICE=WMTS')) {
    return concatParamsToUrl(url, queryParams);
  } else {
    //by defalt, KVP capabilities url.
    if (url.includes('REQUEST=GetCapabilities')) {
      const reqUrl = url + `&SERVICE=WMTS`;
      return concatParamsToUrl(reqUrl, queryParams);
    } else {
      const reqUrl = url + `/service?Request=GetCapabilities&SERVICE=WMTS`;
      return concatParamsToUrl(reqUrl, queryParams);
    }
  }
}

function concatParamsToUrl(url, queryParams) {
  //convert to URL type
  const baseUrl = new URL(url);

  //define as URLSearchParams
  const allQueryParams = new URLSearchParams(baseUrl.search);

  //append URLSearchParams togther
  for (const [key, value] of Object.entries(queryParams)) {
    allQueryParams.append(key, value);
  }

  //append URLSearchParams to URL and convert it backt to string
  const updatedSearchString = allQueryParams.toString();
  const updatedUrl = url.split('?')[0] + '?' + updatedSearchString;
  return updatedUrl;
}
