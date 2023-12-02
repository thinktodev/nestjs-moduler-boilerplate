# Installation
```shell
pnpm install
```
# Running the app
```shell
# development
$ pnpm start

# watch mode
$ pnpm start:dev

# production mode
$ pnpm start:prod
```

# Test

```shell
# unit tests
$ pnpm test

# e2e tests
$ pnpm start
$ pnpm test:e2e

# test coverage
$ pnpm test:cov
```

# Todo

- [x] Init Project
- [ ] Auth module
  - [ ] Login
  - [ ] Register
  - [ ] Forgot password
  - [ ] Reset password
  - [ ] Logout
- [ ] User module CRUD
- [ ] Post Category CRUD
- [ ] Add pre-commit hook
- [ ] Lint stage
- [ ] Prettier
- [ ] Github action workflow
# Command line tool generator

- [ ] Base command
- [ ] Command `make`
  - [ ] `make:entities {name}`
  - [ ] `make:repository {repositoryName}`
  - [ ] `make:module {moduleName}`
    - [ ] `--crud` create module with crud include service repository controller
  - [ ] `make:config {name}` create config file
  - [ ] `make:controller {moduleName} {controllerName}` create controller file
  - [ ] `make:service {moduleName} {serviceName}` create service file