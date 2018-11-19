// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:19658/api/',
  signalRServer: 'http://localhost:19658/api/chatHub',
  loginUrl: 'http://localhost:19658/account/authenticate',
  registrationIUrl: 'http://localhost:19658/account/register'
};
