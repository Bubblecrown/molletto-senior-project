
declare module 'react-three-fpscontrols' {
  import { ReactThreeFiber } from 'react-three-fiber';

  export interface FPSControlsProps {
    camProps?: ReactThreeFiber.Object3DNode<any, any>;
    orbitProps?: ReactThreeFiber.Object3DNode<any, any>;
    enableJoystick?: boolean;
    enableKeyboard?: boolean;
  }

  export const FPSControls: React.FC<FPSControlsProps>;
}