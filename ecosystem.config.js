module.exports = {
  apps: [
    {
      name: "Datsercom",
      script: 'node_modules/next/dist/bin/next',
      args: "start -p 4005",
      instances: "10", // or set a number of instances
      exec_mode: "cluster", // "fork" mode is the default, switch to "cluster" for cluster mode
    },
  ],
};