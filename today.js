'use strict';

const momenttz = require('moment-timezone');
const jm = require('moment-jalali');
const date = new Date();
const day = date.getDay();
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

console.log("\n");
console.log("\t%s\n\t=========================", days[day].charAt(0).toUpperCase() + days[day].substr(1).toLowerCase());
console.log("\tJ: %s %s (%s)", 
	jm().format('jYYYY/jMM/jDD'), 
	String(momenttz(Date.now()).tz('Asia/Tehran').format("HH:mm")),
	"IRI");
console.log("\tG: %s %s (%s)", 
	jm().format('YYYY/MM/DD'), 
	String(momenttz(Date.now()).tz('Europe/London').format("HH:mm")),
	"GMT");
console.log("\n");
