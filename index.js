const readline = require('readline-sync');

const chalk = require('chalk');

let name = readline.question("What's you name? ");

let dob;

function isValid(num)
{
  let numbers = num.split('/');
  if(parseInt(numbers[0]) > 31 || parseInt(numbers[1]) > 12)
  {
    return false;
  }
  else if(parseInt(numbers[1]) == 2)
  {
    if(parseInt(numbers[0]) < 30)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  else if(parseInt(numbers[0]) == 31)
  {
    if(parseInt(numbers[1]) == 1 || parseInt(numbers[1]) == 3 || parseInt(numbers[1]) == 5 || parseInt(numbers[1]) == 7 || parseInt(numbers[1]) == 8 || parseInt(numbers[1]) == 10 || parseInt(numbers[1]) == 12)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  else if(parseInt(numbers[0]) == 30)
  {
    if(parseInt(parseInt(numbers[1]) == 4 || parseInt(numbers[1]) == 6 || parseInt(numbers[1]) == 9 || parseInt(numbers[1]) == 11))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  else
  {
    return true;
  }
}

do {
  dob = readline.question("What's your day and month [DD/MM]? ");
} while(isNaN(parseInt(dob)) || !isValid(dob));

let numbers = dob.split('/');
let number = parseInt(numbers[0] + numbers[1]);

function isPrime(num)
{
  let result = num/2;
  if(num == 2)
  {
    return true;
  }
  else
  {
    for(let i = 3; i < result+1; i++)
    {
      if(num%i === 0)
      {
        return false;
      }
    }
    return true;
  }
}

console.log("\n");

if(isPrime(number))
{
  console.log(chalk.underline.bold(name) + ", " + chalk.black.bgGreen.bold("your birth day is a prime number."));
  console.log(chalk.bold.bgMagenta("\nYou should tell your friends about it."));
}
else
{
  console.log(chalk.underline.bold(name) + ", " + chalk.black.bgRed.bold("your birthday is not a prime number."));
}