export default function(eleventyConfig) {
  // pass through CSS files
  eleventyConfig.addPassthroughCopy("css");

  // filter to exclude draft posts in build mode
  eleventyConfig.addPreprocessor("drafts", "*", (data) => {
		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});

  // ignore README.md files
  eleventyConfig.ignores.add("README.md");
};
