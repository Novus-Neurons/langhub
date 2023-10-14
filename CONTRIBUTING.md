# Contributing to langhub

Thank you for your interest in contributing to the Language Learning Flashcards project. Your contributions help make language learning more accessible and enjoyable for everyone. Below are the guidelines and instructions for contributing to this project.

## Contribution Guidelines

### Adding Language Content

1. Choose the language you want to contribute to or create content for.

2. Locate the existing JSON file for the chosen language in the `languages/` directory. If it doesn't exist, use the `sample-json-template.json` file to create a new one. Name it `<LANGUAGE_NAME_IN_CAPITAL>.json`.

3. Edit the JSON file, following the predefined structure, to add new sentences and words in the chosen language. Make sure to provide translations and additional details where necessary.

### Frontend Development

If you want to contribute to the website's frontend development:

1. Refer to the design specifications provided below for guidance.

2. Ensure that your contributions are responsive and dynamic, allowing the website to render content properly from the JSON data files.

3. If you have a new design idea, create a pull request for the design first before proceeding with development. Alternatively, you can contact the repository owners to discuss your design concept.

4. [figma](https://www.figma.com/file/Ytjhr2hushiuM5ZblRWjrz/NN_Hacktober?type=design&node-id=0%3A1&mode=design&t=svBHSaUF1Zl1HTGw-1)

## Design Specifications

- The design of the website should prioritize user-friendliness and accessibility.

- Maintain a clean and intuitive user interface that makes it easy for users to navigate and interact with the flashcards.

- Ensure that the website looks appealing and functions well on various devices and screen sizes.

## How to Contribute

1. Fork the repository to your GitHub account.

2. Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/Novus-Neurons/langhub.git
   cd Learnhub
   ```
3. Create a new branch for your contribution:

    ```bash
        git checkout -b language/your-language-name
    ```
4. Commit your changes with clear and concise commit messages:

    ```bash
        git commit -m "Add new content for <LANGUAGE_NAME>."
    ```

5. pull the origin 
    ```bash
        git pull origin main
        git merge main
    ```
    resolve all the conflicts 

6. Push your changes to your GitHub repository:
    ```bash
        git push origin language/your-language-name
    ```
7. create a pull request with hacktober fest tag
    **hacktoberfest**, 
    **hacktoberfest-accepted**

### Contributions through JSON

1. navigate to "langhub/language-card-details" folder

2. create a new .json file
    - file name should be in "ALL_CAPITAL"
    - with expension ".json"

3. copy the whole code from "langhub/language-card-details/sample-json-template.json" into your newly created file 
    ```json
    {
        "language": "<text_string>",
        "languagedesc": "<text_string> <50-60-words>",
        "expandedview": {
            "total_number_of_words": "<number>",
            "total_number_of_sentences": "<number>",
            "words": [
                {
                    "word": "<text_string>",
                    "details": {
                        "meaning": "<text_string> -- Explanation and information about the word or sentence. some text in english or any other language which can be 30-50 words long.",
                        "Synonyms": [
                            "text",
                            "text",
                            "text"
                        ],
                        "other_information": "text"
                    }
                },
                {
                    "word": "",
                    "details": {
                        "meaning": "",
                        "Synonyms": [
                            "text",
                            "text",
                            "text"
                        ],
                        "other_information": "text"
                    }
                }
            ],
            "sentences": [
                {
                    "sentence": "<text_string>",
                    "details": {
                        "meaning": "<text_string> -- Explanation and information about the word or sentence. some text in english or any other language which can be 30-50 words long.",
                        "in_other_languages": {
                            "labguage1_name": "<text_string>",
                            "labguage2_name": "<text_string>",
                            "labguage3_name": "<text_string>"
                        },
                        "other_information": "text"
                    }
                },
                {
                    "sentence": "<text_string>",
                    "details": {
                        "meaning": "<text_string> -- Explanation and information about the word or sentence. some text in english or any other language which can be 30-50 words long.",
                        "in_other_languages": {
                            "labguage1_name": "<text_string>",
                            "labguage2_name": "<text_string>",
                            "labguage3_name": "<text_string>"
                        },
                        "other_information": "text"
                    }
                }
            ]
        }
    }
    ```

4. make the changes accordingly 
    - take care of data types 
    - strings in double quotes and in single like without any "Enter" or 
    - numbers without quotes
    - add commas when dealing with objects and arrays

5. add your file to "/langhub/cards.json"
    ```json
        {
            "number_of_language_cards":1,
            "card_paths": [
                "/language-card-details/MARATHI.json"
            ]
        }
    ```


### Contributions to Frontend

#### if you want to create a new design 

1. create a new folder for your design

2. make your contribution

3. link your design to global "/index.html" 
    - Adding a button to redirect to your design.  

#### if you want to contribute to existing design 

1. create a new component i.e. a .html file in "/langhub/components" folder

2. add this component to the index page by makes appropriate changes in "/langhub/index.js" file
