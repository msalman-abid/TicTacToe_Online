import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';

async function fetchPlayers() {
  return fetch('http://localhost:9000/users/leaderboard', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(data => data.json())
}

var players;

async function parsePlayers() {
  var result = await fetchPlayers();
  var ans = Array();
  var count = 1;
  result.forEach(element => {

    ans.push({
      rank: count,
      name: element.email,
      games: 0,
      wld: element.won +' / ' + element.draw +' / ' + element.lost
    })
    count++;
  });
  console.log(ans);
  players = ans;
}

export default function LatestOrders(){
  parsePlayers();
    return(
    <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      py: 3
    }}
    >
      <Button size='large' href="/">
        Go Back
      </Button>
      <Container maxWidth="lg">
        <Card>
          <CardHeader title="Leader Board" />
          <Divider />
          <PerfectScrollbar>
            <Box sx={{ minWidth: 800 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      Rank
                    </TableCell>
                    <TableCell>
                      Player Name
                    </TableCell>
                    <TableCell>
                      Games Played
                    </TableCell>
                    <TableCell>
                      Won / Lost / Draw
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {players.map((player) => (
                    <TableRow
                      hover
                    >
                      <TableCell>
                        {player.rank}
                      </TableCell>
                      <TableCell>
                        {player.name}
                      </TableCell>
                      <TableCell>
                        {player.games}
                      </TableCell>
                      <TableCell>
                        <Chip
                          color="primary"
                          label={player.wld}
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </PerfectScrollbar>
        </Card>
      </Container>
    </Box>
);
}