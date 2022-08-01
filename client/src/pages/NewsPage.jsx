import { useEffect } from "react";
import { NewsListItem } from "../components/newspage/NewsListItem";

import { MainLayout } from "../layouts";
import axios from "axios";
export const NewsPage = () => {
  useEffect(() => {
    const test = async () => {
      const response = await axios.post("https://localhost:7072/api/test");
      console.log(response.data);
    };
    test();
  }, []);
  return (
    <MainLayout>
      <NewsListItem></NewsListItem>
    </MainLayout>
  );
};
