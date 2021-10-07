/*
 * Copyright (c) 2021 dzikoysk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const express = require('express')
const ws = require('ws')
var expressWs = require('express-ws')

const [
  respond,
  basicAuth,
  authorized,
  invalidCredentials,
  sendMessage,
  createFileDetails,
  createDirectoryDetails
] = require('./extensions')

const application = express()
expressWs(application)

application
  .get('/', (req, res) =>
    res.send('Reposilite stub API')
  )
  .use((req, res, next) => {
    console.log('Requested fake ' + req.method + ' ' + req.url)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
  })
  .get('/api/auth/me', (req, res) => {
    authorized(req,
      () => res.send({
        id: 1,
        name: 'name',
        createdAt: Date.now(),
        permissions: [
          { identifier: 'access-token:manager' }
        ],
        routes: [
          {
            path: '/',
            permissions: [
              { identifier: 'route:read' },
              { identifier: 'route:write' }
            ]
          }
        ]
      }),
      () => invalidCredentials(res)
    )
  })
  .ws('/api/console/sock', (connection, req) => {
    let authenticated = false

    connection.on('message', message => {
      if (message == 'Authorization:name:secret') {
        sendMessage(connection, 'DEBUG | Authorized')
        authenticated = true
      }
      
      if (!authenticated || message == 'stop') {
        sendMessage(connection, 'Connection closed')
        connection.close()
        return
      }
  
      sendMessage(connection, 'INFO | Response: ' + message)
    })
  })
  .get('/api/maven/details', (req, res) => {
    const repositories = createDirectoryDetails('/', [
      createDirectoryDetails('releases'),
      createDirectoryDetails('snapshots')
    ])
    authorized(req,
      () => repositories.files.push(createDirectoryDetails('private'))
    )
    res.send(repositories)
  })
  .get('/api/maven/details/snapshots', respond(
    createDirectoryDetails('/snapshot', [])
  ))
  .get('/api/maven/details/private', (req, res) => {
    authorized(req,
      () => res.send(createDirectoryDetails('/private', [
        createDirectoryDetails("something")
      ])),
      () => invalidCredentials(res)
    )
  })
  .get('/api/maven/details/releases', respond(
    createDirectoryDetails('/releases', [
      createDirectoryDetails('gav')
    ])
  ))
  .get('/api/maven/details/releases/gav', respond(
    createDirectoryDetails('/releases/gav', [
      createDirectoryDetails('1.0.0'),
      createDirectoryDetails('0.1.0'),
      createFileDetails('maven-metadata.xml', 'text/xml', 4096)
    ])
  ))
  .get('/api/maven/details/releases/gav/1.0.0', respond(
    createDirectoryDetails('/releases/gav/1.0.0', [
      createFileDetails('gav-1.0.0.jar', 'application/jar-archive', 1337)
    ])
  ))
  .get('/api/maven/details/releases/gav/0.1.0', respond(
    createDirectoryDetails('/releases/gav/0.1.0', [
      createFileDetails('gav-0.1.0.jar', 'application/jar-archive', 1337)
    ])
  ))
  .get('/releases/gav/1.0.0/gav-1.0.0.jar', respond('content'))
  .get('/releases/gav/0.1.0/gav-0.1.0.jar', respond('content'))
  .get('/releases/gav/maven-metadata.xml', respond(`
  <metadata>
    <groupId>g.a.v</groupId>
    <artifactId>gav</artifactId>
    <versioning>
      <release>1.0.0</release>
      <release>0.1.0</release>
    </versioning>
  </metadata>
  `))
  .get('*', (req, res) => res.status(404).send({
    status: 404,
    message: 'Not found'
  }))
  .listen(80)

console.log('Reposilite stub API started on port 80')