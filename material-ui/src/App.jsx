import { Header } from "./components/styles";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3aaf57",
    }
  },
});

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header>Material UI</Header>

        <main>
          <Button
            variant="contained"
            sx={{
              m: 2,
              bgcolor: "primary.main",
            }}
          >
            Hello World
          </Button>
          <Button variant="outlined" color="secondary">
            Hello World
          </Button>
          <Checkbox
            {...label}
            defaultChecked
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />

          <Container sx={{ bgcolor: "tomato", height: "100vh" }}>
            <Typography variant="h1">Hello World</Typography>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
