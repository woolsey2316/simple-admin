function getTree() {
  var tree = [
    {
      text: "Propulsion",
      nodes: [
        {
          text: "Sub Node 1",
          nodes: [
            {
              id:    "sub-node-1",
              text:  "Sub Child Node 1",
            },
            {
              text: "Sub Child Node 2",
            }
          ]
        },
        {
          text: "Child 1",
        }
      ]
    },
    {
      text: "Computation System",
    },
    {
      text: "metallurgy",
    },
    {
      text: "Node 4",
    },
    {
      text: "Node 5",
    }
  ];
  return tree;
}

$('#tree').bstreeview({ data: getTree() });

// Get the container element
var btnContainer = document.getElementById("tree");

// Get all nodes with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("list-group-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}