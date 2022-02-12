import { Container, Grid } from "@mui/material";
import AccountBalance from "./AccountBalance";
import Header from "./Header";

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
        <Grid item></Grid>
      </Grid>
    </Container>
  );
}
