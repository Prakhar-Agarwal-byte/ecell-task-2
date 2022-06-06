import React, { useEffect } from "react";
import { Container, Grid, Button, Avatar, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Dash = () => {
  let navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { logOut, currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      navigate("/", { replace: true });
      enqueueSnackbar("Not Authenticated", { variant: "error" });
    }
  }, [currentUser, navigate, enqueueSnackbar]);

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/", { replace: true });
      enqueueSnackbar("Logged out successfully", { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        direction="column"
        spacing={3}
      >
        <Grid item>
          <Avatar
            alt={currentUser?.displayName}
            src={currentUser?.photoURL}
            sx={{ width: 96, height: 96 }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h4">{currentUser?.displayName}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">{currentUser?.email}</Typography>
        </Grid>
        {currentUser?.phoneNumber && (
          <Grid item>
            <Typography variant="h6">{currentUser?.phoneNumber}</Typography>
          </Grid>
        )}
        <Grid item>
          <Button
            size="lg"
            variant="outlined"
            sx={{ marginTop: 3 }}
            onClick={handleLogOut}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dash;
