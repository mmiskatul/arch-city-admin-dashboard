import { notFound } from "next/navigation";

import { AdminTutorDetailPage } from "@/components/admin/admin-tutor-detail-page";
import { adminTutors, getAdminTutorDetailById } from "@/lib/admin/tutors-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return adminTutors.map((tutor) => ({ id: tutor.id }));
}

export default async function AdminTutorDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tutor = getAdminTutorDetailById(id);

  if (!tutor) {
    notFound();
  }

  return <AdminTutorDetailPage tutor={tutor} />;
}