import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import TutorCard from "../../components/TutorCard";

const Browse = (props) => {
  return (
    <div className="m-2 flex-row">
      <h1 className="text-3xl font-semibold capitalize">Tutor Catalogue</h1>
      <TutorCard
        bio="hello there"
        imageUrl="/tutor.jpg"
        isVerified={true}
        name="Tutor 1"
        id="tutor1"
      />
      <TutorCard
        bio="hellosadf there"
        imageUrl="/tutor.jpg"
        isVerified={true}
        name="Tutor 2"
        id="tutor2"
      />
      <TutorCard
        bio="hello anaaamethere"
        imageUrl="/tutor.jpg"
        isVerified={true}
        name="Tutor 3"
        id="tutor3"
      />
      <TutorCard
        bio="asdfhello there"
        imageUrl="/tutor.jpg"
        isVerified={true}
        name="Tutor 4"
        id="tutor4"
      />
      <TutorCard
        bio="hello there"
        imageUrl="/tutor.jpg"
        isVerified={true}
        name="Tutor 5"
        id="tutor5"
      />
    </div>
  );
};
export default Browse;
