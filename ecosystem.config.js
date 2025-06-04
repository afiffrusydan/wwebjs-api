module.exports = {
  apps : [{
    name   : "wwebjs-api",
    script : "server.js",
    // watch  : true,
    max_memory_restart: '1536M',
    cron_restart: '2 1 * * *',
    ignore_watch: [
      'node_modules',
      'sessions',
    ],
    kill_timeout: 3000,
  }],

}
