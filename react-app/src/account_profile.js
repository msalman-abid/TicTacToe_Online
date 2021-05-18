import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Table,
  TableRow,
  TableCell,
  Typography
} from '@material-ui/core';
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';
import omi from "./icon.png";


const user = {
  avatar: './icon.png',
  name: '<Player Name>',
  rank: '<Rank>'
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));


export default function AccountProfile({ m_token }) {

  const classes = useStyles();


  return (

    <Card>
      <CardContent>

        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '30vh' }}
        >

          <Grid item >
            <Avatar
              src={omi}
              className={classes.large}
            />
          </Grid>
          <Grid item >
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h5"
            >
              {m_token.username}
            </Typography>
          </Grid>
        </Grid>

      </CardContent>
      <Divider />

      <Table>
        <TableRow>
          <TableCell style={{ borderBottom: "none" }} align="right">
            <EmojiEventsOutlinedIcon />
          </TableCell>
          <TableCell style={{ borderBottom: "none" }} align="left">
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h7"
            >
              Rating
              </Typography>
          </TableCell>

          <TableCell style={{ borderBottom: "none" }} align="justify">

            <Typography
              color="textPrimary"
              gutterBottom
              variant="h7"
            >
              {1500 + 100 * parseInt(m_token.won) + 25 * parseInt(m_token.draw) - 100 * parseInt(m_token.lost)}
            </Typography>

          </TableCell>
        </TableRow>
      </Table>
    </Card>
  );
}