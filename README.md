# jazzchords

[https://jazzchords.vercel.app](https://jazzchords.vercel.app)

A tool for practicing random jazz chords.

Written with React, Typescript & SCSS.

Designed for portrait mobile phone, but also works on desktop. On desktop, use (`shift`-) `tab`, `space`, `esc` and `arrow` keys for easier navigation while playing an instrument.

#### Settings

Set the range of sharps & flats under `Accidentals`, the chord complexity level under `Difficulty`, and tempo & time signature under `Tempo`.

#### Play

Generate and go back and forth between chords using the `Next` & `Previous` buttons, or automatically `Play` through different chords.

#### Problems

- `play` button seems to not work on older iPhone iOS versions due to problems with AudioContext.
- Using tab to navigate on desktop seems to work only partially in Safari.
