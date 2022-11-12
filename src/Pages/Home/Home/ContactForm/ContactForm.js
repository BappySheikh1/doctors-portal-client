import React from 'react';
import image from '../../../../Assets/images/appointment.png'

const ContactForm = () => {
   
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form =event.target
        const name=form.email.value
        const subject=form.subject.value
        const message=form.message.value
        console.log(name,subject,message);
    }

    return (
        <section 
        style={{
            background: `url(${image})`
         }}
         className='my-24 rounded-lg'
        >
            <div className='w-[450px] h-[468px] mx-auto py-16 text-center'>
               <div className=' mb-7'>
                    <h5 className='text-xl text-[#19D3AE]'>Contact Us</h5>
                    <h3 className='text-3xl text-white text-semibold'>Stay connected with us</h3>
               </div>
            <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email Address" name='email' className="input w-full  " />
             <br />
            <input type="text" placeholder="Subject"  name='subject' className="input w-full  my-6" />
             <br />
             <textarea className="textarea textarea-info w-full " name='message' placeholder="message"></textarea>
              <br />
              <input type="submit" className='btn btn-primary text-white bg-gradient-to-r from-primary to-secondary mt-4'  value="Submit" />
            </form>
            </div>
        </section>
    );
};

export default ContactForm;