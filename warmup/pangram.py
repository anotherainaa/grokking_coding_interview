# A pangram is a sentence where every letter of the English alphabet appears at least once.
# Rules
# - a - z all letters must appear in the given sentence
# - if all letters are present, return true
# - else return false
# - case insensitive, big and small letters count as same letter

# Algorithm
# we need an array of all the letters a - z
# then as we iterate through sentence,
#   - if the letter exists in the a - z array, delete the character
# when we reach the end, return true if array is empty
# return false if there are any remaining characters

# could use hash and give every letter zero value
# if there is any character with zero value at the end, return false
# else return true

# why hash not array, O(1) look up


import string

def checkIfPangram(sentence):
    alphabet = dict.fromkeys(string.ascii_lowercase, True)

    for char in sentence:
        if alphabet.get(char.lower()):
            del alphabet[char.lower()]

    if len(alphabet) == 0:
        return True
    else:
        return False


print(checkIfPangram("TheQuickBrownFoxJumpsOverTheLazyDog"))
print(checkIfPangram("TheQuickBrownFoxJumpazyDog"))
