// sceneEffectFunctions.ts
export const calculateParallaxEffect = ({
  scrollPosition,
  sceneStart,
  sceneEnd,
  effectFactor,
  maxTranslationX,
  maxTranslationY,
}: {
  scrollPosition: number;
  sceneStart: number;
  sceneEnd: number;
  effectFactor: number;
  maxTranslationX: number;
  maxTranslationY: number;
}): { x: number; y: number } => {
  const progress = (scrollPosition - sceneStart) / (sceneEnd - sceneStart);
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

export const sceneEffectFunctions: ((scrollPosition: number) => {
  x: number;
  y: number;
})[] = [
  // 1.1
  (scrollPosition) =>
    calculateParallaxEffect({
      scrollPosition,
      sceneStart: 0,
      sceneEnd: 1000,
      effectFactor: 0.5,
      maxTranslationX: 200,
      maxTranslationY: 700,
    }),
  // 1.2
  (scrollPosition) =>
    calculateParallaxEffect({
      scrollPosition,
      sceneStart: 700,
      sceneEnd: 1200,
      effectFactor: 0.5,
      maxTranslationX: 700,
      maxTranslationY: 700,
    }),
  // 2.1
  (scrollPosition) =>
    calculateParallaxEffect({
      scrollPosition,
      sceneStart: 1500,
      sceneEnd: 2000,
      effectFactor: 0.5,
      maxTranslationX: 300,
      maxTranslationY: 700,
    }),
  // 3
  (scrollPosition) =>
    calculateParallaxEffect({
      scrollPosition,
      sceneStart: 2000,
      sceneEnd: 2900,
      effectFactor: 0.5,
      maxTranslationX: 100,
      maxTranslationY: 700,
    }),
];
