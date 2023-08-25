export interface VUMeterBase {
  type: 'linear' | 'circular';
  meter: {
    x: number;
    y: number;
  };
  channels: number;
  uiRefreshPeriod: number;
  bgrFilename: string;
  indicatorFilename: string;
  screenBgr: string;
}

export interface VUMeterLinear extends VUMeterBase {
  type: 'linear';
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
  }
  stepWidth: {
    regular: number;
    overload: number;
  };
}

export interface VUMeterCircular extends VUMeterBase {
  type: 'circular';
  stepsPerDegree: number;
  startAngle: number;
  stopAngle: number;
  distance: number;
  leftOrigin: {
    x: number;
    y: number;
  }
  rightOrigin: {
    x: number;
    y: number;
  }
}

export type VUMeter = VUMeterLinear | VUMeterCircular;

export interface VUMeterData {
  left: number;
  right: number;
  mono: number;
}
