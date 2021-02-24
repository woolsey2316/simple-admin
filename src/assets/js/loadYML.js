const fs = require('fs');

// Get yml file contents and place inside text editor for user to edit
try {
  const data = fs.readFileSync('src/assets/data/sample.yaml', 'utf8');
  document.getElementById('source').innerHTML = data
} catch (e) {
  console.log(e);
}