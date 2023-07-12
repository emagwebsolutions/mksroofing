'use client';

import Cover from '@/components/Cover';
import Universal from '@/components/Universal';
import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'


const Contact = () => {

  const  form = useForm()
  const {register,formState,control,handleSubmit} = form
  const {errors} = formState

  
  
  const onSubmit = (data: any)=>{
console.log(data)
  }



  return (
    <Universal>
      <Cover name="Contact Us" />

      <section>
        <div className="container">
          <h1>Our Contact Details</h1>
          <p>
            Locate us at our office today or use any of the contact details
            below to get in touch with us today and we will get back to you
            within 24 hours.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <div>
            <h2>We Love To Hear From You</h2>
            <p>
              Please call or email contact form and we will be happy to assist you.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="form-control">
                <input type="text" id="fullname" {...register('fullname')} />
                <label htmlFor="fullname">Your name</label>
              </div>
              

              <div className="form-control">
                <input type="text" id="email" {...register('email')} />
                <label htmlFor="email">Your email</label>
              </div>

              <div className="form-control">
                <input type="text" id="subject" {...register('subject')} />
                <label htmlFor="">Subject</label>
              </div>

              <div className="form-control">
                <input type="text" id="fullname" />
                <label htmlFor=""></label>
              </div>

              <button type="submit">Submit</button>

            </form>
            <DevTool control={control} />
          </div>
          <div></div>
        </div>
      </section>
    </Universal>
  );
};

export default Contact;
