import { getWMTSCapabilities } from '../../src/capabilitiesManager.js';
import { mockBaseUrl, mockKvpUrl, mockRestUrl, mockParsedCapabilities } from './mock/capabilitiesParams.js';

describe('getWMTSCapabilities', () => {
  it('should request from server and successfully return the requested layer', async () => {
    // action
    const resource = await getWMTSCapabilities(mockBaseUrl);
    const mockFetch = jest.fn();
    const mockParseFromString = jest.fn();
    jest.mock('../../src/capabilitiesManager', () => ({
      fetch: mockFetch,
    }));
    jest.mock('../../src/capabilitiesManager', () => ({
      parseFromString: mockParseFromString,
    }));
    mockFetch.mockReturnValue(mockRestUrl);
    mockParseFromString.mockReturnValue(mockParsedCapabilities);

    expect(resource.toEqual(new Capabilities(mockBaseUrl, domToJson(mockParsedCapabilities.documentElement))));

    // expectation;
  });
});
