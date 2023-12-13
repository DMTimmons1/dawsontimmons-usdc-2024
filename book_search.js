/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {

    // Assigns the value of the searchTerm argument to the "SearchTerm" property and creates an empty array for the "Results" property.
    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    // Checks that the scannedTextObj is not null.
    if (scannedTextObj != null){
        
        // loops through each book in the scannedTextObj
        for (let book of scannedTextObj) {
            
            // loops through each content object in the current book
            for (let content of book.Content) {

                /* The below line removes all punctuation from the content text of the current book.
                 * The content text utilizes larger strings so JavaScript can already find the searchTerm regardless of what appears before or after it.
                 * This line could be added in if the content text was smaller and the searchTerm was more likely to be broken up by punctuation.
                
                var textWithoutPunctuation = content.Text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

                 * if the above line is added in, the below if statement would need to be changed to: if (textWithoutPunctuation.includes(searchTerm)) */

                // checks if the content text of the current book includes the searchTerm
                if (content.Text.includes(searchTerm)) {
                    
                    // if the searchTerm is found, pushes the ISBN, Page, and Line as a new object in the Results array.
                    result.Results.push({
                        "ISBN": book.ISBN,
                        "Page": content.Page,
                        "Line": content.Line
                    });
                }
            }
        }
    }
    return result;
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}


/** My Test Data */


/** Output object for test 3.*/
const twentyLeaguesNoMatchOut = {
    "SearchTerm": "no match",
    "Results": []
}

/** Output object for test 5.*/
const nullSearchTermOut = {
    "SearchTerm": null,
    "Results": []
}

/** Output object for test 6.*/
const nullScannedTextObjOut = {
    "SearchTerm": "null input",
    "Results": []
}

/** Input object for tests 7-11*/
const multipleBooksIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    },
    {
        "Title": "The Adventures of Tom Sawyer",
        "ISBN": "9780195810400",
        "Content": [
            {
                "Page": 74,
                "Line": 9,
                "Text": "The stairs creaked faintly. Evidently spirits were abroad. A measured, muffled"
            },
            {
                "Page": 74,
                "Line": 10,
                "Text": "snore issued from Aunt Polly\'s chamber. And now the tiresome chirping of a"
            },
            {
                "Page": 74,
                "Line": 11,
                "Text": "cricket that no human ingenuity could locate, began. Next the ghastly ticking of a"
            } 
        ] 
    },
    {
        "Title": "The Adventures of Huckleberry Finn",
        "ISBN": "9780520343641",
        "Content": [
            {
                "Page": 128,
                "Line": 9,
                "Text": "A little smoke couldn\'t be noticed now, so we would take some fish"
            },
            {
                "Page": 128,
                "Line": 10,
                "Text": "off of the lines and cook up a hot breakfast.  And afterwards we would"
            },
            {
                "Page": 128,
                "Line": 11,
                "Text": "watch the lonesomeness of the river, and kind of lazy along, and by"
            } 
        ] 
    }
]

/** Output object for tests 7 & 8.*/
const multipleBooksOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780195810400",
            "Page": 74,
            "Line": 10
        },
        {
            "ISBN": "9780195810400",
            "Page": 74,
            "Line": 11
        },
        {
            "ISBN": "9780520343641",
            "Page": 128,
            "Line": 10
        },
        {
            "ISBN": "9780520343641",
            "Page": 128,
            "Line": 11
        }
    ]
}

/** Output object for test 9.*/
const multipleBooksNoMatchOut = {
    "SearchTerm": "no match",
    "Results": []
}

/** Output object for test 11.*/
const caseSensitiveNoMatchOut = {
    "SearchTerm": "tHE",
    "Results": []
}

/** Output object for test 12.*/
const ignorePunctuationOut = {
    "SearchTerm": "breakfast",
    "Results": [
        {
            "ISBN": "9780520343641",
            "Page": 128,
            "Line": 10
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}



/** My Tests */


/* Test: 3
 * Type: Negative
 * Description: Checks that the function returns an empty array if the searchTerm is not found. */
const test3result = findSearchTermInBooks("no match", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesNoMatchOut) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesNoMatchOut);
    console.log("Received:", test3result);
}

/* Test: 4
* Type: Negative
* Description: Verifies that the function returns the correct number of results when one book is scanned and there is no match. */
const test4result = findSearchTermInBooks("no match", twentyLeaguesIn);
if (test4result.Results.length == 0) {
   console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesNoMatchOut.Results.length);
    console.log("Received:", test4result.Results.length);
}

/* Test: 5 
 * Type: Negative
 * Description: Checks that the function returns an empty array if the searchTerm is null. */
const test5result = findSearchTermInBooks(null, twentyLeaguesIn);
if (JSON.stringify(nullSearchTermOut) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", nullSearchTermOut);
    console.log("Received:", test5result);
}

/* Test: 6
 * Type: Negative
 * Description: Checks that the function returns an empty array if the scannedTextObj is null. */
const test6result = findSearchTermInBooks("null input", null);
if (JSON.stringify(nullScannedTextObjOut) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", nullScannedTextObjOut);
    console.log("Received:", test6result);
}

/* Test: 7
 * Type: Positive
 * Description: Checks that the function can correctly iterate over multiple books in the scannedTextObj array. */
const test7result = findSearchTermInBooks("the", multipleBooksIn);
if (JSON.stringify(multipleBooksOut) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", multipleBooksOut);
    console.log("Received:", test7result);
}

/* Test: 8
 * Type: Positive
 * Description: Verifies that the function returns the correct number of results when multiple books are scanned. */
const test8result = findSearchTermInBooks("the", multipleBooksIn);
if (test8result.Results.length == 5) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", multipleBooksOut.Results.length);
    console.log("Received:", test8result.Results.length);
}

/* Test: 9
 * Type: Negative
 * Description: Checks that the function returns an empty array if the searchTerm is not found when multiple books are scanned. */
const test9result = findSearchTermInBooks("no match", multipleBooksIn);
if (JSON.stringify(multipleBooksNoMatchOut) === JSON.stringify(test9result)) {
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9");
    console.log("Expected:", multipleBooksNoMatchOut);
    console.log("Received:", test9result);
}
/* Test: 10
* Type: Negative
* Description: Verifies that the function returns the correct number of results when multiple books are scanned and there is no match. */
const test10result = findSearchTermInBooks("no match", multipleBooksIn);
if (test10result.Results.length == 0) {
   console.log("PASS: Test 10");
} else {
    console.log("FAIL: Test 10");
    console.log("Expected:", multipleBooksNoMatchOut.Results.length);
    console.log("Received:", test10result.Results.length);
}

/* Test: 11
 * Type: Case-Sensitive
 * Description: Checks that the function is case sensitive when utilizing the searchTerm. */
const test11result = findSearchTermInBooks("tHE", multipleBooksIn);
if (JSON.stringify(caseSensitiveNoMatchOut) === JSON.stringify(test11result)) {
    console.log("PASS: Test 11");
} else {
    console.log("FAIL: Test 11");
    console.log("Expected:", caseSensitiveNoMatchOut);
    console.log("Received:", test11result);
}

/* Test: 12
 * Type: Positive
 * Description: Checks that the function ignores punctuation when utilizing the searchTerm. */
const test12result = findSearchTermInBooks("breakfast", multipleBooksIn);
if (JSON.stringify(ignorePunctuationOut) === JSON.stringify(test12result)) {
    console.log("PASS: Test 12");
}
else {
    console.log("FAIL: Test 12");
    console.log("Expected:", ignorePunctuationOut);
    console.log("Received:", test12result);
}
