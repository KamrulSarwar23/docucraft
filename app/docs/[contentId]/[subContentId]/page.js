import ContentDisplay from "@/components/ContentDisplay";

export default function SubContentPage({ params }) {
  return <ContentDisplay id={params.subContentId} />;
}
