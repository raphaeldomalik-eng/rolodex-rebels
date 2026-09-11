import { CommercialServicePage, commercialServiceMetadata, commercialServices } from "../../commercial-service-page";

const data = commercialServices.musicPr;

export const metadata = commercialServiceMetadata(data);

export default function MusicPrPage() {
  return <CommercialServicePage data={data} />;
}
