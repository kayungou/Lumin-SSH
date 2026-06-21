const { execSync } = require('child_process');
execSync('git add -A', { cwd: 'c:\\D\\Lumin-SSH', stdio: 'inherit' });
execSync('git commit -m "删除fnOS和FygoOS图标"', { cwd: 'c:\\D\\Lumin-SSH', stdio: 'inherit' });
execSync('git push', { cwd: 'c:\\D\\Lumin-SSH', stdio: 'inherit' });
