import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Card, CardBody, Col } from "reactstrap";
import { BasicDemoMap } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicCenter, BasicContainerStyle } from "@/Data/Miscellaneous/Maps";

const BasicMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDGCQvcXUsXwCdYArPXo72dLZ31WS3WQRw",
  });
  
  return (
    <Col lg="6" md="12">
      <Card>
        <CommonCardHeader title={BasicDemoMap} />
        <CardBody>
          <div className="map-js-height overflow-hidden">
            <div id="gmap-simple" className="map-block">
              {isLoaded ? <GoogleMap mapContainerStyle={BasicContainerStyle} center={BasicCenter} zoom={10} /> : "Loading"}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicMap;
