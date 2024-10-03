import {
  CSSProperties,
  Dispatch,
  PointerEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './TempoSlider.module.scss';

const TempoSlider = ({
  tempoUp,
  tempoDown,
  isTouchingSliderState,
}: {
  tempoUp: (t: number) => void;
  tempoDown: (t: number) => void;
  isTouchingSliderState: [boolean, Dispatch<SetStateAction<boolean>>];
}) => {
  const [ballStyle, setBallStyle] = useState<CSSProperties>({});
  const [startCenterX, setStartCenterX] = useState<number>();
  const [isTouchingSlider, setIsTouchingSlider] = isTouchingSliderState;
  const [afId, setAfId] = useState(0);
  const [lastTempoChangeTime, setLastTempoChangeTime] = useState<number>(0);

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
    if (isTouchingSlider) {
      setBallStyle({ transition: 'left 0s', left: `${sliderPctg.current}%` });
    } else {
      setBallStyle({ transition: 'left .3s', left: '50%' });
    }
  }, [isTouchingSlider, sliderPctg.current]);

  // const [changeSpeedDescription, setChangeSpeedDescription] = useState('');
  useEffect(() => {
    // TEMPO CHANGES
    const pctgOffset = sliderPctg.current - 50;
    const pctgOffsetAbs = Math.abs(pctgOffset);
    const changeBy = 1 + Math.floor(Math.pow(pctgOffsetAbs / 22, 2));
    const requiredTimeDifference =
      Math.pow(1 / pctgOffsetAbs, 2.8) * 150000 * changeBy;

    // setChangeSpeedDescription(
    //   'changeBy: ' +
    //     changeBy +
    //     ', time: ' +
    //     (requiredTimeDifference !== Infinity
    //       ? Math.floor(requiredTimeDifference) + 'ms'
    //       : requiredTimeDifference + '')
    // );

    const now = Date.now();
    const timeDifference = now - lastTempoChangeTime;
    if (timeDifference > requiredTimeDifference) {
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
      {/* <p>{changeSpeedDescription}</p> */}
      <div id='tempoRail' className={styles.input}>
        <div
          className={`${styles.input__numbers} ${
            isTouchingSlider && styles['input__numbers--hide']
          }`}
        >
          <span onClick={() => tempoDown(10)}>-10</span>
          <span onClick={() => tempoDown(1)}>-1</span>
          <span />
          <span onClick={() => tempoUp(1)}>+1</span>
          <span onClick={() => tempoUp(10)}>+10</span>
        </div>
        <div
          id='tempoBall'
          className={styles.input__ball}
          style={ballStyle}
          onPointerOut={ballCancelHandler}
          onPointerMove={(e) => moveHandler(e)}
        />
      </div>
    </div>
  );
};

export default TempoSlider;
