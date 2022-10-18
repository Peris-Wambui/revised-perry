Introduction
In this lab, you'll be reading error messages from tests. This lab is designed so that both running the files and running the test suite via the learn-lab test command will show the error messages for you to decode. Moving forward though, you'll be reading error messages mainly through running the test suite.

Reading Error Messages
Let's start by running some of the Ruby code in the lib folder to produce an error message. Run this in your terminal:

 ruby lib/a_name_error.rb
Error messages have 3 parts:

lib/a_name_error.rb:3:in `<main>': undefined local variable or method `hello_world' for main:Object (NameError)
The location of the error, the "where":
   lib/a_name_error.rb:3:in `<main>':
lib/a_name_error.rb is the file the error occurred in.
3 is the line of code with the error.
<main> is the scope of the error.
The description, the "why":
   undefined local variable or method `hello_world' for main:Object
The interpreter does the best job it can to tell you what it thinks went wrong.

The type of error, the "who":
   (NameError)
This is a Ruby Error TypeLinks to an external site..

You've solved games of Clue with less information. This is one of the best parts of programming: debugging and fixing errors. It's like you're a detective solving a crime. The only bad thing is that more often than not, you're also the criminal that caused the error in the first place.

Errors are clues, and reading them is the interpreter telling you what to do to fix the program and move on.

Four Common Error Types
Name Errors
Name errors are caused when a given name is invalid or undefined. Whenever the Ruby interpreter encounters a word it doesn't recognize, it assumes that word is the name of a variable or a method. If that word was never defined as either a variable or a method, it will result in a name error. Try this out in IRB:

  irb
 a_variable
NameError (undefined local variable or method `a_variable' for main:Object)
 a_variable = 7
 7
 a_variable
 7
Trying to access a_variable before assigning it a value results in a NameError, which we can fix by assigning it some value.

Syntax Errors
Syntax errors are pretty self-explanatory: they're the result of incorrect syntax. Thankfully, they're usually followed by a guess about the location of the error. For instance:

2.times do
  puts "hi"
Will result in:

2: syntax error, unexpected end-of-input, expecting keyword_end
Here, Ruby is saying that on line 2, there is a missing end (every do keyword must be followed by some code and then an end keyword). Always read the full details of syntax errors and look for line numbers, which usually appear at the beginning of the error message.

Note: You won't be able to reproduce the above syntax error using IRB, because IRB won't execute the code until you enter a matching end keyword for the do block. You can see this error by creating a Ruby file, adding the code above, and executing the file.

Type Errors
When you try and do a mathematical operation on two objects of a different type, you will receive a TypeError. For example if you try and add a string to an integer, Ruby will complain.

1 + "1"
Will produce the following error:

TypeError: String can't be coerced into Fixnum
Division Errors
A DivisionError is are caused when a given number is divided by 0.

Instructions
To get started, run learn-lab test  to run the first test in the test suite. Use the error messages to guide your work:

Read the errors. Scroll through the entire output to get a sense of what the failures are trying to tell you. What does the error mean? How can we fix it?

Each error prints out a stack trace, which points to where the code failed and attempts to follow it up the stack — that is, through the bits of code that ran leading up to the failure. You can use these stack traces to pinpoint which line(s) of code need your attention.

These stack traces can also point you to which files you should run to get a better sense of the errors.

Fix the errors in each of the files in lib/. Then confirm the fix by running learn-lab test again.

Common Data Types
GitHub RepoCreate New Issue
Learning Goals
Learn common data types in Ruby by comparing to equivalent data types in JavaScript: strings, numbers, nil, booleans, arrays, and hashes
Introduction
Just like in JavaScript, Ruby has several common built-in data types for representing different kinds of information in our applications. In this lesson, we'll explore these different data types and see the similarities and differences to how Ruby and JavaScript treat these data types.

Make sure to follow along with the examples in this lesson in IRB! As an object-oriented language, Ruby gives you a lot of tools to inspect different data types, so you'll learn more by getting your hands on the code.

Strings
Like JavaScript, Ruby lets you define strings with either single quotes or double quotes:

"I'm a string"
'Me too!'
You can also create a new string by using the String class constructor method (though it's not common you'd need to):

String.new("I'm a string")
If you want use string interpolation in Ruby, use double quotes like so:

# Ruby
dog_name = "Lucy"
puts "Say hello to my dog #{dog_name}"
This would be the equivalent of the following JavaScript code:

// JavaScript
const dogName = "Lucy";
console.log(`Say hello to my dog ${dogName}`);
Backticks in Ruby are used for another purposeLinks to an external site., so don't use backticks for strings in Ruby.

To see some more things you can do with strings in Ruby, open up IRB and run the following:

"hello"
# => "hello"
"hello".upcase
# => "HELLO"
"HELLO".downcase
# => "hello"
"hello".capitalize
# => "Hello"
"hello".reverse
# => "olleh"
"hello" + "world"
# => "helloworld"
"hello" * 3
# => "hellohellohello"
You'll often hear it said that "in Ruby, everything is an object". All of the methods that we called on strings above are available because the string literal "hello" is an instance of the String class. Thanks to Ruby's introspectionLinks to an external site. features, you can see for yourself:

"hello".class
# => String
Calling the methods method on any Ruby object will display a list of all the methods that object responds to (you'll see :upcase, :downcase, :reverse and more in that list):

"hello".methods
# => [:unicode_normalize, :unicode_normalize!, :ascii_only?, :to_r, :encode, :encode!, ...
You can even see a few additional methods that aren't part of the String class when you call methods on a string. Those additional methods are available because the String class inherits from other more primitive Ruby classes, including BasicObject. You can see this by running String.ancestors, which will return an array of all the parent classes the String class inherits from! We'll cover inheritance in more depth in the section on Object Oriented Programming.

You can learn more about the many String methods by reading the Ruby documentationLinks to an external site. on Strings.

A Note on Notation
In Ruby, there are two different kinds of methods: instance methods and class methods. You won't encounter class methods until the section on object-oriented programming, but technically all the methods we're writing now are instance methods. An instance method means a method that's called on an instance (one unique object) of a class.

In Ruby, we use the # at the beginning of a method when referring to it in documentation to indicate that it's an instance method, and the . at the beginning to indicate class methods:

#: instance method
.: class method
For example, these two variables refer to instances of the String class:

str1 = "hello"
str2 = "there"
We can call the instance method #upcase on both of these strings because they are both members of the String class, and share all the methods defined on that class.

You'll see this syntax used often in our lessons and in the Ruby documentation, so just know:

When a method starts with a # in documentation, it's an instance method
When a method starts with a . in documentation, it's a class method
Numbers
In Ruby, unlike JavaScript, there are two types of numbers: Integers and Floats.

Integers are whole numbers, like 7.

Floats are decimal numbers, like 7.3.

There are a number of methods available to you for operating on or manipulating integers. You can read more about Integers hereLinks to an external site. and more about Floats hereLinks to an external site.. For now, we'll just check out a few examples:

7.5.floor
# => 7
7.5.ceil
# => 8
10.next
# => 11
You can convert other some data types to integers or floats with the #to_i and #to_f methods:

"1".to_i
# => 1
"1.1".to_i
# => 1
"1.1".to_f
# => 1.1
Unlike JavaScript, Ruby won't convert an Integer to a Float when performing math operations, unless one side of the operation is already a Float:

4 / 3
# => 1
4 / 3.0
# => 1.3333333333333333
4 / 3.to_f
# => 1.3333333333333333
Nil
In Ruby, there is one special value that represents the absence of a value, nil. You've already seen nil as the return value of the #puts method:

puts "I return nil"
# I return nil
# => nil
In JavaScript, there are two different data types for representing the absence of value: null and undefined:

let noValue;
console.log(noValue);
// => undefined
noValue = null;
console.log(noValue);
// => null
undefined in JavaScript generally comes up in a few places: when a variable has been created, but hasn't been assigned a value, and when a function doesn't have any return value. null, on the other hand, is used to explicitly signify the absence of any value.

Unlike JavaScript, Ruby won't let you create a variable without assigning a value. You must explicitly assign a value of nil if you want an "empty" variable:

no_value
# NameError (undefined local variable or method `no_value' for main:Object)
no_value = nil
# => nil
Booleans
There are only two values of the Boolean data type: true and false. In Ruby, however, there is no such thing as a Boolean class. Instead, every appearance, or instance, of true and false in your program are instances of TrueClass and FalseClass respectively:

true.class
# => TrueClass
false.class
# => FalseClass
Ruby, like JavaScript, has the concept of "truthy" and "falsy" values as well: values which, when coerced to their equivalent boolean value, or evaluated as part of a conditional statement, return either true or false:

!!true
# => true
!!false
# => false
!!1
# => true
!!0
# => true
!!""
# => true
!!nil
# false
In Ruby, only nil and false are falsy values. Everything else is truthy, even 0 and empty strings.

Contrast this with JavaScript, where null, undefined, false, 0, NaN, and "" are all falsy values:

!!null;
// => false
!!undefined;
// => false
!!false;
// => false
!!0;
// => false
!!NaN;
// => false
!!"";
// => false
Symbols
A symbol is a representation of a piece of data. Symbols look like this :my_symbol. You write symbols by placing a : in front of the symbol name:

:this_is_a_symbol
If you make a symbol, :my_symbol, and then use that symbol later on in your code, your program will refer to the same area of memory in both cases. This is different from, for example, strings, which take up new areas of memory every time they are used:

:my_symbol.object_id
# => 2061148
:my_symbol.object_id
# => 2061148
"my string".object_id
# => 200
"my string".object_id
# => 220
The #object_id method returns an internal identifier used by Ruby representing the object's identity; we can see from the code above that the same symbol always returns the same object_id while the same string does not. That means they’re referencing different objects in memory, since Ruby allocates new memory for each string.

While JavaScript also has a Symbol data type, you'll find that symbols are used much more frequently in Ruby than they are in JavaScript. One use case for symbols that we'll see shortly is as keys on a hash (the Ruby equivalent of a JavaScript object).

Arrays
Ruby, like JavaScript, has an Array class for storing ordered lists of data. You can store any type of data in an array.

There are a number of ways to create an array. Just like with creating strings, you can use the literal constructor or the class constructor.

[1, 3, 400, 7] is an array of integers. Any set of comma separated data enclosed in brackets is an array. So, by simply writing something like the above, you can create an array:

[1, 3, 400, 7]
# => [1, 3, 400, 7]
You can also create an array with the Array.new syntaxLinks to an external site.. Just typing Array.new will create an empty array ([]):

Array.new
# => []
There are many ways to operate on arrays and on each individual item, or element, within an array. Later on in the course, we'll learn about methods for iterating over arrays (as with the .forEach, .map, etc methods in JavaScript). For now, we'll preview a few array methods, and you can check out more hereLinks to an external site..

[1, 3, 400, 7].length
# => 4
[5, 100, 234, 7, 2].sort
# => [2, 5, 7, 100, 234]
[1, 2, 3].reverse
# => [3, 2, 1]
Hashes
Hashes are Ruby's equivalent of a plain old JavaScript object. They are composed of key/value pairs. Each key points to a specific value, just like a word and a definition in a regular dictionary.

There are a few ways of writing hashes. You can create a hash by simply writing key/value pairs enclosed in curly braces:

{ key1: "value1", key2: "value2" }
Using the JSON-style syntax above will create a hash with Symbols for keys. To access data from this hash, you can use the bracket notation and pass in the symbol for the key you are trying to access:

my_hash = { key1: "value1", key2: "value2" }
my_hash[:key2]
# => "value2"
Unlike JavaScript, you cannot use the dot notation to access keys on hashes — only the bracket notation will work:

my_hash = { key1: "value1", key2: "value2" }
my_hash.key2
# NoMethodError (undefined method `key2' for {:key1=>"value1", :key2=>"value2"}:Hash)
You can also create hashes with Strings for keys:

{ "i'm a key" => "i'm a value!", "key2" => "value2" }
This syntax is known as the hash rocket syntax, and is useful if you need String keys for Symbols; however, in general, using Symbols for keys is preferred.

Last but not least, you can also use the Hash.new syntaxLinks to an external site., which would create an empty hash, {}:

Hash.new
# => {}
There are many methods for operating on hashes and their individual key/value pairs. We will learn much more about them later, but you can preview some methods hereLinks to an external site..

Conclusion
One of the first things to familiarize yourself with when learning a new language is its common data types. You'll find similarities across almost all programming languages when it comes to data types, with some differences of opinion cropping up as well, like what data is considered "truthy" and "falsy".

As you're exploring data types in Ruby, make sure to keep the "everything is an object" principle in mind, and take advantage of methods that let you ask questions about your Ruby data like the #methods and #class methods. Keep the Ruby documentationLinks to an external site. handy too!

Resources
Ruby From Other LanguagesLinks to an external site.
RailsBridge: Data TypesLinks to an external site.
Ruby documentationLinks to an external site.

Learning Goals
Understand the similarities between methods in Ruby and functions in JavaScript
Identify key differences between methods and functions
Define methods with parameters
Call methods and use their return value
Introduction
One of the first things you likely learned in JavaScript was how to write functions. In this lesson, you'll get practice writing methods in Ruby to see the difference between Ruby methods and JavaScript functions.

Ruby Method Syntax
To start, let's try re-writing this JavaScript function in Ruby:

function myFunction(param) {
  console.log("Running myFunction");
  return param + 1;
}
As a quick recap of the syntax here:

The function keyword identifies this code as a function.
myFunction is a variable name we can use to refer to the function from elsewhere in our code, written in camel case by convention.
The parentheses () after the function name give a space where we can define parameters for our function.
param is the variable name given to our function's parameter; it will be assigned a value when the function is invoked and passed an argument.
To define the body of the function, we use curly brackets ({ }).
console.log is a method that will output information to the terminal; remember, this is different from a function's return value.
The return keyword is needed when we want our function to return a value when it is called; in this case, it will return a value of whatever the param variable is plus one.
To actually run the code inside the function, we must invoke it:

const myFunctionReturnValue = myFunction(1);
// => "Running myFunction"
console.log(myFunctionReturnValue);
// => 2
Here, we're calling the function myFunction with an argument of 1. We are then assigning the return value of myFunction to a new variable, myFunctionReturnValue.

If we wanted to write a method in Ruby with similar functionality, here's how it would look:

def my_method(param)
  puts "Running my_method"
  param + 1
end
There are a few key differences in the syntax here:

Use the def keyword to identify this code as a method.
Write the name of the method in snake case (by convention).
Parameters are still defined in parentheses, after the method name.
Instead of curly parentheses, use the end keyword to identify where the method ends.
In Ruby, whatever the last line of a method is will be its return value. You can use the return keyword to explicitly identify the return value of a method, but Rubyists tend to rely on the implicit return instead.
Run IRB, and copy/paste the method definition above into your IRB session. Then, run the method:

my_method_return_value = my_method(1)
# Running my_method
# => 2
my_method_return_value
# => 2
When the #my_method method is called, you'll see the output from the #puts method in the terminal, followed by the return value. The return value, 2, is then saved to the variable my_method_return_value.

Why are they called methods in Ruby as opposed to functions? If you recall from Object Oriented JavaScript, the difference between a method and a function is that a method is a special sub-category of functions that must be called on some object. In Ruby, every method we define — even when it's not defined explicitly "on an object" or as part of a class definition — is still actually defined on a built-in Ruby object: the global main object, which you'll see referenced in error messages like "NameError (undefined local variable or method 'my_var' for main:Object)". main is roughly equivalent to the global object in JavaScript (the window in the browser); you can see for yourself by entering IRB and typing self. Read more about Ruby's Main Object hereLinks to an external site. if you're curious!

Optional Parentheses
Just like in JavaScript, you can invoke a method by placing parentheses at the end and passing in values as arguments, as in the example above. In Ruby though, parentheses are optional:

my_method 1
# Running my_method
# => 2
This syntax is a point of confusion for developers new to Ruby, since it can make it a bit less clear when using code whether you're invoking a method or using a variable. Consider the following method:

def say_hello()
  "hello!"
end
Parentheses are optional when defining the method, so we could also write this method like so:

def say_hello
  "hello!"
end
The convention in RubyLinks to an external site. is to use parentheses as part of a method definition when it takes parameters, and to omit them when it has no parameters.

You could run this method by placing parentheses at the end, like you would in JavaScript:

say_hello()
# => "hello"
But you can also run this method without parentheses:

say_hello
# => "hello"
In certain contexts, removing parentheses from the method calls can make your code more pleasant to look at. You might also see some Domain Specific Languages (DSLs) that prefer to omit parentheses. You've probably already seen a little bit of RSpec's DSL in the test files, for example:

describe "MyRubyThing" do
  it "runs" do
    # test here
  end
end
#describe and #it are just methods, so the above could have been written:

describe("MyRubyThing") do
  it("runs") do
    # test here
  end
end
But I think you'll agree that it looks nicer (and is easier to read) without the parentheses.

As you're getting started, just keep the fact that parentheses are optional in the back of your mind, and remember to ask yourself the question when looking at code: "Is this a variable, or is this a method?"

Method Arguments
JavaScript allows you to define functions that expect a certain number of arguments, but will still run your code even if you don't pass in the expected number when you invoke the function. This can lead to some unexpected behavior in your JavaScript applications.

Consider the following:

function sayHi(name) {
  console.log(`Hi there, ${name}!`);
}

sayHi();
What do you think will happen when this code runs? Will it throw an error? Print something to the console? If so, what? Try running it in the browser to find out.

Unfortunately for JavaScript developers, bugs like these are hard to identify because they can only be found by testing our code and looking for unexpected behavior.

In Ruby, thankfully, when we run a method without passing in the required arguments it will give us an error message:

def say_hi(name)
  puts "Hi there, #{name}!"
end

say_hi
# => ArgumentError (wrong number of arguments (given 0, expected 1))
Error messages like this are a good thing for us as developers, because it ensures that we are using methods as they are intending to be used, rather than trying to "fail gracefully" like JavaScript does.

Default Arguments
We can fix the behavior of our JavaScript function above by providing a default argument: a value that will be used if we don't explicitly provide one.

function sayHi(name = "friend") {
  console.log(`Hi there, ${name}!`);
}

sayHi();
// => "Hi there, friend!"
sayHi("Sunny");
// => "Hi there, Sunny!"
Ruby also lets us provide default arguments:

def say_hi(name = "Rubyist")
  puts "Hi there, #{name}!"
end

say_hi
# => "Hi there, Rubyist!"

say_hi "Sunny"
# => "Hi there, Sunny!"
Return Values
You can categorize all functions that you write as generally useful for one (or both) of these things:

What return value they have
What side effects they have (what other parts of the application they change; or what they output to the terminal; or what they write to a file; etc)
Writing output to the terminal using console.log or #puts is a side effect of a function: it's distinct from the function's return value.

Consider these two JavaScript functions:

function addAndLog(num1, num2) {
  console.log(num1 + num2);
}

function addAndReturn(num1, num2) {
  return num1 + num2;
}

const sum1 = addAndLog(2, 2);
const sum2 = addAndReturn(2, 2);
What do you expect the values of sum1 and sum2 to be? What output would you expect to see in the console if you ran this code?

Since addAndLog doesn't use the return keyword, the value of sum1 is undefined. We're only using addAndLog for its side effect of logging output to the terminal. sum2, on the other hand, will have a value of 4, since we are using addAndReturn for its return value.

Think of it this way: methods are like vending machines. When you use a vending machine you just put in two arguments, the number (C7) and your money. We already know how to use arguments, but then your vending machine might do two things. One, it will make a noise saying that everything worked, beep beep. Then it gives you the soda. The soda is the return type. But those beeps? Are you able to do anything with them? Nope! That's like #puts: it just tells you stuff and then goes into the ether! Gone forever.

Every method in Ruby returns a value by default. This returned value will be the value of the last statement:

def add_and_log(num1, num2)
  puts num1 + num2
end

def add_and_return(num1, num2)
  return num1 + num2
end

sum1 = add_and_log(2, 2)
# => nil
sum2 = add_and_return(2, 2)
# => 4
The return value of the #add_and_log method is nil, because #puts returns nil.

Say you're the best painter in the world, Bob Ross. To make a method that just prints your name and returns nil, you could write:

def print_name
  puts "Bob Ross"
end
To write a method that returns your name but doesn't print anything, you could write:

def return_name
  "Bob Ross"
end
To both print and return your name, you could write:

def print_and_return_name
  puts "Bob Ross"
  "Bob Ross"
end
If you accidentally switched the order of the lines inside the method:

def broken_print_and_return_name
  "Bob Ross"
  puts "Bob Ross"
end
The method would instead print "Bob Ross" and return nil. This is because the last line that was evaluated was puts ... and the return value of a #puts is always nil.

The Return Keyword
There is one other way to return a value from a method, and that is to use the return keyword.

Let's take a look:

def stylish_painter
  best_hairstyle = "Bob Ross"
  return "Jean-Michel Basquiat"
  best_hairstyle
end

stylish_painter
What do you expect the return value of the above method to be? Go into IRB, copy and paste the above method and call it.

You may have expected the return value to be Bob Ross. His name is the last line of the method. However, the return value of the above method is actually Jean-Michel Basquiat! The return keyword will disrupt the execution of your method, and prevent Ruby from running any lines of code after the return keyword.

The explicit use of the return keyword is generally avoided by many Rubyists, but there are instances where you might want to use return instead of relying on implicit returns; for example, if we wanted to use a guard clauseLinks to an external site. and exit a function early if a certain condition isn't met:

def reverse_name(name)
  if name.class != String
    return nil
  end

  name.reverse
end

reverse_name("Bob Ross")
# => "ssoR boB"
reverse_name(123)
# => nil
Instructions
In the js/index.js file, there are four functions defined in JavaScript. Your job is to recreate the functionality of those functions by writing methods in Ruby that will accomplish the same thing.

Write your code in methods.rb. Run learn test, and use the tests along with the code in js/index.js to guide your work.

Define a method #greet_programmer that takes no arguments. It should output the string "Hello, programmer!" to the terminal with #puts.

Define a method #greet that takes one argument, a name. It should output the string "Hello, name!" (with "name" being whatever value was passed as an argument) to the terminal with #puts.

Define a method #greet_with_default that takes one argument, a name. It should output the string "Hello, name!" (with "name" being whatever value was passed as an argument) to the terminal with #puts. If no arguments are passed in, it should output the string "Hello, programmer!".

Define a method #add that takes two numbers as arguments and returns the sum of those two numbers.

Define a method #halve that takes one number as an argument and returns the that number's value, divided by two. If the argument is not an integer, it should return nil and not throw an error.

Conclusion
Ruby's method syntax has a few things that make them distinct from JavaScript functions. In particular, make sure you pay attention to the implicit return value of Ruby methods, and always call methods with the right number of arguments to avoid errors. You should also keep in mind that parentheses are optional when calling methods.

Resources
Writing Ruby MethodsLinks to an external site.

Variable Scope
GitHub RepoCreate New Issue
Learning Goals
Understand the differences between variable scope in Ruby and JavaScript
Use local variables and global variables
Introduction
In this lesson, we'll introduce the concepts of method scope and variable scope.

Variable Names and Scope
Naming variables is hard, but it is important. We need our code to be as descriptive as possible. Any other developer reading over one of our programs should be able to understand what our code does. A big part of this is having variable (and method) names that are sensible and descriptive.

What is Scope?
Methods in Ruby create their own scope. "Scope" refers to the areas of your program in which certain data is available to you. Any local variable created outside of a method will be unavailable inside of a method. In addition, local variables created inside of a method (i.e. in between the def and end keywords of a method) 'fall out of scope' once you're outside the method.

Let's take a look at the following example:

name = "Joe"

def greeting(name)
   puts "Hello, #{name}"
end
In this code snippet, we have a variable, name, set equal to a string, "Joe". Then we define a method, #greeting, that takes in an argument of name. Are the name variable that is set equal to "Joe" and the name variable we are using as a parameter (or argument) for our #greeting method definition the same? Let's see.

If we call our greeting method in the following way:

greeting("Sophie")
What do we expect to be outputted to the terminal?

In this case, the above method invocation would puts out Hello, Sophie to the terminal. It is true that we are setting a variable, name, equal to "Joe" in this code snippet. But we are not using that variable anywhere else in our code. The name argument of the #greeting method is just a placeholder. It means: when we call the #greeting method with an argument of, say, "Sophie", set the variable name inside of the method equal to that string argument.

The name variable inside of the #greeting method is different from the name variable that we set equal to "Joe" outside of the method. The #greeting method has its own scope, and variables inside of it don't know about variables outside of it and vice versa.

Method Scope in Ruby
Think of a method as a castle. The def and end keywords are like the gates that keep out the barbarian hordes, dragons, etc. Let's take a look:

evil_monster = "Bowser"

def princess_peaches_castle
  puts "#{evil_monster} is trying to kidnap Princess Peach!"
end
We've defined the variable evil_monster outside of the method, #princess_peaches_castle. Then, we try to call on the evil_monster variable inside that method. Watch what happens when we invoke the method:

princess_peaches_castle
#=> NameError: undefined local variable or method `evil_monster' for main:Object
The evil_monster variable is out of scope for this method. The method can't access it unless we pass it in as an argument.

In JavaScript, scope rules would allow us to use a variable in the outer scope from our function:

const evilMonster = "Bowser";

function princessPeachesCastle() {
  console.log(`${evilMonster} is trying to kidnap Princess Peach!`);
}
This is a key difference between Ruby and JavaScript: in Ruby, local variables are only available within the scope of the method they are defined in.

If we define our method to accept an argument, we can pass our variable into the method and the method will be able to operate on/use that variable. Let's take a look:

evil_monster = "Bowser"

def princess_peaches_castle(evil_monster)
  puts "#{evil_monster} is trying to kidnap Princess Peach!"
end

princess_peaches_castle(evil_monster)
#=> "Bowser is trying to kidnap Princess Peach!"
The method call, which happens outside the method itself, has access to our evil_monster variable. We can therefore make the value stored in evil_monster available to #princess_peaches_castle by passing it as an argument when we call the method. So now Mario can start his adventure.

So far, we've seen that variables defined outside of methods are not available inside methods (unless we pass them in as arguments). This works the other way around as well: variables defined inside of methods are not available outside of those methods. Let's take a look.

If we define the following method to include a local variable:

def practicing_method_scope
  im_trapped_in_the_method = "You can't access me outside this method!"
end
Trying to access that variable elsewhere in our program, outside of this method, will raise the following error:

im_trapped_in_the_method
#=> NameError: undefined local variable or method `im_trapped_in_the_method' for main:Object
Variable Types
So far, we've encountered one type of variable in Ruby: local variables. They're called "local" because they don't ever leave the scope they're defined in. There are other types of variables in Ruby as well, which can be defined using different naming conventions:

Local variables: must start with a lowercase letter or an underscore (_): name = "Lucy"
Global variables: must start with a dollar sign ($): $name = "Lucy"
Instance variables: must start with an at symbol (@) @name = "Lucy")
Class variables: must start with two at symbols (@@) (@@name = "Lucy")
We'll discuss instance variables and class variables later along with Object Oriented Programming, but global variables can be useful to see how Ruby treats different variable types with regards to their scope.

For example, we could use a global variable to make the $evil_monster available everywhere in our code:

$evil_monster = "Bowser"

def princess_peaches_castle
  puts "#{$evil_monster} is trying to kidnap Princess Peach!"
end
You should almost never need to use global variables in your code. Having a lot of global variables makes your code unpredictable and challenging to debug, so you should reserve them for special cases (like application-wide configuration).

Conclusion
Remember: A local variable defined inside a method can't leave that method. It is not available to your program outside of the method. A local variable defined outside of a method can only be made available to the code inside the method if you pass that variable in to the method as an argument.


