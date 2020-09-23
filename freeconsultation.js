"use strict"
var $ =function(id) { return document.getElementById(id);};

var processEntries = function() {
  var header = "";
  var html = "";
  var required = "<span>Required field</span>";
  var msg = "Please review your entries and complete all required fields";

  var Fullname = $("name").value;
  var yourCompany = $("company").value;
  var email = $("email_address").value;
  var phone = $("phone_number").value;
  var jobTitle = $("jobTitle").value;
  var employeeNumber = $("employee_count").value;
  var servicesWanted = $("message").value;

  if (Fullname == ""){
    Fullname = required;
    header = msg;
  }
  if (yourCompany == ""){
    yourCompany = required;
    header = msg;
  }
  if (email == ""){
    email = required;
    header = msg;
  }
  if (phone == "" || isNaN(phone)){
    phone = required;
    header = msg;
  }
  if (jobTitle == ""){
    jobTitle = required;
    header = msg;
  }
  if (employeeNumber == ""){
    employeeNumber = required;
    header = msg;
  }
  if (servicesWanted == ""){
    servicesWanted = required;
    header = msg;
  }

  $("registration_header").firstChild.nodeValue = header;
  if (header == msg) {
    html = html + "<tr><td>Name:</td><td>" + Fullname + "</td></tr>";
    html = html + "<tr><td>Your Company:</td><td>" + yourCompany + "</td></tr>";
    html = html + "<tr><td>Email:</td><td>" + email + "</td></tr>";
    html = html + "<tr><td>Phone:</td><td>" + phone + "</td></tr>";
    html = html + "<tr><td>Job Title:</td><td>" + jobTitle + "</td></tr>";
    html = html + "<tr><td>Employee #:</td><td>"  + employeeNumber + "</td></tr>";
    html = html + "<tr><td>Services needed:</td><td>" + servicesWanted + "</td></tr>";
    $("registration_info").innerHTML = html;
  }else {
    $("registration_info").innerHTML = "";
    $("contact_form").submit();
  }
};

var resetForm = function(){
  $("contact_form").reset();
  $("registration_header").firstChild.nodeValue = "";
  $("registration_info").innerHTML = "";
  $("name").focus();
};

window.onload = function(){
  $("contact").onclick = processEntries;
  $("resetForm").onclick = resetForm;
  $("name").focus();

};