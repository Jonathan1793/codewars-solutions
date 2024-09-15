function computeRanks(number, games) {
  // Your solution
  let teams = Array.from({ length: number }, (_, i) => ({
    points: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDiff: 0,
    index: i,
  }));

  games.forEach(([teamA, teamB, goalsA, goalsB]) => {
    teams[teamA].goalsFor += goalsA;
    teams[teamA].goalsAgainst += goalsB;
    teams[teamB].goalsFor += goalsB;
    teams[teamB].goalsAgainst += goalsA;

    if (goalsA > goalsB) {
      teams[teamA].points += 2; // Team A wins
    } else if (goalsA < goalsB) {
      teams[teamB].points += 2; // Team B wins
    } else {
      teams[teamA].points += 1; // Draw
      teams[teamB].points += 1;
    }
  });

  teams.forEach((team) => {
    team.goalDiff = team.goalsFor - team.goalsAgainst;
  });

  teams.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
    return b.goalsFor - a.goalsFor;
  });

  let ranks = Array(number).fill(0);
  let currentRank = 1;

  for (let i = 0; i < number; i++) {
    if (
      i > 0 &&
      teams[i].points === teams[i - 1].points &&
      teams[i].goalDiff === teams[i - 1].goalDiff &&
      teams[i].goalsFor === teams[i - 1].goalsFor
    ) {
      ranks[teams[i].index] = ranks[teams[i - 1].index];
    } else {
      ranks[teams[i].index] = currentRank;
    }
    currentRank++;
  }

  return ranks;
}
