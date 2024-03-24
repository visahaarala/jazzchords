# jazzchords

[https://jazzchords.vercel.app](https://jazzchords.vercel.app)

A tool for practicing random jazz chords.

Written with React, Typescript & SCSS.

Designed primarily for portrait mobile phone (iPhone XS as a reference), but also works on desktop. On desktop, use (`shift`-) `tab`, `space`, `esc` and `arrow` keys for easier navigation while playing an instrument.

Tested desktop browsers (on Mac Os X): Chrome, Safari, Opera and Firefox. Best desktop browsers for this app seem to be Chrome and Opera.

#### Issues

- Firefox messes up the chord symbol layout.

- `play` functionality seems to not work on some older iPhone iOS versions due to problems with AudioContext.

- Using tab to navigate on a desktop browser seems to work only partially in Safari.

- `wakeLock` is used to prevent display from sleeping when playing through chords. However, it seems to work only on newer desktop browsers (excluding Firefox). On mobile devices, display sleep should be prevented manually from the device settings.
