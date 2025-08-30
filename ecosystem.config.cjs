module.exports = {
  apps: [
    {
      name: 'surgical-prom-hub',
      script: 'npm',
      args: 'run start',
      cwd: '/opt/surgical-prom-hub',
      env: { NODE_ENV: 'production', PORT: 28472 }
    }
  ]
}