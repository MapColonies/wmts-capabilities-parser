export const mockBaseUrl = 'mapproxyUrl';
export const mockParsedCapabilities = 'mapproxyUrl';
export const mockKvpUrl = (
  <Capabilities
    xmlns="http://www.opengis.net/wmts/1.0"
    xmlns:ows="http://www.opengis.net/ows/1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:gml="http://www.opengis.net/gml"
    xsi:schemaLocation="http://www.opengis.net/wmts/1.0 http://schemas.opengis.net/wmts/1.0/wmtsGetCapabilities_response.xsd"
    version="1.0.0"
  >
    <ows:ServiceIdentification>
      <ows:Title>MapProxy WMS Proxy</ows:Title>
      <ows:Abstract>This is a minimal MapProxy example.</ows:Abstract>
      <ows:ServiceType>OGC WMTS</ows:ServiceType>
      <ows:ServiceTypeVersion>1.0.0</ows:ServiceTypeVersion>
      <ows:Fees>none</ows:Fees>
      <ows:AccessConstraints>none</ows:AccessConstraints>
    </ows:ServiceIdentification>
    <ows:OperationsMetadata>
      <ows:Operation name="GetCapabilities">
        <ows:DCP>
          <ows:HTTP>
            <ows:Get xlink:href="https://raster-mapproxy-int-route-integration.apps.j1lk3njp.eastus.aroapp.io/api/raster/v1/service/wmts?">
              <ows:Constraint name="GetEncoding">
                <ows:AllowedValues>
                  <ows:Value>KVP</ows:Value>
                </ows:AllowedValues>
              </ows:Constraint>
            </ows:Get>
          </ows:HTTP>
        </ows:DCP>
      </ows:Operation>
      <ows:Operation name="GetTile">
        <ows:DCP>
          <ows:HTTP>
            <ows:Get xlink:href="https://raster-mapproxy-int-route-integration.apps.j1lk3njp.eastus.aroapp.io/api/raster/v1/service/wmts?">
              <ows:Constraint name="GetEncoding">
                <ows:AllowedValues>
                  <ows:Value>KVP</ows:Value>
                </ows:AllowedValues>
              </ows:Constraint>
            </ows:Get>
          </ows:HTTP>
        </ows:DCP>
      </ows:Operation>
      <ows:Operation name="GetFeatureInfo">
        <ows:DCP>
          <ows:HTTP>
            <ows:Get xlink:href="https://raster-mapproxy-int-route-integration.apps.j1lk3njp.eastus.aroapp.io/api/raster/v1/service/wmts?">
              <ows:Constraint name="GetEncoding">
                <ows:AllowedValues>
                  <ows:Value>KVP</ows:Value>
                </ows:AllowedValues>
              </ows:Constraint>
            </ows:Get>
          </ows:HTTP>
        </ows:DCP>
      </ows:Operation>
    </ows:OperationsMetadata>
    <Contents>
      <Layer>
        <ows:Title>Omniscale OSM WMS - osm.omniscale.net</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -85.0511287798066</ows:LowerCorner>
          <ows:UpperCorner>180.0 85.0511287798066</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>osm</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/png</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>webmercator</TileMatrixSet>
        </TileMatrixSetLink>
      </Layer>
      <Layer>
        <ows:Title>MAS_6_ORT_247557-Orthophoto</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>MAS_6_ORT_247557-Orthophoto</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/png</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
      </Layer>
      <Layer>
        <ows:Title>Mixed_MD_Filled_JSON-OrthophotoBest</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>Mixed_MD_Filled_JSON-OrthophotoBest</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/png</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
      </Layer>
      <Layer>
        <ows:Title>gpkg_no_index-OrthophotoBest</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>gpkg_no_index-OrthophotoBest</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/jpeg</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
      </Layer>
      <Layer>
        <ows:Title>basic_gpkg-Orthophoto</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>basic_gpkg-Orthophoto</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/jpeg</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
      </Layer>
      <Layer>
        <ows:Title>JAKSHD-2122K-ASDKGBV-4KD4S9X-OrthophotoBest</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>JAKSHD-2122K-ASDKGBV-4KD4S9X-OrthophotoBest</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/jpeg</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
      </Layer>
      <Layer>
        <ows:Title>area3_gaza-Orthophoto</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>area3_gaza-Orthophoto</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/jpeg</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
      </Layer>
      <Layer>
        <ows:Title>ayosh_north_crop-Orthophoto</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>ayosh_north_crop-Orthophoto</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/jpeg</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
      </Layer>
      <Layer>
        <ows:Title>4326_tif-Orthophoto</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>4326_tif-Orthophoto</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/png</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
      </Layer>
      <Layer>
        <ows:Title>Orthophoto_best_region_jor-OrthophotoBest</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>Orthophoto_best_region_jor-OrthophotoBest</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/jpeg</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
      </Layer>
      <TileMatrixSet>
        <ows:Identifier>webmercator</ows:Identifier>
        <ows:SupportedCRS>EPSG:3857</ows:SupportedCRS>
        <TileMatrix>
          <ows:Identifier>00</ows:Identifier>
          <ScaleDenominator>559082264.0287176</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>1</MatrixWidth>
          <MatrixHeight>1</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>01</ows:Identifier>
          <ScaleDenominator>279541132.0143588</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>2</MatrixWidth>
          <MatrixHeight>2</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>02</ows:Identifier>
          <ScaleDenominator>139770566.0071794</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>4</MatrixWidth>
          <MatrixHeight>4</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>03</ows:Identifier>
          <ScaleDenominator>69885283.0035897</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>8</MatrixWidth>
          <MatrixHeight>8</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>04</ows:Identifier>
          <ScaleDenominator>34942641.50179485</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>16</MatrixWidth>
          <MatrixHeight>16</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>05</ows:Identifier>
          <ScaleDenominator>17471320.750897426</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>32</MatrixWidth>
          <MatrixHeight>32</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>06</ows:Identifier>
          <ScaleDenominator>8735660.375448713</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>64</MatrixWidth>
          <MatrixHeight>64</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>07</ows:Identifier>
          <ScaleDenominator>4367830.187724357</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>128</MatrixWidth>
          <MatrixHeight>128</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>08</ows:Identifier>
          <ScaleDenominator>2183915.0938621783</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>256</MatrixWidth>
          <MatrixHeight>256</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>09</ows:Identifier>
          <ScaleDenominator>1091957.5469310891</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>512</MatrixWidth>
          <MatrixHeight>512</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>10</ows:Identifier>
          <ScaleDenominator>545978.7734655446</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>1024</MatrixWidth>
          <MatrixHeight>1024</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>11</ows:Identifier>
          <ScaleDenominator>272989.3867327723</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>2048</MatrixWidth>
          <MatrixHeight>2048</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>12</ows:Identifier>
          <ScaleDenominator>136494.69336638614</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>4096</MatrixWidth>
          <MatrixHeight>4096</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>13</ows:Identifier>
          <ScaleDenominator>68247.34668319307</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>8192</MatrixWidth>
          <MatrixHeight>8192</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>14</ows:Identifier>
          <ScaleDenominator>34123.673341596535</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>16384</MatrixWidth>
          <MatrixHeight>16384</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>15</ows:Identifier>
          <ScaleDenominator>17061.836670798268</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>32768</MatrixWidth>
          <MatrixHeight>32768</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>16</ows:Identifier>
          <ScaleDenominator>8530.918335399134</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>65536</MatrixWidth>
          <MatrixHeight>65536</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>17</ows:Identifier>
          <ScaleDenominator>4265.459167699567</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>131072</MatrixWidth>
          <MatrixHeight>131072</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>18</ows:Identifier>
          <ScaleDenominator>2132.7295838497835</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>262144</MatrixWidth>
          <MatrixHeight>262144</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>19</ows:Identifier>
          <ScaleDenominator>1066.3647919248917</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>524288</MatrixWidth>
          <MatrixHeight>524288</MatrixHeight>
        </TileMatrix>
      </TileMatrixSet>
      <TileMatrixSet>
        <ows:Identifier>newGrids</ows:Identifier>
        <ows:SupportedCRS>EPSG:4326</ows:SupportedCRS>
        <TileMatrix>
          <ows:Identifier>00</ows:Identifier>
          <ScaleDenominator>279541132.01435894</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>2</MatrixWidth>
          <MatrixHeight>1</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>01</ows:Identifier>
          <ScaleDenominator>139770566.00717947</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>4</MatrixWidth>
          <MatrixHeight>2</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>02</ows:Identifier>
          <ScaleDenominator>69885283.00358973</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>8</MatrixWidth>
          <MatrixHeight>4</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>03</ows:Identifier>
          <ScaleDenominator>34942641.50179487</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>16</MatrixWidth>
          <MatrixHeight>8</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>04</ows:Identifier>
          <ScaleDenominator>17471320.750897434</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>32</MatrixWidth>
          <MatrixHeight>16</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>05</ows:Identifier>
          <ScaleDenominator>8735660.375448717</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>64</MatrixWidth>
          <MatrixHeight>32</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>06</ows:Identifier>
          <ScaleDenominator>4367830.187724358</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>128</MatrixWidth>
          <MatrixHeight>64</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>07</ows:Identifier>
          <ScaleDenominator>2183915.093862179</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>256</MatrixWidth>
          <MatrixHeight>128</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>08</ows:Identifier>
          <ScaleDenominator>1091957.5469310896</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>512</MatrixWidth>
          <MatrixHeight>256</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>09</ows:Identifier>
          <ScaleDenominator>545978.7734655448</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>1024</MatrixWidth>
          <MatrixHeight>512</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>10</ows:Identifier>
          <ScaleDenominator>272989.3867327724</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>2048</MatrixWidth>
          <MatrixHeight>1024</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>11</ows:Identifier>
          <ScaleDenominator>136494.6933663862</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>4096</MatrixWidth>
          <MatrixHeight>2048</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>12</ows:Identifier>
          <ScaleDenominator>68247.3466831931</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>8192</MatrixWidth>
          <MatrixHeight>4096</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>13</ows:Identifier>
          <ScaleDenominator>34123.67334159655</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>16384</MatrixWidth>
          <MatrixHeight>8192</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>14</ows:Identifier>
          <ScaleDenominator>17061.836670798275</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>32768</MatrixWidth>
          <MatrixHeight>16384</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>15</ows:Identifier>
          <ScaleDenominator>8530.918335399138</ScaleDenominator>
          <TopLeftCorner>90.00000000000001 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>65536</MatrixWidth>
          <MatrixHeight>32768</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>16</ows:Identifier>
          <ScaleDenominator>4265.459167699569</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>131072</MatrixWidth>
          <MatrixHeight>65536</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>17</ows:Identifier>
          <ScaleDenominator>2132.7295838497844</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>262144</MatrixWidth>
          <MatrixHeight>131072</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>18</ows:Identifier>
          <ScaleDenominator>1066.3647919248922</ScaleDenominator>
          <TopLeftCorner>89.99999999999999 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>524288</MatrixWidth>
          <MatrixHeight>262144</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>19</ows:Identifier>
          <ScaleDenominator>533.1823959624461</ScaleDenominator>
          <TopLeftCorner>90.00000000000001 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>1048576</MatrixWidth>
          <MatrixHeight>524288</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>20</ows:Identifier>
          <ScaleDenominator>266.59119798122305</ScaleDenominator>
          <TopLeftCorner>89.99999999999999 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>2097152</MatrixWidth>
          <MatrixHeight>1048576</MatrixHeight>
        </TileMatrix>
      </TileMatrixSet>
    </Contents>
  </Capabilities>
);
export const mockRestUrl = (
  <Capabilities
    xmlns="http://www.opengis.net/wmts/1.0"
    xmlns:ows="http://www.opengis.net/ows/1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:gml="http://www.opengis.net/gml"
    xsi:schemaLocation="http://www.opengis.net/wmts/1.0 http://schemas.opengis.net/wmts/1.0/wmtsGetCapabilities_response.xsd"
    version="1.0.0"
  >
    <ows:ServiceIdentification>
      <ows:Title>MapProxy WMS Proxy</ows:Title>
      <ows:Abstract>This is a minimal MapProxy example.</ows:Abstract>
      <ows:ServiceType>OGC WMTS</ows:ServiceType>
      <ows:ServiceTypeVersion>1.0.0</ows:ServiceTypeVersion>
      <ows:Fees>none</ows:Fees>
      <ows:AccessConstraints>none</ows:AccessConstraints>
    </ows:ServiceIdentification>
    <Contents>
      <Layer>
        <ows:Title>Omniscale OSM WMS - osm.omniscale.net</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -85.0511287798066</ows:LowerCorner>
          <ows:UpperCorner>180.0 85.0511287798066</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>osm</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/png</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>webmercator</TileMatrixSet>
        </TileMatrixSetLink>
        <ResourceURL
          format="image/png"
          resourceType="tile"
          template="https://raster-mapproxy-int-route-integration.apps.j1lk3njp.eastus.aroapp.io/api/raster/v1/wmts/osm/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.png"
        />
      </Layer>
      <Layer>
        <ows:Title>MAS_6_ORT_247557-Orthophoto</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>MAS_6_ORT_247557-Orthophoto</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/png</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
        <ResourceURL
          format="image/png"
          resourceType="tile"
          template="https://raster-mapproxy-int-route-integration.apps.j1lk3njp.eastus.aroapp.io/api/raster/v1/wmts/MAS_6_ORT_247557-Orthophoto/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.png"
        />
      </Layer>
      <Layer>
        <ows:Title>Mixed_MD_Filled_JSON-OrthophotoBest</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>Mixed_MD_Filled_JSON-OrthophotoBest</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/png</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
        <ResourceURL
          format="image/png"
          resourceType="tile"
          template="https://raster-mapproxy-int-route-integration.apps.j1lk3njp.eastus.aroapp.io/api/raster/v1/wmts/Mixed_MD_Filled_JSON-OrthophotoBest/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.png"
        />
      </Layer>
      <Layer>
        <ows:Title>gpkg_no_index-OrthophotoBest</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>gpkg_no_index-OrthophotoBest</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/jpeg</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
        <ResourceURL
          format="image/jpeg"
          resourceType="tile"
          template="https://raster-mapproxy-int-route-integration.apps.j1lk3njp.eastus.aroapp.io/api/raster/v1/wmts/gpkg_no_index-OrthophotoBest/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.jpeg"
        />
      </Layer>
      <Layer>
        <ows:Title>basic_gpkg-Orthophoto</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>basic_gpkg-Orthophoto</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/jpeg</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
        <ResourceURL
          format="image/jpeg"
          resourceType="tile"
          template="https://raster-mapproxy-int-route-integration.apps.j1lk3njp.eastus.aroapp.io/api/raster/v1/wmts/basic_gpkg-Orthophoto/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.jpeg"
        />
      </Layer>
      <Layer>
        <ows:Title>JAKSHD-2122K-ASDKGBV-4KD4S9X-OrthophotoBest</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>JAKSHD-2122K-ASDKGBV-4KD4S9X-OrthophotoBest</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/jpeg</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
        <ResourceURL
          format="image/jpeg"
          resourceType="tile"
          template="https://raster-mapproxy-int-route-integration.apps.j1lk3njp.eastus.aroapp.io/api/raster/v1/wmts/JAKSHD-2122K-ASDKGBV-4KD4S9X-OrthophotoBest/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.jpeg"
        />
      </Layer>
      <Layer>
        <ows:Title>area3_gaza-Orthophoto</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>area3_gaza-Orthophoto</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/jpeg</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
        <ResourceURL
          format="image/jpeg"
          resourceType="tile"
          template="https://raster-mapproxy-int-route-integration.apps.j1lk3njp.eastus.aroapp.io/api/raster/v1/wmts/area3_gaza-Orthophoto/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.jpeg"
        />
      </Layer>
      <Layer>
        <ows:Title>ayosh_north_crop-Orthophoto</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>ayosh_north_crop-Orthophoto</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/jpeg</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
        <ResourceURL
          format="image/jpeg"
          resourceType="tile"
          template="https://raster-mapproxy-int-route-integration.apps.j1lk3njp.eastus.aroapp.io/api/raster/v1/wmts/ayosh_north_crop-Orthophoto/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.jpeg"
        />
      </Layer>
      <Layer>
        <ows:Title>4326_tif-Orthophoto</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>4326_tif-Orthophoto</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/png</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
        <ResourceURL
          format="image/png"
          resourceType="tile"
          template="https://raster-mapproxy-int-route-integration.apps.j1lk3njp.eastus.aroapp.io/api/raster/v1/wmts/4326_tif-Orthophoto/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.png"
        />
      </Layer>
      <Layer>
        <ows:Title>Orthophoto_best_region_jor-OrthophotoBest</ows:Title>
        <ows:Abstract />
        <ows:WGS84BoundingBox>
          <ows:LowerCorner>-180.0 -90.0</ows:LowerCorner>
          <ows:UpperCorner>180.0 90.0</ows:UpperCorner>
        </ows:WGS84BoundingBox>
        <ows:Identifier>Orthophoto_best_region_jor-OrthophotoBest</ows:Identifier>
        <Style>
          <ows:Identifier>default</ows:Identifier>
        </Style>
        <Format>image/jpeg</Format>
        <TileMatrixSetLink>
          <TileMatrixSet>newGrids</TileMatrixSet>
        </TileMatrixSetLink>
        <ResourceURL
          format="image/jpeg"
          resourceType="tile"
          template="https://raster-mapproxy-int-route-integration.apps.j1lk3njp.eastus.aroapp.io/api/raster/v1/wmts/Orthophoto_best_region_jor-OrthophotoBest/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.jpeg"
        />
      </Layer>
      <TileMatrixSet>
        <ows:Identifier>webmercator</ows:Identifier>
        <ows:SupportedCRS>EPSG:3857</ows:SupportedCRS>
        <TileMatrix>
          <ows:Identifier>00</ows:Identifier>
          <ScaleDenominator>559082264.0287176</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>1</MatrixWidth>
          <MatrixHeight>1</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>01</ows:Identifier>
          <ScaleDenominator>279541132.0143588</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>2</MatrixWidth>
          <MatrixHeight>2</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>02</ows:Identifier>
          <ScaleDenominator>139770566.0071794</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>4</MatrixWidth>
          <MatrixHeight>4</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>03</ows:Identifier>
          <ScaleDenominator>69885283.0035897</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>8</MatrixWidth>
          <MatrixHeight>8</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>04</ows:Identifier>
          <ScaleDenominator>34942641.50179485</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>16</MatrixWidth>
          <MatrixHeight>16</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>05</ows:Identifier>
          <ScaleDenominator>17471320.750897426</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>32</MatrixWidth>
          <MatrixHeight>32</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>06</ows:Identifier>
          <ScaleDenominator>8735660.375448713</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>64</MatrixWidth>
          <MatrixHeight>64</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>07</ows:Identifier>
          <ScaleDenominator>4367830.187724357</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>128</MatrixWidth>
          <MatrixHeight>128</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>08</ows:Identifier>
          <ScaleDenominator>2183915.0938621783</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>256</MatrixWidth>
          <MatrixHeight>256</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>09</ows:Identifier>
          <ScaleDenominator>1091957.5469310891</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>512</MatrixWidth>
          <MatrixHeight>512</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>10</ows:Identifier>
          <ScaleDenominator>545978.7734655446</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>1024</MatrixWidth>
          <MatrixHeight>1024</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>11</ows:Identifier>
          <ScaleDenominator>272989.3867327723</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>2048</MatrixWidth>
          <MatrixHeight>2048</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>12</ows:Identifier>
          <ScaleDenominator>136494.69336638614</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>4096</MatrixWidth>
          <MatrixHeight>4096</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>13</ows:Identifier>
          <ScaleDenominator>68247.34668319307</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>8192</MatrixWidth>
          <MatrixHeight>8192</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>14</ows:Identifier>
          <ScaleDenominator>34123.673341596535</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>16384</MatrixWidth>
          <MatrixHeight>16384</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>15</ows:Identifier>
          <ScaleDenominator>17061.836670798268</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>32768</MatrixWidth>
          <MatrixHeight>32768</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>16</ows:Identifier>
          <ScaleDenominator>8530.918335399134</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>65536</MatrixWidth>
          <MatrixHeight>65536</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>17</ows:Identifier>
          <ScaleDenominator>4265.459167699567</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>131072</MatrixWidth>
          <MatrixHeight>131072</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>18</ows:Identifier>
          <ScaleDenominator>2132.7295838497835</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>262144</MatrixWidth>
          <MatrixHeight>262144</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>19</ows:Identifier>
          <ScaleDenominator>1066.3647919248917</ScaleDenominator>
          <TopLeftCorner>-20037508.342789244 20037508.342789244</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>524288</MatrixWidth>
          <MatrixHeight>524288</MatrixHeight>
        </TileMatrix>
      </TileMatrixSet>
      <TileMatrixSet>
        <ows:Identifier>newGrids</ows:Identifier>
        <ows:SupportedCRS>EPSG:4326</ows:SupportedCRS>
        <TileMatrix>
          <ows:Identifier>00</ows:Identifier>
          <ScaleDenominator>279541132.01435894</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>2</MatrixWidth>
          <MatrixHeight>1</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>01</ows:Identifier>
          <ScaleDenominator>139770566.00717947</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>4</MatrixWidth>
          <MatrixHeight>2</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>02</ows:Identifier>
          <ScaleDenominator>69885283.00358973</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>8</MatrixWidth>
          <MatrixHeight>4</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>03</ows:Identifier>
          <ScaleDenominator>34942641.50179487</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>16</MatrixWidth>
          <MatrixHeight>8</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>04</ows:Identifier>
          <ScaleDenominator>17471320.750897434</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>32</MatrixWidth>
          <MatrixHeight>16</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>05</ows:Identifier>
          <ScaleDenominator>8735660.375448717</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>64</MatrixWidth>
          <MatrixHeight>32</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>06</ows:Identifier>
          <ScaleDenominator>4367830.187724358</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>128</MatrixWidth>
          <MatrixHeight>64</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>07</ows:Identifier>
          <ScaleDenominator>2183915.093862179</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>256</MatrixWidth>
          <MatrixHeight>128</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>08</ows:Identifier>
          <ScaleDenominator>1091957.5469310896</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>512</MatrixWidth>
          <MatrixHeight>256</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>09</ows:Identifier>
          <ScaleDenominator>545978.7734655448</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>1024</MatrixWidth>
          <MatrixHeight>512</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>10</ows:Identifier>
          <ScaleDenominator>272989.3867327724</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>2048</MatrixWidth>
          <MatrixHeight>1024</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>11</ows:Identifier>
          <ScaleDenominator>136494.6933663862</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>4096</MatrixWidth>
          <MatrixHeight>2048</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>12</ows:Identifier>
          <ScaleDenominator>68247.3466831931</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>8192</MatrixWidth>
          <MatrixHeight>4096</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>13</ows:Identifier>
          <ScaleDenominator>34123.67334159655</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>16384</MatrixWidth>
          <MatrixHeight>8192</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>14</ows:Identifier>
          <ScaleDenominator>17061.836670798275</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>32768</MatrixWidth>
          <MatrixHeight>16384</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>15</ows:Identifier>
          <ScaleDenominator>8530.918335399138</ScaleDenominator>
          <TopLeftCorner>90.00000000000001 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>65536</MatrixWidth>
          <MatrixHeight>32768</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>16</ows:Identifier>
          <ScaleDenominator>4265.459167699569</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>131072</MatrixWidth>
          <MatrixHeight>65536</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>17</ows:Identifier>
          <ScaleDenominator>2132.7295838497844</ScaleDenominator>
          <TopLeftCorner>90.0 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>262144</MatrixWidth>
          <MatrixHeight>131072</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>18</ows:Identifier>
          <ScaleDenominator>1066.3647919248922</ScaleDenominator>
          <TopLeftCorner>89.99999999999999 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>524288</MatrixWidth>
          <MatrixHeight>262144</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>19</ows:Identifier>
          <ScaleDenominator>533.1823959624461</ScaleDenominator>
          <TopLeftCorner>90.00000000000001 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>1048576</MatrixWidth>
          <MatrixHeight>524288</MatrixHeight>
        </TileMatrix>
        <TileMatrix>
          <ows:Identifier>20</ows:Identifier>
          <ScaleDenominator>266.59119798122305</ScaleDenominator>
          <TopLeftCorner>89.99999999999999 -180.0</TopLeftCorner>
          <TileWidth>256</TileWidth>
          <TileHeight>256</TileHeight>
          <MatrixWidth>2097152</MatrixWidth>
          <MatrixHeight>1048576</MatrixHeight>
        </TileMatrix>
      </TileMatrixSet>
    </Contents>
    <ServiceMetadataURL xlink:href="https://raster-mapproxy-int-route-integration.apps.j1lk3njp.eastus.aroapp.io/api/raster/v1/wmts/1.0.0/WMTSCapabilities.xml" />
  </Capabilities>
);
