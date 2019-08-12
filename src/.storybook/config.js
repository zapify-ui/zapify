import { addParameters, configure, setAddon } from "@storybook/react";
import { create } from "@storybook/theming";
import JSXAddon from "storybook-addon-jsx";

setAddon(JSXAddon);
const req = require.context("../stories", true, /\.stories\.js$/);

// coral / ocean highlights
const theme = create({
  base: "#999",
  colorPrimary: "#f1f1f1",
  colorSecondary: "#111",
  textColor: "#00e9ff",
  barBg: "#666",
  barTextColor: "#f1f1f1",
  appContentBg: "#fff",
  appBg: "#555",
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Option defaults:
addParameters({
  options: {
    theme: theme,
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: "Zapify-ui",
    title: "Zapify-ui",
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: "zapify.netlify.com",
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    goFullScreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showStoriesPanel: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showAddonPanel: true,
    /**
     * display floating search box to search through stories
     * @type {Boolean}
     */
    showSearchBox: false,
    /**
     * show addon panel as a vertical panel on the right
     * @type {Boolean}
     */
    addonPanelInRight: false,
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: null,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: null,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: false, // true by default
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: false // true by default
  }
});

configure(loadStories, module);
