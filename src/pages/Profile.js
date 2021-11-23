import * as React from "react";
import Container from "@mui/material/Container";
import HeaderMenu from "../components/HeaderMenu";
import Footer from "../components/Footer";
import WatchDetails from "../components/WatchDetails";
import DeviceDetails from "../components/DeviceDetails";
import Customise from "../components/Customise";
import Unlock from "../components/Unlock";

export default function Profile() {
  return (
    <React.Fragment>
      <HeaderMenu />
      <Container maxWidth="lg">
        <main>
          <WatchDetails />
          <DeviceDetails />
          <Customise />
          <Unlock />
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
