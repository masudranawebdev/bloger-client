import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const base_url = process.env.REACT_APP_BASE_URL || "https://bloger-server-topaz.vercel.app";
  useEffect(() => {
    if (email) {
      fetch(`${base_url}/users/admin?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.data.role === "admin");
          setIsAdminLoading(false);
        });
    }
  }, [email, base_url]);
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
