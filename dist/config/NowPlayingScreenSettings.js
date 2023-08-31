"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultNowPlayingScreenSettings = void 0;
exports.DefaultNowPlayingScreenSettings = {
    // Track info: visibility
    trackInfoVisibility: 'default',
    titleVisibility: true,
    artistVisibility: true,
    albumVisibility: true,
    mediaInfoVisibility: true,
    // Track info: font sizes
    fontSizes: 'auto',
    titleFontSize: '',
    artistFontSize: '',
    albumFontSize: '',
    mediaInfoFontSize: '',
    seekTimeFontSize: '',
    metadataFontSize: '',
    // Track info: font colors
    fontColors: 'default',
    titleFontColor: '#FFFFFF',
    artistFontColor: '#CCCCCC',
    albumFontColor: '#CCCCCC',
    mediaInfoFontColor: '#CCCCCC',
    seekTimeFontColor: '#CCCCCC',
    metadataFontColor: '#CCCCCC',
    // Track info: text margins
    textMargins: 'auto',
    titleMargin: '',
    artistMargin: '',
    albumMargin: '',
    mediaInfoMargin: '',
    // Track info: text alignment
    textAlignmentH: 'left',
    textAlignmentV: 'flex-start',
    textAlignmentLyrics: 'center',
    // Track info: max lines
    maxLines: 'auto',
    maxTitleLines: '',
    maxArtistLines: '',
    maxAlbumLines: '',
    // Track info: order
    trackInfoOrder: 'default',
    trackInfoTitleOrder: '',
    trackInfoArtistOrder: '',
    trackInfoAlbumOrder: '',
    trackInfoMediaInfoOrder: '',
    // Track info: marquee title
    trackInfoMarqueeTitle: false,
    // Widgets: colors
    widgetColors: 'default',
    widgetPrimaryColor: '#CCCCCC',
    widgetHighlightColor: '#24A4F3',
    // Widgets: visibility
    widgetVisibility: 'default',
    playbackButtonsVisibility: true,
    seekbarVisibility: true,
    // Widgets: size / margins
    playbackButtonSizeType: 'auto',
    playbackButtonSize: '',
    widgetMargins: 'auto',
    playbackButtonsMargin: '',
    seekbarMargin: '',
    // Albumart: visibility
    albumartVisibility: true,
    // Albumart: size
    albumartSize: 'auto',
    albumartWidth: '',
    albumartHeight: '',
    // Albumart: fit
    albumartFit: 'cover',
    // ALbumart: border
    albumartBorder: '',
    albumartBorderRadius: '',
    // VU Meter
    vuMeter: {
        templateType: 'random',
        randomRefreshInterval: 0,
        randomRefreshOnTrackChange: true
    },
    // Dock component: menu
    dockedMenu: {
        enabled: true
    },
    // Dock component: action panel trigger
    dockedActionPanelTrigger: {
        enabled: true,
        iconSettings: 'default',
        iconStyle: 'expand_more',
        iconSize: '',
        iconColor: '#CCCCCC',
        opacity: '',
        margin: ''
    },
    dockedVolumeIndicator: {
        enabled: false,
        fontSettings: 'default',
        fontSize: '',
        fontSizePercentSymbol: '',
        fontColor: '#CCCCCC',
        iconSettings: 'default',
        iconSize: '',
        iconColor: '#CCCCCC',
        volumeBarPosition: 'center',
        volumeBarOrientation: 'horizontal',
        placement: 'bottom-right',
        displayOrder: '',
        margin: '',
        showVolumeBarOnClick: false
    },
    // Dock component: clock
    dockedClock: {
        enabled: false,
        placement: 'top-left',
        showInfo: 'dateTime',
        fontSettings: 'default',
        fontSize: '',
        dateColor: '#CCCCCC',
        timeColor: '#CCCCCC',
        dateFormat: 'default',
        yearFormat: 'none',
        monthFormat: 'short',
        dayFormat: 'numeric',
        dayOfWeekFormat: 'none',
        timeFormat: 'default',
        hourFormat: 'numeric',
        hour24: false,
        showSeconds: false,
        displayOrder: '',
        margin: ''
    },
    // Dock component: weather
    dockedWeather: {
        enabled: false,
        placement: 'top-left',
        fontSettings: 'default',
        fontSize: '',
        fontColor: '#CCCCCC',
        iconSettings: 'default',
        iconStyle: 'filled',
        iconSize: '',
        iconMonoColor: '#CCCCCC',
        iconAnimate: false,
        displayOrder: '',
        showHumidity: false,
        showWindSpeed: false,
        margin: ''
    }
};
//# sourceMappingURL=NowPlayingScreenSettings.js.map