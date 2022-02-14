import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import getCryptoCurrency from "../../service/getCryptoCurrency";
import { useCallback, useState, useEffect } from "react";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Wallets() {
  const [data, setData] = useState<[] | undefined>([]);
  const [resultsPerPage, setResultsPerPage] = useState("");

  const showCryptoCurrency = useCallback(async (): Promise<void> => {
    setData(await getCryptoCurrency("3"));
  }, [getCryptoCurrency]);

  useEffect(() => {
    showCryptoCurrency();
  }, [showCryptoCurrency]);

  const handleClick = () => {
    const dataLength = data && data.length;

    console.log(data && data.length);
  };

  const NewWallet = () => {
    return (
      <Grid xs={12} sm={6} md={3} item>
        <Card sx={{ height: "100%", display: "flex" }}>
          <Tooltip arrow title="Click to add a new wallet">
            <CardActionArea sx={{ px: 1 }}>
              <CardContent>
                <Avatar sx={{ m: "auto" }}>
                  <AddTwoToneIcon fontSize="large" />
                </Avatar>
              </CardContent>
            </CardActionArea>
          </Tooltip>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pb={2}
      >
        <Typography variant="h5" align="left">
          Wallets
        </Typography>
        <Button
          sx={{ px: "12px" }}
          variant="outlined"
          startIcon={
            data && data.length > 3 ? <RemoveIcon /> : <AddTwoToneIcon />
          }
          onClick={handleClick}
        >
          {data && data.length > 3 ? "remove wallet" : "Add new wallet"}
        </Button>
      </Box>
      <Grid container spacing={3}>
        {data &&
          data.map((item, key) => {
            const { image, symbol, name, current_price } = item;
            //TODO: calculate amount of crypto per wallet

            return (
              <Grid key={key} item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Avatar sx={{ my: 2 }} src={image} alt={name} />
                    <Typography>{name}</Typography>
                    <Typography variant="body2">{symbol}</Typography>
                    <Box
                      sx={{
                        pt: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography variant="h6" noWrap>
                        {current_price}
                      </Typography>
                      <Typography fontWeight="300" variant="subtitle2">
                        {current_price} {symbol}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        {data && data.length > 3 ? null : <NewWallet />}
      </Grid>
    </>
  );
}
