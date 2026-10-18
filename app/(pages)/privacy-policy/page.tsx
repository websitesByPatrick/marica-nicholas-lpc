import type { Metadata } from "next";
import PrivacyPolicy from "../../components/privacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Marica Nicholas, LPC",
  description:
    "Privacy information for the Marica Nicholas, LPC website and contact form.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
