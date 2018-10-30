/* eslint-disable */
const prompt = require('prompt');
const { exec } = require('child_process');
    exec('yarn install');

// Actions
const {
  finishSetup,
  getPackages,
  getProjectName,
  setupGit,
} = require('./actions');

// Utilities
const {
  bold,
  dim,
  underline,
} = require('./utils');

// Initialize the Install process
prompt.start();

// Pre Documentation
console.log(`${dim(`${bold('Thanks for using React Boilerplate.')}
If you run into trouble, don't hesitate to write an issue or contact one of the maintainers.

${bold('Github Link')}
${underline('https://github.com/adaptdk/react_boilerplate/issues')}

${bold('Maintainers')}
[mads-thines] Mads Thines - mads.thines@adaptagency.com
[ChrEsb] Christian Esbensen - ces@adaptagency.com

Read more about the different packages at ${underline('https://github.com/adaptdk/react_boilerplate#-packages')}`)}
Make sure that you don't have any uncommited changes before running the yarn setup.
`);

const project = {
  name: null,
  ownRepo: null,
  branch: null,
};

// Get Project Name
getProjectName(project, () => {
  // Then Get Packages
  getPackages(project, () => {
    // Silently in the background, start installing modules through yarn.
    exec('yarn install');

    // Configure Git - Removing / Adding
    setupGit(project, () => {
      console.log(`
Alright, we'll delete the boilerplate repository, setup with your repository and start setting up`);
      finishSetup(project, { removeGit: true, git: true });
    })
  })
});
