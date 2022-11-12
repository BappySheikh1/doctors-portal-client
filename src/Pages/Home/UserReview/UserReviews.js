import React from 'react';
import people1 from '../../../Assets/images/people1.png'
import people2 from '../../../Assets/images/people2.png'
import people3 from '../../../Assets/images/people3.png'
import UserReview from './UserReview';
import icon from '../../../Assets/icons/quote.svg'

const UserReviews = () => {
    const Reviews=[
        {
            id:1,
            img:people1,
            name:"Winson Herry",
            location:"California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content" ,
        },
        {
            id:2,
            img:people2,
            name:"Winson Herry",
            location:"California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content" ,
        },
        {
            id:3,
            img:people3,
            name:"Winson Herry",
            location:"California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content" ,
        },
    ]
    console.log();
    return (
        <div className='my-20'>
           
                <div className='flex justify-between items-center'>
                     <div>
                       <h3 className='text-xl text-[#19D3AE] font-bold'>Testimonial</h3>
                       <h2 className='text-3xl font-semibold mt-6'>What Our Patients Says</h2>
                     </div>
                     <img src={icon}  style={{width:'150px'}} alt="" />
                </div>

                  <div className='my-20 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    {
                      Reviews.map(review => <UserReview key={review.id} review={review}/>)
                    }   
                  </div>
                
        </div>
    );
};

export default UserReviews;