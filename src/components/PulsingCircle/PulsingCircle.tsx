import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setActiveCard } from "../../slices/CardSlice";
import { CircleContainer, PulsingContainer } from "./PulsingStyle";

const PulsingCircle = () => {
  const dispatch = useDispatch();
  const translateX = useSelector(
    (state: RootState) => state.activeCard.translateX
  );

  
  return (
    <PulsingContainer onClick={() => dispatch(setActiveCard())}>
      <CircleContainer d={translateX}></CircleContainer>
    </PulsingContainer>
  );
};

export default PulsingCircle;
