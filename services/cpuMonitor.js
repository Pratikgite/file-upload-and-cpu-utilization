const os = require('os');

setInterval(() => {
  const cpus = os.cpus();
  let idle = 0, total = 0;
  cpus.forEach(cpu => {
    for (let type in cpu.times) { 
      total += cpu.times[type];
    }
    idle += cpu.times.idle;
  });
  const usage = 1 - idle / total;
  if (usage > 0.7) { 
    process.exit(1);
  }
}, 10000);