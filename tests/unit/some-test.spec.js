import { getWMTSCapabilities } from '../../src/capabilitiesManager.js';
import { mockBaseUrl } from './mock/capabilitiesParams.js';

describe('getWMTSCapabilities', () => {
  it('should request from server and successfully return the requested layer', async () => {
    // action
    const resource = await getWMTSCapabilities(mockBaseUrl);
    const mockFetch = jest.fn();
    jest.mock('../../src/capabilitiesManager', () => ({
      fetch: mockFetch,
    }));
    mockFetch.mockReturnValue('return value');

    // expectation;
  });
});
