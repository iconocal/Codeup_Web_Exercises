<?php

// A class is a blueprint for an object
// Naming - FirstMajorInitialsCapitalized

class Conversation 
{
    // Property to hold name
    // Properties can be: Public, Protected, Private (visibility)
    public $name = '';

    // Method to say hello to name
    public function sayHello()
    {
        return "Hello {$this->name}";
    }

    function test() // calling a class function within a function
    {
    	$this->sayHello();
    }
}

// $this references Conversation - this instance of conversation

// Create an instance (instanciate/instantiation) = building the house

$talkToCalvin = new Conversation();
$talkToCalvin->name = 'Calvin';
echo $talkToCalvin->sayHello();

$talkToCalvin->name = 'Glover';
echo $talkToCalvin->sayHello();


$talkToDavid = new Conversation();
$talkToDavid->name = 'David';
echo $talkToDavid->sayHello();





