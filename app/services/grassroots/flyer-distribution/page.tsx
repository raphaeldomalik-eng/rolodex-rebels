import { CommercialServicePage, commercialServiceMetadata, commercialServices } from "../../../commercial-service-page";

const data = commercialServices.flyerDistribution;

export const metadata = commercialServiceMetadata(data);

export default function FlyerDistributionPage() {
  return <CommercialServicePage data={data} />;
}
