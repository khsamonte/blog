const properNouns = {
  japanese: {
    names: ["110 / 180", "79 / 120", "31 / 60"],
    places: ["61.1%", "65.8%", "51.7%", "80.5"],
  },
};

export const preprocessMarkdown = (markdown, dataToProcess) => {
  let processedMarkdown = markdown;

  if (dataToProcess === "default") {
    return markdown;
  }

  const namesToHighlight = properNouns[dataToProcess]?.names;
  const placesToHighlight = properNouns[dataToProcess]?.places;

  namesToHighlight?.forEach((name) => {
    processedMarkdown = processedMarkdown.replace(
      new RegExp(name, "g"),
      `[${name}](character-name)`
    );
  });

  placesToHighlight?.forEach((name) => {
    processedMarkdown = processedMarkdown.replace(
      new RegExp(name, "g"),
      `[${name}](location-name)`
    );
  });

  return processedMarkdown;
};
