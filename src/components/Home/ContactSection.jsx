import React from 'react'

function ContactSection() {
  return (
    <div className='flex justify-center mt-16 px-4'>
  <div className='w-[1024px]'>
    {/* Heading of the Contacts Section */}
    <div className='flex flex-col md:flex-row justify-between items-center'>
      <div className='flex items-center'>
        <span className='text-primary'>#</span>
        <h2 className='text-2xl text-white ml-2'>Contacts</h2>
        <div className='h-0 border border-primary w-full md:w-[512px] mx-4'></div>
      </div>
    </div>

    {/* Lower Section of Contacts */}
    <div className='flex '>
    <p className='text-gray mt-4 w-1/2'>
      I’m interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me.
    </p>

    <div className='w-1/2 flex justify-center '>
        <table className='border border-gray'>
            <tr>
                <th className='text-gray'>Message  me here</th>
            </tr>
            <tr className=''>
                
                <a href="https://www.instagram.com/satyamrai2609/" target='blank'><td className='p-3'><img src="../../../public/satyamrai2609_qr.png" alt="instagram" className='w-36 '/></td></a>
            </tr>
        </table>
    </div>
    </div>
   
  </div>
</div>

  )
}

export default ContactSection