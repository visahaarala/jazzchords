# Solutions

#### Metronome

The metronome has different UI for computer and mobile users. Computer interface is optimized for use with `arrows` (←↑→↓), `space` and `tab`.

Flash is disabled for tempos over 180bpm.

#### Difficulty levels

Chord extensions (ie. 7#9b13) are organized in to four groups - easy, medium, hard and painful. Contents of each group can be seen in [chordData.ts](https://github.com/visahaarala/jazzchords/blob/main/src/data/chordData.ts).

#### SVGs

There are small differences in how some browsers display for ex. the Arial font that was originally used in the program. A CSS layout design for a chord (C7b9) that looks perfect in Chrome, Safari and Opera would be totally off in Firefox or other browsers.

[SVGs](https://github.com/visahaarala/jazzchords/tree/main/src/components/svg/symbols) are used as a solution. Now the chord symbols should (hopefully) look exactly the same across all browsers.
