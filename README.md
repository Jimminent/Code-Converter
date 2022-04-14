# Code-Converter
This started out as a python project, but I converted it to JavaScript so I could make it into a website!
The code converter basically does two things to a normal message:
First, it swaps each character out for a counterpart in the "font" object,
Second, it adds a random character after each of the characters, to lengthen and obfuscate the message more.
This "encodes" the original message.

To "decode" the message, the converter:
First, iterates through the encoded message and takes every other character,
Second, it returns the key of the value in the "font" object.
This returns the encoded message to its original form.
