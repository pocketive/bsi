# BlockScript Injector

<img src="icons/icon128.png" align="right" width="100">

A Chrome extension that adds an import/export panel directly into the MIT App Inventor 2 Blocks editor. It lets you paste or drop XML/BlockScript and inject it straight into your project, and export 
your blocks back out in either format.

Built for people who write or generate AI2 blocks programmatically and don't want to deal with the manual copy/paste workflow every time.

## What it does

- Adds a floating tool panel to the AI2 Blocks editor
- Import blocks from pasted XML or `.bs` BlockScript files (drag and drop supported)
- Auto detects whether the input is XML or BlockScript
- Export all blocks as XML or BlockScript, with a toggle to switch formats

## How to use it

1. Load the extension in Chrome
  - Navigate to `chrome://extensions`
  - Enable Developer Mode
  - "Load Unpacked"

    <img src="https://raw.githubusercontent.com/pocketive/bsi/contents/screenshots/load-extension-1.png" width="200" hspace="40">
    
  - Choose the bsi folder (this repository)
    
    <img src="https://raw.githubusercontent.com/pocketive/bsi/contents/screenshots/load-extension-2.png" width="200" hspace="40">
  
  - Done (it should automatically be enabled)
    
    <img src="https://raw.githubusercontent.com/pocketive/bsi/contents/screenshots/extension-loaded.png" width="200" hspace="40">


3. Open a project in MIT App Inventor and switch to the **Blocks** editor

<img src="https://raw.githubusercontent.com/pocketive/bsi/contents/screenshots/blocks.png" width="200" hspace="40">

3. Click the extension icon, the tool panel will appear on the page

<img src="https://raw.githubusercontent.com/pocketive/bsi/contents/screenshots/panel.png" width="200" hspace="40">

4. Paste XML/BlockScript or drop a `.bs` file, then hit Inject

<img src="https://raw.githubusercontent.com/pocketive/bsi/contents/screenshots/import.png" width="200" hspace="40">

5. To export, use Export All and toggle between XML and BlockScript

<img src="https://raw.githubusercontent.com/pocketive/bsi/contents/screenshots/export.png" width="200" hspace="40">

## About BlockScript

BlockScript (`.bs`) is a custom scripting format made to be a faster, more readable way to write AI2 blocks compared to raw XML. You can try it out in the [BlockScript 
Playground](https://pocketive.tachion.tech/blockscript).

## Vibecoding in AI2

One of the main reasons this exists is to enable vibecoding in App Inventor. Since BlockScript is plain text and much easier to read and write than raw XML, it's a format that LLMs can generate 
reliably. Write a prompt describing the blocks you want, get BlockScript back, drop it into the injector, and it shows up in your project.

### Using the Claude skill

To make this even easier, there's a Claude skill specifically built for generating BlockScript and AI2 XML. Load it into Claude and you can just describe what you want in plain English (things like 
"add a counter with a reset button" or "make a procedure that clamps a slider value between two numbers") and Claude will output valid BlockScript ready to paste/drop straight into the injector.

The skill teaches Claude the full BlockScript syntax: event handlers, global variables, conditionals, loops, procedures, component properties, and more. It also knows when to fall back to raw XML 
for the edge cases BlockScript can't express yet. The result is that you can go from idea to working blocks in your project in a few seconds, without touching the Blocks editor at all.

To use it:

1. Download the `.skill` file from releases in this repo
2. Upload it to Claude (Customize -> Skills)
3. Describe the App Inventor blocks/code you want
4. Copy/download (as `.bs`) the BlockScript output and paste/drop it into the injector panel

It works best when you tell Claude which components you've already added to your project (button names, label names, etc.), so the generated blocks match what's actually on screen.

## Notes

This only works on `appinventor.mit.edu` pages, since that's where the host permissions are scoped. Nothing is sent anywhere, everything runs locally in the page.

---

## License
[MIT](LICENSE)

## Contact
You can use the [Pocketive website's contact session](https://pocketive.tachion.tech/#contact) or [pocketive@tachion.tech](mailto:pocketive@tachion.tech?subject=BlockScript%20Injector).
