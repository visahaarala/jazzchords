const lowestTempo = 30;
const highestTempo = 200;
const growthPercentage = 10;

const generateBpmList = (): number[] => {
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

export const bpmOptions = generateBpmList();

export const bpcOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
