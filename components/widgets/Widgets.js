export const widgets = [
  {
    title: "Governor",
    widget:
      "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4185.html",
  },
  {
    title: "Senate",
    widget: (
      <>
        <iframe
          class="ap-embed"
          src="https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4025.html"
          width="100%"
          frameborder="0"
          scrolling="no"
          marginheight="100%"
        ></iframe>
        <script
          defer
          src="https://interactives.ap.org/election-results/assets/microsite/resizeClient.js"
        ></script>
      </>
    ),
  },
];

export let selectedWidget = widgets[0];

export function changeSelectedWidget(value) {
  selectedWidget = widgets.find((widget) => widget.title === value);
}
