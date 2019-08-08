<h1>Contributing to Zapify-ui</h1>
<p>Welcome, and thank you for taking the time to contribute to Zapify-ui!</p>
<h2>Code of Conduct</h2>
<p>By participating in this project, you're agreeing to comply with our Code_of_Conduct</p>
<h2>How can I contribute ?</h2>
<p> There are several ways that you can contribute. We would be tremendously grateful for bug fixes, development of new features as well as early feedback on in-development features, bug reports with repro steps, documentation updates, feature tests, suggestions, and ideas.</p>
  <h3> Reporting Issues </h3>
  <p>The preferred way of reporting issues, requesting features is to file an issue on our issue page. Before creating an issue, search the existing issue to see if the issue or feature request has already been filed. A new issue should have:</p>
  <ul>
  <li>A short and clear Title.</li>
  <li>Description.</li>
  <li>Repro steps(if it is a Bug).</li>
  <li>Actual(what you get)</li>
  <li>Expected (what is expected)</li>
  <li>Screenshots/Gifs if applicable Feel free to add GitHub labels to the issues.</li>
  </ul>
  <p><h3>Bug fixes and future enhancement</h3></p>
  <p>Pick an issue and leave a comment that you would like to grab it. After the issue was assigned to you, you're good to start hacking!</p>
  <p><h4>Setup</h4></p>
      <ol>
  <li>Fork the repository on GitHub</li>
  <li>Clone your forked repository to your machine: git clone https://github.com/zapify-ui/zapify.git</li>
  <li>Change directory to the cloned repository: cd zapify-ui</li>
  <li>Add a remote: git remote add upstream https://github.com/zapify-ui/zapify.git</li>
  <li>Create a branch for your patch: git checkout -b issue-branch-name</li>
  <li>Install dependencies by running npm install</li>
  <li>Run npm start to build and run your local dev environment.</li>
  <li>Open http://localhost:9001/ to see the Storybook with the library components.</li>
      </ol>
  <h4>Code Style</h4>
  <p>We use ESLint as our JavaScript linter (we recommend to use an ESLint extension in your IDE, so the errors will be highlighted). Before you commit your changes, run prettier to format the code: npm run prettier.</p>
  <p>Make your changes, run linter, make sure there is no eslint errors/warnings in your changes. After that push your code to git: git push origin issue-branch-name.</p>
  <p><h2>Submitting a Pull Request</h2></p>
  <p>All pull requests must be associated with a specific GitHub issue. After you have pushed your changes to the forked repository,create a Pull Request on GitHub. Your pull request should follow the following rules:</p>
<ol>
<li>Your title should have the following format: Fix #<issueId>: <description>. Example: Fix #57: Added tests for Textbox component.</li>
<li>In the description, write about changes you implemented, and don't forget to mention the issue # there. Include screenshots/gifs if applicable.</li>
  </ol>
