import Card from "./Card";
import { ReactNode, useEffect } from "react";
import ImageGallery from "react-image-gallery";

interface ICarouselProps {
  children?: ReactNode;
  projects: object[];
}

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
const Carousel = ({ children, projects }: ICarouselProps) => {
  useEffect(() => {}, []);

  return (
    <div className="carousel">
      {children}
      <ImageGallery items={images} />;
    </div>
  );
};

export default Carousel;
