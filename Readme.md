#Setting up Project#

        npm Install

##Running test

        npm test

        gulp test

##Running on dev

        ionic serve


#Instruction to Setup Jenkins CI#

Install Latest Jenkins.

###Plugins needed:###
1. Git Plugin
2. GitHub Plugin
3. Github Pull Request Builder Plugin ( Managing Pull Requests )
4. Github API plugin 
5. Cobertura Plugin ( Unit test passed rate and Code coverage )
6. Checkstyle Plugin

#Workflow#

Here the workflow we are trying to achieve:

1. Users creates a branch from dev or sub branches of dev (e.g. feature-1, feature-1-bugfix ) during development.
2. After completing his development work and pushing his changes to Github & the user creates a pull request.
3. In order to approve a pull request we require 
        a. Successfully pass all lint rules. 
        b. Successful build
        c. 100% Unit test pass rate.
        4. 100% Code coverage
4. The source of the pull request shall be automatically closed if any the above mentioned condition is not met.
5. The source of the pull request shall be marked ready all checks are passed if condition is met and is ready to be merge by reviewer.
5. When a pull request is created/updated Jenkins shall be triggered automatically for real continuous integration using GitHub Hooks
6. Only if the build was successful, the pull request shall be approved and merged.



.



 
