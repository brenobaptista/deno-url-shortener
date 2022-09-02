interface Database {
  [hash: string]: { original_url: string };
}

export const readDatabase = async () => {
  try {
    const text = await Deno.readTextFile("./database.json");
    const database = JSON.parse(text);

    return database;
  } catch (error) {
    throw error;
  }
};

export const writeDatabase = async (database: Database) => {
  try {
    await Deno.writeTextFile("./database.json", JSON.stringify(database));
  } catch (error) {
    throw error;
  }
};
