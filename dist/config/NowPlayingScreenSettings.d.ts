import { DockComponentPlacement, ImageFit, CommonSettingsOf, WeatherIconStyle } from './CommonSettings.js';
export interface NowPlayingScreenSettings {
    trackInfoVisibility?: 'default' | 'custom';
    titleVisibility?: boolean;
    artistVisibility?: boolean;
    albumVisibility?: boolean;
    mediaInfoVisibility?: boolean;
    fontSizes?: 'auto' | 'custom';
    titleFontSize?: string;
    artistFontSize?: string;
    albumFontSize?: string;
    mediaInfoFontSize?: string;
    seekTimeFontSize?: string;
    metadataFontSize?: string;
    fontColors?: 'default' | 'custom';
    titleFontColor?: string;
    artistFontColor?: string;
    albumFontColor?: string;
    mediaInfoFontColor?: string;
    seekTimeFontColor?: string;
    metadataFontColor?: string;
    textMargins?: 'auto' | 'custom';
    titleMargin?: string;
    artistMargin?: string;
    albumMargin?: string;
    mediaInfoMargin?: string;
    textAlignmentH?: 'left' | 'center' | 'right';
    textAlignmentV?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
    textAlignmentLyrics?: 'left' | 'center' | 'right';
    maxLines?: 'auto' | 'custom';
    maxTitleLines?: string;
    maxArtistLines?: string;
    maxAlbumLines?: string;
    trackInfoOrder?: 'default' | 'custom';
    trackInfoTitleOrder?: string;
    trackInfoArtistOrder?: string;
    trackInfoAlbumOrder?: string;
    trackInfoMediaInfoOrder?: string;
    trackInfoMarqueeTitle?: boolean;
    widgetColors?: 'default' | 'custom';
    widgetPrimaryColor?: string;
    widgetHighlightColor?: string;
    widgetVisibility?: 'default' | 'custom';
    playbackButtonsVisibility?: boolean;
    seekbarVisibility?: boolean;
    playbackButtonSizeType?: 'auto' | 'custom';
    playbackButtonSize?: string;
    widgetMargins?: 'auto' | 'custom';
    playbackButtonsMargin?: string;
    seekbarMargin?: string;
    albumartVisibility?: boolean;
    albumartSize?: 'auto' | 'custom';
    albumartWidth?: string;
    albumartHeight?: string;
    albumartFit?: ImageFit;
    albumartBorder?: string;
    albumartBorderRadius?: string;
    dockedMenu?: {
        enabled?: boolean;
    };
    dockedActionPanelTrigger?: {
        enabled?: boolean;
        iconSettings?: 'default' | 'custom';
        iconStyle?: 'expand_more' | 'expand_circle_down' | 'arrow_drop_down' | 'arrow_drop_down_circle' | 'arrow_downward' | 'arrow_circle_down';
        iconSize?: string;
        iconColor?: string;
        opacity?: string;
        margin?: string;
    };
    dockedVolumeIndicator?: {
        enabled?: boolean;
        fontSettings?: 'default' | 'custom';
        fontSize?: string;
        fontSizePercentSymbol?: string;
        fontColor?: string;
        iconSettings?: 'default' | 'custom';
        iconSize?: string;
        iconColor?: string;
        volumeBarPosition?: 'anchored' | 'center';
        volumeBarOrientation?: 'horizontal' | 'vertical';
        placement?: DockComponentPlacement;
        displayOrder?: string;
        margin?: string;
        showVolumeBarOnClick?: boolean;
    };
    dockedClock?: {
        enabled?: boolean;
        placement?: DockComponentPlacement;
        showInfo?: 'dateTime' | 'time' | 'date';
        fontSettings?: 'default' | 'custom';
        fontSize?: string;
        dateColor?: string;
        timeColor?: string;
        dateFormat?: 'default' | 'custom';
        yearFormat?: 'none' | 'numeric' | '2-digit';
        monthFormat?: 'short' | 'numeric' | '2-digit' | 'long';
        dayFormat?: 'numeric' | '2-digit';
        dayOfWeekFormat?: 'none' | 'long' | 'short';
        timeFormat?: 'default' | 'custom';
        hourFormat?: 'numeric' | '2-digit';
        hour24?: boolean;
        showSeconds?: boolean;
        displayOrder?: string;
        margin?: string;
    };
    dockedWeather?: {
        enabled?: boolean;
        placement?: DockComponentPlacement;
        fontSettings?: 'default' | 'custom';
        fontSize?: string;
        fontColor?: string;
        iconSettings?: 'default' | 'custom';
        iconStyle?: WeatherIconStyle;
        iconSize?: string;
        iconMonoColor?: string;
        iconAnimate?: boolean;
        displayOrder?: string;
        showHumidity?: boolean;
        showWindSpeed?: boolean;
        margin?: string;
    };
}
export declare const DefaultNowPlayingScreenSettings: CommonSettingsOf<NowPlayingScreenSettings>;
//# sourceMappingURL=NowPlayingScreenSettings.d.ts.map