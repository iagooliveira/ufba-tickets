import { isArray } from 'lodash';

export const mapRoutesPath = routes =>
  routes.reduce((paths, route) => {
    if (isArray(route.path)) {
      route.path.forEach(path => {
        paths.push(path);
      });
    } else {
      paths.push(route.path);
    }

    return paths;
  }, []);
