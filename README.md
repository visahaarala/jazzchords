# jazzchords

[https://jazzchords.vercel.app](https://jazzchords.vercel.app)

A tool for practicing random jazz chords.

Written with React, Typescript & SCSS.

This program is a Progressive Web App. It can be installed on the home screen of mobile devices (Android, iOS).

Designed primarily for portrait mobile phone (iPhone XS as a reference), but also works on desktop. On desktop, use (`shift`-)`tab`, `space`, `esc` and `arrow` keys for easier navigation while playing an instrument.

Tested desktop browsers (on Mac Os X): Chrome, Safari, Opera and Firefox. Best desktop browsers for this app seem to be Chrome and Opera.

## Issues

- The chord symbol layout does not work in Firefox.

- `play` functionality seems to not work on some older iPhone iOS versions due to problems with AudioContext.

- Using tab to navigate on a desktop browser seems to work only partially in Safari.

- `wakeLock` is used to prevent display from sleeping when playing through chords. However, it seems to work only on newer desktop browsers (excluding Firefox). On mobile devices, display sleep should be prevented manually from the device settings.

## Learning

#### Metronome accuracy / consistency

[A tale of two clocks](https://web.dev/articles/audio-scheduling)

[Creating a simple metronome using Javascript and the Web Audio API](https://grantjam.es/creating-a-simple-metronome-using-javascript-and-the-web-audio-api/)

#### Animation frame loops

[https://css-tricks.com/using-requestanimationframe-with-react-hooks/](https://css-tricks.com/using-requestanimationframe-with-react-hooks/)

#### Web workers

[How to Use Web Workers in React](https://plainenglish.io/blog/web-worker-in-react)

... ended not using one but the **web audio clock** instead (which cannot be run in a thread)

#### Get updated state in a loop inside useEffect

[Making setInterval Declarative with React Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)

#### Detect mobile or desktop

@media (pointer: coarse)
vs. 
@media (pointer: fine)

#### Vercel with react router

To use [React Router](https://reactrouter.com/en/main) with a Single Page Application, add `vercel.json` at the root of the project:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

#### Chrome lighthouse

To check website quality.

#### PWA

[Vite PWA](https://vite-pwa-org.netlify.app/guide/)

[Learn PWA](https://web.dev/learn/pwa/)

#### PWA icons

Icons are generated from svg files in ./icons/svg folder by using [Favicon InBrowser.App](https://favicon.inbrowser.app/tools/favicon-generator).

Further instructions for PWA icons in [https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html](https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html).

