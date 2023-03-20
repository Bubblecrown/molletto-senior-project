import { Mesh } from "three";

export {};
declare global {
  interface Window {
    activeMesh: Mesh | undefined | any;
  }
}
