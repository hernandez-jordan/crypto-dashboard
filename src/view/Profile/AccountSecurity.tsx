import {
  Avatar,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  Switch,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";

export default function AccountSecurity() {
  const [checked, setChecked] = useState({
    accountSecurity: true,
    phoneVerification: true,
    recoveryEmail: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <Card>
        <CardHeader
          sx={{ textAlign: "start", p: "10px" }}
          title="Account Security"
        />
        <Divider />
        <List sx={{ pb: 0 }}>
          <ListItem>
            <Avatar sx={{ mr: "10px" }}>
              <LockIcon />
            </Avatar>
            <ListItemText
              primary="2FA Authentication"
              secondary={checked.accountSecurity ? "enabled" : "disabled"}
            />
            <Switch
              checked={checked.accountSecurity}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
              name={Object.keys(checked)[0]}
            />
          </ListItem>
          <ListItem>
            <Avatar sx={{ mr: "10px" }}>
              <LockIcon />
            </Avatar>
            <ListItemText
              primary="Phone Verification"
              secondary={checked.phoneVerification ? "enabled" : "disabled"}
            />
            <Switch
              checked={checked.phoneVerification}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
              name={Object.keys(checked)[1]}
            />
          </ListItem>
          <ListItem>
            <Avatar sx={{ mr: "10px" }}>
              <LockIcon />
            </Avatar>
            <ListItemText
              primary="Recovery Email"
              secondary={checked.recoveryEmail ? "enabled" : "disabled"}
            />
            <Switch
              checked={checked.recoveryEmail}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
              name={Object.keys(checked)[2]}
            />
          </ListItem>
        </List>
      </Card>
    </>
  );
}
