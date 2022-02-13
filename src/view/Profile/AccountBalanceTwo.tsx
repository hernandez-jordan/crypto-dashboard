import { Avatar, Box, ListItem, ListItemText, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import getCryptoCurrency from "../../service/getCryptoCurrency";
import { isPositiveInteger } from "../../util/isPositiveInteger";

export default function ListItemComponent() {
  const [data, setData] = useState([]);

  const showCryptoCurrency = useCallback(async (): Promise<void> => {
    setData(await getCryptoCurrency());
  }, [getCryptoCurrency]);

  useEffect(() => {
    showCryptoCurrency();
  }, [showCryptoCurrency]);

  return (
    <>
      {data &&
        data.map((item, key) => {
          const {
            image,
            symbol,
            name,
            price_change_percentage_24h,
            current_price,
          } = item;
          return (
            <ListItem key={key} sx={{ py: "2px" }}>
              <Avatar src={image} alt={name} />
              <ListItemText
                sx={{ paddingLeft: "1rem", maxWidth: "250px" }}
                primary={symbol}
                secondary={name}
              />
              <Box px={1} sx={{ ml: "auto", width: 100 }}>
                <Typography> ${current_price}</Typography>
                <Typography
                  variant="body2"
                  color={
                    isPositiveInteger(Number(price_change_percentage_24h))
                      ? "limegreen"
                      : "red"
                  }
                >
                  {price_change_percentage_24h}%
                </Typography>
              </Box>
            </ListItem>
          );
        })}
    </>
  );
}
