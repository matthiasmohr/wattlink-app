// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  environment: 'prod',
  appVersion: 'v0.1',
  isMockEnabled: true,
  auth: {
    AUTH0_CLIENT_ID: 'ZxnpjrIqhSnD1Wr5DyuhA84VmXzMySfb',
    AUTH0_DOMAIN: 'hasemato.eu.auth0.com', // e.g., 'you.auth0.com'
    AUTH0_AUDIENCE: 'https://wattlink.hasemato.com/',
    REDIRECT: 'https://stage.portal.stromify.de/',
    LOGOUT_URL: 'http://stage.stromify.de'
  },
  featureFlipper: {
    metronicMenu: false,
    dashboardMenuItem: false,
  },
  localApiMock: false,
  backendApi: 'https://stage.backend.stromify.de'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
