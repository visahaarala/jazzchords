const lowestTempo = 30;
const highestTempo = 200;
const growthPercentage = 10;

export const tempi = (): number[] => {
  const tempi = [];
  for (
    let tempo = lowestTempo;
    tempo <= highestTempo;
    tempo = Math.floor((tempo * (100 + growthPercentage)) / 100)
  ) {
    tempi.push(tempo);
  }
  return tempi;
};

export const beatsPerChord = [1, 2, 3, 4, 5, 6, 7];
