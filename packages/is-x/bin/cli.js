#!/usr/bin/env node

const { program } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const execa = require('execa');

// Package manager configurations
const PACKAGE_MANAGERS = {
    javascript: {
        check: 'npm --version',
        install: ['npm', 'install', 'is-x-js'],
        name: 'npm',
        package: 'is-x-js'
    },
    python: {
        check: 'pip --version',
        install: ['pip', 'install', 'is-x-py'],
        name: 'pip',
        package: '@is-x/py'
    },
    // go: {
    //     check: 'go version',
    //     install: ['go', 'install', '@is-x/go'],
    //     name: 'go',
    //     package: '@is-x/go'
    // },

};

// Check if package manager is installed
async function checkPackageManager(language) {
    try {
        await execa.command(PACKAGE_MANAGERS[language].check);
        return true;
    } catch (error) {
        return false;
    }
}

// Install package for specific language
async function installPackage(language) {
    const manager = PACKAGE_MANAGERS[language];
    const spinner = ora(`Installing ${manager.package}...`).start();

    try {
        const [cmd, ...args] = manager.install;
        await execa(cmd, args);
        spinner.succeed(chalk.green(`Successfully installed ${manager.package}`));
        
        // Show usage example
        console.log(chalk.cyan('\nUsage example:'));
        showUsageExample(language);
    } catch (error) {
        spinner.fail(chalk.red(`Failed to install ${manager.package}`));
        console.error(chalk.red(error.message));
    }
}

// Show language-specific usage examples
function showUsageExample(language) {
    const examples = {
        javascript: `
const {is} = require('is-x-js');
is(42).setX();
console.log(is(42).isX()); // true 
console.log(is(41).isX()); // false
`,
        python: `
from is_x import is_x
num = is_x(42)
print(num.equals())  # true if target is 42`,
        ruby: `
require 'is_x'
num = IsX.new(42)
puts num.equals  # true if target is 42`,
        // Add more examples for other languages
    };
    
    console.log(examples[language] || chalk.yellow('Usage example coming soon...'));
}

// Interactive installation
async function interactiveInstall() {
    const availableLanguages = [];
    
    // Check which package managers are available
    for (const [lang, manager] of Object.entries(PACKAGE_MANAGERS)) {
        if (await checkPackageManager(lang)) {
            availableLanguages.push({
                name: `${lang} (${manager.name})`,
                value: lang
            });
        }
    }
    
    if (availableLanguages.length === 0) {
        console.log(chalk.red('No supported package managers found!'));
        return;
    }

    const { language } = await inquirer.prompt([{
        type: 'list',
        name: 'language',
        message: 'Which language would you like to install?',
        choices: availableLanguages
    }]);

    await installPackage(language);
}

// Set up CLI commands
program
    .version('0.0.1')
    .description('Multi-language number comparison utility installer');

program
    .command('install [language]')
    .description('Install is-x for a specific language')
    .action(async (language) => {
        if (!language) {
            await interactiveInstall();
            return;
        }

        if (!PACKAGE_MANAGERS[language]) {
            console.log(chalk.red(`Unsupported language: ${language}`));
            console.log(chalk.yellow('Supported languages: ' + Object.keys(PACKAGE_MANAGERS).join(', ')));
            return;
        }

        const hasPackageManager = await checkPackageManager(language);
        if (!hasPackageManager) {
            console.log(chalk.red(`${PACKAGE_MANAGERS[language].name} is not installed!`));
            console.log(chalk.yellow(`Please install ${PACKAGE_MANAGERS[language].name} first.`));
            return;
        }

        await installPackage(language);
    });

// Parse command line arguments
program.parse(process.argv);