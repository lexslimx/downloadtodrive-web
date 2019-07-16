// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'https://downloadtodriveapi.azurewebsites.net/api/',
  signalRServer: 'https://downloadtodriveapi.azurewebsites.net/chat',
  loginUrl: 'https://d2dcoreapi.azurewebsites.net/account/authenticate',
  registrationIUrl: 'https://d2dcoreapi.azurewebsites.net/account/register',
  ytServiceUrl:'https://downloadtodriveapi.azurewebsites.net/api/Youtube'
};
