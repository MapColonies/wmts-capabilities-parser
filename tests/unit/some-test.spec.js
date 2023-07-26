import { getWMTSCapabilities } from '../../src/capabilitiesManager.js';
import { mockBaseUrl } from './mock/capabilitiesParams.js'

describe('getWMTSCapabilities', () => {
  it('should successfully return the requested layer', async () => {
    // action
    const resource = await getWMTSCapabilities(mockBaseUrl);
    // expectation;
  });
});
