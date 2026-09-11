import { CommercialServicePage, commercialServiceMetadata, commercialServices } from "../../commercial-service-page";

const data = commercialServices.festivalMarketing;

export const metadata = commercialServiceMetadata(data);

export default function FestivalMarketingPage() {
  return <CommercialServicePage data={data} />;
}
