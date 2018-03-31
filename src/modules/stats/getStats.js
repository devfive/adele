const generateKey = (key) => {
  return key.toLowerCase().replace(/([^A-Z0-9])+/gi, '-');
};

const ignoredKeys = ['company', 'system'];

const getStats = (systems) => {
  return systems.reduce((_stats, system) => {
    const stats = Object.assign({}, _stats);

    Object.keys(system).forEach((key) => {
      if (ignoredKeys.indexOf(key) > -1) {
        return;
      }

      if (!stats[key]) {
        stats[key] = {
          data: {},
          label: system[key].label,
        };
      }

      let systemData = system[key].data;
      if (Array.isArray(systemData) === false) {
        systemData = [systemData];
      }

      systemData.forEach((data) => {
        const dataKey = generateKey(data);
        if (!stats[key].data[dataKey]) {
          stats[key].data[dataKey] = {
            count: 0,
            data,
          };
        }

        stats[key].data[dataKey].count += 1;
      });
    });

    return stats;
  }, {});
};

export default getStats;
