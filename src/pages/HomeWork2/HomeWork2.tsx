import styles from './styles.module.css';
import {useEffect, useRef, useState} from "react";

export const HomeWork2 = () => {
  const[scroll, setScroll] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let progressBarHandler = () => {

      if(ref.current?.parentElement) {
        const parent = ref.current.parentElement;
        parent.style.position = 'relative';
        const totalScroll = parent.scrollTop;
        const windowHeight = parent.scrollHeight - parent.clientHeight;
        const scrollNow = `${(totalScroll / windowHeight) * 100}`;

        setScroll(+scrollNow);
      }
    }

    if(ref.current?.parentElement){
      ref.current.parentElement.addEventListener('scroll', progressBarHandler);
    }

    return () => {
      if(ref.current?.parentElement)
        ref.current.parentElement.removeEventListener('scroll', progressBarHandler)
    };
  });

  return (
      <>
        <div ref={ref} className={styles.wrapper}>
          <div className={styles.scrollbar} style={{transform: `scale(${scroll/100}, 1)`, opacity: `${scroll}`}}  />
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate debitis earum eos esse,
              excepturi ipsa similique vitae! Amet animi culpa dolores eius eveniet in, perferendis quae voluptatibus.
              Dolore, laboriosam?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate debitis earum eos esse,
              excepturi ipsa similique vitae! Amet animi culpa dolores eius eveniet in, perferendis quae voluptatibus.
              Dolore, laboriosam?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate debitis earum eos esse,
              excepturi ipsa similique vitae! Amet animi culpa dolores eius eveniet in, perferendis quae voluptatibus.
              Dolore, laboriosam?
            </p>
          </div>
        </div>
      </>
  )
};
