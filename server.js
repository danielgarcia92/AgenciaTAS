/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

/* <Configuración del Servidor> */
const express = require('express');
const http = require('http');
const engine = require('socket.io');

const request = require('request');

const port = 3000;
const app = express();

let data = [
  {id: 1, nombre: "Daniel García", cedula: "1000444777", origen: "Bogotá", destino: "Monterrey", fechaSalida:"2018/04/07"},
  {id: 2, nombre: "Yohrman Vergara", cedula: "1777222999", origen: "Medellín", destino: "Munich", fechaSalida:"2018/11/08"},
  {id: 3, nombre: "Jairo Saldarriaga", cedula: "44675444", origen: "Medellín", destino: "Munich", fechaSalida:"2018/06/13"},
  {id: 4, nombre: "John Vahos", cedula: "33375464", origen: "Bogotá", destino: "Monterrey", fechaSalida:"2018/06/13"},
  {id: 5, nombre: "Maribel Valencia", cedula: "56875123", origen: "Medellín", destino: "Munich", fechaSalida:"2019/12/13"},
  {id: 6, nombre: "Daniel García", cedula: "1000444777", origen: "Medellín", destino: "Munich", fechaSalida:"2020/01/03"},
];

let server = http.createServer(app).listen(port, () => {
  console.log('El servidor está escuchando en el puerto ' + port);
});

const io = engine.listen(server);

io.on('connection', (socket) => {

  io.emit('Connection success')

  socket.on('leer', () => {
    io.emit('data', data);
  });
  
  socket.on('guardar', (guardar) => {
    data.unshift(guardar);
    io.emit('data', data);
  });

});

/* </Configuración del Servidor> */

/**
 * Flag indicating whether webpack compiled for the first time.
 * @type {boolean}
 */
let isInitialCompilation = true;

const compiler = webpack(config);

new WebpackDevServer(compiler, config.devServer)
.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
});

compiler.plugin('done', () => {
  if (isInitialCompilation) {
    // Ensures that we log after webpack printed its stats (is there a better way?)
    setTimeout(() => {
      console.log('\n✓ The bundle is now ready for serving!\n');
      console.log('  Open in iframe mode:\t\x1b[33m%s\x1b[0m',  'http://localhost:' + config.port + '/webpack-dev-server/');
      console.log('  Open in inline mode:\t\x1b[33m%s\x1b[0m', 'http://localhost:' + config.port + '/\n');
      console.log('  \x1b[33mHMR is active\x1b[0m. The bundle will automatically rebuild and live-update on changes.')
    }, 350);
  }
  isInitialCompilation = false;
});
