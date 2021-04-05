// let config0 = {
//     "moduleFileExtensions": [
//       "js",
//       "ts",
//       "json",
//       // tell Jest to handle `*.vue` files
//       "vue"
//     ],
//     "transform": {
//       // process `*.vue` files with `vue-jest`
//       ".*\\.(vue)$": "vue-jest",
//       "^.+\\.tsx?$": "ts-jest"
//     },
//     "testURL": "http://localhost/",
//     testMatch: 'tests/unit/**/*.spec.js'
//     // "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
//   }


// jest.config.ts
import type { Config } from '@jest/types';
import { join } from 'path'
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  moduleFileExtensions: [
    "js",
    "ts",
    "json",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper:{
    // '@': join(__dirname, 'src'),
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testURL: "http://localhost/",
  // rootdir: __dirname,
  testMatch: ['<rootDir>/tests/unit/**/*.spec.ts']
  // "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
};
export default config;

/*
automock: boolean;
bail: boolean | number;
cache: boolean;
cacheDirectory: Path;
clearMocks: boolean;
changedFilesWithAncestor: boolean;
changedSince: string;
collectCoverage: boolean;
collectCoverageFrom: Array<Glob>;
collectCoverageOnlyFrom: {
    [key: string]: boolean;
};
coverageDirectory: string;
coveragePathIgnorePatterns: Array<string>;
coverageProvider: CoverageProvider;
coverageReporters: CoverageReporters;
coverageThreshold: {
    global: {
        [key: string]: number;
    };
};
dependencyExtractor: string;
detectLeaks: boolean;
detectOpenHandles: boolean;
displayName: string | DisplayName;
expand: boolean;
extraGlobals: Array<string>;
filter: Path;
findRelatedTests: boolean;
forceCoverageMatch: Array<Glob>;
forceExit: boolean;
json: boolean;
globals: ConfigGlobals;
globalSetup: string | null | undefined;
globalTeardown: string | null | undefined;
haste: HasteConfig;
injectGlobals: boolean;
reporters: Array<string | ReporterConfig>;
logHeapUsage: boolean;
lastCommit: boolean;
listTests: boolean;
mapCoverage: boolean;
maxConcurrency: number;
maxWorkers: number | string;
moduleDirectories: Array<string>;
moduleFileExtensions: Array<string>;
moduleLoader: Path;
moduleNameMapper: {
    [key: string]: string | Array<string>;
};
modulePathIgnorePatterns: Array<string>;
modulePaths: Array<string>;
name: string;
noStackTrace: boolean;
notify: boolean;
notifyMode: string;
onlyChanged: boolean;
onlyFailures: boolean;
outputFile: Path;
passWithNoTests: boolean;
preprocessorIgnorePatterns: Array<Glob>;
preset: string | null | undefined;
prettierPath: string | null | undefined;
projects: Array<Glob>;
replname: string | null | undefined;
resetMocks: boolean;
resetModules: boolean;
resolver: Path | null | undefined;
restoreMocks: boolean;
rootDir: Path;
roots: Array<Path>;
runner: string;
runTestsByPath: boolean;
scriptPreprocessor: string;
setupFiles: Array<Path>;
setupTestFrameworkScriptFile: Path;
setupFilesAfterEnv: Array<Path>;
silent: boolean;
skipFilter: boolean;
skipNodeResolution: boolean;
slowTestThreshold: number;
snapshotResolver: Path;
snapshotSerializers: Array<Path>;
errorOnDeprecated: boolean;
testEnvironment: string;
testEnvironmentOptions: Record<string, unknown>;
testFailureExitCode: string | number;
testLocationInResults: boolean;
testMatch: Array<Glob>;
testNamePattern: string;
testPathDirs: Array<Path>;
testPathIgnorePatterns: Array<string>;
testRegex: string | Array<string>;
testResultsProcessor: string;
testRunner: string;
testSequencer: string;
testURL: string;
testTimeout: number;
timers: Timers;
transform: {
    [regex: string]: Path | TransformerConfig;
};
transformIgnorePatterns: Array<Glob>;
watchPathIgnorePatterns: Array<string>;
unmockedModulePathPatterns: Array<string>;
updateSnapshot: boolean;
useStderr: boolean;
verbose?: boolean;
watch: boolean;
watchAll: boolean;
watchman: boolean;
watchPlugins: Array<string | [string, Record<string, unknown>]>;
*/
