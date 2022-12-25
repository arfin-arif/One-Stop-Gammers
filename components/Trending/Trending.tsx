
import TrendingItem from "./TrendingItem"
import trending1 from "../../public/assets/Trending/trending1.jpg"
import trending2 from "../../public/assets/Trending/trending2.jpg"
import trending3 from "../../public/assets/Trending/trending3.jpg"
import trending4 from "../../public/assets/Trending/trending4.jpg"

type Props = {};
const data = [
    {
        image: trending1,
        prev: 4,
        id: 1,
        next: 2
    },
    {
        image: trending2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: trending3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: trending4,
        prev: 3,
        id: 4,
        next: 1
    },
   
    
]
const Trending = (props:Props) => {
    return (
        <div className="carousel w-full py-10">
        
        {
            data.map(slide=><TrendingItem
            key={slide.id}
            image={slide.image}
            prev={slide.prev}
            id={slide.id}
            next={slide.next}
            
            ></TrendingItem>)
        }

      </div>
    );
};

export default Trending;