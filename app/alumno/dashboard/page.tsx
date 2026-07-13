import { StudentShell } from "@/components/student/StudentShell";
import { BolilloDashboardClient } from "@/components/student/BolilloDashboardClient";

export default function StudentDashboardPage() {
  return (
    <StudentShell title="Dashboard del alumno">
      <BolilloDashboardClient />
    </StudentShell>
  );
}
