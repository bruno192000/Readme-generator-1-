// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let p = "";
  
    switch (license) {
      case "MIT License":
        p =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;

      case "GNU General Public v3.0":
        p =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;

      case "Mozilla Prublic License":
        p =
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;
    }
  
    return p;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    let p = "";
    if (license) p = "- [License](#license)";
    return p;
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    let p = "";
  
    switch (license) {
      case "MIT License":
        p =
          "## License\n\nThis project is licensed under the [MIT License](https://opensource.org/licenses/MIT).";
        break;
      
      case "GNU General Public v3.0":
        p =
          "## License\n\nThis project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).";
        break;

      case "Mozilla Prublic License":
        p =
          "## License\n\nThis project is licensed under the [License: MPL 2.0](https://opensource.org/licenses/MPL-2.0).";
        break;
    }
  
    return p;
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    const p = `# ${data.proname}


  ## Description
  ${data.pdescription}

  ${renderLicenseBadge(data.license)}


  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ${renderLicenseLink(data.license)}


  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contribution
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Feel free to ask any question on my [email](${data.email}) or on my [Github](https://github.com/${data.usergit}/)
  ${renderLicenseSection(data.license)}`;
  
    return p;
  }
  
  module.exports = generateMarkdown;