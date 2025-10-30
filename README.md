# Simple Tester

A very simple SillyTavern extension to demonstrate the official extension template and workflow. It provides a settings panel with an "Enable" toggle and a "Run Test" button.

## Features

-   Enable/Disable toggle that saves its state.
-   A "Run Test" button that fires a `toastr` notification.
-   Follows all SillyTavern extension best practices.

## Installation

1.  Open SillyTavern
2.  Go to Extensions (stacked blocks icon at top)
3.  Click "Install Extension"
4.  Paste: `https://github.com/test-user/simple-tester` (Note: This is an example URL)
5.  Click Install
6.  Refresh the page

## Usage

1.  Open Extensions → Extension Settings
2.  Find "Simple Tester" in the right-hand column.
3.  Click the "Run Test" button to see a notification.
4.  Toggle the checkbox and click the button again to see the message change.

## Configuration

-   **Enable Test**: Toggles the internal 'enabled' state of the extension, which is reported by the test button.

## Prerequisites

-   SillyTavern 1.12.0 or higher

## License

MIT
