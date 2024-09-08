import { Extension } from '../../@types';
import { extensionsOrganized } from '../../data/chordData';
import { extensionToString, stringToExtension } from '../../data/chordFunctions';
import Select from '../misc/Select';

const ExtensionSelect = () => {
  const extensionsString: string[] = Object.values(extensionsOrganized).flat();

  const extensions = extensionsString.map((es) => stringToExtension(es));

  // organize them extensions
  const minors = extensions.filter((e) => e.isMinor);
  const majors = extensions.filter((e) => !e.isMinor);

  const calcSortPoints = (segments: string[]): number => {
    let points = 0;

    if (segments.length === 0) points += -9999999;

    if (segments[0]) {
      const s1 = segments[0];
      // numbers in 10000s
      if (s1.includes('o')) points += -200000;
      if (s1.includes('h')) points += -100000;
      try {
        let e1Num = Number(s1.replace(/\D/g, ''));
        if (e1Num === 69) e1Num = 6.9;
        points += e1Num * 10000;
      } catch {}
      if (s1.includes('add')) points += 3000;
      if (s1.includes('maj')) points += 5000;
    }

    if (segments[1]) {
      const s2 = segments[1];
      // numbers in 100s
      try {
        let e2Num = Number(s2.replace(/\D/g, ''));
        points += e2Num * 100;
      } catch {}
      if (s2.includes('b')) points += -50;
      if (s2.includes('#')) points += 50;
    }

    if (segments[2]) {
      const s3 = segments[2];
      // numbers in 1s
      try {
        let e3Num = Number(s3.replace(/\D/g, ''));
        points += e3Num * 1;
      } catch {}
      if (s3.includes('b')) points += -0.5;
      if (s3.includes('#')) points += 0.5;
    }

    return points;
  };

  const sortFn = (reverse: boolean, a: Extension, b: Extension): number => {
    if (reverse) {
      return calcSortPoints(b.segments) - calcSortPoints(a.segments);
    } else {
      return calcSortPoints(a.segments) - calcSortPoints(b.segments);
    }
  };

  minors.sort(sortFn.bind(null, true));
  majors.sort(sortFn.bind(null, false));

  return (
    <Select
      dispatchActionType='SET_NOTATION_EXTENSION'
      payloadKey='notationExtension'
      options={[...minors, ...majors]}
      optionToString={extensionToString}
      stringToOption={stringToExtension}
    />
  );
};

export default ExtensionSelect;
