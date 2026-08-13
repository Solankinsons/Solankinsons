/* eslint-disable */
const { exportImages } = require('pdf-export-images');
const fs = require('fs');

async function extract() {
  try {
    fs.mkdirSync('public/assets/tulip-gallery', { recursive: true });
    fs.mkdirSync('public/assets/tulip-gallery/2bhk', { recursive: true });
    
    console.log("Extracting 2BHK...");
    const images2BHK = await exportImages('D:\\Aditya\\Projects\\Solsons\\solanki-builders-web\\Tulip House\\Solsons Tulip House (2BHK).pdf', 'public/assets/tulip-gallery/2bhk');
    console.log("Extracted " + images2BHK.length + " images for 2BHK");
    
  } catch (e) {
    console.error(e);
  }
}
extract();
