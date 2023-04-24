export const calculateParallaxEffect = ({
  progress,
  effectFactor,
  maxTranslationX,
  maxTranslationY,
}: {
  progress: number;
  effectFactor: number;
  maxTranslationX: number;
  maxTranslationY: number;
}): { x: number; y: number } => {
  const translationX = Math.min(
    progress * effectFactor * maxTranslationX,
    maxTranslationX
  );
  const translationY = Math.min(
    progress * effectFactor * maxTranslationY,
    maxTranslationY
  );
  return { x: translationX, y: translationY };
};

export const sceneEffectFunctions: ((progress: number) => {
  x: number;
  y: number;
})[] = [
  // 1.1
  (progress) => {
    return calculateParallaxEffect({
      progress,
      effectFactor: 0.5,
      maxTranslationX: 200,
      maxTranslationY: 700,
    });
  },
  // 1.2
  (progress) => {
    return calculateParallaxEffect({
      progress,
      effectFactor: 0.5,
      maxTranslationX: 0,
      maxTranslationY: 1400,
    });
  },
  // 2.1
  (progress) => {
    return calculateParallaxEffect({
      progress,
      effectFactor: 0.5,
      maxTranslationX: 1400,
      maxTranslationY: 1400,
    });
  },
  // Add more effect calculation functions as needed
];
