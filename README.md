<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/dontrellthedeveloper/memories-mern-stack">
    <img src="images/logo3.png" alt="Logo" width="200" >
  </a>

<h3 align="center">Explocation Travel Memories - MERN Application</h3>

  <p align="center">
    Explocation is a Full Stack Travel Memories Application. This stack includes - React, Node, Redux, Material UI, Google Login, MongoDB, Cloudinary, Netlify ,Digital Ocean, and Nginx.
    <br />
    <a href="https://github.com/dontrellthedeveloper/memories-mern-stack"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://explocation.dontrelldev.com">View Demo</a>
    ·
    <a href="https://github.com/dontrellthedeveloper/memories-mern-stack/issues">Report Bug</a>
    ·
    <a href="https://github.com/dontrellthedeveloper/memories-mern-stack/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started - Client (React.js)</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started - Server (Express.js)</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
<!--
    <li><a href="#roadmap">Roadmap</a></li>
-->
    <li><a href="#contributing">Contributing</a></li>
<!--
    <li><a href="#license">License</a></li>
-->
    <li><a href="#contact">Contact</a></li>
<!--
    <li><a href="#acknowledgments">Acknowledgments</a></li>
-->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://explocation.dontrelldev.com)

<!-- Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `dontrellthedeveloper`, `memories-mern-stack`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `Olivia Wilson Boutique`, `project_description` -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Node][Node.js]][Node-url]
* [![Redux][Redux.js]][Redux-url]
* [![MaterialUI][MaterialUI]][MaterialUI-url]
* [![GoogleLogin][GoogleLogin]][GoogleLogin-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![Cloudinary][Cloudinary]][Cloudinary-url]
* [![Netlify][Netlify]][Netlify-url]
* [![DigitalOcean][DigitalOcean]][DigitalOcean-url]
* [![Nginx][Nginx]][Nginx-url]



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->


## Client (React.js) - Getting Started


To get a local copy of your client up and running follow the steps below.


<!--
### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install --legacy-peer-deps
  ```

-->

### Installation

1. Create a Google Cloud project and generate an API Token.
3. Clone the repo
   ```sh
   git clone https://github.com/dontrellthedeveloper/memories-mern-stack.git
   ```
4. Go to the client folder
   ```sh
   cd client
   ```   

5. Install NPM packages
   ```sh
   npm install --legacy-peer-deps
   ```
6. Enter values in `.env` file
   ```js
   REACT_APP_GOOGLE_API_TOKEN='{put your Google API key here}'
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Server (Express.js) - Getting Started

To get a local copy of your server up and running follow the steps below

<!--
### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install --legacy-peer-deps
  ```

-->

### Installation

1. Create a mongoDB atlas cluster, or add a local mongoDB database.
3. Create a Cloudinary account and generate an API key and secret.
5. Clone the repo
   ```sh
   git clone https://github.com/dontrellthedeveloper/memories-mern-stack.git
   ```
6. Go to the server folder
   ```sh
   cd server
   ```   

7. Install NPM packages
   ```sh
   npm install
   ```
8. Enter values in `.env` file
   ```js
   DATABASE='{put your MongoDB connection string here}'
   SECRET_KEY='{put a secret key here}'
   CLOUD_NAME='{put your Cloudinary name here}'
   CLOUD_KEY='{put your Cloudinary API key here}'
   CLOUD_KEY_SECRET='{put your Cloudinary secret here}'
   PORT=3010
   ```





<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

You can sign up using your google email address. After signing up, you can fully interact with the application by liking posts and commenting on posts.


[![Product Name Screen Shot][product-screenshot3]](https://explocation.dontrelldev.com)


As a user, you also have the ability to upload your own memory locations to the application. You can add a title, message, tags and get comments from other users on your posts.


[![Product Name Screen Shot][product-screenshot2]](https://explocation.dontrelldev.com)


_For more examples, please go to the [application](https://explocation.dontrelldev.com)_



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->

<!--

## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).




<p align="right">(<a href="#readme-top">back to top</a>)</p>

-->


<!-- CONTRIBUTING -->




## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- LICENSE -->


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Dontrell Washington - [@dontrellthedev_](https://twitter.com/dontrellthedev_) - dontrellthedeveloper@gmail.com

Project Link: [https://github.com/dontrellthedeveloper/memories-mern-stack](https://github.com/dontrellthedeveloper/memories-mern-stack)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->

<!--
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

-->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dontrellthedeveloper/memories-mern-stack.svg?style=for-the-badge
[contributors-url]: https://github.com/dontrellthedeveloper/memories-mern-stack/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dontrellthedeveloper/memories-mern-stack.svg?style=for-the-badge
[forks-url]: https://github.com/dontrellthedeveloper/memories-mern-stack/network/members
[stars-shield]: https://img.shields.io/github/stars/dontrellthedeveloper/memories-mern-stack.svg?style=for-the-badge
[stars-url]: https://github.com/dontrellthedeveloper/memories-mern-stack/stargazers
[issues-shield]: https://img.shields.io/github/issues/dontrellthedeveloper/memories-mern-stack.svg?style=for-the-badge
[issues-url]: https://github.com/dontrellthedeveloper/memories-mern-stack/issues
[license-shield]: https://img.shields.io/github/license/dontrellthedeveloper/memories-mern-stack.svg?style=for-the-badge
[license-url]: https://github.com/dontrellthedeveloper/memories-mern-stack/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/dontrell-washington
[product-screenshot]: images/screenshot2.png
[product-screenshot2]: images/screenshot3.png
[product-screenshot3]: images/screenshot4.png
[Next.js]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Next-url]: https://nextjs.org/


[Netlify]: https://img.shields.io/badge/Netlify-111111?style=for-the-badge&logo=netlify&logoColor=00C7B7
[Netlify-url]: https://www.netlify.com/


[Node.js]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/

[Redux.js]: https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/

[GoogleLogin]: https://img.shields.io/badge/google%20login-4285F4?style=for-the-badge&logo=google&logoColor=white
[GoogleLogin-url]: https://console.cloud.google.com



[Firebase]: https://img.shields.io/badge/firebase-666666?style=for-the-badge&logo=firebase&logoColor=FFCA28
[Firebase-url]: https://firebase.google.com/

[MongoDB]: https://img.shields.io/badge/Mongo%20DB-333333?style=for-the-badge&logo=mongodb&logoColor=47A248
[MongoDB-url]: https://www.mongodb.com/

[Nginx]: https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white
[Nginx-url]: https://www.nginx.com/

[DigitalOcean]: https://img.shields.io/badge/DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white
[DigitalOcean-url]: https://www.digitalocean.com/

[Stripe]: https://img.shields.io/badge/stripe-333333?style=for-the-badge&logo=stripe&logoColor=008CDD
[Stripe-url]: https://stripe.com/

[MaterialUI]: https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white
[MaterialUI-url]: https://mui.com/

[Cloudinary]: https://img.shields.io/badge/Cloudinary-a1a0a1.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAA21BMVEVHcEz0tS8OL1oOL1oAcboOL1oAcboKL2QJRYIOL1r0shsAcboOL1oGKVoAcboAcboEcbgAcbsHUYwKLFsBcroMLVrbgSbbgibzsyIAcbsAcboAcbwOL1oOL1oAcLwEcbj2rhsOL1oOL1rolCHy2GYAcboAcbsAcboAcboILFsAcLrggiPcgiYKLVvzsyDrnCD64GXqrBzy2WXysSL832X0shsAcbqffU4AcboAcbr9hQ/uph70shvagify2GXbgib0shvy2GXy2GXy2Wfy2WcUebPyAAHbgiby2GXUbCP0AAAARnRSTlMABHRvxwW/Cwdp/TFlGSR7X1IBEkQlvrddb40XQV4RWQ+GfiSroJU70jBjb81SZxYZLNVWJOOtHrFNDEW8n27ut7bux4Rvn2ei3QAAAO1JREFUeNpiIBkAGp0GNAdiKJyMHbcds7bW9v0vVPPjxnnvl+e3AhxelShWmj660fhlkSicAmD0FPsE81CH7J+oSQ/FttIit/uP1wnau5d+58P+oA+zbCOAAyXdFm0tfKj9Dh6f3qZwAsC9Fu6KCaz/1kaWNfqavcBE25olWrotNiyrMft7h7bi7fPgfXH++VdxDe09efr8Wp8vl43qo/ruGduSqgMwLsusnI4niwXcwYzYiYWr66w73Fwuc5muAiG5cmEWw1zKC8mUcjk2GdAdxzEdU5ZN2YxMWYoieaepqvp2GoZq6IbaFeD/Yw281BWp+nFYjQAAAABJRU5ErkJggg==
[Cloudinary-url]: https://ant.design/

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
