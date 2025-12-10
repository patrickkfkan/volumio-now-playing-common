import { BackgroundOverlay, BackgroundPosition, ImageFit, CommonSettingsOf, WeatherIconStyle } from './CommonSettings.js';

export interface IdleScreenSettings {
  enabled?: 'all' | 'disabled' | 'kiosk';
  waitTime?: number;
  showClock?: boolean;
  showLocation?: boolean;
  showWeather?: boolean;
  mainAlignment?: 'flex-start' | 'center' | 'flex-end' | 'cycle';
  mainAlignmentCycleInterval?: number;

  // Time format
  timeFormat?: 'default' | 'custom';
  hour24?: boolean;
  showSeconds?: boolean;

  // Font sizes
  fontSizes?: 'auto' | 'custom';
  timeFontSize?: string;
  dateFontSize?: string;
  locationFontSize?: string;
  weatherCurrentBaseFontSize?: string;
  weatherForecastBaseFontSize?: string;

  // Font colors
  fontColors?: 'default' | 'custom';
  timeColor?: string;
  dateColor?: string;
  locationColor?: string;
  weatherCurrentColor?: string;
  weatherForecastColor?: string;

  // Icons
  weatherIconSettings?: 'default' | 'custom';
  weatherIconStyle?: WeatherIconStyle;
  weatherCurrentIconSize?: string;
  weatherForecastIconSize?: string
  weatherCurrentIconMonoColor?: string;
  weatherForecastIconMonoColor?: string;
  weatherCurrentIconAnimate?: boolean;

  // Background
  backgroundType?: 'unsplash' | 'color' | 'volumioBackground' | 'myBackground';

  // Background type: color
  backgroundColor?: string;

  // Background type: Volumio background
  volumioBackgroundImage?: string;
  volumioBackgroundFit?: ImageFit;
  volumioBackgroundPosition?: BackgroundPosition;
  volumioBackgroundBlur?: string;
  volumioBackgroundScale?: string;

  // Background type: My background
  myBackgroundImageType?: 'random' | 'fixed';
  myBackgroundImage?: string;
  myBackgroundRandomRefreshInterval?: number;
  myBackgroundFit?: ImageFit;
  myBackgroundPosition?: BackgroundPosition;
  myBackgroundBlur?: string;
  myBackgroundScale?: string;

  // Background type: Unsplash
  unsplashKeywords?: string;
  unsplashKeywordsAppendDayPeriod?: boolean;
  unsplashMatchScreenSize?: boolean;
  unsplashRefreshInterval?: number;
  unsplashBackgroundBlur?: string;

  // Background overlay
  backgroundOverlay?: BackgroundOverlay;
  backgroundOverlayColor?: string;
  backgroundOverlayColorOpacity?: string;
  backgroundOverlayGradient?: string;
  backgroundOverlayGradientOpacity?: string;

  // Weather background
  weatherBackground?: BackgroundOverlay;
  weatherBackgroundColor?: string;
  weatherBackgroundColorOpacity?: string;
  weatherBackgroundGradient?: string;
  weatherBackgroundGradientOpacity?: string;

  // Weather area height
  weatherAreaHeightType?: 'auto' | 'custom';
  weatherAreaHeight?: string;
}

export const DefaultIdleScreenSettings: CommonSettingsOf<IdleScreenSettings> = {
  enabled: 'kiosk',
  waitTime: 30,
  showClock: true,
  showLocation: true,
  showWeather: true,
  mainAlignment: 'flex-start',
  mainAlignmentCycleInterval: 60,

  // Time format
  timeFormat: 'default',
  hour24: false,
  showSeconds: false,

  // Font sizes
  fontSizes: 'auto',
  timeFontSize: '',
  dateFontSize: '',
  locationFontSize: '',
  weatherCurrentBaseFontSize: '',
  weatherForecastBaseFontSize: '',

  // Font colors
  fontColors: 'default',
  timeColor: '#FFFFFF',
  dateColor: '#FFFFFF',
  locationColor: '#FFFFFF',
  weatherCurrentColor: '#FFFFFF',
  weatherForecastColor: '#FFFFFF',

  // Icons
  weatherIconSettings: 'default',
  weatherIconStyle: 'filled',
  weatherCurrentIconSize: '',
  weatherForecastIconSize: '',
  weatherCurrentIconMonoColor: '#FFFFFF',
  weatherForecastIconMonoColor: '#FFFFFF',
  weatherCurrentIconAnimate: false,

  // Background
  backgroundType: 'unsplash',

  // Background type: color
  backgroundColor: '#000000',

  // Background type: Volumio background
  volumioBackgroundImage: '',
  volumioBackgroundFit: 'cover',
  volumioBackgroundPosition: 'center',
  volumioBackgroundBlur: '',
  volumioBackgroundScale: '',

  // Background type: My background

  myBackgroundImageType: 'random',
  myBackgroundImage: '',
  myBackgroundRandomRefreshInterval: 10,
  myBackgroundFit: 'cover',
  myBackgroundPosition: 'center',
  myBackgroundBlur: '',
  myBackgroundScale: '',

  // Background type: Unsplash
  unsplashKeywords: '',
  unsplashKeywordsAppendDayPeriod: false,
  unsplashMatchScreenSize: true,
  unsplashRefreshInterval: 10,
  unsplashBackgroundBlur: '',

  // Background overlay
  backgroundOverlay: 'default',
  backgroundOverlayColor: '#000000',
  backgroundOverlayColorOpacity: '',
  backgroundOverlayGradient: '',
  backgroundOverlayGradientOpacity: '',

  // Weather background
  weatherBackground: 'default',
  weatherBackgroundColor: '#000000',
  weatherBackgroundColorOpacity: '',
  weatherBackgroundGradient: '',
  weatherBackgroundGradientOpacity: '',

  // Weather area height
  weatherAreaHeightType: 'auto',
  weatherAreaHeight: ''
};
