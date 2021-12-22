- [x]  setup yarn workspaces
- [x] setup lerna
- [ ] setup local development environment
  - [ ] Init Project
    - [ ] install dependencies
    - [ ] add knonw_hosts
  - [ ] Dev Environment
    - [ ] start dev env
    - [ ] stop dev env
    - [ ] watch logs
- [ ] setup CI/CD
  - [ ] publish npm packages
  - [ ] create docker images
  - [ ] publish docker images

Advanced Stuff
- [ ] add package by running a command
- [ ] add app by running a command


---
**What I have done:**  
The file tree is good, every project lives under Code folder either in apps or libs.  
libs contains the shared code.  
There is only one Dockerfile for all projects and through BUILD_CONTEXT argument it identifies the app to install  
The `docker-compose` file holds all apps and mounts the libs and target app folder into the docker container in order to have hot reloading  
  
**What I should do:**  
- add a new service that builds libs in watch mode




