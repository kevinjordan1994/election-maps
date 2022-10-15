export const widgets = [
  {
    title: "Governor",
    widget:
      "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4185.html",
  },
  {
    title: "Senate",
    widget:
      "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4025.html",
  },
];

export let selectedWidget = widgets[0];

export function changeSelectedWidget(value) {
  selectedWidget = widgets.find((widget) => widget.title === value);
}
