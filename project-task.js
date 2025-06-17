/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",       
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": 32,
      "email": "bob.smith@example.com"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?

Syntax errors:
  line 50:
  - missing comma after "2024-05-15"
  - cannot distinguish where the "checkInDate" ends and "checkOutDate" begins
  - added comma after "2024-05-15"
  line 54:
  - missing quotation marks for name key
  - double quotes are required for all string values and key names
  - embedded name in double quotes
  line 60:
  - invalid data type of undefined
  - undefined is not one fo the data types that JSON support
  - change the value of "age" to null since Bob's age is unknown
  line 67:
  - trailing comma after Parking
  - trailing commas are invalid in JSON
  - removed the trailing comma after Parking

Other errors that could fail data validation
  line 60:
  - Null for Bob's age would pass JSON validation. 
  - However, null can be replaced with a number, say 32, to make it pass other validations
  line 61:
  - a string value for email would pass JSON validation. However, it is missing the domain name .com, .org, etc. to make the email valid.
  - add .com at the end of the email to make it valid

*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
    Going through the code line by line to make sure the following exists
    - key name is enclosed in double quotes
    - colon exists after the key
    - value is a valid data type
    - value is enclosed in double quotes if it is a string
    - comma at the end of an element IF it is not the last element
    - no trailing comma after the last element
    - every bracket and brace has a matching bracket or brace

2️⃣ How did you confirm that your corrected JSON file was valid?
    Validated the code by using both jsonlint and codebeautify

3️⃣ Which errors were the most difficult to spot? Why?
    - every error needed the same attention, but
      - name not having enclosed double quotes would be the one

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
    - paying attention to every key, value, double quotes, data type, and bracket pairs and the element itself help minimize the errors
    - using a validator after the correction helps understand my understanding of the rigid rules and the capacity to identify the errors
*/
