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
5. Push your changes to your GitHub repository:
    ```bash
        git push origin language/your-language-name
    ```
6. create a pull request with hacktober fest tag
    **hacktoberfest**, 
    **hacktoberfest-accepted**
