Bot.send("Welcome to Heart Beat Calculator. Type your age to calculate.");
async function respond(inputText){
var age=inputText;
var hb=age*365*24*60*72;
Bot.send("Your heart has been beating " + hb +" avg. times per minute.");
}
