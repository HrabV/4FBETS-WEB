import { UserCard } from "../components/user/UserCard";
import { MainLayout } from "../layouts";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ProfilePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      navigate("/login");
    }
  }, [navigate]);

  <MainLayout>
    <UserCard></UserCard>
  </MainLayout>;
};
