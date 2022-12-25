
import Image from "next/image";
import styles from "../../styles/TrendingItem.module.css"
interface Props {
    image: any;
    prev: number;
    id:number;
    next:number;
  }
const TrendingItem = ({image,prev,id,next}:Props) => {
    
    
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
         <div className={styles.img}>
        
         <Image className="h-full" src={image} width={1400}
        
          alt="" ></Image>
         </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-2/4">
            <h1 className='lg:text-6xl text-3xl lg:mt-11 font-bold text-white '>
                Trending <br />
                Games <br />
                This week
            </h1>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5 top-3/4">
           <p className='text-white lg:text-xl hidden lg:block'>Relive the beloved game that started it all, completely remastered.</p>
          </div>
          <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5 lg:top-[600px] top-[520px]">
          <button className="btn bg-blue-400 mr-5">Buy Now</button>


          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
          </div>
        </div> 
    );
};

export default TrendingItem;