import React from 'react';
import { motion } from 'framer-motion';
import { TerminalLine } from './TerminalLine';

const commands = [
  {
    command: 'npm install',
    output: [
      'added 1420 packages in 28s',
      '143 packages are looking for funding',
    ],
  },
  {
    command: 'docker-compose up -d',
    output: [
      'Creating network "backend_default" with driver "bridge"',
      'Creating backend_db_1     ... done',
      'Creating backend_cache_1  ... done',
      'Creating backend_api_1    ... done',
    ],
  },
  {
    command: 'kubectl get pods',
    output: [
      'NAME                     READY   STATUS    RESTARTS   AGE',
      'api-6d4f7d8f9b-2j4h5    1/1     Running   0          2m',
      'cache-7f8d9c6b5-3k5j6   1/1     Running   0          2m',
      'db-5c4b3d2a1-4l6k7      1/1     Running   0          2m',
    ],
  },
  {
    command: 'npm run test',
    output: [
      'PASS  src/tests/api.test.ts',
      'PASS  src/tests/auth.test.ts',
      'PASS  src/tests/db.test.ts',
      'Test Suites: 3 passed, 3 total',
      'Tests:       24 passed, 24 total',
    ],
  },
];

export const TerminalWindow = () => {
  return (
    <motion.div 
      className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900" />
      <div className="p-8 max-w-full overflow-hidden">
        {commands.map((cmd, index) => (
          <TerminalLine
            key={index}
            command={cmd.command}
            output={cmd.output}
            delay={index * 2}
          />
        ))}
      </div>
    </motion.div>
  );
};