import storage from 'redux-persist/lib/storage';

const persist = {
  key: 'root',
  storage,
  timeout: null,
  version: 1,
  whitelist: [],
  blacklist: [],
};

export default persist;