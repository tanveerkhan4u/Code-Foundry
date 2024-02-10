const stackData = [
  {
    name: 'react',
    structure: [
      {
        dirname: 'public',
        filename: 'index.html',
        content: `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="theme-color" content="#000000">
          <!--
              manifest.json provides metadata used when your web app is added to the
              homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
            -->
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
          <title>React App</title>
        </head>
        
        <body>
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
          <div id="root"></div>
          <!--
              This HTML file is a template.
              If you open it directly in the browser, you will see an empty page.
        
              You can add webfonts, meta tags, or analytics to this file.
              The build step will place the bundled scripts into the <body> tag.
            -->
        </body>
        
        </html>`
      },
      {
        dirname: 'src',
        filename: 'App.jsx',
        content: `import "./styles.css";

        export default function App() {
          return (
            <div className="App">
              <h1>Hello CodeSandbox</h1>
              <h2>Start editing to see some magic happen!</h2>
            </div>
          );
        }
        `
      },
      {
        dirname: 'src',
        filename: 'styles.css',
        content: `.App {
          font-family: sans-serif;
          text-align: center;
        }
        `
      },
      {
        dirname: '',
        filename: 'package.json',
        content: `{
          "name": "react",
          "version": "1.0.0",
          "description": "",
          "keywords": [],
          "main": "src/index.tsx",
          "dependencies": {
            "react": "18.2.0",
            "react-dom": "18.2.0",
            "react-scripts": "5.0.1"
          },
          "devDependencies": {
            "@types/react": "18.2.38",
            "@types/react-dom": "18.2.15",
            "loader-utils": "3.2.1",
            "typescript": "4.4.4"
          },
          "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test --env=jsdom",
            "eject": "react-scripts eject"
          },
          "browserslist": [
            ">0.2%",
            "not dead",
            "not ie <= 11",
            "not op_mini all"
          ]
        }`
      }
    ]
  },
  {
    name: 'angular',
    structure: [
      {
        dirname: 'src',
        filename: 'global_styles.css',
        content: `/* Add application styles & imports to this file! */
        `

      },
      {
        dirname: 'src',
        filename: 'index.html',
        content: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <title>My app</title>
            <meta charset="UTF-8" />
          </head>
          <body>
            <app-root>Loading...</app-root>
          </body>
        </html>
        `
      },
      {
        dirname: 'src',
        filename: 'karma.conf.js',
        content: `// Karma configuration file, see link for more information
        // https://karma-runner.github.io/1.0/config/configuration-file.html
        
        module.exports = function (config) {
          config.set({
            basePath: '',
            frameworks: ['jasmine', '@angular-devkit/build-angular'],
            plugins: [
              require('karma-jasmine'),
              require('karma-chrome-launcher'),
              require('karma-jasmine-html-reporter'),
              require('karma-coverage-istanbul-reporter'),
              require('@angular-devkit/build-angular/plugins/karma'),
            ],
            client: {
              clearContext: false, // leave Jasmine Spec Runner output visible in browser
            },
            coverageIstanbulReporter: {
              dir: require('path').join(__dirname, './coverage/my-app'),
              reports: ['html', 'lcovonly', 'text-summary'],
              fixWebpackSourcePaths: true,
            },
            reporters: ['progress', 'kjhtml'],
            port: 9876,
            colors: true,
            logLevel: config.LOG_INFO,
            autoWatch: true,
            browsers: ['Chrome'],
            singleRun: false,
            restartOnFileChange: true,
          });
        };
        `
      },
      {
        dirname: 'src',
        filename: 'main.ts',
        content: `import 'zone.js';
        import {Component} from '@angular/core';
        import {bootstrapApplication} from '@angular/platform-browser';
        
        @Component({
          selector: 'app-root',
          standalone: true,
          template: \`
            <h1>Hello from {{ name }}!</h1>
            <a target="_blank" href="https://angular.dev/overview">
              Learn more about Angular
            </a>
          \`,
        })
        export class App {
          name = 'Angular';
        }
        
        bootstrapApplication(App);
        `
      },
      {
        dirname: '',
        filename: 'angular.json',
        content: `{
          "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
          "cli": {
            "analytics": "1e1de97b-a744-405a-8b5a-0397bb3d01ce"
          },
          "newProjectRoot": "projects",
          "projects": {
            "demo": {
              "architect": {
                "build": {
                  "builder": "@angular-devkit/build-angular:application",
                  "configurations": {
                    "development": {
                      "extractLicenses": false,
                      "namedChunks": true,
                      "optimization": false,
                      "sourceMap": true
                    },
                    "production": {
                      "aot": true,
                      "extractLicenses": true,
                      "namedChunks": false,
                      "optimization": true,
                      "outputHashing": "all",
                      "sourceMap": false
                    }
                  },
                  "options": {
                    "assets": [],
                    "index": "src/index.html",
                    "browser": "src/main.ts",
                    "outputPath": "dist/demo",
                    "scripts": [],
                    "styles": [
                      "src/global_styles.css"
                    ],
                    "tsConfig": "src/tsconfig.app.json"
                  }
                },
                "extract-i18n": {
                  "builder": "@angular-devkit/build-angular:extract-i18n",
                  "options": {
                    "browserTarget": "demo:build"
                  }
                },
                "lint": {
                  "builder": "@angular-devkit/build-angular:tslint",
                  "options": {
                    "exclude": [
                      "**/node_modules/**"
                    ],
                    "tsConfig": [
                      "src/tsconfig.app.json",
                      "src/tsconfig.spec.json"
                    ]
                  }
                },
                "serve": {
                  "builder": "@angular-devkit/build-angular:dev-server",
                  "configurations": {
                    "development": {
                      "buildTarget": "demo:build:development"
                    },
                    "production": {
                      "buildTarget": "demo:build:production"
                    }
                  },
                  "defaultConfiguration": "development"
                },
                "test": {
                  "builder": "@angular-devkit/build-angular:karma",
                  "options": {
                    "assets": [
                      "src/favicon.ico",
                      "src/assets"
                    ],
                    "karmaConfig": "src/karma.conf.js",
                    "main": "src/test.ts",
                    "polyfills": [
                      "zone.js",
                      ".zone.js/testing"
                    ],
                    "scripts": [],
                    "styles": [
                      "styles.css"
                    ],
                    "tsConfig": "src/tsconfig.spec.json"
                  }
                }
              },
              "prefix": "app",
              "projectType": "application",
              "root": "",
              "schematics": {},
              "sourceRoot": "src"
            }
          },
          "version": 1
        }`
      },
      {
        dirname: '',
        filename: 'package.json',
        content: `{
          "name": "stackblitz-starters-asstkl",
          "version": "0.0.0",
          "private": true,
          "dependencies": {
            "@angular/animations": "^17.0.1",
            "@angular/common": "^17.0.1",
            "@angular/compiler": "^17.0.1",
            "@angular/core": "^17.0.1",
            "@angular/forms": "^17.0.1",
            "@angular/platform-browser": "^17.0.1",
            "@angular/router": "^17.0.1",
            "rxjs": "^7.8.1",
            "tslib": "^2.6.2",
            "zone.js": "^0.14.2"
          },
          "scripts": {
            "ng": "ng",
            "start": "ng serve",
            "build": "ng build",
            "test": "ng test",
            "lint": "ng lint",
            "e2e": "ng e2e"
          },
          "devDependencies": {
            "@angular-devkit/build-angular": "~0.1100.4",
            "@angular/cli": "~11.0.4",
            "@angular/compiler-cli": "~11.0.4",
            "@types/jasmine": "~3.6.0",
            "@types/node": "^12.11.1",
            "codelyzer": "^6.0.0",
            "jasmine-core": "~3.6.0",
            "jasmine-spec-reporter": "~5.0.0",
            "karma": "~5.1.0",
            "karma-chrome-launcher": "~3.1.0",
            "karma-coverage": "~2.0.3",
            "karma-jasmine": "~4.0.0",
            "karma-jasmine-html-reporter": "^1.5.0",
            "protractor": "~7.0.0",
            "ts-node": "~8.3.0",
            "tslint": "~6.1.0",
            "typescript": "~4.0.2"
          }
        }`
      },
      {
        dirname: '',
        filename: 'tsconfig.json',
        content: `/* To learn more about this file see: https://angular.io/config/tsconfig. */
        {
          "compileOnSave": false,
          "compilerOptions": {
            "outDir": "./dist/out-tsc",
            "forceConsistentCasingInFileNames": true,
            "strict": true,
            "noImplicitOverride": true,
            "noPropertyAccessFromIndexSignature": true,
            "noImplicitReturns": true,
            "noFallthroughCasesInSwitch": true,
            "esModuleInterop": true,
            "sourceMap": true,
            "declaration": false,
            "downlevelIteration": true,
            "experimentalDecorators": true,
            "moduleResolution": "node",
            "importHelpers": true,
            "target": "ES2022",
            "module": "ES2022",
            "useDefineForClassFields": false,
            "lib": [
              "ES2022",
              "dom"
            ]
          },
          "angularCompilerOptions": {
            "enableI18nLegacyMessageIdFormat": false,
            "strictInjectionParameters": true,
            "strictInputAccessModifiers": true,
            "strictTemplates": true
          }
        }
        `
      }

    ]
  },
  {
    name: 'vue',
    structure: [
      {
        dirname: 'public',
        filename: 'index.html',
        content: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <title>Vue App</title>
          </head>
          <body>
            
            <noscript>
              <strong>We're sorry but Vue App doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
            </noscript>
            <div id="app"></div>
            <!-- built files will be auto injected -->
          </body>
        </html>
        `
      },
      {
        dirname: 'src/components',
        filename: 'HelloWorld.vue',
        content: `<template>
        
        <div class="hello">
          <h1>{{ msg }}</h1>
          <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
          </p>
          <h3>Installed CLI Plugins</h3>
          <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
          </ul>
          <h3>Essential Links</h3>
          <ul>
            <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
            <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
          </ul>
          <h3>Ecosystem</h3>
          <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
          </ul>
        </div>
      </template>
      
      <script>
      export default {
        name: 'HelloWorld',
        props: {
          msg: String
        }
      }
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>
      h3 {
        margin: 40px 0 0;
      }
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        display: inline-block;
        margin: 0 10px;
      }
      a {
        color: #42b983;
      }
      </style>
      `
      },
      {
        dirname: 'src',
        filename: 'App.vue',
        content: `<template>
        <div id="app">
          <img alt="Vue logo" src="https://vuejs.org/images/logo.png">
          <HelloWorld msg="Welcome to Your Vue.js App"/>
        </div>
      </template>
      
      <script>
      import HelloWorld from './components/HelloWorld.vue'
      
      export default {
        name: 'App',
        components: {
          HelloWorld
        }
      }
      </script>
      
      <style>
      #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
      }
      </style>
      `
      },
      {
        dirname: 'src',
        filename: 'main.js',
        content: `const { createApp } = require('vue');
        import App from "./App.vue";
        
        createApp(App).mount("#app");
        `
      },
      {
        dirname: '',
        filename: 'package.json',
        content: `{
          "name": "sb-vue",
          "version": "0.1.0",
          "private": true,
          "scripts": {
            "serve": "vue-cli-service serve",
            "build": "vue-cli-service build",
            "lint": "vue-cli-service lint"
          },
          "dependencies": {
            "vue": "^3.3.4"
          },
          "devDependencies": {
            "@vue/cli-plugin-babel": "^4.4.0",
            "@vue/cli-plugin-eslint": "^4.4.0",
            "@vue/cli-service": "^4.4.0",
            "babel-eslint": "^10.1.0",
            "eslint": "^6.7.2",
            "eslint-plugin-vue": "^6.2.2",
            "vue-template-compiler": "^2.6.11"
          }
        }`
      },
    ]
  },
  {
    name: 'bootstrap',
    structure: [
      {
        dirname: 'src',
        filename: 'index.js',
        content: `import './styles.scss';
        `
      },
      {
        dirname: 'src',
        filename: 'styles.scss',
        content: `// Customizing Bootstrap with Sass variables:
        // https://getbootstrap.com/docs/5.0/customize/sass/
        
        // $primary: #276fc2;
        // $secondary: #e8d21d;
        // $border-radius: 1px;
        
        @import '../node_modules/bootstrap/scss/bootstrap';
        `
      },
      {
        dirname: '',
        filename: 'index.html',
        content: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <title>Bootstrap 5 example</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width" />
            <script type="module" src="./src/index.js"></script>
          </head>
          <body class="p-4">
            <button class="btn btn-primary">
              Primary button
            </button>
            <button class="btn btn-secondary">
              Secondary button
            </button>
          </body>
        </html>
        `
      },
      {
        dirname: '',
        filename: 'package.json',
        content: `{
          "name": "bootstrap-5-starter",
          "private": true,
          "scripts": {
            "dev": "vite",
            "build": "vite build",
            "preview": "vite preview"
          },
          "dependencies": {
            "bootstrap": "^5.3.1"
          },
          "devDependencies": {
            "sass": "~1.64.2",
            "vite": "^4.4.9"
          }
        }
        `
      },
    ]
  },
  {
    name: 'nestJS',
    structure: [
      {
        dirname: 'src',
        filename: 'app.controller.spec.ts',
        content: `import { Test, TestingModule } from '@nestjs/testing';
        import { AppController } from './app.controller';
        import { AppService } from './app.service';
        
        describe('AppController', () => {
          let app: TestingModule;
        
          beforeAll(async () => {
            app = await Test.createTestingModule({
              controllers: [AppController],
              providers: [AppService],
            }).compile();
          });
        
          describe('getHello', () => {
            it('should return "Hello World!"', () => {
              const appController = app.get(AppController);
              expect(appController.getHello()).toBe('Hello World!');
            });
          });
        });
        `
      },
      {
        dirname: 'src',
        filename: 'app.controller.ts',
        content: `import { Controller, Get } from '@nestjs/common';
        import { AppService } from './app.service';
        
        @Controller()
        export class AppController {
          constructor(private readonly appService: AppService) {}
        
          @Get()
          getHello(): string {
            return this.appService.getHello();
          }
        }
        `
      },
      {
        dirname: 'src',
        filename: 'app.module.ts',
        content: `import { Module } from '@nestjs/common';
        import { AppController } from './app.controller';
        import { AppService } from './app.service';
        
        @Module({
          imports: [],
          controllers: [AppController],
          providers: [AppService],
        })
        export class AppModule {}
        `
      },
      {
        dirname: 'src',
        filename: 'app.service.ts',
        content: `import { Injectable } from '@nestjs/common';

        @Injectable()
        export class AppService {
          getHello(): string {
            return 'Hello World!';
          }
        }
        `
      },
      {
        dirname: 'test',
        filename: 'app.e2e-spec.ts',
        content: `import * as request from 'supertest';
        import { Test } from '@nestjs/testing';
        import { AppModule } from './../src/app.module';
        import { INestApplication } from '@nestjs/common';
        
        describe('AppController (e2e)', () => {
          let app: INestApplication;
        
          beforeAll(async () => {
            const moduleFixture = await Test.createTestingModule({
              imports: [AppModule],
            }).compile();
        
            app = moduleFixture.createNestApplication();
            await app.init();
          });
        
          afterAll(async () => {
            await app.close();
          });
        
          it('/ (GET)', () => {
            return request(app.getHttpServer())
              .get('/')
              .expect(200)
              .expect('Hello World!');
          });
        });
        `
      },
      {
        dirname: '',
        filename: '.eslintrc.js',
        content: `module.exports = {
          parser: '@typescript-eslint/parser',
          parserOptions: {
            project: 'tsconfig.json',
            tsconfigRootDir: __dirname,
            sourceType: 'module',
          },
          plugins: ['@typescript-eslint/eslint-plugin'],
          extends: [
            'plugin:@typescript-eslint/recommended',
            'plugin:prettier/recommended',
          ],
          root: true,
          env: {
            node: true,
            jest: true,
          },
          ignorePatterns: ['.eslintrc.js'],
          rules: {
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
          },
        };
        `
      },
      {
        dirname: '',
        filename: '.gitignore',
        content: `# Created by .ignore support plugin (hsz.mobi)
        ### JetBrains template
        # Covers JetBrains IDEs: IntelliJ, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio and Webstorm
        # Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839
        
        # User-specific stuff:
        .idea/**/workspace.xml
        .idea/**/tasks.xml
        .idea/dictionaries
        
        # Sensitive or high-churn files:
        .idea/**/dataSources/
        .idea/**/dataSources.ids
        .idea/**/dataSources.xml
        .idea/**/dataSources.local.xml
        .idea/**/sqlDataSources.xml
        .idea/**/dynamic.xml
        .idea/**/uiDesigner.xml
        
        # Gradle:
        .idea/**/gradle.xml
        .idea/**/libraries
        
        # CMake
        cmake-build-debug/
        
        # Mongo Explorer plugin:
        .idea/**/mongoSettings.xml
        
        ## File-based project format:
        *.iws
        
        ## Plugin-specific files:
        
        # IntelliJ
        out/
        
        # mpeltonen/sbt-idea plugin
        .idea_modules/
        
        # JIRA plugin
        atlassian-ide-plugin.xml
        
        # Cursive Clojure plugin
        .idea/replstate.xml
        
        # Crashlytics plugin (for Android Studio and IntelliJ)
        com_crashlytics_export_strings.xml
        crashlytics.properties
        crashlytics-build.properties
        fabric.properties
        ### VisualStudio template
        ## Ignore Visual Studio temporary files, build results, and
        ## files generated by popular Visual Studio add-ons.
        ##
        ## Get latest from https://github.com/github/gitignore/blob/master/VisualStudio.gitignore
        
        # User-specific files
        *.suo
        *.user
        *.userosscache
        *.sln.docstates
        
        # User-specific files (MonoDevelop/Xamarin Studio)
        *.userprefs
        
        # Build results
        [Dd]ebug/
        [Dd]ebugPublic/
        [Rr]elease/
        [Rr]eleases/
        x64/
        x86/
        bld/
        [Bb]in/
        [Oo]bj/
        [Ll]og/
        
        # Visual Studio 2015 cache/options directory
        .vs/
        # Uncomment if you have tasks that create the project's static files in wwwroot
        #wwwroot/
        
        # MSTest test Results
        [Tt]est[Rr]esult*/
        [Bb]uild[Ll]og.*
        
        # NUNIT
        *.VisualState.xml
        TestResult.xml
        
        # Build Results of an ATL Project
        [Dd]ebugPS/
        [Rr]eleasePS/
        dlldata.c
        
        # Benchmark Results
        BenchmarkDotNet.Artifacts/
        
        # .NET Core
        project.lock.json
        project.fragment.lock.json
        artifacts/
        **/Properties/launchSettings.json
        
        *_i.c
        *_p.c
        *_i.h
        *.ilk
        *.meta
        *.obj
        *.pch
        *.pdb
        *.pgc
        *.pgd
        *.rsp
        *.sbr
        *.tlb
        *.tli
        *.tlh
        *.tmp
        *.tmp_proj
        *.log
        *.vspscc
        *.vssscc
        .builds
        *.pidb
        *.svclog
        *.scc
        
        # Chutzpah Test files
        _Chutzpah*
        
        # Visual C++ cache files
        ipch/
        *.aps
        *.ncb
        *.opendb
        *.opensdf
        *.sdf
        *.cachefile
        *.VC.db
        *.VC.VC.opendb
        
        # Visual Studio profiler
        *.psess
        *.vsp
        *.vspx
        *.sap
        
        # Visual Studio Trace Files
        *.e2e
        
        # TFS 2012 Local Workspace
        $tf/
        
        # Guidance Automation Toolkit
        *.gpState
        
        # ReSharper is a .NET coding add-in
        _ReSharper*/
        *.[Rr]e[Ss]harper
        *.DotSettings.user
        
        # JustCode is a .NET coding add-in
        .JustCode
        
        # TeamCity is a build add-in
        _TeamCity*
        
        # DotCover is a Code Coverage Tool
        *.dotCover
        
        # AxoCover is a Code Coverage Tool
        .axoCover/*
        !.axoCover/settings.json
        
        # Visual Studio code coverage results
        *.coverage
        *.coveragexml
        
        # NCrunch
        _NCrunch_*
        .*crunch*.local.xml
        nCrunchTemp_*
        
        # MightyMoose
        *.mm.*
        AutoTest.Net/
        
        # Web workbench (sass)
        .sass-cache/
        
        # Installshield output folder
        [Ee]xpress/
        
        # DocProject is a documentation generator add-in
        DocProject/buildhelp/
        DocProject/Help/*.HxT
        DocProject/Help/*.HxC
        DocProject/Help/*.hhc
        DocProject/Help/*.hhk
        DocProject/Help/*.hhp
        DocProject/Help/Html2
        DocProject/Help/html
        
        # Click-Once directory
        publish/
        
        # Publish Web Output
        *.[Pp]ublish.xml
        *.azurePubxml
        # Note: Comment the next line if you want to checkin your web deploy settings,
        # but database connection strings (with potential passwords) will be unencrypted
        *.pubxml
        *.publishproj
        
        # Microsoft Azure Web App publish settings. Comment the next line if you want to
        # checkin your Azure Web App publish settings, but sensitive information contained
        # in these scripts will be unencrypted
        PublishScripts/
        
        # NuGet Packages
        *.nupkg
        # The packages folder can be ignored because of Package Restore
        **/[Pp]ackages/*
        # except build/, which is used as an MSBuild target.
        !**/[Pp]ackages/build/
        # Uncomment if necessary however generally it will be regenerated when needed
        #!**/[Pp]ackages/repositories.config
        # NuGet v3's project.json files produces more ignorable files
        *.nuget.props
        *.nuget.targets
        
        # Microsoft Azure Build Output
        csx/
        *.build.csdef
        
        # Microsoft Azure Emulator
        ecf/
        rcf/
        
        # Windows Store app package directories and files
        AppPackages/
        BundleArtifacts/
        Package.StoreAssociation.xml
        _pkginfo.txt
        *.appx
        
        # Visual Studio cache files
        # files ending in .cache can be ignored
        *.[Cc]ache
        # but keep track of directories ending in .cache
        !*.[Cc]ache/
        
        # Others
        ClientBin/
        ~$*
        *~
        *.dbmdl
        *.dbproj.schemaview
        *.jfm
        *.pfx
        *.publishsettings
        orleans.codegen.cs
        
        # Since there are multiple workflows, uncomment next line to ignore bower_components
        # (https://github.com/github/gitignore/pull/1529#issuecomment-104372622)
        #bower_components/
        
        # RIA/Silverlight projects
        Generated_Code/
        
        # Backup & report files from converting an old project file
        # to a newer Visual Studio version. Backup files are not needed,
        # because we have git ;-)
        _UpgradeReport_Files/
        Backup*/
        UpgradeLog*.XML
        UpgradeLog*.htm
        
        # SQL Server files
        *.mdf
        *.ldf
        *.ndf
        
        # Business Intelligence projects
        *.rdl.data
        *.bim.layout
        *.bim_*.settings
        
        # Microsoft Fakes
        FakesAssemblies/
        
        # GhostDoc plugin setting file
        *.GhostDoc.xml
        
        # Node.js Tools for Visual Studio
        .ntvs_analysis.dat
        node_modules/
        
        # Typescript v1 declaration files
        typings/
        
        # Visual Studio 6 build log
        *.plg
        
        # Visual Studio 6 workspace options file
        *.opt
        
        # Visual Studio 6 auto-generated workspace file (contains which files were open etc.)
        *.vbw
        
        # Visual Studio LightSwitch build output
        **/*.HTMLClient/GeneratedArtifacts
        **/*.DesktopClient/GeneratedArtifacts
        **/*.DesktopClient/ModelManifest.xml
        **/*.Server/GeneratedArtifacts
        **/*.Server/ModelManifest.xml
        _Pvt_Extensions
        
        # Paket dependency manager
        .paket/paket.exe
        paket-files/
        
        # FAKE - F# Make
        .fake/
        
        # JetBrains Rider
        .idea/
        *.sln.iml
        
        # IDE - VSCode
        .vscode/*
        !.vscode/settings.json
        !.vscode/tasks.json
        !.vscode/launch.json
        !.vscode/extensions.json
        
        # CodeRush
        .cr/
        
        # Python Tools for Visual Studio (PTVS)
        __pycache__/
        *.pyc
        
        # Cake - Uncomment if you are using it
        # tools/**
        # !tools/packages.config
        
        # Tabs Studio
        *.tss
        
        # Telerik's JustMock configuration file
        *.jmconfig
        
        # BizTalk build output
        *.btp.cs
        *.btm.cs
        *.odx.cs
        *.xsd.cs
        
        # OpenCover UI analysis results
        OpenCover/
        coverage/
        
        ### macOS template
        # General
        .DS_Store
        .AppleDouble
        .LSOverride
        
        # Icon must end with two \r
        Icon
        
        # Thumbnails
        ._*
        
        # Files that might appear in the root of a volume
        .DocumentRevisions-V100
        .fseventsd
        .Spotlight-V100
        .TemporaryItems
        .Trashes
        .VolumeIcon.icns
        .com.apple.timemachine.donotpresent
        
        # Directories potentially created on remote AFP share
        .AppleDB
        .AppleDesktop
        Network Trash Folder
        Temporary Items
        .apdisk
        
        =======
        # Local
        .env
        dist
        .webpack
        .serverless/**/*.zip
        `
      },
      {
        dirname: '',
        filename: 'package.json',
        content: `{
          "name": "nest-typescript-starter",
          "private": true,
          "version": "1.0.0",
          "description": "Nest TypeScript starter repository",
          "license": "MIT",
          "scripts": {
            "build": "nest build",
            "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
            "start": "nest start",
            "start:dev": "nest start --watch",
            "start:debug": "nest start --debug --watch",
            "start:prod": "node dist/main",
            "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
            "test": "jest",
            "test:watch": "jest --watch",
            "test:cov": "jest --coverage",
            "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/jest/bin/jest --runInBand",
            "test:e2e": "jest --config ./test/jest-e2e.json"
          },
          "dependencies": {
            "@nestjs/common": "^10.0.0",
            "@nestjs/core": "^10.0.0",
            "@nestjs/platform-express": "^10.0.0",
            "reflect-metadata": "^0.1.13",
            "rxjs": "^7.8.1"
          },
          "devDependencies": {
            "@nestjs/cli": "^10.0.1",
            "@nestjs/schematics": "^10.0.1",
            "@nestjs/testing": "^10.0.0",
            "@swc/cli": "^0.1.62",
            "@swc/core": "^1.3.64",
            "@types/express": "^4.17.17",
            "@types/jest": "^29.5.2",
            "@types/node": "^20.3.1",
            "@types/supertest": "^2.0.12",
            "@typescript-eslint/eslint-plugin": "^5.59.11",
            "@typescript-eslint/parser": "^5.59.11",
            "eslint": "^8.42.0",
            "eslint-config-prettier": "^8.8.0",
            "eslint-plugin-prettier": "^4.2.1",
            "jest": "^29.5.0",
            "prettier": "^2.8.8",
            "source-map-support": "^0.5.21",
            "supertest": "^6.3.3",
            "ts-jest": "^29.1.0",
            "ts-loader": "^9.4.3",
            "ts-node": "^10.9.1",
            "tsconfig-paths": "^4.2.0",
            "typescript": "^5.1.3"
          },
          "jest": {
            "moduleFileExtensions": [
              "js",
              "json",
              "ts"
            ],
            "rootDir": "src",
            "testRegex": ".*\\.spec\\.ts$",
            "transform": {
              "^.+\\.(t|j)s$": "ts-jest"
            },
            "collectCoverageFrom": [
              "**/*.(t|j)s"
            ],
            "coverageDirectory": "../coverage",
            "testEnvironment": "node"
          }
        }
        `
      },
    ]
  },
  {
    name: 'express',
    structure: [
      {
        dirname: 'pages',
        filename: 'index.html',
        content: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <title>Hello Express!</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width" />
            <link rel="stylesheet" href="./style.css" />
          </head>
          <body>
            <h1>Hello Express!</h1>
            <p>Showing <code>pages/index.html</code></p>
          </body>
        </html>
        `
      },
      {
        dirname: 'static',
        filename: 'style.css',
        content: `* {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 1rem;
          font-family: system-ui, sans-serif;
          color: black;
          background-color: white;
        }
        
        h1 {
          font-weight: 800;
          font-size: 1.5rem;
        }
        `
      },
      {
        dirname: '',
        filename: 'gitignore',
        content: `node_modules
        `
      },
      {
        dirname: '',
        filename: 'index.js',
        content: `const express = require('express');
        const { resolve } = require('path');
        
        const app = express();
        const port = 3010;
        
        app.use(express.static('static'));
        
        app.get('/', (req, res) => {
          res.sendFile(resolve(__dirname, 'pages/index.html'));
        });
        
        app.listen(port, () => {
          console.log(\`Example app listening at http://localhost:${5173}\`);
        });
        `
      },
      {
        dirname: '',
        filename: 'package.json',
        content: `{
          "name": "express-simple-starter",
          "private": true,
          "scripts": {
            "start": "node index.js"
          },
          "dependencies": {
            "express": "^4.18.2"
          }
        }
        `
      },
    ]
  },
  {
    name: 'graphql',
    structure: [
      {
        dirname: '',
        filename: '.gitignore',
        content: `node_modules`
      },
      {
        dirname: '',
        filename: 'index.js',
        content: `const express = require('express');
        const { graphqlHTTP } = require('express-graphql');
        const { buildSchema } = require('graphql');
        
        // Construct a schema, using GraphQL schema language
        const schema = buildSchema(\`
          type Query {
            hello: String
          }
        \`);
        
        // The root provides a resolver function for each API endpoint
        const root = {
          hello: () => {
            return 'Hello, world!';
          },
        };
        
        const app = express();
        
        app.use(
          '/',
          graphqlHTTP({
            schema: schema,
            rootValue: root,
            graphiql: {
              defaultQuery: '{\n  hello\n}\n',
            },
          })
        );
        
        app.listen(4000, () =>
          console.log('Running a GraphQL API server at http://localhost:4000/')
        );
        `
      },
      {
        dirname: '',
        filename: 'package.json',
        content: `{
          "name": "graphql-starter",
          "private": true,
          "scripts": {
            "start": "nodemon index.js"
          },
          "dependencies": {
            "express": "^4.18.2",
            "express-graphql": "^0.12.0",
            "graphql": "^15.8.0",
            "nodemon": "^3.0.1"
          }
        }
        `
      },
    ]
  },
  {
    name: 'svelte',
    structure: [
      {
        dirname: 'src/lib',
        filename: 'Counter.svelte',
        content: `<script>
        let count = 0
        const increment = () => {
          count += 1
        }
      </script>
      
      <button on:click={increment}>
        count is {count}
      </button>
      `
      },
      {
        dirname: 'src',
        filename: 'app.css',
        content: `:root {
          font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
          line-height: 1.5;
          font-weight: 400;
        
          color-scheme: light dark;
          color: rgba(255, 255, 255, 0.87);
          background-color: #242424;
        
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        a {
          font-weight: 500;
          color: #646cff;
          text-decoration: inherit;
        }
        a:hover {
          color: #535bf2;
        }
        
        body {
          margin: 0;
          display: flex;
          place-items: center;
          min-width: 320px;
          min-height: 100vh;
        }
        
        h1 {
          font-size: 3.2em;
          line-height: 1.1;
        }
        
        .card {
          padding: 2em;
        }
        
        #app {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
        }
        
        button {
          border-radius: 8px;
          border: 1px solid transparent;
          padding: 0.6em 1.2em;
          font-size: 1em;
          font-weight: 500;
          font-family: inherit;
          background-color: #1a1a1a;
          cursor: pointer;
          transition: border-color 0.25s;
        }
        button:hover {
          border-color: #646cff;
        }
        button:focus,
        button:focus-visible {
          outline: 4px auto -webkit-focus-ring-color;
        }
        
        @media (prefers-color-scheme: light) {
          :root {
            color: #213547;
            background-color: #ffffff;
          }
          a:hover {
            color: #747bff;
          }
          button {
            background-color: #f9f9f9;
          }
        }
        `
      },
      {
        dirname: 'src',
        filename: 'App.svelte',
        content: `<script>
        import svelteLogo from './assets/svelte.svg'
        import viteLogo from '/vite.svg'
        import Counter from './lib/Counter.svelte'
      </script>
      
      <main>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} class="logo" alt="Vite Logo" />
          </a>
          <a href="https://svelte.dev" target="_blank" rel="noreferrer">
            <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
          </a>
        </div>
        <h1>Vite + Svelte</h1>
      
        <div class="card">
          <Counter />
        </div>
      
        <p>
          Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
        </p>
      
        <p class="read-the-docs">
          Click on the Vite and Svelte logos to learn more
        </p>
      </main>
      
      <style>
        .logo {
          height: 6em;
          padding: 1.5em;
          will-change: filter;
          transition: filter 300ms;
        }
        .logo:hover {
          filter: drop-shadow(0 0 2em #646cffaa);
        }
        .logo.svelte:hover {
          filter: drop-shadow(0 0 2em #ff3e00aa);
        }
        .read-the-docs {
          color: #888;
        }
      </style>
      `
      },
      {
        dirname: 'src',
        filename: 'main.js',
        content: `import './app.css'
        import App from './App.svelte'
        
        const app = new App({
          target: document.getElementById('app'),
        })
        
        export default app
        `
      },
      {
        dirname: '',
        filename: 'index.html',
        content: `<!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Vite + Svelte</title>
          </head>
          <body>
            <div id="app"></div>
            <script type="module" src="/src/main.js"></script>
          </body>
        </html>
        `
      },
      {
        dirname: '',
        filename: 'package.json',
        content: `{
          "name": "vite-svelte-starter",
          "private": true,
          "version": "0.0.0",
          "type": "module",
          "scripts": {
            "dev": "vite",
            "build": "vite build",
            "preview": "vite preview"
          },
          "devDependencies": {
            "@sveltejs/vite-plugin-svelte": "^3.0.1",
            "svelte": "^4.2.9",
            "vite": "^5.0.12"
          }
        }
        `
      },
    ]
  },
  {
    name: 'ember',
    structure: [
      {
        dirname: 'public',
        filename: 'robots.txt',
        content: `# http://www.robotstxt.org
        User-agent: *
        Disallow:
        `
      },
      {
        dirname: 'tests/helpers',
        filename: 'index.js',
        content: `import {
          setupApplicationTest as upstreamSetupApplicationTest,
          setupRenderingTest as upstreamSetupRenderingTest,
          setupTest as upstreamSetupTest,
        } from 'ember-qunit';
        
        // This file exists to provide wrappers around ember-qunit's
        // test setup functions. This way, you can easily extend the setup that is
        // needed per test type.
        
        function setupApplicationTest(hooks, options) {
          upstreamSetupApplicationTest(hooks, options);
        
          // Additional setup for application tests can be done here.
          //
          // For example, if you need an authenticated session for each
          // application test, you could do:
          //
          // hooks.beforeEach(async function () {
          //   await authenticateSession(); // ember-simple-auth
          // });
          //
          // This is also a good place to call test setup functions coming
          // from other addons:
          //
          // setupIntl(hooks); // ember-intl
          // setupMirage(hooks); // ember-cli-mirage
        }
        
        function setupRenderingTest(hooks, options) {
          upstreamSetupRenderingTest(hooks, options);
        
          // Additional setup for rendering tests can be done here.
        }
        
        function setupTest(hooks, options) {
          upstreamSetupTest(hooks, options);
        
          // Additional setup for unit tests can be done here.
        }
        
        export { setupApplicationTest, setupRenderingTest, setupTest };
        `
      },
      {
        dirname: '',
        filename: '.eslintrc.js',
        content: `'use strict';

        module.exports = {
          root: true,
          parser: '@babel/eslint-parser',
          parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            requireConfigFile: false,
            babelOptions: {
              plugins: [
                ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
              ],
            },
          },
          plugins: ['ember'],
          extends: [
            'eslint:recommended',
            'plugin:ember/recommended',
            'plugin:prettier/recommended',
          ],
          env: {
            browser: true,
          },
          rules: {},
          overrides: [
            // node files
            {
              files: [
                './.eslintrc.js',
                './.prettierrc.js',
                './.stylelintrc.js',
                './.template-lintrc.js',
                './ember-cli-build.js',
                './testem.js',
                './blueprints/*/index.js',
                './config/**/*.js',
                './lib/*/index.js',
                './server/**/*.js',
              ],
              parserOptions: {
                sourceType: 'script',
              },
              env: {
                browser: false,
                node: true,
              },
              extends: ['plugin:n/recommended'],
            },
            {
              // test files
              files: ['tests/**/*-test.{js,ts}'],
              extends: ['plugin:qunit/recommended'],
            },
          ],
        };
        `
      },
      {
        dirname: '',
        filename: '.gitignore',
        content: `# compiled output
        /dist/
        /declarations/
        
        # dependencies
        /node_modules/
        
        # misc
        /.env*
        /.pnp*
        /.eslintcache
        /coverage/
        /npm-debug.log*
        /testem.log
        /yarn-error.log
        
        # ember-try
        /.node_modules.ember-try/
        /npm-shrinkwrap.json.ember-try
        /package.json.ember-try
        /package-lock.json.ember-try
        /yarn.lock.ember-try
        
        # broccoli-debug
        /DEBUG/
        `
      },
      {
          dirname : '',
          filename : '.prettierrc.js',
          content : `'use strict';

          module.exports = {
            overrides: [
              {
                files: '*.{js,ts}',
                options: {
                  singleQuote: true,
                },
              },
            ],
          };
          `
      },
      {
        dirname : '',
        filename : '.stylelintrc.js',
        content : `'use strict';

        module.exports = {
          extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
        };
        `
      },
      {
        dirname : '',
        filename : '.template-lintrc.js',
        content : `'use strict';

        module.exports = {
          extends: 'recommended',
        };
        `
      },
      {
        dirname : '',
        filename : 'ember-cli-build.js',
        content: `'use strict';

        const EmberApp = require('ember-cli/lib/broccoli/ember-app');
        
        module.exports = function (defaults) {
          const app = new EmberApp(defaults, {
            // Add options here
          });
        
          return app.toTree();
        };
        `
      },
      {
        dirname : '',
        filename : 'package.json',
        content : `{
          "name": "my-app",
          "version": "0.0.0",
          "private": true,
          "description": "Small description for my-app goes here",
          "repository": "",
          "license": "MIT",
          "author": "",
          "directories": {
            "doc": "doc",
            "test": "tests"
          },
          "scripts": {
            "build": "ember build --environment=production",
            "lint": "concurrently \"npm:lint:*(!fix)\" --names \"lint:\"",
            "lint:css": "stylelint \"**/*.css\"",
            "lint:css:fix": "concurrently \"npm:lint:css -- --fix\"",
            "lint:fix": "concurrently \"npm:lint:*:fix\" --names \"fix:\"",
            "lint:hbs": "ember-template-lint .",
            "lint:hbs:fix": "ember-template-lint . --fix",
            "lint:js": "eslint . --cache",
            "lint:js:fix": "eslint . --fix",
            "start": "ember serve",
            "test": "concurrently \"npm:lint\" \"npm:test:*\" --names \"lint,test:\"",
            "test:ember": "ember test"
          },
          "devDependencies": {
            "@babel/core": "^7.23.7",
            "@babel/eslint-parser": "^7.23.3",
            "@babel/plugin-proposal-decorators": "^7.23.7",
            "@ember/optional-features": "^2.0.0",
            "@ember/string": "^3.1.1",
            "@ember/test-helpers": "^3.2.1",
            "@glimmer/component": "^1.1.2",
            "@glimmer/tracking": "^1.1.2",
            "broccoli-asset-rev": "^3.0.0",
            "concurrently": "^8.2.2",
            "ember-auto-import": "^2.7.2",
            "ember-cli": "~5.6.0",
            "ember-cli-app-version": "^6.0.1",
            "ember-cli-babel": "^8.2.0",
            "ember-cli-clean-css": "^3.0.0",
            "ember-cli-dependency-checker": "^3.3.2",
            "ember-cli-htmlbars": "^6.3.0",
            "ember-cli-inject-live-reload": "^2.1.0",
            "ember-cli-sri": "^2.1.1",
            "ember-cli-terser": "^4.0.2",
            "ember-data": "~5.3.0",
            "ember-fetch": "^8.1.2",
            "ember-load-initializers": "^2.1.2",
            "ember-modifier": "^4.1.0",
            "ember-page-title": "^8.2.0",
            "ember-qunit": "^8.0.2",
            "ember-resolver": "^11.0.1",
            "ember-source": "~5.6.0",
            "ember-template-lint": "^5.13.0",
            "ember-welcome-page": "^7.0.2",
            "eslint": "^8.56.0",
            "eslint-config-prettier": "^9.1.0",
            "eslint-plugin-ember": "^11.12.0",
            "eslint-plugin-n": "^16.6.2",
            "eslint-plugin-prettier": "^5.1.3",
            "eslint-plugin-qunit": "^8.0.1",
            "loader.js": "^4.7.0",
            "prettier": "^3.2.4",
            "qunit": "^2.20.0",
            "qunit-dom": "^2.0.0",
            "stylelint": "^15.11.0",
            "stylelint-config-standard": "^34.0.0",
            "stylelint-prettier": "^4.1.0",
            "tracked-built-ins": "^3.3.0",
            "webpack": "^5.89.0"
          },
          "engines": {
            "node": ">= 18"
          },
          "ember": {
            "edition": "octane"
          }
        }
        `
      },
      {
        dirname : '',
        filename : 'testem.js',
        content : `'use strict';

        module.exports = {
          test_page: 'tests/index.html?hidepassed',
          disable_watching: true,
          launch_in_ci: ['Chrome'],
          launch_in_dev: ['Chrome'],
          browser_start_timeout: 120,
          browser_args: {
            Chrome: {
              ci: [
                // --no-sandbox is needed when running Chrome inside a container
                process.env.CI ? '--no-sandbox' : null,
                '--headless',
                '--disable-dev-shm-usage',
                '--disable-software-rasterizer',
                '--mute-audio',
                '--remote-debugging-port=0',
                '--window-size=1440,900',
              ].filter(Boolean),
            },
          },
        };
        `
      },
    ]
  },
  {
    name : 'next.js',
    structure : [
      {
        dirname : 'app',
        filename: 'globals.css',
        content : `@tailwind base;
        @tailwind components;
        @tailwind utilities;
        
        :root {
          --foreground-rgb: 0, 0, 0;
          --background-start-rgb: 214, 219, 220;
          --background-end-rgb: 255, 255, 255;
        }
        
        @media (prefers-color-scheme: dark) {
          :root {
            --foreground-rgb: 255, 255, 255;
            --background-start-rgb: 0, 0, 0;
            --background-end-rgb: 0, 0, 0;
          }
        }
        
        body {
          color: rgb(var(--foreground-rgb));
          background: linear-gradient(
              to bottom,
              transparent,
              rgb(var(--background-end-rgb))
            )
            rgb(var(--background-start-rgb));
        }
        `
      },
      {
        dirname  : 'app',
        filename : 'layout.tsx',
        content  : `import './globals.css';
        import type { Metadata } from 'next';
        import { Inter } from 'next/font/google';
        
        const inter = Inter({ subsets: ['latin'] });
        
        export const metadata: Metadata = {
          title: 'Create Next App',
          description: 'Generated by create next app',
        };
        
        export default function RootLayout({
          children,
        }: {
          children: React.ReactNode;
        }) {
          return (
            <html lang="en">
              <body className={inter.className}>{children}</body>
            </html>
          );
        }
        `
      },
      {
        dirname : 'app',
        filename : 'page.tsx',
        content  : `import Image from 'next/image';

        export default function Home() {
          return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
              <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                  Get started by editing&nbsp;
                  <code className="font-mono font-bold">app/page.tsx</code>
                </p>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                  <a
                    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    By{' '}
                    <Image
                      src="/vercel.svg"
                      alt="Vercel Logo"
                      className="dark:invert"
                      width={100}
                      height={24}
                      priority
                    />
                  </a>
                </div>
              </div>
        
              <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/next.svg"
                  alt="Next.js Logo"
                  width={180}
                  height={37}
                  priority
                />
              </div>
        
              <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <a
                  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className={\`mb-3 text-2xl font-semibold\`}>
                    Docs{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className={\`m-0 max-w-[30ch] text-sm opacity-50\`}>
                    Find in-depth information about Next.js features and API.
                  </p>
                </a>
        
                <a
                  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className={\`mb-3 text-2xl font-semibold\`}>
                    Learn{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className={\`m-0 max-w-[30ch] text-sm opacity-50\`}>
                    Learn about Next.js in an interactive course with&nbsp;quizzes!
                  </p>
                </a>
        
                <a
                  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className={\`mb-3 text-2xl font-semibold\`}>
                    Templates{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className={\`m-0 max-w-[30ch] text-sm opacity-50\`}>
                    Explore the Next.js 13 playground.
                  </p>
                </a>
        
                <a
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className={\`mb-3 text-2xl font-semibold\`}>
                    Deploy{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className={\`m-0 max-w-[30ch] text-sm opacity-50\`}>
                    Instantly deploy your Next.js site to a shareable URL with Vercel.
                  </p>
                </a>
              </div>
            </main>
          );
        }
        `
      },
      {
        dirname : '',
        filename : '.gitignore',
        content : `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

        # dependencies
        /node_modules
        /.pnp
        .pnp.js
        
        # testing
        /coverage
        
        # next.js
        /.next/
        /out/
        
        # production
        /build
        
        # misc
        .DS_Store
        *.pem
        
        # debug
        npm-debug.log*
        yarn-debug.log*
        yarn-error.log*
        
        # local env files
        .env*.local
        
        # vercel
        .vercel
        
        # typescript
        *.tsbuildinfo
        next-env.d.ts
        `
      },
      {
        dirname : '',
        filename : 'package.json',
        content : `{
          "name": "nextjs",
          "version": "0.1.0",
          "private": true,
          "scripts": {
            "dev": "next dev",
            "build": "next build",
            "start": "next start",
            "lint": "next lint"
          },
          "dependencies": {
            "@types/node": "20.6.2",
            "@types/react": "18.2.22",
            "@types/react-dom": "18.2.7",
            "autoprefixer": "10.4.15",
            "eslint": "8.49.0",
            "eslint-config-next": "13.5.1",
            "next": "13.5.1",
            "postcss": "8.4.30",
            "react": "18.2.0",
            "react-dom": "18.2.0",
            "tailwindcss": "3.3.3",
            "typescript": "5.2.2"
          }
        }
        `
      },
      {
        dirname : '',
        filename : 'tailwind.config.ts',
        content : `import type { Config } from 'tailwindcss';

        const config: Config = {
          content: [
            './pages/**/*.{js,ts,jsx,tsx,mdx}',
            './components/**/*.{js,ts,jsx,tsx,mdx}',
            './app/**/*.{js,ts,jsx,tsx,mdx}',
          ],
          theme: {
            extend: {
              backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
              },
            },
          },
          plugins: [],
        };
        export default config;
        `
      },
    ]
  },
  {
    name : 'solid',
    structure : [
      {
        dirname : 'src',
        filename : 'App.jsx',
        content : `import logo from './logo.svg';
        import styles from './App.module.css';
        
        function App() {
          return (
            <div class={styles.App}>
              <header class={styles.header}>
                <img src={logo} class={styles.logo} alt="logo" />
                <p>
                  Edit <code>src/App.jsx</code> and save to reload.
                </p>
                <a
                  class={styles.link}
                  href="https://github.com/solidjs/solid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn Solid
                </a>
              </header>
            </div>
          );
        }
        
        export default App;
        `
      },
      {
        dirname : 'src',
        filename : 'App.module.css',
        content : `.App {
          text-align: center;
        }
        
        .logo {
          animation: logo-spin infinite 20s linear;
          height: 40vmin;
          pointer-events: none;
        }
        
        .header {
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
        }
        
        .link {
          color: #b318f0;
        }
        
        @keyframes logo-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        `
      },
      {
        dirname : 'src',
        filename : 'index.css',
        content : `body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
        `
      },
      {
        dirname : 'src',
        filename : 'index.jsx',
        content : `/* @refresh reload */
        import { render } from 'solid-js/web';
        
        import './index.css';
        import App from './App';
        
        const root = document.getElementById('root');
        
        if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
          throw new Error(
            'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
          );
        }
        
        render(() => <App />, root);
        `
      },
      {
        dirname : '',
        filename : 'index.html',
        content : `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <link rel="shortcut icon" type="image/ico" href="/src/assets/favicon.ico" />
            <title>Solid App</title>
          </head>
          <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root"></div>
        
            <script src="/src/index.jsx" type="module"></script>
          </body>
        </html>
        `
      },
      {
        dirname : '',
        filename : 'package.json',
        content : `{
          "name": "vite-template-solid",
          "version": "0.0.0",
          "description": "",
          "scripts": {
            "start": "vite",
            "dev": "vite",
            "build": "vite build",
            "serve": "vite preview"
          },
          "license": "MIT",
          "devDependencies": {
            "vite": "^4.3.9",
            "vite-plugin-solid": "^2.7.0"
          },
          "dependencies": {
            "solid-js": "^1.7.6"
          }
        }
        `
      },
    ]
  },
 {
  name: 'NativeScript',
  structure : [
    {
      dirname : 'app',
      filename : 'App.css',
      content : `@import '@nativescript/theme/css/core.css';
      @import '@nativescript/theme/css/default.css';
      
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      
      Button.-primary {
        font-size: 18;
      }
      `
    },
    {
      diename : 'app',
      filename : 'app.js',
      content : `import { Application } from '@nativescript/core';

      Application.run({ moduleName: 'app-root' });
      `
    },
    {
      dirname : 'app',
      filename : 'main-page.js',
      content : `import { createViewModel } from './main-view-model';

      export function onNavigatingTo(args) {
        const page = args.object;
        page.bindingContext = createViewModel();
      }
      `
    },
    {
      dirname : 'app',
      filename :'main-view-model.js',
      content : `import { Observable } from '@nativescript/core';

      function getMessage(counter) {
        if (counter <= 0) {
          return 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        } else {
          return \`{counter} taps left\`;
        }
      }
      
      export function createViewModel() {
        const viewModel = new Observable();
        viewModel.counter = 42;
        viewModel.message = getMessage(viewModel.counter);
      
        viewModel.onTap = () => {
          viewModel.counter--;
          viewModel.set('message', getMessage(viewModel.counter));
      
          // log the message to the console
          console.log(getMessage(viewModel.counter));
        };
      
        return viewModel;
      }
      `
    },
    {
      dirname : '',
      filename : '.gitignore',
      content : `# NativeScript
      hooks/
      node_modules/
      platforms/
      
      # Logs
      logs
      *.log
      npm-debug.log*
      yarn-debug.log*
      yarn-error.log*
      
      # General
      .DS_Store
      .AppleDouble
      .LSOverride
      .idea
      .cloud
      .project
      tmp/
      typings/
      
      # Visual Studio Code
      .vscode/*
      !.vscode/settings.json
      !.vscode/tasks.json
      !.vscode/launch.json
      !.vscode/extensions.json
      `
    },
    {
      dirname : '',
      filename :'.stackblitzrc',
      content : `{
        "installDependencies": true,
        "compileTrigger": "save",
        "startCommand": "setup-nativescript-stackblitz && ns preview"
      }
      `
    },
    {
      dirname : '',
      filename : 'nativescript.config.ts',
      content : `import { NativeScriptConfig } from '@nativescript/core';

      export default {
        id: 'org.nativescript.app',
        appPath: 'app',
        appResourcesPath: 'App_Resources',
        android: {
          v8Flags: '--expose_gc',
          markingMode: 'none'
        }
      } as NativeScriptConfig;
      `
    },
    {
      dirname : '',
      filename : 'package.json',
      content : `{
        "name": "samplejs",
        "main": "app/app.js",
        "version": "1.0.0",
        "private": true,
        "dependencies": {
          "@nativescript/core": "~8.5.0",
          "@nativescript/theme": "~3.0.2"
        },
        "devDependencies": {
          "@nativescript/preview-cli": "^1.0.12",
          "@nativescript/stackblitz": "0.0.8",
          "@nativescript/tailwind": "^2.0.1",
          "@nativescript/webpack": "~5.0.0",
          "tailwindcss": "^3.1.8"
        }
      }
      `
    },
  ]
 }, 





]

export default stackData;