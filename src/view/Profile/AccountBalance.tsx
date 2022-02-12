import { TrendingUp } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  List,
  styled,
  Typography,
} from "@mui/material";
import ListItemComponent from "./AccountBalanceTwo";

const IconSuccessBox = styled(Box)({
  borderRadius: 5,
  backgroundColor: `rgb(68, 214, 0)`,
  padding: "3%",
  display: "flex",
  justifyContent: "center",
  boxShadow: "0px 5px 10px #6fd594",
});

export default function AccountBalance() {
  return (
    <Card>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box p={4}>
            <Typography variant="h6" component="h6" align="left">
              Account balance
            </Typography>
            <Box>
              <Typography variant="h3" component="h3" align="left">
                $54,584.23
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                align="left"
                fontWeight="300"
              >
                1.0045983485234 BTC
              </Typography>
              <Box display="flex" sx={{ my: 2 }}>
                <IconSuccessBox sx={{ mr: 2 }}>
                  <TrendingUp fontSize="large" sx={{ color: "white" }} />
                </IconSuccessBox>
                <Box>
                  <Typography variant="h6" component="h6" align="left">
                    + $3,594.00
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h6"
                    align="left"
                    fontWeight="300"
                  >
                    this month
                  </Typography>
                </Box>
              </Box>
              <Grid container spacing={2}>
                <Grid item sm xs={6}>
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => console.log("button one")}
                  >
                    Send
                  </Button>
                </Grid>
                <Grid item sm xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => console.log("button two")}
                  >
                    Receive
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          style={{ marginRight: "-1px" }}
        />
        <Grid item xs={12} md={6}>
          <Box p={4}>
            <List>
              <ListItemComponent />
            </List>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
