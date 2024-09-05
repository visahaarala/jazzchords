# Issues

#### AudioContext

`play` functionality seems to not work on some older iPhone iOS versions due to problems with AudioContext.

#### wakeLock

`wakeLock` is used to prevent display from sleeping when using metronome or chords player. However, it seems to work only on newer desktop browsers (excluding Firefox). On mobile devices, display sleep should be prevented manually from the device settings.

#### SVGs

There are small differences in how some browsers display for ex. the Arial font that was originally used in the program. Thus, a chord (C7b9) layout CSS design that looks perfect in Chrome, Safari and Opera would be totally off in Firefox or other browsers.

[SVGs](https://github.com/visahaarala/jazzchords/tree/main/src/components/svg) are used as a solution for this. Now the chord symbols should (hopefully) look exactly the same across all browsers.
