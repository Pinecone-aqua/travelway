import { createContext, ReactNode, useState } from "react";

export const AdminContext = createContext({});

export default function AdminProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [admin, setAdmin] = useState();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setAdmin(admin);
  };
  return (
    <AdminContext.Provider value={{ handleSubmit, admin }}>
      {children}
    </AdminContext.Provider>
  );
}
