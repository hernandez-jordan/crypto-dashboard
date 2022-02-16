import { Avatar, Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import getCryptoCurrency from "../../service/getCryptoCurrency";
import { isPositiveInteger } from "../../util/isPositiveInteger";

export default function WatchList() {
  const [data, setData] = useState<[] | undefined>([]);

  const showCryptoCurrency = useCallback(async (): Promise<void> => {
    setData(await getCryptoCurrency("3"));
  }, [getCryptoCurrency]);

  useEffect(() => {
    showCryptoCurrency();
  }, [showCryptoCurrency]);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pb={2}
      >
        <Typography variant="h5" align="left">
          Watch List
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {data &&
          data.map((item, key) => {
            const {
              image,
              symbol,
              name,
              current_price,
              price_change_percentage_24h,
            } = item;
            return (
              <Grid item key={key} xs={12} md={4}>
                <Card>
                  <Box p={3}>
                    <Box display="flex" alignItems="center">
                      <Avatar sx={{ my: 2 }} src={image} alt={name} />
                      <Box
                        display="flex"
                        alignItems="center"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start ",
                          pl: "14px",
                        }}
                      >
                        <Typography>{name}</Typography>
                        <Typography variant="body2">{symbol}</Typography>
                      </Box>
                    </Box>
                    <Box paddingBottom={2} display="flex">
                      <Typography variant="h5" noWrap sx={{ pr: 2 }}>
                        ${current_price}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ display: "flex", alignItems: "center" }}
                        color={
                          isPositiveInteger(Number(price_change_percentage_24h))
                            ? "limegreen"
                            : "red"
                        }
                      >
                        {price_change_percentage_24h}
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Box
                        sx={{
                          borderRadius: "10px",
                          backgroundColor: "#8efb8e",
                          color: "#0f990f",
                          p: "2px 10px",
                        }}
                      >
                        +$500
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ pl: 1 }}
                      >
                        last 24h
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography>chart</Typography>
                  </Box>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
