# p1-text-generation-mod
Author: Divyansh Khare
starter code credits: Adam Smith

***Lucy in the Sky with Diamonds (Alt Version)***
-The entire grammar template is unique

ONE UNIQUE REPLACEMENT:
I constructed a whole sentence by breaking it down into a subject and predicate. As a sentence must have a clear semantic meaning, I broke down a sentence into its constituent elements and laid out a structure which will work most of the time.
 These subject and predicate arrays use random replacement to select a subject(a proper noun) and a predicate(made of a randomly selected continuous verb which adds a semantic meaning and an adjective)

The core structure looks something like this

sentence >> subject + predicate
subject >> propernoun
predicate >> continous verb + adjective
continuous verb >> verb +"s"

This approach mimics grammatical chaining. In the presence of a binary tree like structure, the grammatical accuracy can be increased.

You can see the results in the REVIEWS section. 

ARTIST STATEMENT:
-This project tries to mimic the classic Bealtes song and add layers of randomised fun
to give the song an entirely new meaning

-I am trying to make the lyrics as comical as possible with randomised famous people aws subjects, silly verbs(things they do), and adjectives.
-I was able to achieve that effect to a certain degree of satisfaction

-Semantic Accuracy: Really hard to get it up to 100% due to the inconsistent and randomised nature of the approach. Could do better by having a more robust and grammatical architecture in what makes a sentence
I ended up breaking downt the review statements into a simple grammatical structure and creating an additional continuous verb array to get some form of a proper sentence construction

