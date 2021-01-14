lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
chars = ['!', '#', '$', '%', '^', '&', '*', '/', '=', ';']

random_username = "";
lenght = 8;
choice = 0;

for (i = 0; i < lenght; i++)
{
        choice = Math.floor(Math.random() * 3); // returns a random integer from 0 to 3
        if (choice == 0)
        {
                y = Math.floor(Math.random() * 25);
                random_username += lowercase[y];
        }
        if (choice == 1)
        {
                y = Math.floor(Math.random() * 25);
                random_username += uppercase[y];
        }
        if (choice == 2)
        {
                y = Math.floor(Math.random() * 9);
                random_username += numbers[y];
        }
        else
        {
                y = Math.floor(Math.random() * 9);
                random_username += chars[y];
        }
}

//FIND OUT HOW TO PRINT RANDOM USERNAMES
alert(random_username)

//create cookie
document.cookie = "username=&random_username, visitor; expires=Fri, 25 Jun 2025 12:00:00 UTC";

//display cookie
var cookieinfo = "Hello, your username is {}. It expires: Friday, 25th of June 2025 @ 12:00:00 O'clock, UTC."
document.getElementById("demo").innerHTML = cookieinfo;
