import { LayerImage, TaleSection } from "./GlobalStyle";
import { useHorizontalScroll } from "./hooks/useHorizontalScroll";

const FairyTale = () => {
  const scrollRef = useHorizontalScroll();

  return (
    <TaleSection ref={scrollRef}>
      <LayerImage style={{ whiteSpace: "nowrap" }}>
        <span>
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/030/024/421/large/julian-gariba-test.jpg?1599376012"
            alt=""
          /><img
          src="https://www.seekpng.com/png/full/289-2898029_medium-image-clip-art-cartoon-tree.png"
          alt=""
          style={{
            position: "relative",
            zIndex: 2,
            width: "400px",
            height: "auto",
          }}
        />
        </span>
        {/* tree */}
        <span>
          <img
            src="https://www.seekpng.com/png/full/289-2898029_medium-image-clip-art-cartoon-tree.png"
            alt=""
            style={{
              position: "relative",
              zIndex: 2,
              width: "400px",
              height: "auto",
            }}
          />
        </span>
        {/* end tree */}
        <span>
          <img
            src="https://preview.redd.it/2wnfdtan9dw41.png?auto=webp&s=0f5a488e3ba84fcf1b8de29d61cd4e18409a49d6"
            alt=""
          />
        </span>
      </LayerImage>
    </TaleSection>
  );
};

export default FairyTale;
