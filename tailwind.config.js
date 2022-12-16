/** 
 * @type {import('tailwindcss').Config} 
 */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
            colors: {
                'blue': '#41436a',
                'mauve': '#974063',
                'rose': '#f54768',
                'orange': '#ff9677',
            }
        },
	},
	plugins: [],
};
