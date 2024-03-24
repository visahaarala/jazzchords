# jazzchords

[https://jazzchords.vercel.app](https://jazzchords.vercel.app)

A tool for practicing random jazz chords.

Written with React, Typescript & SCSS.

Designed primarily for portrait mobile phone (iPhone XS as a reference), but also works on desktop. On desktop, use (`shift`-) `tab`, `space`, `esc` and `arrow` keys for easier navigation while playing an instrument.

#### Issues

- `play` button seems to not work on some older iPhone iOS versions due to problems with AudioContext.

- Using tab to navigate on a desktop browser seems to work only partially in Safari.

- `wakeLock` is used to prevent display from sleeping when playing through chords. However, it seems to work only on newer desktop browsers (excluding Firefox). On mobile devices, the screen sleep time should be changed manually from device settings.
