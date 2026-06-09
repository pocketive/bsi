chrome.action.onClicked.addListener(async (tab) => {
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      files: ["content.js"],
      world: "MAIN"
    });
  } catch (err) {
    console.error('[AI2 XML Tool] Injection failed:', err);
  }
});
