<?php

class Conversation
{
    // Property to hold name
    public $name = '';

    // Method to say hello to name
    function sayHello($newLine = false)
    {
        // Set the greeting name
        $greeting = "Hello {$this->name}";

        // Return the greeting, checking for newline
        return ($newLine) ? "$greeting\n" : $greeting;
    }

}

// Create a new instance of Conversation
$chat = new Conversation();

// Set the $name variable
$chat->name ='Calvin';

// Output greeting to $name, with trailing newline
echo $chat->sayHello(true);

echo 'Test this out.';
