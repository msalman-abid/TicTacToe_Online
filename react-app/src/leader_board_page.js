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

const players = [
  {
    rank: '1',
    name:'Nasir Azeemi',
    games: '10',
    wld: '9 / 0 / 1'
  },
  {
    rank: '2',
    name:'SaLman Abid',
    games: '15',
    wld: '6 / 9 / 0'
  },
  {
    rank: '3',
    name:'Omema Ahmed',
    games: '5',
    wld: '4 / 1 / 0'
  },
  {
    rank: '4',
    name:'Safi Haider',
    games: '3',
    wld: '3 / 0 / 0'
  }
];

export default function LatestOrders(){
    return(
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