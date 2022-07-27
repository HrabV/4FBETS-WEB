import { MainLayout } from "../layouts";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { HeroNews, PlayHero, RegistrationHero } from "../components/homepage";
import { Grid, GridItem } from "@chakra-ui/react";
export const IndexPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <MainLayout>
      <Grid gridTemplateRows={"max-content max-content max-content"}>
        <GridItem>
          <HeroNews />
        </GridItem>
        <GridItem>
          <PlayHero />
        </GridItem>
        <GridItem>
          <RegistrationHero />
        </GridItem>
      </Grid>
    </MainLayout>
  );
};
