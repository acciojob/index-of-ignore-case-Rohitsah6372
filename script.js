function indexOfIgnoreCase(s1, s2) {
	
	const subs1 =s1.toLowerCase();
	const subs2 = s2.toLowerCase();
	return subs1.indexOf(subs2);
	
	
}

// // Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
