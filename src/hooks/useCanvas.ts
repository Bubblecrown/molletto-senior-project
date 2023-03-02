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
    const images: HTMLImageElement[] = [];
    const overlaps: HTMLImageElement[] = [];
    const mouse = { x: 0, y: 0 };

    canvas.width = canvasWidth * imageSources.length;
    canvas.height = canvasHeight;

    imageSources.forEach((src, i) => {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        images.push(image);
        if (
          images.length === imageSources.length &&
          overlaps.length === overlapSources.length
        ) {
          renderCanvas();
        }
      };
    });

    overlapSources.forEach((src, i) => {
      const overlapImage = new Image();
      overlapImage.src = src;
      overlapImage.onload = () => {
        overlaps.push(overlapImage);
        if (
          images.length === imageSources.length &&
          overlaps.length === overlapSources.length
        ) {
          renderCanvas();
        }
      };
    });

    const renderCanvas = () => {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      images.forEach((image, i) => {
        const scaleFactor = canvasWidth / image.width;
        const xPos = i * canvasWidth;
        const yPos = 0;
        const xShift = (mouse.x / canvasWidth) * (canvasWidth - image.width);
        const yShift = (mouse.y / canvasHeight) * (canvasHeight - image.height);
        const xFinal = xPos - xShift;
        const yFinal = yPos - yShift;
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
      });

      overlaps.forEach((overlap, i) => {
        const scaleFactor = canvasWidth / overlap.width;
        const xPos = i * canvasWidth;
        const yPos = 0;
        const xShift = (mouse.x / canvasWidth) * (canvasWidth - overlap.width);
        const yShift =
          (mouse.y / canvasHeight) * (canvasHeight - overlap.height);
        const xFinal = xPos - xShift;
        const yFinal = yPos - yShift;
        ctx?.drawImage(
          overlap,
          0,
          0,
          overlap.width,
          overlap.height,
          xFinal,
          yFinal,
          canvasWidth,
          canvasHeight
        );
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      renderCanvas();
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => canvas.removeEventListener("mousemove", handleMouseMove);
  }, [canvasRef, imageSources, overlapSources]);
};
