import { CommercialServicePage, commercialServiceMetadata, commercialServices } from "../../../commercial-service-page";

const data = commercialServices.streetTeams;

export const metadata = commercialServiceMetadata(data);

export default function MusicStreetTeamsPage() {
  return <CommercialServicePage data={data} />;
}
