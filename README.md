# eGain-UX-Project Darren Mah

[View project here](https://phlegmmignon.github.io/eGain-UX-Project)

## Project Requirements

1. The widget must first ask the user for a description of the problem they are trying to solve.
2. The widget must present questions to the end user and record the answers they provide.
3. The widget must be able to present questions one at a time or more than one at a time, based on what
   the backend service provides. Answers can be of the following types:
   - Text enumerated form: Show text options, and the user picks one.
   - Image enumerated form: Show a few images, and the user picks one.
   - Text box: Freeform text box to type.
   - Numerical answer: Freeform text box that accepts only numbers.

4. All answered questions must be displayed under an Answered section.
   - Users must be able to click on an answered question and change their answer.
   - After answering a few questions, the system will provide a solution to the problem.

5. The widget must allow the user to provide feedback on whether the answer was helpful or not.
6. The widget must be embeddable on any web page.
7. The widget should allow an admin to easily change colors, fonts, and font sizes.
8. The widget should feature a small logo on the top right-hand corner, and the admin should be able to
   easily change the logo.
9. The widget must be responsive and fit different screen dimensions and sizes available on a webpage.
10. The project must be implemented using Vue.js. There is no server-side for this project, so mock all server
    inputs.

The following must be submitted
A live link where we can see the project in action. This link must be available for a period of 15
days from the date the project was submitted.
A git repository with the code for the project.
Instructions on how to build and deploy the project

## Intro

To fulfill project requirements, I built the widget as a single page applicaiton with Vue, TailwindCSS, Primevue and Pinia. Since server inputs were mocked, I opted to host on Github Pages instead of a full hosting solution like AWS.

I was informed I can assume there will be no malicious inputs, so I didn't add input sanitation. I also assumed that the 'admin' in the project requirements can code.

To meet requirement 8, the logo can be easily changed in components/Header.vue
TO meet requirement 7, colors, fonts, and font sizes can be changed in style.css or in their respective button component.

## How to build and deploy

1. Clone the repository
2. Skip this step, but come back if it doesn't work. Run `npm run build` and paste generated files in repo
3. Configure your settings like so. It takes 30s-1min to build before you can see the section containing Visit Site button.

4. To use the widget in your app, use lines 4 and 8 in your code.

## Design and Reflections

I saw several viable implementations to fulfill project requirements. I chose to use a form over a popup chatbox since I was more familiar with forms and an iframe over a web component since it was more isolated and less likely to break if other choose to embed and test the widget.
Due to time constraints, I made some compromises and didn't implement some features that would've been nice, but beyond project requirements, which I'll outline below.

- Content could be more precisely placed at some screen sizes with media queries for better visuals.
- I opted to hard code questions and answer states for simplicity, but ended up making implementation less elegant and harder. With more time I would've mocked fetching questions from server with a json like `{{id: 1, type: 'dropdown', question: 'Q1', choices: {choice1, choice2}, ...}` so that I could use v-for to dynamically render them with a template component for a given type (dropdown, text, numbers, images). This would've made it easier to store user answers as well.
- Add toasts to inform user their submissions go through
- Add better accessibility features.
- While responsive, I would've liked to make every page take up as much space as the SolutionsFeedback page.
- I hard coded lorem ipsum into the solution instead of mocking fetch for simplicity.
