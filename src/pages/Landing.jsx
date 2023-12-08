import React from 'react'
import { Heart, Zap } from 'react-feather'


function Landing() {
  return (
   <div className='landing'>
     
 <p className='para'>Royal Enfield Interceptor 650</p>
 <p className='para1'>MADE LIKE A GUN  <br /> GOES LIKE A BULLET
</p><br />
       
<img className='img'  src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/142917/royalenfield-interceptor-right-side-view7.jpeg?isig=0" alt="no image" />

<h3 className='head'>TYPE <br /> 650 cc</h3> <br /> <br />

<Zap className='zap' color='white'/><p className='power'> HORSE POWER</p> <br /> <br />
<Heart className='heart' color='white'/><p className='engine'>648 cc ENGINE</p>
   </div>

 )
}

export default Landing