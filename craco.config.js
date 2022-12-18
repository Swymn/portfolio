const path = require("path");
module.exports = {
	webpack: {
		alias: {
            "@Components": path.resolve(__dirname, "src/components"),
            "@Pages": path.resolve(__dirname, "src/pages"),
            "@Router": path.resolve(__dirname, "src/router"),
		},
	},
};
