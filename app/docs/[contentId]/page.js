import ContentDisplay from "@/components/ContentDisplay";

export default function MainContentPage({ params }) {
  return <ContentDisplay id={params.contentId} />;
}
