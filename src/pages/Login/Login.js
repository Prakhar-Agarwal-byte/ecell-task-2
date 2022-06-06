import { Container, Grid, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const { signIn, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      navigate("/dash", { replace: true });
    }
  }, [currentUser, navigate]);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signIn();
    } catch (error) {
      alert(JSON.stringify(error));
    }
    setLoading(false);
  };

  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Grid item>
          <Button
            size="lg"
            variant="contained"
            startIcon={<GoogleIcon />}
            onClick={handleSignIn}
            disabled={loading}
          >
            Login with Google
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
