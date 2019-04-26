module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: "react-server_dev",
      script: "bin/www",
      env: {
        STAGE_ENV: "dev",
        PORT: 9020
      },
      cwd: ".",
      instances: 2,
      exec_mode: "cluster"
    },
    {
      name: "react-server_test",
      script: "bin/www",
      env: {
        STAGE_ENV: "test",
        PORT: 9021
      },
      cwd: ".",
      instances: 2,
      exec_mode: "cluster"
    },
    {
      name: "react-server_sim",
      script: "bin/www",
      env: {
        STAGE_ENV: "sim",
        PORT: 9022
      },
      cwd: ".",
      instances: "max",
      exec_mode: "cluster"
    },
    {
      name: "react-server_prod",
      script: "bin/www",
      env: {
        STAGE_ENV: "prod",
        PORT: 9023
      },
      cwd: ".",
      instances: "max",
      exec_mode: "cluster"
    }
  ]
}