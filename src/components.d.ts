/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CamRecorder {
    }
}
declare global {
    interface HTMLCamRecorderElement extends Components.CamRecorder, HTMLStencilElement {
    }
    var HTMLCamRecorderElement: {
        prototype: HTMLCamRecorderElement;
        new (): HTMLCamRecorderElement;
    };
    interface HTMLElementTagNameMap {
        "cam-recorder": HTMLCamRecorderElement;
    }
}
declare namespace LocalJSX {
    interface CamRecorder {
    }
    interface IntrinsicElements {
        "cam-recorder": CamRecorder;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cam-recorder": LocalJSX.CamRecorder & JSXBase.HTMLAttributes<HTMLCamRecorderElement>;
        }
    }
}
