function Carousel() {
  return (
    <div className="bg-offWhite bg-opacity-50">
      <div className="carousel carousel-center bg-filmRoll rounded-box pl-2 mx-auto scale-75">
        <div>
          <h1 className="text-lightSage text-right text-3xl font-bold font-lato mb-1 ml-1.5">
            from the <span className="text-offWhite font-logo">.</span>{' '}
            archives
          </h1>
        </div>
        <div className="carousel-item">
          <img
            src="https://media.istockphoto.com/id/1393966935/photo/old-and-broken-jewelry-and-on-euro-banknotes-on-dark-background-sell-gold-for-money-concept.jpg?b=1&s=170667a&w=0&k=20&c=wcCFO1kOBuVUhuYR0dTcWbhFBDIHE6bq7EAaiSQJpu4="
            alt="rings n tings"
            style={{ width: "300px", height: "200px" }}
            className="rounded-box scale-90 md:scale-90 lg:scale-75"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1623040594055-9afc9b891b04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVucyUyMGpld2Vscnl8ZW58MHx8MHx8&w=1000&q=80"
            alt="man with chain"
            style={{ width: "300px", height: "200px" }}
            className="rounded-box scale-90 md:scale-90 lg:scale-75"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?cs=srgb&dl=pexels-m%C3%ADdia-1454171.jpg&fm=jpg"
            alt="woman with necklaces"
            style={{ width: "300px", height: "200px" }}
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?cs=srgb&dl=pexels-godisable-jacob-1191531.jpg&fm=jpg"
            alt="woman with necklaces"
            style={{ width: "300px", height: "200px" }}
            className="rounded-box scale-50 md:scale-75 lg:scale-50 h-auto w-full"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?cs=srgb&dl=pexels-godisable-jacob-1191531.jpg&fm=jpg"
            alt="people at fruit stand"
            style={{ width: "300px", height: "200px" }}
            className="rounded-box scale-90 md:scale-90 lg:scale-75"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.pinimg.com/564x/78/4f/03/784f031979b4ef8c39d62a56db790048.jpg"
            alt="collection of crystals"
            className="rounded-box scale-90 md:scale-90 lg:scale-75"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;

// import React, { Component } from 'react';
// import { CarouselData } from './CarouselData';
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
// import Swipe from 'react-easy-swipe';

// class Carousel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentSlide: 0,
//       paused: false,
//     };
//   }

//   componentDidMount() {
//     setInterval(() => {
//       if (this.state.paused === false) {
//         let newSlide =
//           this.state.currentSlide === CarouselData.length - 1
//             ? 0
//             : this.state.currentSlide + 1;
//         this.setState({ currentSlide: newSlide });
//       }
//     }, 4000);
//   }

//   nextSlide = () => {
//     let newSlide =
//       this.state.currentSlide === CarouselData.length - 1
//         ? 0
//         : this.state.currentSlide + 1;
//     this.setState({ currentSlide: newSlide });
//   };

//   prevSlide = () => {
//     let newSlide =
//       this.state.currentSlide === 0
//         ? CarouselData.length - 1
//         : this.state.currentSlide - 1;
//     this.setState({ currentSlide: newSlide });
//   };

//   setCurrentSlide = (index) => {
//     this.setState({ currentSlide: index });
//   };

//   render() {
//     return (
//       <div className="object-center bg-offWhite bg-opacity-50 p-2 pb-4">
//         <div className="mt-8">
//           <h1 className="text-darkSage text-center text-3xl underline decoration-dotted decoration-lightSage font-bold font-lato mb-1 pb-2">
//             the <span className="text-logo font-logo">gentle.</span> archives
//           </h1>
//           <div className="aspect-square border-dotted border-2 border-darkSage p-6 max-w-lg h-72 flex overflow-hidden relative mx-auto">
//             <AiOutlineLeft
//               onClick={this.prevSlide}
//               className="absolute left-0 text-3xl inset-y-1/2 bg-offWhite bg-opacity-50 text-darkGreen cursor-pointer rounded-full border-spacing-px hover:text-lightSage hover:border-lightSage"
//             />

//             <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
//               {CarouselData.map((slide, index) => {
//                 return (
//                   <img
//                     src={slide.image}
//                     alt="This is a carousel slide"
//                     key={index}
//                     className={
//                       index === this.state.currentSlide
//                         ? 'block w-full h-auto object-cover'
//                         : 'hidden'
//                     }
//                     onMouseEnter={() => {
//                       this.setState({ paused: true });
//                     }}
//                     onMouseLeave={() => {
//                       this.setState({ paused: false });
//                     }}
//                   />
//                 );
//               })}
//             </Swipe>

//             <div className="absolute w-full flex justify-center bottom-0">
//               {CarouselData.map((element, index) => {
//                 return (
//                   <div
//                     className={
//                       index === this.state.currentSlide
//                         ? 'h-2 w-2 bg-lightSage rounded-full mx-2 mb-2 cursor-pointer'
//                         : 'h-2 w-2 bg-darkSage rounded-full mx-2 mb-2 cursor-pointer'
//                     }
//                     key={index}
//                     onClick={() => {
//                       this.setCurrentSlide(index);
//                     }}
//                   ></div>
//                 );
//               })}
//             </div>

//             <AiOutlineRight
//               onClick={this.nextSlide}
//               className="absolute right-0 text-3xl inset-y-1/2 bg-offWhite bg-opacity-50 text-darkGreen cursor-pointer rounded-full border-spacing-px hover:text-lightSage hover:border-lightSage"
//             />
//           </div>
//           <p className="leading-relaxed font-lato text-darkGreen text-center">
//             follow us on social media{' '}
//             <span className="text-darkSage font-extrabold">@shopgentle</span>
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

// export default Carousel;
