import AboutImg from './../../../public/about-image.png'

export const About = () => {
  return (
    <div className="">
      <div className="max-w-6xl m-auto flex-col-reverse flex md:grid grid-cols-2 mb-20 px-6">
        <div className="">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold my-6">I'm <span>Susanto Sarker</span> <br /> A Front End Developer </h1>
          <div className="font-semibold text-gray-400">
            <p> Be a Professional Front End Developer, I specializing in React.JS, Next.JS and JavaScrip. I prioritize client satisfaction and ensure that the work I deliver is of high quality. I provide clean code and pixel-perfect designs that make websites look good. If you're looking for a reliable and skilled developer, feel free to contact me.</p> <br />
            <p>Dedicated to staying current with industry trends and delivering high-quality, visually appealing web applications.  I consistently deliver visually appealing web applications that marry functionality with aesthetics, creating an immersive and satisfying user journey.</p>
            <br />
            <div className="">
              <h3 className='leading-10'>I'm Specialized in?</h3> 
              <ul className='leading-7'>
                <li>React JS for Front End</li>
                <li>Next JS for Front End</li>
                <li>Node JS for Back End</li>
              </ul>
            </div>
            <br />
            <p>My first priority is to satisfy my clients. </p>
            <p> I can provide clean code and pixel perfect design. I will ensure your website will be good looking, user friendly and fully responsive. I also make websites more & more interactive with web animations.</p>
            <br />
            <p> So feel free to contact me. I’ll reply to you ASAP.</p>
            <br />
            <p>Thanks for Reading</p>
            
          </div>
        </div>
        <div className="p-10 md:px-20 lg:px-32 flex justify-center ">
          <img className='rounded-3xl h-fit w-80' src={AboutImg} alt="" />
        </div>
      </div>
    </div>
  )
}
