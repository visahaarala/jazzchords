import Chord from '../components/chord/Chord';
import PlayControls from '../components/play-controls/PlayControls';

const Chords = () => (
  <div className='page'>
    {/* option to show next chord */}
    {/* <Chord
        indexOffset={1}
        size={0.6}
        marginTop={-0.6}
        marginBottom={-.7}
        contrast={60}
      /> */}
    <Chord />
    <PlayControls />
  </div>
);

export default Chords;
