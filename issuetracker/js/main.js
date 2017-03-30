
var submit = document.getElementById('issueForm')
submit.addEventListener('submit' , saveIssue);

function saveIssue(e) {
  var issueDescription = document.getElementById('issueDescription').value;
  var issueSeverity = document.getElementById('issueSeverity').value;
  var issueAssigned = document.getElementById('issueAssigned').value;
  var issueID = chance.guid();
  var issueStatus = 'Open';

if(!issueDescription || !issueAssigned) {
  alert('Please fill in the valid details!');
  return false;
}


  var issue = {
    id:issueID,
    description:issueDescription,
    severity:issueSeverity,
    assignedTo:issueAssigned,
    status:issueStatus
  }

  if(localStorage.getItem('issues') === null) {
    var issues = [];
    issues.push(issue);
    localStorage.setItem('issues' , JSON.stringify(issues));
  } else {
    var issues = JSON.parse(localStorage.getItem('issues'));
    issues.push(issue);
    localStorage.setItem('issues' , JSON.stringify(issues));
  }

submit.reset();
fetchIssues();
e.preventDefault();
}

function fetchIssues() {
  var issues = JSON.parse(localStorage.getItem('issues'));
  var issuesList = document.getElementById('issueList');
  issuesList.innerHTML = '';

 for (var i = 0; i < issues.length; i++) {
   var id = issues[i].id;
   var desc = issues[i].description;
   var severity = issues[i].severity;
   var assignedTo = issues[i].assignedTo;
   var status = issues[i].status;

   issuesList.innerHTML +=   '<div class="well">'+
                             '<h6>Issue ID: ' + id + '</h6>'+
                             '<p><span class="label label-info">' + status + '</span></p>'+
                             '<h3>' + desc + '</h3>'+
                             '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>'+
                             '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
                             '<a href="#" onclick="toggleStatus(\''+id+'\')" class="btn btn-warning">Close</a> '+
                             '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                             '</div>';
 }
}

function setStatusClosed(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));
  for (var i = 0; i < issues.length; i++) {
    if(issues[i].id === id) {
      issues[i].status = 'Closed';
    }
  }
  localStorage.setItem('issues' , JSON.stringify(issues));
  fetchIssues();
}



function setStatusOpen(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));
  for (var i = 0; i < issues.length; i++) {
    if(issues[i].id === id) {
      issues[i].status = 'Open';
    }
  }
  localStorage.setItem('issues' , JSON.stringify(issues));
  fetchIssues();
}


function toggleStatus(id) {
  setStatusClosed(id);
}


function deleteIssue(id) {
  var issues = JSON.parse(localStorage.getItem('issues'));
  for (var i = 0; i < issues.length; i++) {
    if(issues[i].id === id) {
      issues.splice(i,1);
    }
  }
  localStorage.setItem('issues' , JSON.stringify(issues));
  fetchIssues();
}
