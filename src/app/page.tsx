import React from "react";
import Link from "next/link";
import { Button, ButtonGroup } from '@chakra-ui/react'
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#f9f9f9", color: "black" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Welcome To Climate Angels</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Click on the below button to navigate through the About Page.
      </p>

      <Button colorScheme='purple'><Link href="/dashboardAbout" style={{ color: "#FFFFFF", textDecoration: "none" }}>
            About Dashboard
          </Link></Button>
    </div>
  );
};
export default Home;
