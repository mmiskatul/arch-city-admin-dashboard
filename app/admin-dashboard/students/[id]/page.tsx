import { notFound } from "next/navigation";

import { AdminStudentDetailPage } from "@/components/admin/admin-student-detail-page";
import { adminStudents, getAdminStudentDetailById } from "@/lib/admin/students-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return adminStudents.map((student) => ({ id: student.id }));
}

export default async function AdminStudentDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const student = getAdminStudentDetailById(id);

  if (!student) {
    notFound();
  }

  return <AdminStudentDetailPage student={student} />;
}