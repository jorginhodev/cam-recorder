import { h, Component, State } from '@stencil/core';

@Component({
  tag: 'cam-recorder',
  styleUrl: 'cam-recorder.css',
  shadow: true,
})
export class CamRecorder {
  @State() recordButton: object;
  @State() rotateButton: object;
  @State() flashButton: object;
  @State() downloadButton: object;
  @State() contentWrap: object;
  @State() gumVideo: object;
  @State() footer: object;
  @State() capabilities: object;
  @State() counter: object;
  @State() safeZone: object;
  @State() containerProgressBar: object;
  @State() progressBar: object;
  @State() videoCurrentTimeDisplay: object;
  @State() frameSteps: object;
  @State() timers: object;
  @State() faceCam: boolean;
  @State() torch: boolean;
  @State() srcTimer: number;
  @State() timer: number;
  @State() videoTime: number;
  @State() mediaRecorder: object;
  @State() recordedBlobs: object;
  @State() isMobile: boolean;
  @State() stream: object;
  @State() frameStepsIndex: number;
  @State() frameStepsTimes: object;
  @State() frameStepPhrases: object;
  @State() maxWidth: number;
  @State() maxHeight: number;
  @State() aspectRatio: object;

  // connectedCallback() {
  //   console.log('iniciouuuu');
  //   this.gumVideo = shadowRoot.querySelector("video#gum")
  // }

  async showCamera() {
    await this.initCamera({
      audio: false,
      video: {
        facingMode: this.faceCam ? 'user' : 'environment',
        advanced: [{ torch: this.torch }],
        width: this.isMobile ? this.maxWidth : this.maxHeight,
        height: this.isMobile ? this.maxHeight : this.maxWidth,
      },
    });
  }

  async initCamera(constraints) {
    try {
      // console.log((await navigator.mediaDevices.enumerateDevices()).filter(item => item.kind === 'videoinput'))
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.handleSuccess(stream);
      console.log('streammm');
      console.log(this.stream);
    } catch (e) {
      console.error('navigator.getUserMedia error:', e);
    }
  }

  async handleSuccess(stream) {
    // window.stream = stream;
    this.stream = stream;
    // this.gumVideo.srcObject = stream;
  }

  render() {
    return (
      <div class="wrapper">
        <section class="content-wrap">
          <div id="safe-zone" class="safe-zone"></div>
          <video id="gum" playsinline autoplay muted></video>
        </section>
      </div>
    );
  }
}
