import { CommercialServicePage, commercialServiceMetadata, commercialServices } from "../../commercial-service-page";

const data = commercialServices.artistWebsiteDesign;

export const metadata = commercialServiceMetadata(data);

export default function ArtistWebsiteDesignPage() {
  return <CommercialServicePage data={data} />;
}
