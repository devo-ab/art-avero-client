import { Typewriter } from "react-simple-typewriter";
import 'animate.css';

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full relative rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/images-1.jpeg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/images-2.jpeg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/images-3.jpeg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/images-4.jpeg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div className="absolute top-1/4 lg:top-1/4 px-20 text-indigo-500 text-4xl lg:text-7xl font-bold">
          <div className="flex gap-5 text-center justify-center items-center mx-auto">
            <h1 className="text-center">Welcome To <Typewriter
              words={["Art", "Avero"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            /></h1>
            
          </div>
          <p className="text-base lg:text-2xl text-stone-50 text-center mt-1 lg:mt-5 animate__animated animate__slideInLeft">Welcome to our world of artistry, where each stroke tells a story, each color evokes emotion, and every creation is a masterpiece in its own right.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
