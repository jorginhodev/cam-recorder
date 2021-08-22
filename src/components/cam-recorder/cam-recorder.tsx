import { h, Component, State, Element, getAssetPath } from '@stencil/core';

@Component({
  tag: 'cam-recorder',
  styleUrl: 'cam-recorder.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class CamRecorder {
  @Element() el: HTMLElement;

  @State() constraints: object;
  @State() embedVideo: HTMLMediaElement;
  @State() showCamera: boolean = false;
  @State() frontalCamera: boolean = true;

  connectedCallback() {
    console.log('iniciouuuu');
    this.showCamera = true;
    this.constraints = {
      audio: false,
      video: {
        facingMode: this.frontalCamera ? "user" : "environment",
        advanced: [{ torch: true }],
        // width: this.isMobile ? this.maxWidth : this.maxHeight,
        // height: this.isMobile ? this.maxHeight : this.maxWidth,
      },
    };
    this.initCamera(this.constraints);
  }

  async initCamera(constraints: object) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.embedVideo = this.el.shadowRoot.querySelector('#gum');
      this.embedVideo.srcObject = stream;
    } catch (error) {
      console.error('navigator.getUserMedia error:', error);
    }
  }

  changeCam() {
    console.log("virar cam");
    this.frontalCamera = !this.frontalCamera;
    this.initCamera(this.constraints);
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

          <section class="actions" id="actions">
            {/* flash */}
            <img src={getAssetPath('./assets/flash.svg')} />

            {/* botão gravar */}
            <img src={getAssetPath('./assets/record.svg')} />

            {/* virar câmera */}
            <img onClick={this.changeCam.bind(this)} src={getAssetPath('./assets/rotate-cam.svg')} />
          </section>
        </div>
      )
    );
  }
}
