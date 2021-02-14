/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURL: 'http://api.razebazar.com/index.php/',
  mediaURL: 'http://api.razebazar.com/uploads/',
  firebaseConfig: {
    apiKey: "AIzaSyCc2iDNKFTtyPYWqcCLP9qtTngB2vWQ2xU",
    authDomain: "razebazar-d9f5e.firebaseapp.com",
    databaseURL: "https://razebazar-d9f5e.firebaseio.com",
    projectId: "razebazar-d9f5e",
    storageBucket: "razebazar-d9f5e.appspot.com",
    messagingSenderId: "969778594019",
    appId: "1:969778594019:web:3a39d7df55418d622085d6",
    measurementId: "G-HFGQGE6TED"
  },
  onesignal: {
    appId: '1f1830d9-b22c-4334-ba54-69e70ea871f8',
    googleProjectNumber: '969778594019',
    restKey: 'NNzRjOTVhYjktZGRhOS00OWU2LWIwZDMtMTMwOTFlMjNhZWNh'
  },
  general: {
    symbol: '$',
    code: 'USD'
  },
  authToken: '987654321'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
