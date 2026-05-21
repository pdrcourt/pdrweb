import { FooterExperienceRoute, metadataForFooterRoute } from "@/components/pages/FooterExperienceRoute";

export const metadata = metadataForFooterRoute("/solutions/individuals");

export default function Page() {
  return <FooterExperienceRoute route="/solutions/individuals" />;
}
