// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { IAppSettings } from 'src/app/modules/common/models/app-settings/app-settings';

// @Injectable({
//   providedIn: 'root',
// })
// export class AppConfig {
//   static settings: IAppSettings;
//   constructor(private http: HttpClient) {}

//   // the load method responsible for loading the configuration from the config.json file
//   loadConfigFile() {
//     // config json file path
//     const jsonFile = './assets/config/config.json';

//     // return a Promise (which will load makes the app to wait untill the config file is loaded)
//     return new Promise<void>((resolve, reject) => {
//       this.http
//         .get(jsonFile)
//         .toPromise()
//         .then((response: Object) => {
//           AppConfig.settings = <IAppSettings>response;

//           // resolve indicate that the response is ready and returns the promise
//           resolve();
//         })
//         .catch((response: any) => {
//           // reject means the loading is failed and the prevent the app from loading
//           reject(
//             `Could not load file '${jsonFile}': ${JSON.stringify(response)}`
//           );
//         });
//     });
//   }
// }
