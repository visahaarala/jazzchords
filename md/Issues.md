# Issues

#### AudioContext

`play` functionality seems to not work on some older iPhone iOS versions due to problems with AudioContext.

#### wakeLock

`wakeLock` is used to prevent display from sleeping when using metronome or chords player. However, it seems to work only on newer desktop browsers (excluding Firefox). On mobile devices, display sleep should be prevented manually from the device settings.
