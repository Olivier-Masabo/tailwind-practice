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
            <li>Resume</li>
            <li>Services</li>
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
      <div className="p-10 text-center font-bold text-2xl">
        ----------- About ------------
      </div>
           <div className="mt-10">
             <img class="flex  py-6 md:hidden" src={profil} alt="" />
             <div class="about-page">

<div class= "grid grid-cols-3 text-center" id="about">

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

  <h1 className="text-2xl text-center font-bold">-------- Resume ---------</h1>
<div className="border-amber-300 border-2 mt-4 flex justify-evenly items-center">
  <div>
    <h1>hello</h1>
  </div>

  <div>
    <p>second div</p>
    </div>
</div>
      </>
  );

 }
 export default Body;