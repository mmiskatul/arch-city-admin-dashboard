import { notFound } from "next/navigation";

import { AdminTutorApplicationReviewPage } from "@/components/admin/admin-tutor-application-review-page";
import { adminTutorApplications, getTutorApplicationById } from "@/lib/admin/tutor-applications-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return adminTutorApplications.map((application) => ({ id: application.id }));
}

export default async function AdminTutorApplicationReviewRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const application = getTutorApplicationById(id);

  if (!application) {
    notFound();
  }

  return <AdminTutorApplicationReviewPage applicationId={id} />;
}