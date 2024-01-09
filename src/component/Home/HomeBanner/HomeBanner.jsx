
import { Link } from 'react-router-dom'
import HomeBannerImg from '../../../../public/home-banner.jpg'

export const HomeBanner = () => {
  return (
    <div>
        <div className="max-w-6xl m-auto p-2 md:p-6 my-10 flex flex-col-reverse md:grid grid-cols-2 items-center">
            <div className="p-4 ">
                <h1 className='text-2xl md:text-4xl font-bold py-6'>Front End Web Developer</h1>
                <p className='leading-7 pb-4 font-semibold text-gray-400'>Hi there! I'm a Professional Front End Developer specializing in React.JS, Next.JS and JavaScript. I’m passionate about creating responsive, user-friendly interfaces that seamlessly integrate with backend systems. Proficient in state management, component-based architecture, and optimizing web performance. </p> 
                <Link to={"/about"}>
                  <button className='btn text-gray-400 '>More about</button>
                </Link>
            </div>
            <div className="px-20 md:px-10 lg:px-20 w-fit">
                <img className='rounded-full w-80' src={HomeBannerImg} alt="" />
            </div>
        </div>
    </div>
  )
}
