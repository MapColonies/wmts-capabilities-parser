export function domToJson(dom) {
    const ELEMENT_NODE = 1;
    const TEXT_NODE = 3;
  
    if (dom.nodeType === TEXT_NODE) {
      return dom.nodeValue;
    }
    if (dom.nodeType === ELEMENT_NODE) {
      const obj = {};
  
      if (dom.attributes.length > 0) {
        obj.attributes = {};
  
        for (let i = 0, len = dom.attributes.length; i < len; ++i) {
          const attr = dom.attributes[i];
          const attrValue = attr.value.trim();
          if (attrValue !== '') {
            //remove preName of tag (':' can't be read as a propery)
            const attributeName = attr.name.includes(':') ? attr.name.substring(attr.name.indexOf(':') + 1) : attr.name;
            obj.attributes[attributeName] = attrValue;
          }
        }
  
        if (Object.keys(obj.attributes).length === 0) {
          obj.attributes = null;
        }
      }
  
      let childCount = 0;
      for (let child = dom.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === ELEMENT_NODE) {
          //remove preName of tag (':' can't be read as a propery)
          const childTag = child.tagName.includes(':') ? child.tagName.substring(child.tagName.indexOf(':') + 1) : child.tagName;
          if (!obj[childTag]) {
            obj[childTag] = null;
          }
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
          const textContent = child.nodeValue.trim();
          if (textContent !== '') {
            const parentChildCount = dom.childElementCount || 0;
            if (parentChildCount === 1) {
              obj[dom.tagName] = textContent;
            } else {
              obj[`textContent`] = textContent;
            }
          }
        }
      }
  
      // If the root element has only one child element, unwrap it
      const childTags = Object.keys(obj);
      if (childTags.length === 1) {
        const singleChildTag = childTags[0];
        if (Array.isArray(obj[singleChildTag])) {
          obj[singleChildTag] = obj[singleChildTag][0];
        }
      }
  
      // Return the resulting object
      return obj;
    }
    // If the current node is not an element node, return null
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
    const baseUrl = new URL(url);
    const allQueryParams = new URLSearchParams(baseUrl.search);
    for (const [key, value] of Object.entries(queryParams)) {
      allQueryParams.append(key, value);
    }
  
    const updatedSearchString = allQueryParams.toString();
    const updatedUrl = url.split('?')[0] + '?' + updatedSearchString;
    return updatedUrl;
  }
  