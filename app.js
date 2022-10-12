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

// Define constant to use for button
const exportPDFbutton = document.getElementById("exportPDF");
const exportPPTbutton = document.getElementById("exportPPT");

// Define the function to respond to the click action
function exportPDFfunction() {
  viz.showExportPDFDialog();
}
function exportPPTfunction() {
  viz.showExportPowerPointDialog();
}

// Add function to export buttons
exportPDFbutton.addEventListener("click", exportPDFfunction);
exportPPTbutton.addEventListener("click", exportPPTfunction);
