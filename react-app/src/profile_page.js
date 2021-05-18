import {
  Box,
  Button,
  Container,
  Grid
} from '@material-ui/core';
import React, { useEffect, useState } from "react";
import AccountProfile from './account_profile';
import AccountProfileDetails from './account_profile_details';

export default function Account({ m_token }) {
  console.log(m_token);

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Button variant='outlined' size='large' href="/">
          Go Back
      </Button>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
          >
            <Grid>

            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <AccountProfile m_token={m_token} />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <AccountProfileDetails m_token={m_token} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}