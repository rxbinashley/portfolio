import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

Splitting({
  /* target: String selector, Element, Array of Elements, or NodeList */
  target: "[data-splitting]",
  /* by: String of the plugin name */
  by: "chars",
  /* key: Optional String to prefix the CSS variables */
  key: null,
});
