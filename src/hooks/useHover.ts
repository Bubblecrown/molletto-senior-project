// useHover.ts
import { useState } from "react";

type HoverPosition = [number, number, number];

interface HoverHandlers {
  handleHover: (
    hoverState: boolean,
    message: string,
    position?: HoverPosition
  ) => void;
  handlePointerEvents: (e: any, hoverState: boolean, message: string) => void;
}

export const useHover = (): [boolean, string, HoverPosition, HoverHandlers] => {
  const [isHover, setIsHover] = useState(false);
  const [message, setMessage] = useState<string>("");

  const [hoverPosition, setHoverPosition] = useState<HoverPosition>([0, 0, 0]);

  const handleHover = (
    hoverState: boolean,
    message: string,
    position?: HoverPosition
  ) => {
    setIsHover(hoverState);
    setMessage(message);
    if (position) {
      setHoverPosition([position[0] + 5, position[1] + 4, position[2] - 10]);
    }
  };

  const handlePointerEvents = (
    e: any,
    hoverState: boolean,
    message: string
  ) => {
    e.stopPropagation();
    const position = e.object.position.toArray();
    handleHover(hoverState, message, position);
  };

  return [
    isHover,
    message,
    hoverPosition,
    { handleHover, handlePointerEvents },
  ];
};
