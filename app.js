/**
This is a simple command line application that consumes goo.gl api to shorten website address
**/
var chalk       = require('chalk');
var clear       = require('clear');
var figlet      = require('figlet');
var readline    = require('readline');
var googl 		= require('goo.gl');

// Api Key
googl.setKey("AIzaSyBYklvoU4MIer1gw2IwUZ5Nu1sZ-X9tCKE");

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Url Shorter', { horizontalLayout: 'full' })
  )
);

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
console.log(chalk.green("This is a simple command line that consumes a public api(Google Api)"));
console.log(chalk.blue("This is a url shorter"));
rl.question("Enter the website address to be shorten >> ", function(ans){
	if (ans.length > 0){
		googl.shorten(ans)
			.then(function(shortUrl){
			console.log("Result - " + chalk.green(shortUrl))
			
		})
			.catch(function(err){
				console.error(err.message);
			});
			rl.close();
	}
	else{
		console.log(chalk.red("Invalid Input, Enter a web address"))
		rl.close();
	}

	
})