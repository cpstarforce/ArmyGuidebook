let clientOptions = {
  config: "./config.json",
  settings: "./settings.json",
  definitions: "./definitions.json",
  components: {
    navigator: document.querySelector("aside"),
    reader: document.querySelector("main"),
    wrapper: document.querySelector("div#wrapperBackdrop"),
    title: document.querySelector("b#title")
  },
  index: "./articles.json",
  entrypoint: "Overview"
};

clientOptions.components.navigator.content = document.querySelector("aside div#navigatorContent");
clientOptions.components.navigator.settingsLauncher = document.querySelector("aside div#settingsLauncher");

const client = new Guidebook.Client(clientOptions);