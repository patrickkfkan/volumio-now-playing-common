Common resources shared between [Volumio Now Playing plugin](https://github.com/patrickkfkan/volumio-now-playing) and [client](https://github.com/patrickkfkan/volumio-now-playing-reactjs-client).

## Changelog

0.3.4
- Add `showClock` to idle screen settings ([@phts](https://github.com/phts) - [#3](https://github.com/patrickkfkan/volumio-now-playing-common/pull/3))

0.3.3
- `NowPlayingMetadataProvider` v1.1.0: add `duration` arg to `getSongInfo()`

0.3.2
- Add Info view tab to `StartupOptions`

0.3.1
- Add Info View layout settings

0.3.0
- Add `NowPlayingPluginSupport` interface

0.2.7
- Add synced lyrics to song metadata and related settings
- Add `NowPlayingMetadataProvider` interface

0.2.6
- `ContentRegionSettings`: add portrait orientation options

0.2.5
- Add `NowPlayingScreenSettings.fontStyles` settings

0.2.4
- Add `NowPlayingScreenSettings.albumartMargin`
- Add `ContentRegionSettings`

0.2.3
- `NowPlayingScreenSettings`
  - Add seek bar styling options
  - Add `dockedMediaFormat`options
  - Add more props to `dockedMenu`

0.2.2
- Add `StartupOptions`

0.2.1
- `BackgroundSettings`
  - Add `myBackground` props

0.2.0
- `NowPlayingScreenSettings`
  - Add `dockedVolumeIndicator.fontSizePercentSymbol`
  - Add `trackInfoVisibility` and related props
- `IdleScreenSettings`
  - Add `myBackgroundImage` and related props
  - Add `weatherAreaHeight` and related props

0.1.0
- Initial commit