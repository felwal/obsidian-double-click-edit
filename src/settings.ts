import { App, PluginSettingTab, Setting } from "obsidian";
import SamplePluginPlugin from "./main";

export interface SamplePluginPluginSettings {
  mySetting: string;
}

export const DEFAULT_SETTINGS: SamplePluginPluginSettings = {
  mySetting: "default"
}

export class SampleSettingTab extends PluginSettingTab {
  plugin: SamplePluginPlugin;

  constructor(app: App, plugin: SamplePluginPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const {containerEl} = this;

    containerEl.empty();
    containerEl.createEl("h1", {text: "Sample Plugin"});
  }
}
