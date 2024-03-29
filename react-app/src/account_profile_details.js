import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Table,
  TableRow,
  TableCell,
  Typography
} from '@material-ui/core';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import EmojiFlagsOutlinedIcon from '@material-ui/icons/EmojiFlagsOutlined';

export default function AccountProfileDetails({ m_token }) {
  const [token, setToken] = useState({});

  const { REACT_APP_BACKEND_URL } = process.env;

  useEffect(() => {
    fetch(REACT_APP_BACKEND_URL + '/users/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(m_token)
    }).then(data => data.json())
      .then(data => {
        setToken(data.token);
      }
      )
  }, [])

  return (
    <Card>
      <CardHeader
        title="Game Stats"
      />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <Table>
              <TableRow>
                <TableCell style={{ borderBottom: "none" }}>
                  <SportsEsportsOutlinedIcon />

                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h6"
                  >
                    Games Played
              </Typography>
                </TableCell>

                <TableCell style={{ borderBottom: "none" }} align="justify">
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h6"
                  >
                    {parseInt(token.won) + parseInt(token.draw) + parseInt(token.lost)}
                  </Typography>
                </TableCell>

              </TableRow>
            </Table>


          </Grid>



          <Grid
            item
            md={6}
            xs={12}
          >

            <Table>
              <TableRow>
                <TableCell style={{ borderBottom: "none" }}>
                  <EmojiEventsOutlinedIcon />

                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h6"
                  >
                    Games Won
                  </Typography>
                </TableCell>
                <TableCell style={{ borderBottom: "none" }} align="justify">
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h6"
                  >
                    {parseInt(token.won)}
                  </Typography>
                </TableCell>
              </TableRow>
            </Table>

          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Table>
              <TableRow>
                <TableCell style={{ borderBottom: "none" }}>
                  <CancelOutlinedIcon />

                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h6"
                  >
                    Games Lost
                  </Typography>
                </TableCell>
                <TableCell style={{ borderBottom: "none" }} align="justify">
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h6"
                  >
                    {parseInt(token.lost)}
                  </Typography>
                </TableCell>
              </TableRow>
            </Table>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Table>
              <TableRow>
                <TableCell style={{ borderBottom: "none" }}>
                  <EmojiFlagsOutlinedIcon />

                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h6"
                  >
                    Games Tied
                  </Typography>
                </TableCell>
                <TableCell style={{ borderBottom: "none" }} align="justify">
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h6"
                  >
                    {parseInt(token.draw)}
                  </Typography>
                </TableCell>
              </TableRow>
            </Table>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  );
}