import profile from './assets/prof.jpg'
 import float from './assets/newly.png'
 import profil from "./assets/prof.jpg"
 function Body(){


    return (
      <>
    <div
      className="min-h-screen bg-cover bg-center scroll-smooth"
      style={{ backgroundImage: `url(${profile})` }}
       >
        <nav className="bg-white flex justify-between items-center p-4 font-bold">
        <div className="ml-15 text-2xl">MufaX</div>
        <div>
             <div className="sm:flex md:hidden cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></div>
        <ul className="hidden  md:flex justify-around items-center gap-x-5 mr-10 text-sl cursor-pointer text-black">
            <li className="text-red-500 active-link">Home</li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li href="#services">Services</li>
            <li>contact</li>
        </ul> 
        </div>
    </nav>

      
      <div className="text-white p-8 flex justify-around items-center">
        <div>
        <h2 className="text-2xl"> <strong class="text-yellow-500"> Hi, I'm Mufasa,</strong>  <br /> <br />
I'm a passionate and detail-oriented web developer  dedicated to <br /> building clean, 
fast, and responsive websites and applications. <br />
I specialize in turning ideas into  smooth, interactive user <br />
 experiences using modern tools and technologies.
Explore my  <br /> portfolio to see the projects I've worked on and the skills I bring <br /> to every line of code.
Let’s create something great together!</h2>
        </div>
          <div>
            <img  class ="hidden md:block" src={float} alt="" />
          </div>
      </div>
    </div>
      <section id="about" className="p-10 text-center font-bold text-2xl  bg-gray-800 text-white">
        ----------- About ------------
      </section>
           <div className="py-10">
             <img class="flex  py-6 md:hidden" src={profil} alt="" />
             <div class="about-page">

<div class= "grid grid-cols-3 text-center  bg-gray-900 text-white py-10" >

  <div class="py-10 ">
    <h2 class="font-bold py-3 text-xl">Introduction</h2>
    <p>I'm a passionate and detail-oriented web developer <br />  
    dedicated to 
    building clean, fast, and responsive <br /> websites and applications.</p>
  </div>

  <div class="py-10 ">
    <h2 class="font-bold py-3 text-xl">Skills & Expertise</h2>
    <p>Web development</p>
    <p>Web designing</p>
    <p> Video Filming</p>
   

  </div>

  <div class="py-10 ">
    <h2 class="font-bold py-3 text-xl">Experience Highlights</h2>
  <p>i worked in ABC-Campany for 8 months <br />
  later that i shifted to college Tumber university  <br />
  to strengthen and sharpen for my career   </p>
  </div>

   <div class="py-10 ">
    <h2 class="font-bold py-3 text-xl">value and work-style</h2>
    <p>I believe in honesty, collaboration, and persistence. <br /> 
    I approach work with a problem-solving mindset, <br /> 
    always aiming for quality and efficiency.</p>
    
  </div>

  <div class="py-10 ">
    <h2 class="font-bold py-3 text-xl">Personal Goal</h2>
   <p>Right now, I’m focused on mastering frontend <br /> development 
   and building projects that challenge me <br />
    to grow professionally..</p>
   

  </div>

  <div class="py-10">
    <h2 class="font-bold py-3 text-xl">Contact</h2>
    <p>Email: your.email@example.com</p>
    <p>Social: <a href="#">LinkedIn</a> | <a href="#">Twitter</a></p>
  </div>

</div>
</div>

</div>

  <h1 id="resume" className="p-10 text-center font-bold text-2xl bg-gray-800 text-white">----------- Resume -----------</h1>
<section className=" flex justify-evenly items-center bg-gray-900 py-10">
  <div className=' border-gray-500 border-2  w-lg text-center h-[60vh] rounded-xl  m-10'>
    <h2 class="flex items-center text-xl font-bold justify-center mb-5 mt-3 text-yellow-500">
 
      Education Background
  <svg xmlns="http://www.w3.org/2000/svg" 
       fill="none" 
       viewBox="0 0 24 24" 
       stroke-width="1.5" 
       stroke="currentColor" 
       class="w-10 h-10 text-blue-600 ml-5">
    <path stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M12 14.25V21m0 0l-3.375-1.8a.75.75 0 01-.375-.648v-2.625m3.75 5.073l3.375-1.8a.75.75 0 00.375-.648v-2.625M12 14.25l-8.485-4.243a.75.75 0 010-1.314L12 4.5l8.485 4.193a.75.75 0 010 1.314L12 14.25z" />
  </svg>
</h2>
 <div class="space-y-4">
    <p class="text-white">
      <strong>Tumba College of Technology</strong>
      <ul>
      <li>
        — Bachelor of Information Technology <br /> (Expected 2026)
        </li> 
      </ul>
    </p>
    <p class="text-white">
      <strong> Advanced Secondary School</strong>
      <ul className='list-disc list-inside  text-start px-3'>
      <li>Networking</li>
      <li>software development</li>
      <li>camera installation</li> (Graduated 2024)
      </ul>
    </p>

      <p class="text-white">
      <strong> Ordinary Secondary School</strong>
      <ul className='list-disc list-inside  text-start px-3'>
      <li>English basic</li>
      <li>Communication skills</li>
      <li>Basic in technology</li> (Graduated 2019)
      </ul>
    </p>
  </div>

  </div>


    <div className='border-gray-500 border-1  w-lg text-center h-[60vh] rounded-xl m-10'>
    <h2 class="flex items-center text-xl font-bold justify-center mb-5 mt-3 text-yellow-500">
      Skills
<svg xmlns="http://www.w3.org/2000/svg" 
     fill="none" 
     viewBox="0 0 24 24" 
     stroke-width="1.5" 
     stroke="currentColor" 
     class="w-10 h-10 text-yellow-500 ml-3">
  <path stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M12 2.25a6.75 6.75 0 00-3.375 12.6v1.275a.75.75 0 00.75.75h5.25a.75.75 0 00.75-.75v-1.275A6.75 6.75 0 0012 2.25zM9.75 18h4.5m-4.5 3h4.5" />
</svg>


</h2>
 <div class="space-y-4">
 
    <p class="text-white">
      <strong>Technical Skills</strong>
      <ul className='list-disc list-inside text-start px-3'>
      <li>Programming: JavaScript, HTML, CSS, React.js, Node.js, PostgreSQL</li>
      <li>Networking: LAN/WAN setup, Router & Switch configuration</li>
      <li>IT Support: Troubleshooting, Camera Installation, System Maintenance</li>
      <li>Software: MS Office, Git & GitHub, VS Code</li> 
      </ul>
    </p>

      <p class="text-white">
      <strong> Soft-Skills</strong>
      <ul className='list-disc list-inside  text-start px-3'>
        <li>Problem-solving</li>
      <li>Attention to Detail</li>
      <li>Time management</li>
      <li>Adaptability</li> 
      <li>Team work</li>
      </ul>
    </p>
  </div>

  </div>

  
</section>

<h1 id="services" className="p-10 text-center font-bold text-2xl  bg-gray-800 text-white">----------- Services -----------</h1>

<section id="services"  className='bg-gray-900'>
  <p className='text-lg text-white  ml-5 '>services <span className='text-amber-500 text-lg'>--------</span></p>
  <h2 className='text-2xl text-white ml-5'> Check out My Services</h2>

  <div  className="grid grid-cols-3 gap-4 py-10 m-auto">
    <div className="col-span-2  p-4">
      <h1 className="text-4xl text-start items-center  font-bold text-white py-5">Innovative business <br />
      <span class="text-yellow-500 ">performance solutions</span></h1>
    </div>

<div className='col-span-1  p-4'>

    <p className="text-white">We integrate forward-thinking strategies, creative approaches, <br />
     and state-of-the-art technologies to deliver exceptional customer <br />
      experiences that drive growth and engage target markets.</p>
   <p className='w-[40%] text-left  bg-yellow-500 text-white font-medium text-base p-2 cursor-pointer rounded-xl shadow-lg mt-4'>view all Services --</p>
</div>
  </div>

  <div className='grid grid-cols-3 gap-10 w-[90%] justify-center items-center py-10'> 

    <div className='border-gray-500 border-1 p-4 rounded-lg py-10 shadow-xl'>
      <p className='text-4xl'>🌐</p>
      <h1 className='text-2xl py-3 font-bold text-white'>Web Development</h1>
      <p className='text-start text-white'>
        Nulla facilisi. Maecenas eget magna neque. <br />
         Suspendisse potenti. Curabitur eleifend nisi <br />
         non magna vulputate, vel condimentum libero <br />
         tempus. Proin consectetur feugiat diam.</p>
    </div>
     <div className='border-gray-500 border-1 p-4 rounded-lg py-10 shadow-xl'>
      <p className='text-4xl'>✍️</p>
      <h1 className='text-2xl py-3 font-bold text-white'>Content Writting</h1>
      <p className='text-start text-white'>
        Nulla facilisi. Maecenas eget magna neque. <br />
         Suspendisse potenti. Curabitur eleifend nisi <br />
         non magna vulputate, vel condimentum libero <br />
         tempus. Proin consectetur feugiat diam.</p>
    </div>
     <div className='border-gray-500 border-1 p-4 rounded-lg py-10 shadow-xl'>
      <p className='text-4xl'>📈</p>
      <h1 className='text-2xl py-3 font-bold text-white'>SEO Optimization</h1>
      <p className='text-start text-white'>
        Nulla facilisi. Maecenas eget magna neque. <br />
         Suspendisse potenti. Curabitur eleifend nisi <br />
         non magna vulputate, vel condimentum libero <br />
         tempus. Proin consectetur feugiat diam.</p>
    </div>
     <div className='border-gray-500 border-1 p-4 rounded-lg py-10 shadow-xl'>
      <p className='text-4xl'>🤝 </p>
      <h1 className='text-2xl py-3 font-bold text-white'>Tech Consulting</h1>
      <p className='text-start text-white'>
        Nulla facilisi. Maecenas eget magna neque. <br />
         Suspendisse potenti. Curabitur eleifend nisi <br />
         non magna vulputate, vel condimentum libero <br />
         tempus. Proin consectetur feugiat diam.</p>
    </div>
     <div className='border-gray-500 border-1 p-4 rounded-lg py-10 shadow-xl'>
      <p className='text-4xl'>📶</p>
      <h1 className='text-2xl py-3 font-bold text-white'>Networking</h1>
      <p className='text-start text-white'>
        Nulla facilisi. Maecenas eget magna neque. <br />
         Suspendisse potenti. Curabitur eleifend nisi <br />
         non magna vulputate, vel condimentum libero <br />
         tempus. Proin consectetur feugiat diam.</p>
    </div>
     <div className='border-gray-500 border-1 p-4 rounded-lg py-10 shadow-xl'>
      <p className='text-4xl'>🎥</p>
      <h1 className='text-2xl py-3 font-bold text-white'>filming</h1>
      <p className='text-start text-white'>
        Nulla facilisi. Maecenas eget magna neque. <br />
         Suspendisse potenti. Curabitur eleifend nisi <br />
         non magna vulputate, vel condimentum libero <br />
         tempus. Proin consectetur feugiat diam.</p>
    </div> 
    
  </div>
</section>

  <h1 id="resume" className="p-10 text-center font-bold text-2xl bg-gray-800 text-white">----------- Contact -----------</h1>
<section>

  <div>
 <section className=" flex justify-evenly items-center bg-gray-900 py-10">
  <div className=' border-gray-500 border-2  w-lg text-center h-[60vh] rounded-xl  m-10'>
    <h2 class="flex items-center text-xl font-bold justify-center mb-5 mt-3 text-yellow-500">
 
      Education Background

</h2>
 <div class="space-y-4">
    <p class="text-white">
      <strong>Tumba College of Technology</strong>
      <ul>
      <li>
        — Bachelor of Information Technology <br /> (Expected 2026)
        </li> 
      </ul>
    </p>
    <p class="text-white">
      <strong> Advanced Secondary School</strong>
      <ul className='list-disc list-inside  text-start px-3'>
      <li>Networking</li>
      <li>software development</li>
      <li>camera installation</li> (Graduated 2024)
      </ul>
    </p>

      <p class="text-white">
      <strong> Ordinary Secondary School</strong>
      <ul className='list-disc list-inside  text-start px-3'>
      <li>English basic</li>
      <li>Communication skills</li>
      <li>Basic in technology</li> (Graduated 2019)
      </ul>
    </p>
  </div>

  </div>
  
    <div className='border-gray-500 border-1  w-lg text-center h-[60vh] rounded-xl m-10 p-4'>
    <h2 class="flex items-center text-xl font-bold justify-center mb-5 mt-3 text-yellow-500">
      Contact Me
</h2>
 <div class="space-y-4 text-white text-start ml-10">
 <label htmlFor="">FirstName :</label>
 <input className='border-gray-400 border-1 rounded-lg p-1 ml-2 w-[60%] outline-hidden' type="text"/> <br />
  <label htmlFor="">LastName :</label>
 <input className='border-gray-400 border-1 rounded-lg p-1 ml-2 w-[60%] outline-hidden'  type="text"/> <br />
  <label htmlFor=""> User-Email :</label>
 <input className='border-gray-400 border-1 rounded-lg p-1 ml-2 w-[60%] outline-hidden'  type="Email"/> <br />
 <label htmlFor="">Message :</label><br /> <br />
 <textarea className='border-gray-400 border-1 rounded-lg p-1 ml-2 w-[80%] pb-15 outline-hidden'  name="" placeholder='message'></textarea>
<p className='w-[20%]  bg-blue-500 text-white font-medium text-base p-2 cursor-pointer rounded-xl shadow-lg  text-center ml-2'>Send</p>
   
  </div>

  </div>

  
</section>
     
  </div>
</section>



      </>
  );

 }
 export default Body;