import { Plugin } from "obsidian";
import { SamplePluginPluginSettings, DEFAULT_SETTINGS, SampleSettingTab } from "./settings"

export default class SamplePluginPlugin extends Plugin {
  settings: SamplePluginPluginSettings;

  async onload() {
    console.log("loading plugin");

    await this.loadSettings();
    this.loadCommands();
    this.loadRibbon();

    this.addSettingTab(new SampleSettingTab(this.app, this));

  }

  onunload() {
    console.log("unloading plugin");
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  loadCommands() {
  }

  loadRibbon() {
  }
}
