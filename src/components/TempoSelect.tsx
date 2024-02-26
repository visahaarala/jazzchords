import { beatsPerChord, tempi } from '../data/tempo';
import Volume from './Volume';

const TempoSelect = () => {
  const tempoList = tempi();

  const bpmHandler = () => {};

  const bpcHandler = () => {};

  return (
    <div className='range'>
      <h3>Tempo</h3>
      <div className='range__selectors'>
        <select id='bpm' defaultValue={tempoList[0]} onChange={bpcHandler}>
          {beatsPerChord.map((bpc) => (
            <option value={bpc} key={bpc}>
              {bpc} {bpc === 1 ? 'beat' : 'beats'} / chord
            </option>
          ))}
        </select>
        <Volume />
        <select id='bpm' defaultValue={tempoList[0]} onChange={bpmHandler}>
          {tempoList.map((bpm) => (
            <option value={bpm} key={bpm}>
              {bpm} bpm
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TempoSelect;
