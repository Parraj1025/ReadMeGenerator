// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 

  
  return renderLicenseLink(license);}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == '') {
    const licenseURL = ''
    return renderLicenseSection(licenseURL);
  }
  else {
  const licenseURL = `![Static Badge](https://img.shields.io/badge/License-${license}-blue)`
  return renderLicenseSection(licenseURL);
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseURL) {
  
if (licenseURL == '') {
    let licenseSection = ''
    return licenseSection;
}
else {
  let licenseSection = 
  `## License
  ${licenseURL}`

  return licenseSection;
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

const markdown = renderLicenseBadge(data)

console.log(markdown)


  return markdown
}

module.exports = (generateMarkdown);

