import { Container, Grid } from "@mui/material";
import AccountBalance from "./AccountBalance";
import AccountSecurity from "./AccountSecurity";
import Header from "./Header";
import Wallets from "./Wallets";

export default function ProfilePage() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <AccountBalance />
        </Grid>
        <Grid item lg={8} xs={12}>
          <Wallets />
        </Grid>
        <Grid item lg={4} xs={12}>
          <AccountSecurity />
        </Grid>
      </Grid>
    </Container>
  );
}
