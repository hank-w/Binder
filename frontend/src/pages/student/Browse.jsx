import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import TutorCard from "../../components/TutorCard";

const Browse = (props) => {
  return (
    <div className="m-2 flex-row">
      <h1 className="text-3xl font-semibold capitalize">Tutor Catalogue</h1>
      <Carousel number={5}>
        <TutorCard
          bio="hello there"
          imageUrl="/tutor.jpg"
          isVerified={true}
          name="Tutor 1"
        />
        <TutorCard
          bio="hello there"
          imageUrl="/tutor.jpg"
          isVerified={true}
          name="Tutor 1"
        />
        <TutorCard
          bio="hello there"
          imageUrl="/tutor.jpg"
          isVerified={true}
          name="Tutor 1"
        />
        <TutorCard
          bio="hello there"
          imageUrl="/tutor.jpg"
          isVerified={true}
          name="Tutor 1"
        />
        <TutorCard
          bio="hello there"
          imageUrl="/tutor.jpg"
          isVerified={true}
          name="Tutor 1"
        />
      </Carousel>
    </div>
  );
};
export default Browse;
