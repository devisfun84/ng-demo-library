# NgDemoLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Angular library: Best practices

 - Plan library structure
 - proper namespacing
 - Sample project in the same workspace to demo the library (use Storybook)
 - npm link + build --watch mode to test live changes in lib
 - specify lib dependencies in lib's package.json
 - specify shared dependencies of multiple libraries in workspace's package.json
 - One component / directive / pipe per module (exception: related set of components /  services should be in the same module)
 - ng build --prod (to be compatible with View Engine)
 - script section for packing
 - automated versioning and publishing
 - secondary entry points for effective treeshaking
 - specify peer dependencies
 - Prettier + Husky
 - While developing a library, you must install all peer dependencies through devDependencies to ensure that the library compiles properly. That's it, library dependencies must be in both dev and peer dependency at the same time.
 - provide a readme for each lib
 - Use TypeScript path mapping to tell TypeScript that it should load some modules from a specific location. List all the peer dependencies that your library uses in the workspace TypeScript configuration file ./tsconfig.json, and point them at the local copy in the app's node_modules folder.
 - decide when to use multiple library projects vs when to use secondary entry points
 - References:
    - https://indepth.dev/create-your-standalone-angular-library-in-10-minutes/
    - https://medium.com/angular-in-depth/how-to-build-a-component-library-with-angular-and-storybook-718278ab976
    - https://willtaylor.blog/complete-guide-to-angular-libraries/
    - https://medium.com/ngyou/https-medium-com-udayvunnam-be-the-thanos-of-your-angular-library-320f93ddc9ec
    - https://medium.com/angular-in-depth/the-ultimate-guide-to-set-up-your-angular-library-project-399d95b63500
    - https://medium.com/angular-in-depth/improve-spa-performance-by-splitting-your-angular-libraries-in-multiple-chunks-8c68103692d0
    - https://github.com/ng-packagr/ng-packagr/issues/199
    - https://github.com/ng-packagr/ng-packagr/issues/1211
    - https://izifortune.com/multiple-packages-repository-with-angular/