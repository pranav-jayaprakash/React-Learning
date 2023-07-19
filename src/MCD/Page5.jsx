import React from 'react'
import './Page1.css'
import './Hd2.css'
import './Page2.css'

function Page5() {


  return (
    <div>
        <div className='margin-div'>
        <h1 className='big'>Zip or City & State</h1>
        <br />

        <div className='width100'>
            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a>
            </iframe>
            </div>
        </div>
        
    </div>
  )
}

export default Page5