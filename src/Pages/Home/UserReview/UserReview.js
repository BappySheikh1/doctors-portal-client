import React from 'react';

const UserReview = ({review}) => {
    // console.log(review);
    const {name, img,location,description}=review
    return (
        <div>
          <div className="card  bg-base-100 shadow-xl">
              <div className="card-body">
               <p className='pt-2'>{description}</p>

               <div className='flex items-center mt-6'>
               <div className="avatar">
                   <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                     <img src={img} alt=''/>
                   </div>
                </div>

                <div className='pl-5'>
                   <h4 className='text-xl font-bold'>{name}</h4> 
                   <p className='text-lg font-semibold'>{location}</p>
                </div>
               </div>
            </div>
          </div>
        </div>
    );
};

export default UserReview;