import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GroupList } from "./components/admin/GroupList.jsx";
import { TeamList } from "./components/admin/TeamList.jsx";
import { UserList } from "./components/admin/UserList.jsx";
import {
  AdminPage,
  IndexPage,
  LoginPage,
  ProfilePage,
  RegistrationPage,
  NewsPage,
} from "./pages/index.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<IndexPage />} />
          <Route path={"/profile"} element={<ProfilePage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/registration"} element={<RegistrationPage />} />
          <Route path={"/admin"} element={<AdminPage />} />
          <Route path={"/news"} element={<NewsPage />} />
          <Route path={"/news/:newsId"} element={<NewsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
