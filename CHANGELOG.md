
# Change Log
All notable changes to this project will be documented in this file.




## [1.0.1] - 2021-11-21

Performance has been improved, issue() and issue() fixed, and some improvements added.

### Added
- `snackbar` attribute.
- `onClose` hook.
- `onShow` hook.
- `subtitle` attribute.
- `offset` attribute.
- Added type-checking for browsers version
- Added show a progress-bar in snackbar version.
- Added the ability to set a `subtitle` or relative date.

### Changed

- Attribute `datetime` deprecated and no longer used. (Alternative option `subtitle`).
- Attribute `noHeader` deprecated and no longer used. (Alternative option `snackbar`).
- Attribute `onCloseCallBack` deprecated and no longer used. (Alternative option `onClose` hook).
- Attribute `space` deprecated and no longer used (Alternative option `offset`).
- The libraries `uuid` and `dayjs` have been removed, I wrote a small code that serves the same purpose.
- The progress bar has been improved! I used css effects instead of javascript intervals.

### Fixed

- [issue-1048780479](https://github.com/nawafscript/toaststrap/issues/3#issue-1048780479)
  Has been fixed.
- [issue-1048757027](https://github.com/nawafscript/toaststrap/issues/2#issue-1048757027)
  Has been fixed.

## [1.0.0-beta-1] - 2021-11-01

First released.