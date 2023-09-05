import { CommonSettingsOf } from './CommonSettings.js';
export interface StartupOptions {
    activeScreen?: 'nowPlaying.basicView' | 'nowPlaying.infoView' | 'nowPlaying.vuMeter' | 'browse' | 'volumio';
    activateIdleScreen?: boolean;
}
export declare const DefaultStartupOptions: CommonSettingsOf<StartupOptions>;
//# sourceMappingURL=StartupOptions.d.ts.map