import {
  Box,
  Button,
  Container,
  Grid
} from '@material-ui/core';
import AccountProfile from './account_profile';
import AccountProfileDetails from './account_profile_details';

export default function Account() {

  return(
  <>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Button>
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
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
}