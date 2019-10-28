// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// const path = require('path');
// const UserAuthorizer = require('./lib/auth').default;
// const USER_HOME = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
// const STORED_CREDENTIALS_PATH = path.join(USER_HOME, '.md2googleslides', 'credentials.json');
// const SCOPES = ['https://www.googleapis.com/auth/presentations', 'https://www.googleapis.com/auth/drive'];
//
// function authorizeUser(user) {
//     // Google OAuth2 clients always have a secret, even if the client is an installed
//     // application/utility such as this.  Of course, in such cases the "secret" is
//     // actually publicly known; security depends entirely on the secrecy of refresh
//     // tokens, which effectively become bearer tokens.
//     const options = {
//         clientId: '52512509792-pc54t7beete33ifbhk00q3cpcpkmfi7c.apps.googleusercontent.com',
//         clientSecret: '8g6up8tcVXgF7IO71mCN8Afk',
//         filePath: STORED_CREDENTIALS_PATH,
//         prompt: prompt,
//     };
//     const auth = new UserAuthorizer(options);
//     return auth.getUserCredentials(user, SCOPES);
// }


module.exports = {
  slideGenerator: require('./lib/slide_generator').default,
}
