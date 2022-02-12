import { CssBaseline } from "@mui/material";
import "./App.css";
import ProfilePage from "./view/Profile/ProfilePage";
import "./service/axios-config";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ProfilePage />
    </div>
  );
}

export default App;
