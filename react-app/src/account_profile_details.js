import { useState } from 'react';
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

export default function AccountProfileDetails()
{

  // const [values, setValues] = useState({
  //   firstName: 'Katarina',
  //   lastName: 'Smith',
  //   email: 'demo@devias.io',
  //   phone: '',
  //   state: 'Alabama',
  //   country: 'USA'
  // });


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
              <TableCell style={{borderBottom: "none"}}>
              <SportsEsportsOutlinedIcon/>

              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Games Played
              </Typography>
              </TableCell>

              <TableCell style={{borderBottom: "none"}} align="justify">
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h7"
              >
                Games Played
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
                <TableCell style={{borderBottom: "none"}}>
                  <EmojiEventsOutlinedIcon/>

                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h6"
                  >
                    Games Won
                  </Typography>
                </TableCell>
                <TableCell style={{borderBottom: "none"}} align="justify">
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h7"
                  >
                    Games Won
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
                <TableCell style={{borderBottom: "none"}}>
                <CancelOutlinedIcon/>

                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h6"
                  >
                    Games Lost
                  </Typography>
                </TableCell>
                <TableCell style={{borderBottom: "none"}} align="justify">
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h7"
                  >
                    Games Lost
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
                <TableCell style={{borderBottom: "none"}}>
                <EmojiFlagsOutlinedIcon/>

                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h6"
                  >
                    Games Tied
                  </Typography>
                </TableCell>
                <TableCell style={{borderBottom: "none"}} align="justify">
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h7"
                  >
                    Games Tied
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