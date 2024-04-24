import { ReactNode } from "react";

interface ProtectedRole {
  admin: ReactNode;
  member: ReactNode;
}

const ProtectedRole: React.FC<ProtectedRole> = ({ admin, member }) => {
  const isAdmin = true;
  if (isAdmin) {
    return <>{admin}</>;
  } else {
    return <>{member}</>;
  }
};

export default ProtectedRole;