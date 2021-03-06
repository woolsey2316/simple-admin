const yaml = require('js-yaml');
const fs = require('fs');

export const addAdjustHeightListener = () => {
  var textEditorPane = document.getElementById("text-input-pane");

  textEditorPane.onchange = changeHeight;
};

export const changeHeight = () => {
  var pane = document.getElementById("text-input-pane");
  var scrollPane = document.getElementById("scroll-pane");
  var height = document.getElementById("adjust-height").value;
  pane.style.height = height + "px";
  scrollPane.style.height = $(document).height() - height - 70 + "px";
};

export const getYAMLData = () => {
  // Get document, or throw exception on error
  var data = {}
  try {
    let fileContents = fs.readFileSync('src/assets/data/sample.yaml', 'utf8');
    data = yaml.load(fileContents);
    console.log(data);
  
  } catch (e) {
    console.log(e);
  }

  return data;
}

export const getUpdatedYAMLData = () => {
  // Get document, or throw exception on error
  var doc = {}
  try {
    doc = yaml.load( document.getElementById('result').value);
  
  } catch (e) {
    console.log(e);
  }

  return doc;
}

export const renderPreviewArticle = () => {
  var data = getUpdatedYAMLData()
  var template = document.getElementById('markdown-editor').value;
  // take markdown with {{}} mustache variables and inserts value according to 'data' dictionary
  var rendered = Mustache.render(template, data);

  var converter = new showdown.Converter(),
    html      = converter.makeHtml(rendered);
  $('#target').html(html);
}