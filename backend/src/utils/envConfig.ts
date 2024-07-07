import dotenv from 'dotenv';
import { cleanEnv, host, num, port, str, testOnly } from 'envalid';

dotenv.config();

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ devDefault: testOnly('test'), choices: ['development', 'production', 'test'] }),
  HOST: host({ devDefault: testOnly('localhost') }),
  PORT: port({ devDefault: testOnly(3000) }),
  CORS_ORIGIN: str({ devDefault: testOnly('http://localhost:3000') }),
  REQUEST_LOGGER: str({ devDefault: testOnly('false') }),
  POSTGRES_HOST: host({ devDefault: testOnly('localhost') }),
  POSTGRES_PORT: port({ devDefault: testOnly(5432) }),
  POSTGRES_USER: str({ devDefault: testOnly('postgres') }),
  POSTGRES_PASSWORD: str({ devDefault: testOnly('pass123') }),
  POSTGRES_DB: str({ devDefault: testOnly('bets_db') })
});
