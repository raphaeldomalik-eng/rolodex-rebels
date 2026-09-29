import { CommercialServicePage, commercialServiceMetadata, commercialServices } from "../../../commercial-service-page";

const data = commercialServices.posterDistribution;

export const metadata = commercialServiceMetadata(data);

export default function PosterDistributionPage() {
  return <CommercialServicePage data={data} />;
}
