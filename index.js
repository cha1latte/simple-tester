// Import from SillyTavern core (REQUIRED)
import { extension_settings, getContext, loadExtensionSettings } from "../../../extensions.js";
import { saveSettingsDebounced } from "../../../../script.js";

// Extension configuration - MUST match your repo/folder name
const extensionName = "simple-tester";
const extensionFolderPath = `scripts/extensions/third-party/${extensionName}`;
const defaultSettings = {
    enabled: true,
};

// Loads the extension settings if they exist, otherwise initializes them to the defaults
async function loadSettings() {
    // Create the settings if they don't exist
    extension_settings[extensionName] = extension_settings[extensionName] || {};
    if (Object.keys(extension_settings[extensionName]).length === 0) {
        Object.assign(extension_settings[extensionName], defaultSettings);
    }

    // Update settings in the UI
    $("#simple_tester_enabled").prop("checked", extension_settings[extensionName].enabled).trigger("input");
}

// Event handler for settings changes
function onSettingInput(event) {
    const value = Boolean($(event.target).prop("checked"));
    extension_settings[extensionName].enabled = value;
    saveSettingsDebounced();
}

// Event handler for the test button
function onTestButtonClick() {
    try {
        const settings = extension_settings[extensionName];
        const status = settings.enabled ? "enabled" : "disabled";
        
        console.log(`[${extensionName}] Test button clicked. Status: ${status}`);
        
        // Show a toastr notification
        toastr.info(
            `The 'Simple Tester' extension is currently ${status}.`,
            "Simple Tester"
        );
        
    } catch (error) {
        console.error(`[${extensionName}] Error in onTestButtonClick:`, error);
        toastr.error("Test operation failed", "Simple Tester");
    }
}

// Extension initialization - runs when extension loads
jQuery(async () => {
    try {
        // Load HTML settings from file
        const settingsHtml = await $.get(`${extensionFolderPath}/simple-tester.html`);

        // Append to the appropriate settings column
        // Use #extensions_settings2 for visual/UI extensions
        $("#extensions_settings2").append(settingsHtml);

        // Bind event listeners to UI elements
        $("#simple_tester_button").on("click", onTestButtonClick);
        $("#simple_tester_enabled").on("input", onSettingInput);

        // Load saved settings and update UI
        loadSettings();
        
        console.log(`[${extensionName}] Loaded successfully`);
        
    } catch (error) {
        console.error(`[${extensionName}] Failed to load extension:`, error);
    }
});
