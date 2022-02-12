import { Typography, Avatar, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Images } from "../../assets";

export default function Header() {
  const theme = useTheme();
  return (
    <Grid container sx={{ py: 3.75, pl: 0.2 }}>
      <Grid item>
        <Avatar
          sx={{ mr: 2, width: theme.spacing(8), height: theme.spacing(8) }}
          alt={Images[0].alt}
          src={Images[0].src}
          variant="rounded"
        />
      </Grid>
      <Grid item>
        <Typography variant="h5" component="h5" align="left">
          Welcome {Images[0].alt}!
        </Typography>
        <Typography variant="subtitle1" align="left">
          Today is a good day to grind!
        </Typography>
      </Grid>
    </Grid>
  );
}
//30px 0px 30px 2px
