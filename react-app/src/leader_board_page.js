import PerfectScrollbar from 'react-perfect-scrollbar';
import React, { useEffect, useState } from "react";

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
} from '@material-ui/core';

async function fetchPlayers() {
  const { REACT_APP_BACKEND_URL } = process.env;
  return fetch(REACT_APP_BACKEND_URL + '/users/leaderboard', {
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
      wld: element.won + ' / ' + element.draw + ' / ' + element.lost
    })
    count++;
  });
  console.log(ans);
  players = ans;
}

// parsePlayers();
export default function Leaderboard() {
  const [players, setPlayers] = useState([])

  const { REACT_APP_BACKEND_URL } = process.env;

  useEffect(() => {
    fetch(REACT_APP_BACKEND_URL + '/users/leaderboard', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(data => data.json())
      .then(result => {
        var ans = Array();
        var count = 1;
        result.forEach(element => {

          ans.push({
            rank: count,
            name: element.email,
            games: 0,
            wld: element.won + ' / ' + element.draw + ' / ' + element.lost
          })
          count++;
        });
        setPlayers(ans);
        console.log(players);
      }

      )
  }, [])

  return (
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
        <Card>
          <CardHeader title="Leader Board" align='center'/>
          <Divider />
          <PerfectScrollbar>
            <Box sx={{ minWidth: 600 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>
                      Rank
                    </TableCell>
                    <TableCell align='center'>
                      Player Name
                    </TableCell>
                    <TableCell align='center'>
                      Games Played
                    </TableCell>
                    <TableCell align='center'>
                      Won / Lost / Draw
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {players.map((player) => (
                    <TableRow
                      hover
                    >
                      <TableCell align='center'>
                        {player.rank}
                      </TableCell>
                      <TableCell align='center'>
                        {player.name}
                      </TableCell>
                      <TableCell align='center'>
                        {player.games}
                      </TableCell>
                      <TableCell align='center'>
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