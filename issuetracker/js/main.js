
var submit = document.getElementById('issueForm')
submit.addEventListener('submit' , saveIssue);

function saveIssue(e) {
  var issueDescription = document.getElementById('issueDescription').value;
  var issueSeverity = document.getElementById('issueSeverity').value;
  var issueAssigned = document.getElementById('issueAssigned').value;
  var issueID = chance.guid();
  var issueStatus = 'Open';

  var issue = {
    id:issueID,
    description:issueDescription,
    severity:issueSeverity,
    assignedTo:issueAssigned,
    status:issueStatus
  }

var issuesList = document.getElementById('issueList');
var el = document.createElement('div')

console.log("Hello from Issue");
  el.innerHTML =   '<div class="well">'+
                            '<h6>Issue ID: ' + issueID + '</h6>'+
                            '<p><span class="label label-info">' + issueStatus + '</span></p>'+
                            '<h3>' + issueDescription + '</h3>'+
                            '<p><span class="glyphicon glyphicon-time"></span> ' + issueSeverity + '</p>'+
                            '<p><span class="glyphicon glyphicon-user"></span> ' + issueAssigned + '</p>'+
                            '<a href="#" id="close"  class="btn btn-warning">Close</a> '+
                            '<a href="#" id="delete" class="btn btn-danger">Delete</a>'+
                            '</div>';
issuesList.appendChild(el);
e.preventDefault();
submit.reset();
}
