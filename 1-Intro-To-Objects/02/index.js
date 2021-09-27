you cannot use dot notation if the property starts with a number:
dev.1name //invalid
dev["1name"]; //valid

you cannot use dot notation for property name with spaces:
web.first name //invalid
web["first name"]; //valid

you can loopup using a variable with bracket notation:
var st = "name";
webdev.st //invalid
webdev[str] //does evaluate str and looks for "name"
