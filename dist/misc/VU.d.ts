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
        indicator: string;
        screenBackground: string | null;
    };
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
    };
    stepWidth: {
        regular: number;
        overload: number;
    };
}
export interface VUMeterCircularBase extends VUMeterBase {
    type: 'circular';
    stepsPerDegree: number;
    startAngle: number;
    stopAngle: number;
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
}
export interface VUMeterCircularMono extends VUMeterCircularBase {
    channels: 1;
    monoOrigin: {
        x: number;
        y: number;
    };
}
export type VUMeter = VUMeterLinear | VUMeterCircularStereo | VUMeterCircularMono;
export interface VUMeterData {
    left: number;
    right: number;
    mono: number;
}
//# sourceMappingURL=VU.d.ts.map