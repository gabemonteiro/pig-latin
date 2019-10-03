
| Behavior | Input Example | Output Example |
| ------------ | ------------ | ------------ |
| **Our program should handle:** | **When it receives:** | **It should return:** |
| For words beginning with a vowel, add "way" to the end.| Apple | "Appleway" |
| For words beginning with a vowel, add "way" to the end.| Apple | "Appleway" |
| For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay". | Cool | "Oolcay" |
| For words beginning with "y", treat "y" as a consonant. | Your | "Ouryay" |
| If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first! | Squeal | "Ealsquay" |


<!---
| Behavior | Input Example | Output Example |
| ------------ | ------------ | ------------ |
| **Our program should handle:** | **When it receives:** | **It should return:** |
| The program should return when a year is not a leap year. | 1993 | false |  
| The program should return 'true' for years divisible by 4, since those are leap years. | 2004 | true |
| The program should return 'false' for years divisible by 100, since those are not leap years. | 1900 | false |
| The program should return 'true' for years divisible by 400, since those are leap years. | 2000 | true |
--->

<!---
| Behavior | Input Example | Output Example |
| ------------ | ------------ | ------------ |
| **Our program should handle:** | **When it receives:** | **It should return:** |
| a year that is NOT a leap year | 1993 | False |  
| a year that is divisible | 2004 | True |
| a year that is divisible by 100 | 1900 | False |
| a year that is divisible by 400 | 2000 | True |
--->

<!---
| Behavior | Input Example | Output Example |
| ------------ | ------------ | ------------ |
| **Our program should handle:** | **When it receives:** | **It should return:** |
| The program ignores non-alphabetical characters, since they cannot be vowels. | 4% | 0 |
| The program recognizes a single vowel. | a | 1 |
| The program recognizes a single vowel, regardless of case. | A | 1 |
| The program recognizes a single vowel in a multiple-character word. | cat | 1 |
| The program recognizes multiple vowels in a single word. | cater | 2 |
| The program recognizes vowels in a multiple-word sentence. | cats catered the event | 7 |
| The program recognizes vowels in a multiple-word sentence, regardless of capitalization. | CATS CATERED THE EVENT | 7 |  
| The program recognizes all vowels in a multiple-word sentence, regardless of inconsistent capitalization. | CaTS CATEReD ThE EveNT | 7 |
--->
