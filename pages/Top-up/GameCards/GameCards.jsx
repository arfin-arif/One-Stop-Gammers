import styles from "./../../../styles/top-up_gameCards.module.css";
import { GrGamepad } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";

const GameCards = () => {
  return (
 
    <div className="my-[5rem] mb-[10rem]">
      <div className={styles.gameCard_container}>
        <div className={styles.giftCard_content}>
          <div className="container mx-auto">
            <h1
              className={`${styles.gameCards_text} hover:text-white text-2xl font-bold mb-10`}
            >
              Action Games
            </h1>
            <div
              className={`${styles.giftCard_card_group} grid grid-cols-5 gap-5 gap-y-10`}
            >
              <div
                className={`${styles.giftCard_card}  rounded-lg px-3 bg-gray-300`}
              >
                <Image
                  className="relative rounded-lg top-[-1rem] left-0 w-[240px] h-[160px] object-cover "
                  src="https://www.talkesport.com/wp-content/uploads/free-fire-2.jpg"
                  alt=""
                  width={500}
                  height={500}
                />
                <h3 className="mb-3 text-sm font-semibold">
                  Free Fire Diamond
                </h3>
                <h1 className="text-sm text-pink-700 hover:underline font-semibold text-right relative bottom-3 right-3 ">
                  <Link href="/top-up/freefire">Buy Items</Link>
                </h1>
              </div>
              <div
                className={`${styles.giftCard_card}  rounded-lg px-3 bg-gray-300`}
              >
                <img
                  className="relative rounded-lg top-[-1rem] left-0 w-[240px] h-[160px] object-cover "
                  src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/capsule_616x353.jpg?t=1671222003"
                  alt=""
                />
                <h3 className="mb-3 text-sm font-semibold">Pubg UC</h3>
                <h1 className="text-sm text-pink-700 hover:underline font-semibold text-right relative bottom-3 right-3 ">
                  <Link href="/top-up/pubg">Buy Items</Link>
                </h1>
              </div>
              <div
                className={`${styles.giftCard_card}  rounded-lg px-3 bg-gray-300`}
              >
                <img
                  className="relative rounded-lg top-[-1rem] left-0 w-[240px] h-[160px] object-cover "
                  src="https://cdn.givemesport.com/wp-content/uploads/2022/05/Clash-of-Clans.jpg?width=1200&aspect_ratio=16:9"
                  alt=""
                />
                <h3 className="mb-3 text-sm font-semibold">
                  Clash Of Clans (Gems)
                </h3>
                <h1 className="text-sm text-pink-700 hover:underline font-semibold text-right relative bottom-3 right-3 ">
                  <Link href="/top-up/coc">Buy Items</Link>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="gameChart bg-pink-500 py-5 mt-[5rem]">
          <div className="gameChart_content container mx-auto flex items-center justify-around">
            <div className="flex items-center gap-2">
              <GrGamepad className="text-5xl" />
              <div>
                <span className="text-white text-2xl font-bold">2000+</span>
                <h4 className="text-lg font-semibold text-white">
                  Total Customer
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GrGamepad className="text-5xl" />
              <div>
                <span className="text-white text-2xl font-bold">28000+</span>
                <h4 className="text-lg font-semibold text-white">
                  Order Completed
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GrGamepad className="text-5xl" />
              <div>
                <span className="text-white text-2xl font-bold">2000+</span>
                <h4 className="text-lg font-semibold text-white">
                  Verified Users
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GrGamepad className="text-5xl" />
              <div>
                <span className="text-white text-2xl font-bold">200+</span>
                <h4 className="text-lg font-semibold text-white">
                  Total Package
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="benefit my-[5rem]">
          <div className="container mx-auto benefit_container">
            <div className="w-1/2 text-center mx-auto">
              <h1 className="text-5xl text-center font-semibold">
                How you gets benefit from out platform.
              </h1>
              <p className="my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
                asperiores nisi culpa corporis accusamus dignissimos.
              </p>
            </div>
            <div className="benefit_content flex gap-5 items-center justify-around mt-3">
              <div className="benefit_card p-5 bg-blue-gray-100 text-center">
                <img
                  src="https://img.icons8.com/bubbles/100/null/services.png"
                  className="mx-auto"
                  alt=""
                />
                <h3 className="text-xl font-semibold">Easy To Buy</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, quisquam.
                </p>
              </div>
              <div className="benefit_card p-5 bg-blue-gray-100 text-center">
                <img
                  src="https://img.icons8.com/bubbles/100/null/services.png"
                  className="mx-auto"
                  alt=""
                />
                <h3 className="text-xl font-semibold">Flexible Interface</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, quisquam.
                </p>
              </div>
              <div className="benefit_card p-5 bg-blue-gray-100 text-center">
                <img
                  src="https://img.icons8.com/bubbles/100/null/services.png"
                  className="mx-auto"
                  alt=""
                />
                <h3 className="text-xl font-semibold">Payment</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, quisquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCards;
