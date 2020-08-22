# Google Book Search

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
![GitHub repo size](https://img.shields.io/github/repo-size/cofchips/book_search)

## Description
Google Book Search is an app that utilizes the Google Books API to allow users to search for books and save their favorite titles. 

![Image](./client/public/site.png)

## Table of Contents
* [Background](#background)
* [Approach](#approach)
* [Issues](#issues)
* [Technology](#technology)
* [Site](#site)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)
* [Authors](#authors)


## Background

Google Books Search was built using React. It features UI that has been separated into components, managed component state, and it responds to user events.

Acceptance criteria for this app is as follows:

```
Should have each of the following fields:

* `title` - Title of the book from the Google Books API

* `authors` - The books's author(s) as returned from the Google Books API

* `description` - The book's description as returned from the Google Books API

* `image` - The Book's thumbnail image as returned from the Google Books API

* `link` - The Book's information link as returned from the Google Books API

* Layout should include at least two React Components for each page `Search` and `Saved`.

```

## Approach

The project featured the below areas of focus:
1) Setting up Global State 
2) Searching for books and displaying results
3) Saving books 

useEffect hooks are used to check if a key/value pair for searchInput exists in state when the page initially loads and also upon any change to state. If there is a key/value pair, it makes an API request to the Google Books API and then takes the results and updates the state using setBooks. Map is then used with this state to populate the list of search results onto the page.

A new book entry is added to the database.

## Issues

When deploying this project to a production environment, the team experienced the below error:

```
Uncaught SyntaxError: Unexpected token '<'
```
The deploy would build successfully; however, when visiting the website, only a blank white screen would appear. 

During troubleshooting, the team discovered that the application was built with an old version of react (16.6). To resolve this issue, the team rebuilt the application using create-react-app. After a few code modifications, deployment to heroku was successful.

Click on the link below to view the original repository:



## Technology

* [html5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
* [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap](https://getbootstrap.com/)
* [React](https://reactjs.org/)

## Site

* [See Live Site](https://searchbookongoogle.herokuapp.com/)

## License
MIT

## Contributing
Contributions are welcome. Please contact for further details.



* **EDDY YANG**

- [Link to Github](https://github.com/eddyangang)
- [Link to LinkedIn](https://www.linkedin.com/in/eddy-yang-213b43189/)

* **ERNEST URZUA**

- [Link to Github](https://github.com/ErnestUrzua)
- [Link to LinkedIn](https://www.linkedin.com/in/ernesturzua/)

* **DONNA NGUYEN**

- [Link to Github](https://github.com/donnaxnguyen)
- [Link to LinkedIn](https://www.linkedin.com/in/donna-nguyen01/)

* **PREETI GUPTA**

- [Link to Github](https://github.com/preeti1234567)
- [Link to LinkedIn](https://www.linkedin.com/in/preetigupta-59a5641ab/)

* **CHRISTOPHER LEE** 

- [Link to Github](https://github.com/CofChips)
- [Link to LinkedIn](https://www.linkedin.com/in/christophernlee/)
