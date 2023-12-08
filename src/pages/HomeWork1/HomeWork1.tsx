import styles from './styles.module.css';
import imgOne from '../../assets/img/one.png';
import imgTwo from '../../assets/img/two.png';
import imgThree from '../../assets/img/three.png';
import imgFour from '../../assets/img/four.png';
import imgFive from '../../assets/img/five.png';
import imgSix from '../../assets/img/six.png';
import {useState} from "react";
import classNames from "classnames";

const SIDES = {
    1: imgOne,
    2: imgTwo,
    3: imgThree,
    4: imgFour,
    5: imgFive,
    6: imgSix,
};

export const HomeWork1 = () => {
    const[twist, setTwist] = useState(1);
    const[animation, setAnimation] = useState(false);

    const handleClick = () => setTwist(Math.floor(Math.random() * 6) + 1);


  return (
      <>
        <div className={styles.container}>
            <button className={styles.btn} onClick={() => {
                handleClick();
                setAnimation(true)
            }}>
                Нажми на меня
            </button>
            <img
                src={SIDES[twist as keyof typeof SIDES]}
                alt='imgOne'
                className={classNames(styles.cube, animation && styles.animation)}
                onAnimationEnd={() => setAnimation(false)}/>
        </div>
      </>
  )
};
