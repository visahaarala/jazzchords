import {
  CSSProperties,
  Dispatch,
  PointerEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './RangeSlider.module.scss';

const RangeSlider = ({
  tempoUp,
  tempoDown,
  isTouchingSliderState,
}: {
  tempoUp: (t: number) => void;
  tempoDown: (t: number) => void;
  isTouchingSliderState: [boolean, Dispatch<SetStateAction<boolean>>];
}) => {
  const [style, setStyle] = useState<CSSProperties>({});
  const [startCenterX, setStartCenterX] = useState<number>();
  const [isTouchingSlider, setIsTouchingSlider] = isTouchingSliderState;
  const [afId, setAfId] = useState(0);
  const [lastTempoChangeTime, setLastTempoChangeTime] = useState<number>(0);
  // const [tempoInfo, setTempoInfo] = useState('');
  // const [reqTimeDiff, setReqTimeDiff] = useState(0);
  // const [changeBy, setChangeBy] = useState(0);

  const sliderPctg = useRef(50);

  useEffect(() => {
    // get afId rolling to trigger tempo updates
    let animationFrameID: number | undefined = undefined;

    const loop = () => {
      if (animationFrameID) {
        setAfId(animationFrameID);
      }
      animationFrameID = requestAnimationFrame(loop);
    };

    if (isTouchingSlider) {
      setLastTempoChangeTime(Date.now());
      animationFrameID = requestAnimationFrame(loop);
    }

    return () => {
      if (animationFrameID) {
        cancelAnimationFrame(animationFrameID);
      }
    };
  }, [isTouchingSlider]);

  const ballCancelHandler = () => {
    setStartCenterX(undefined);
    sliderPctg.current = 50;
    setIsTouchingSlider(false);
  };

  const moveHandler = (e: PointerEvent<HTMLDivElement>) => {
    setIsTouchingSlider(true);
    const x = e.clientX;
    if (!startCenterX) setStartCenterX(x);
    const centerOffset = startCenterX ? x - startCenterX : 0;
    const tempoRail = document.getElementById('tempoRail')!;

    let percentage =
      Math.floor((centerOffset / tempoRail.offsetWidth) * 100) + 50;
    if (percentage > 100) percentage = 100;
    if (percentage < 0) percentage = 0;
    sliderPctg.current = percentage;
  };

  useEffect(() => {
    // VISUAL CHANGES
    // setTempoInfo('sliderPctg: ' + sliderPctg.current);
    if (isTouchingSlider) {
      setStyle({ transition: 'left 0s', left: `${sliderPctg.current}%` });
    } else {
      setStyle({ transition: 'left .3s', left: '50%' });
    }
  }, [isTouchingSlider, sliderPctg.current]);

  useEffect(() => {
    const pctgOffset = sliderPctg.current - 50;
    const pctgOffsetAbs = Math.abs(pctgOffset);
    const requiredTimeDifference = Math.pow(1 / pctgOffsetAbs, 2) * 20000;
    const changeBy = 1 + Math.floor(Math.pow(pctgOffsetAbs / 22, 2));
    // setReqTimeDiff(requiredTimeDifference);
    // setChangeBy(changeBy);

    const now = Date.now();
    const timeDifference = now - lastTempoChangeTime;

    if (timeDifference > requiredTimeDifference) {
      // TEMPO CHANGES
      if (pctgOffset > 0) {
        tempoUp(changeBy);
      } else {
        tempoDown(changeBy);
      }
      setLastTempoChangeTime(now);
    }
  }, [afId]);

  return (
    <div className={styles.range}>
      {/* <p>tempoInfo: {tempoInfo}</p>
      <p>startCenterX: {startCenterX}</p>
      <p>sliderPercentage: {sliderPctg.current}</p>
      <p>AnimationFrame: {afId}</p>
      <p>required time diff: {reqTimeDiff}</p>
      <p>changeBy: {changeBy}</p> */}

      <div id='tempoRail' className={styles.input}>
        <div
          id='tempoBall'
          className={styles.input__ball}
          style={style}
          onPointerOut={ballCancelHandler}
          onPointerMove={(e) => moveHandler(e)}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
