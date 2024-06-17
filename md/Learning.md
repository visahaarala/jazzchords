# Learning

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

Add `vercel.json` at the root of the project:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

#### Chrome lighthouse

To check website quality

#### PWA

[Vite PWA](https://vite-pwa-org.netlify.app/guide/)

[Learn PWA](https://web.dev/learn/pwa/)

#### PWA icons

Icons are generated from svg files in ./source folder by using [Favicon InBrowser.App](https://favicon.inbrowser.app/tools/favicon-generator).

Further instructions for PWA icons in [https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html](https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html).

#### changing a css variable name in all files recursively

```
grep -rl 'color-white' | xargs -I % sed -i '.bak' 's/color-white/color-one/g' %
```