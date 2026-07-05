export type UserRole = "STUDENT" | "ADMIN" | "INSTRUCTOR" | "SUPPORT";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

export const authRoutes = {
  login: "/login",
  register: "/registro",
  dashboard: "/alumno/dashboard",
  profile: "/alumno/perfil"
};
