const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const list = [
  { slug: "grid-systems", name: "Grid Systems - Beyond linear grids" },
  { slug: "golden-ratio", name: "Basics of Golden Ratio" },
];

export default async (req, res) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE,
  });

  res.status(200).json(response.results);
};
