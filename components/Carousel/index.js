import styles from "./Carousel.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Carousel() {
  const [image, setImage] = useState(0);

  const changeImage = (direction) => {
    if (direction == "left") {
      setImage(image - 1);

      if (image == 0) {
        setImage(5);
      }
    } else if (direction == "right") {
      setImage(image + 1);

      if (image == 5) {
        setImage(0);
      }
    }
  };
  return (
    <>
      <main className={styles.main}>
        <div
          className={styles.carousel}
          style={{
            backgroundImage: "url(/carousel-images/" + image + ".jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: 500,
            height: 300,
          }}
        >
          <Image
            src={"/icons/leftArrow.png"}
            alt="leftarrow"
            width={100}
            height={75}
            onClick={() => changeImage("left")}
          />

          <Image
            src={"/icons/rightArrow.png"}
            alt="rightarrow"
            width={100}
            height={75}
            onClick={() => changeImage("right")}
          />
        </div>
      </main>
    </>
  );
}
