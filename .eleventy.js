export default function(eleventyConfig) {
  // Pass through CSS files.
  eleventyConfig.addPassthroughCopy("css");

  // Filter to exclude draft posts in build mode.
  eleventyConfig.addPreprocessor("drafts", "*", (data) => {
		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});
};
