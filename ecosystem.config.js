module.exports = {
  apps : [{
    name   : "wwebjs-api",
    script : "server.js",
    // watch  : true,
    max_memory_restart: '1.5G',
    ignore_watch: [
      'node_modules',
      'sessions',
    ],
    kill_timeout: 3000,
  }],

}
