import { assets } from "../assets/assets";

function StarRating({rating = 4}) {

    return (
        <>
         {Array(5).fill('').map((_, index) => (
         <img src={rating > index ? assets.starIconFilled : assets.starIconOutlined} alt="star-icon" 
         className="w-4.5 h-4.5"/>
         ))}   
        </>
    )
}


export default StarRating;





/*{Array(5).fill(0).map((_, index) => (
  <Star key={index} filled={testimonial.rating > index} />
  ))}  - этот код вырезаем из Testimonial (ранее вставленного из Tailwind - "Customer Testimonals" )
    и вставляем в этот документ StarRating и потом это документ импортируем на место этого кода в Testimonial*/

/* assets здесь должен быть импортирован*/  