import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import styles from "./../styles/Categories.module.css";
import img from "./../public/assets/ConsoleNavBarImages/5272917.jpg";

const Categories = () => {
  return (
    <div
      className={`${styles.categories_container} h-[60vh] w-full items-center flex`}
    >
      <div className="container mx-auto ">
        <h1
          className={`text-2xl font-semibold mb-10 ${styles.categories_text}`}
        >
          Categories
        </h1>
        <div
          className={`${styles.categories_content} flex flex-wrap gap-5 items-center`}
        >
          <div className={`${styles.categories_card} bg-white rounded-lg`}>
            <div className={`${styles.image} w-[300px] h-[200px] rounded-lg`}>
              <Image
                className="w-full h-full object-cover rounded-lg"
                src="https://wp.clutchpoints.com/wp-content/uploads/2022/10/Top-10-Upcoming-Xbox-Series-X-Console-Exclusives-not-coming-to-PS5-REFURB.jpg"
                width={1400}
                height={1400}
                alt=""
              ></Image>
              <Image />
            </div>
            <a
              className=" flex items-center absolute right-5 bottom-2 text-red-700"
              href="/"
            >
              Top Up 
              <BsFillArrowRightCircleFill className={`${styles.arrow_icons}`} />

            </a>
          </div>
          <div className={`${styles.categories_card} bg-white rounded-lg`}>
            <div className={`${styles.image} w-[300px] h-[200px] rounded-lg`}>
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://qph.cf2.quoracdn.net/main-qimg-bad00c3023a963c9059c890f1fb46703-lq"
                alt=""
                width={1400}
                height={1400}
              />
            </div>
            <a
              className="flex items-center absolute right-5 bottom-2 text-red-700"
              href="/"
            >
              Gift Card 
              <BsFillArrowRightCircleFill className={`${styles.arrow_icons}`} />

            </a>
          </div>
          <div className={`${styles.categories_card} bg-white rounded-lg`}>
            <div className={`${styles.image} w-[300px] h-[200px] rounded-lg`}>
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://www.game.de/wp-content/uploads/2020/04/iStock-1050763638_web.jpg"
                alt=""
                width={1400}
                height={1400}
              />
            </div>
            <a
              className="flex items-center absolute right-5 bottom-2 text-red-700"
              href="/"
            >
              Game Accessories{" "}
              <BsFillArrowRightCircleFill className={`${styles.arrow_icons}`} />

            </a>
          </div>
          <div className={`${styles.categories_card} bg-white rounded-lg`}>
            <div className={`${styles.image} w-[300px] h-[200px] rounded-lg`}>
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-index-gamingconsoles-052-print-preview-1659705142.jpg"
                alt=""
                width={1400}
                height={1400}
              />
            </div>
            <a
              className="flex items-center absolute right-5 bottom-2 text-red-700"
              href="/"
            >
              Digital Device
              <BsFillArrowRightCircleFill className={`${styles.arrow_icons}`} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
