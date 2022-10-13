// Dummy webpage Console message
console.log("Hello Back to School");

// this let viz part is important
let viz;

//3. Create a variable to store the URL
const url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia";
//1. Create a variable to store vizcontainer
const containerDiv = document.getElementById("vizContainer");
//2. Create a variable to store dashboard options
const options = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

function initViz() {
  viz = new tableau.Viz(containerDiv, url, options);
}

// Add an condition to trig viz loading
document.addEventListener("DOMContentLoaded", initViz);

// Define constant to use for show & hide viz button
const showVizButton = document.getElementById("showViz");
const hideVizButton = document.getElementById("hideViz");

// Define the function to show/hide viz
function showViz() {
  viz.show();
}
function hideViz() {
  viz.hide();
}

// Add funntional response to show/hide buttons.
showVizButton.addEventListener("click", showViz);
hideVizButton.addEventListener("click", hideViz);

// Define constant to use for export buttons
const exportPDFbutton = document.getElementById("exportPDF");
const exportPPTbutton = document.getElementById("exportPPT");

// Define the function to respond to the click action
function exportPDFfunction() {
  viz.showExportPDFDialog();
}
function exportPPTfunction() {
  viz.showExportPowerPointDialog();
}

// Add functional response to export buttons
exportPDFbutton.addEventListener("click", exportPDFfunction);
exportPPTbutton.addEventListener("click", exportPPTfunction);

// Add function to get user input values
// Second level of text body below buttons
function getRangeValues() {
  // Add function to get user input values
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  // Dummy to check the validate of above getElement
  console.log(minValue, maxValue);

  // Identify the worksheet
  const workbook = viz.getWorkbook();
  // need to get active sheet, but this could be a dashboard or a worksheet
  const activeSheet = workbook.getActiveSheet();
  const sheets = activeSheet.getWorksheets();
  // Dummy to check the list of sheets
  console.log(sheets);

  // Isolate sheets to filter and apply filter
  // Map
  const sheetToFilter0 = sheets[0];
  sheetToFilter0
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("viz filtered"));
  // Bar
  const sheetToFilter1 = sheets[1];
  sheetToFilter1
    .applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue })
    .then(alert("viz filtered"));
}

// Action on Filter button
document
  .getElementById("filterButton")
  .addEventListener("click", getRangeValues);
