export interface VUMeterBase {
  name: string;
  type: 'linear' | 'circular';
  meter: {
    x: number;
    y: number;
  };
  channels: 1 | 2;
  uiRefreshPeriod: number;
  images: {
    background: string;
    foreground: string | null;
    indicator: string;
    screenBackground: string | null;
  };
}

export interface VUMeterLinear extends VUMeterBase {
  type: 'linear';
  channels: 2;
  left: {
    x: number;
    y: number;
  };
  right: {
    x: number;
    y: number;
  };
  position: {
    regular: number;
    overload: number;
  };
  stepWidth: {
    regular: number;
    overload: number;
  };
  direction: 'left-right' | 'bottom-top' | 'top-bottom' | 'center-edges' | 'edges-center';
  flipLeft: { x: boolean };
  flipRight: { x: boolean };
}

export interface VUMeterCircularBase extends VUMeterBase {
  type: 'circular';
  stepsPerDegree: number;
  distance: number;
}

export interface VUMeterCircularStereo extends VUMeterCircularBase {
  channels: 2;
  leftOrigin: {
    x: number;
    y: number;
  };
  rightOrigin: {
    x: number;
    y: number;
  };
  angle: {
    leftStart: number;
    leftStop: number;
    rightStart: number;
    rightStop: number;
  };
}

export interface VUMeterCircularMono extends VUMeterCircularBase {
  channels: 1;
  monoOrigin: {
    x: number;
    y: number;
  };
  angle: {
    start: number;
    stop: number;
  }
}

export type VUMeter = VUMeterLinear | VUMeterCircularStereo | VUMeterCircularMono;

export interface VUMeterPlayInfoTextElement {
  position: {
    x: number;
    y: number;
  };
  style: 'bold' | 'regular' | 'light';
}

export type VUMeterExtended = VUMeter & {
  extend: true;
  albumart: {
    position: {
      x: number;
      y: number;
    };
    size: {
      width: number;
      height: number;
    };
    border: {
      width: number;
    } | null;
  } | null;
  playInfo: {
    title: VUMeterPlayInfoTextElement | null;
    artist: VUMeterPlayInfoTextElement | null;
    album: VUMeterPlayInfoTextElement | null;
    sampleRate: VUMeterPlayInfoTextElement | null;
    center: boolean;
    maxWidth: number;
    trackType: {
      position: {
        x: number;
        y: number;
      };
      color: string;
      size: {
        width: number;
        height: number;
      };
    } | null;
  } | null;
  timeRemaining: {
    position: {
      x: number;
      y: number;
    }
    color: string;
  } | null;
  font: {
    size: {
      light: number;
      regular: number;
      bold: number;
      digi: number;
    };
    color: string;
  };
}

export interface VUMeterData {
  left: number;
  right: number;
  mono: number;
}
