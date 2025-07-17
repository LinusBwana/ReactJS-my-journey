# Introduction to ReactJS
This is a basic ReactJS project I created to practice component-based design and learn how React apps are structured and run using **Vite** as the build tool.


## What I Did

### 1. Created the React App Using Vite

I initialized a new React project using the Vite CLI:

```bash
npm create vite@latest
```

I named the project: *my-react-app*  
Moved into the directory:

```bash
cd my-react-app
```

Installed dependencies:

```bash
npm install
```

Started the development server:

```bash
npm run dev
```

### 2. Built 3 React Components
I created the following components inside the src folder:

#### Header.jsx
This component renders the page header with a navigation bar.
```javascript
function Header(){
    return(
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header;
```

#### Footer.jsx
This component displays a footer with the current year:
```javascript
function Footer(){
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} Your Website name</p> 
        </footer>
    );
}

export default Footer;
```

#### Food.jsx
This component renders different types of lists in HTML. unordered, ordered, and description lists.
```javascript
function Food(){
    const food1 = "Orange";
    const food2 = "Banana";

    return(
        <div>
            <ol>
                <li>{food1}</li>
                <li>{food2}</li>
                <li>{food2.toUpperCase()}</li>
            </ol>

            <ul>
                <li>{food1}</li>
                <li>{food2}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>

            <dl>
                <dt>HTML</dt>
                <dd>A markup language for creating web pages.</dd>

                <dt>CSS</dt>
                <dd>A language used to style HTML content.</dd>
            </dl>
            <hr />
        </div>
    );
}

export default Food;
```

###  3. Combined Components in App.jsx
I imported and rendered all components in the App.jsx file:

```javascript
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";

function App() {
  return (
    <>
      <Header />
      <Food />
      <Footer />
    </>
  );
}

export default App;
```

## Project Structure & Explanation
### Project Structure
```javascript
my-react-app/
│
├── node_modules/       → Installed dependencies (auto-managed by npm)
├── public/             → Static assets (favicon, index.html uses this)
├── src/                → Source files (components, styles, main logic)
│   ├── App.jsx         → Main app layout (uses Header, Food, Footer)
│   ├── main.jsx        → Entry point that renders <App />
│   ├── Header.jsx      → Header component with nav links
│   ├── Footer.jsx      → Footer component with year
│   ├── Food.jsx        → Component showing HTML lists
│   ├── App.css         → Styles for App component (optional)
│   ├── index.css       → Global styles
│   └── assets/         → Custom images, fonts, etc.
│
├── index.html          → Main HTML file (loads React app via Vite)
├── package.json        → Project config + scripts + dependencies
├── README.md           → Project explanation
└── vite.config.js      → Vite config (you can customize this later)
```

### Project Structure Explanation

**Header.jsx** - A React component I built to display the page header. It includes a site title and a simple navigation bar with links like Home, About, Services, and Contact.  
**Footer.jsx**	A component I created to display the footer section of the page. It dynamically shows the current year using JavaScript’s Date object.   
**Food.jsx** This component demonstrates my use of HTML list elements `(<ol>, <ul>, and <dl>)` in React, showing static content like fruits and basic definitions.     
**App.jsx**	The root component of my React app. I used it to combine and render Header, Food, and Footer, structuring the main layout of the page.  
**main.jsx**	The entry point of the app. It renders the <App /> component into the DOM element with the ID root, which is defined in index.html.  
**index.html**	This is the HTML template that Vite uses to serve the React app. I didn’t write content here directly; React renders inside its `<div id="root">`.  
**node_modules/**	Automatically created after running npm install. It contains all the installed packages (like React and Vite) and their dependencies. I don’t modify this folder manually, and it should be excluded from version control.  
**public/**	This folder holds static assets that are publicly accessible, such as favicon.ico. Files here are not processed by React. They're directly copied to the final build.  
**src/**	This is the main source folder for my React code. It contains all components, logic, styling, and other assets used in the app.  
**assets/**	A subfolder inside src/ where I can place images, icons, or other media files I want to import and use within my components.  
**App.css**	A CSS file that comes preloaded with the Vite template. I can use it to style my App.jsx component or remove it if not needed.  
**index.css**	A global stylesheet for the entire app. It’s automatically imported in main.jsx and can be used to apply base styles or CSS resets.  
**vite.config.js**	The Vite configuration file. I can edit this to customize how Vite builds and serves the app such as adding plugins or path aliases.  

## What I Learnt
1. How to initialize a modern React project using Vite with *npm create vite@latest*.
2. How to install dependencies using npm install and run the dev server with *npm run dev*.
3. The basics of creating reusable React components.
4. How to use JSX syntax to write HTML-like code inside JavaScript functions.
5. That **React components must return a single parent element**, so if I want to return multiple sibling elements, I need to wrap them inside a **fragment** *(<> </>)* or another container element.
6. How to import and export components and organize them in a project folder structure.
7. How React apps are bootstrapped with an entry file (*main.jsx*) that renders the root component (*App.jsx*) into a DOM element.
8. The roles of important project folders and files like *node_modules/, public/, src/, and configuration files*.