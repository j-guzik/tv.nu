# tv.nu - Frontend assignment

## Table of contents

- [Basic information](#basic-information)
- [Possible directions of development](#possible-directions-of-development)
- [Technologies](#technologies)
- [Setup](#setup)

## Basic information

This is an application that contains a movie catalog. The project was created in React using the API from https://stage-api-frontend.tv.nu/programs. Data is displayed on screen as a list of 15 programs. The list of programs includes title, image, genres, streaming services and imdb rating for each program. The site is responsive and looks good on a variety of devices.
The user has the ability to filter programs by their type (movie, series or both) and sort programs by imdb rating. If a rating for a given program is not available and the user sorts the list of programs, the program with the unavailable rating will move to the bottom of the list regardless of the sorting direction. The application has a loading animation that displays when the image is not yet loaded.

## Possible directions of development

A possible improvement would be to display the logos of streaming platforms instead of their names. When a user clicks on a particular logo it would redirect them to the provider's page with the specific video.
It would also be nice to display the rating on a star scale instead of a number.
In order to improve the solution, it would be good to perform tests, but I didn't have enough time for that.
I am familiar with two frameworks for testing: Jest and Cypress.

As for further development of the application, it would make sense to create the ability to filter by other data like genre. The program area could be clickable and display the shortcut of a given program and other detailed information. It would be a good idea to create accounts for users and the possibility of their own evaluation of the program, as well as enable commenting and discussion.

## Technologies

Project is created with:

- React
- Typescript
- Sass

## Setup

To run the project you need to clone the repo and execute the following commands in the project directory:

```
$ npm install
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser

![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)
