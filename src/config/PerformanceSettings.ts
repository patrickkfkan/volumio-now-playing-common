import { CommonSettingsOf } from './CommonSettings.js';

export interface PerformanceSettings {
  // Transition effects
  transitionEffectsKiosk?: boolean;
  transitionEffectsOtherDevices?: boolean;

  // Screen unmount
  unmountScreensOnExit?: 'default' | 'custom';
  unmountNowPlayingScreenOnExit?: boolean;
  unmountBrowseScreenOnExit?: boolean;
  unmountQueueScreenOnExit?: boolean;
  unmountVolumioScreenOnExit?: boolean;

  // VU Meter Rendering
  vuMeterRenderingKiosk?: 'webgl' | 'css';
  vuMeterRenderingOtherDevices?: 'webgl' | 'css';
  vuMeterWebGLShowStats?: boolean;
}

export const DefaultPerformanceSettings: CommonSettingsOf<PerformanceSettings> = {
  // Transition effects
  transitionEffectsKiosk: false,
  transitionEffectsOtherDevices: true,

  // Screen unmount
  unmountScreensOnExit: 'default',
  unmountNowPlayingScreenOnExit: true,
  unmountBrowseScreenOnExit: false,
  unmountQueueScreenOnExit: false,
  unmountVolumioScreenOnExit: true,

  // VU Meter Rendering
  vuMeterRenderingKiosk: 'css',
  vuMeterRenderingOtherDevices: 'webgl',
  vuMeterWebGLShowStats: false
};
