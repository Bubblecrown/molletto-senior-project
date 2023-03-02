import { useEffect, RefObject } from "react";

type UseCanvasProps = {
  canvasRef: RefObject<HTMLCanvasElement>;
  imageSources: string[];
  overlapSources?: string[];
};

export const useCanvas = ({
  canvasRef,
  imageSources,
  overlapSources = [],
}: UseCanvasProps) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    canvas.width = canvasWidth * (imageSources.length + overlapSources.length);
    canvas.height = canvasHeight;

    imageSources.forEach((src, i) => {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        const scaleFactor = canvasWidth / image.width;
        ctx?.drawImage(
          image,
          0,
          0,
          image.width,
          image.height,
          i * canvasWidth,
          0,
          canvasWidth,
          canvasHeight
        );
      };
    });

    overlapSources.forEach((src, i) => {
      const overlapImage = new Image();
      overlapImage.src = src;
      overlapImage.onload = () => {
        const scaleFactor = canvasWidth / overlapImage.width;
        ctx?.drawImage(
          overlapImage,
          0,
          0,
          overlapImage.width,
          overlapImage.height,
          i * canvasWidth,
          0,
          canvasWidth,
          canvasHeight
        );
      };
    });
  }, [canvasRef, imageSources, overlapSources]);
};
