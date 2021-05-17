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


const user = {
  avatar: './tto.png',
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


export default function AccountProfile({m_token}) {

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

      <Grid item xs={3}>
        <Avatar
            src={user.avatar}
            className={classes.large}
          />
      </Grid>
      <Grid item xs={12}>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {m_token.username}
        </Typography>
      </Grid>         
    </Grid>

    </CardContent>
    <Divider />

      <Table>
          <TableRow>
            <TableCell style={{borderBottom:"none"}} align="right">
              <EmojiEventsOutlinedIcon/>
            </TableCell>
            <TableCell style={{borderBottom:"none"}} align="left">
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h7"
              >
                Rank
              </Typography>
            </TableCell>

            <TableCell style={{borderBottom:"none"}} align="justify">

            <Typography
                color="textPrimary"
                gutterBottom
                variant="h7"
              >
                {user.rank}
              </Typography>

            </TableCell>
          </TableRow>
      </Table>
  </Card>
);
}