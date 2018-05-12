module.exports = {
	networks: {
		development: {
			protocol: 'http',
			host: '192.168.0.155',
			port: 8545,
			network_id: '*',
		},
		ropsten: {
			protocol: 'https',
			host: 'ropsten.infura.io',
			key: 'BXQZYEH41BQ82FXN29XSZDWD5DXXZ369DN',
			port: 8545,
			network_id: 3,
		},
	},
	migrations_directory: './migrations',
};
