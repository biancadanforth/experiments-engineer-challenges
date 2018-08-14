# Functional Specification for the Focus Noisy Tab Extension

Using the assets suggested below in the “Assets” section, implement a [`BrowserAction`](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserAction) with this behavior:

- When the user clicks on the `BrowserAction` button,

  - If there is a tab playing audio,
    **Focus that tab** (bring it to the foreground)

- Use the `recordData` function in places where recording data would help the Product manager to make choices about the feature or understand if the feature is successful.

## Assets

### Icon 

- Use the [“Audio 16” icon](https://design.firefox.com/icons/viewer/#audio) from Firefox’s design guide for the browserAction icon.

## Engineering questions

- Why do we want to focus the noisy tab rather than mute it?
- What if multiple tabs are noisy when the button is clicked?
- What if the noisy tab is in a different window?
- What if there are no noisy tabs when the button is clicked?
  - Should we disable the browserAction button? Change its title?
- What do we put in the about:addons page for the icon and description of the add-on?
