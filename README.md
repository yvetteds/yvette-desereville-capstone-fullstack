<!-- ABOUT THE PROJECT -->

### About the Project 

projectLab is a web-based project management application that anyone can use for personal project portfolio management. Although with my research background, it was built with graduate students and research professionals in mind, it is versatile enough to be used by anyone wanting to build further structure around their research, and personal or professional projects (theses/goals). It is also, more broadly, a project management tool that can be used to summarize any sub-projects they do at work to build a living portfolio and make interview preparation easier. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React.js]][React-url]
* MySQL 
* Express
* Client libraries: 
    * react
    * react-router
    * axios
- Server libraries:
    * knex
    * express
    * Google's Gemini API
    
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

In order to launch the application, start my installing the necessary npm packages in both client & server folders. 
* npm
   ```sh
   npm install
   ```

### Getting Started 

1. In the backend repository, create a local .env file by referring to the .env.example file in that repository 
2. On the front end, ensure that the **lib** (library) folder contains the same port number as on your backend PORT .env variable to access the backend 
3. Spin up a local MySQL instance and create a local db to host the data for this application
4. Run the migrations with the 'knex migrate:latest' command to build the tables 
   ```sh
   knex migrate:latest
   ```
5. Seed the tables with the sample data by running 'knex seed:run' 
   ```sh
   knex seed:run
   ```
6. To launch the application, launch the backend first, by running 'npm start' or an equivalent starting command. 
   ```sh
   npm start
   ```
7. Launch the front end with the command 'npm run dev' (ensure the front end local host address is reflected in your backend .env file)
   ```sh
   npm run dev 
   ```
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

- The application home page is the 'My Projects' dashboard with an overview of your projects and a dashboard
- To add a project, click into the '+' icon in the footer navigation bar 
- To navigate back to this Home page, you can click onto the home icon 
- To access the built-in Google's Gemini AI, click on the network tree icon in the bottom right corner on the Project dashboard page or Project Details pages. Use this feature to help summarize any project points, ask questions about your project or practice for interviews as you're reviewing on the fly. 
- To access a project, click on the three-vertical-dots icon in any of the project banners to enter into the Project Details page for that project from the Project Portfolio overview dashboard 
- On the Project Details page, you can edit the dashboard by clicking on the pencil icon in the footer navigation bar 
- On the edit page, click the back arrow button to navigate back to the Details page without saving 
- You can also similarly access Home & the AI Prompter through the navigation bar on the Project Details page 
- To delete the project, click the red trash icon in the top right corner of the Project Details page 
- Adding/deleting to-do list items can be done within the page & the total count will be updated live 
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Your Name - Yvette de Sereville 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* https://www.freecodecamp.org/news/build-a-todo-app-from-scratch-with-reactjs/
* https://medium.com/@worachote/building-a-todo-list-app-with-reactjs-a-step-by-step-guide-2c58b9b6c0f5
* https://ai.google.dev/gemini-api/docs/get-started/tutorial?lang=node

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 