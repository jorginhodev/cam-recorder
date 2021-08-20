import { h, Component, State } from '@stencil/core';

@Component({
  tag: 'cam-recorder',
  styleUrl: 'cam-recorder.css',
  shadow: true,
})
export class CamRecorder {
  @State() constraints: object;
  @State() showCamera: boolean = false;

  connectedCallback() {
    console.log('iniciouuuu');
    this.showCamera = true;
    this.constraints = {
      audio: false,
      video: {
        facingMode: 'user',
        advanced: [{ torch: true }],
        // width: this.isMobile ? this.maxWidth : this.maxHeight,
        // height: this.isMobile ? this.maxHeight : this.maxWidth,
      },
    };
    this.initCamera(this.constraints);
  }

  async initCamera(constraints: object) {
    try {
      // console.log((await navigator.mediaDevices.enumerateDevices()).filter(item => item.kind === 'videoinput'));
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      // this.handleSuccess(stream);
      // console.log('streammm');
      console.log(stream);
    } catch (error) {
      console.error('navigator.getUserMedia error:', error);
    }
  }

  render() {
    return (
      // <div class="wrapper">
      //   <section class="content-wrap">
      //     <div id="safe-zone" class="safe-zone"></div>
      //     <video id="gum" playsinline autoplay muted></video>
      //   </section>
      // </div>
      this.showCamera && (
        <div class="container">
          <video id="gum" playsinline autoplay muted></video>
        </div>
      )
    );
  }
}
