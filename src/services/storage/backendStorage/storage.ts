import { Level } from "level";
import { logger } from "../../consoleLog";

// Create a database
const db = new Level("levelData", { valueEncoding: "json" });

// Store data
export async function storeData(key: string, value: any): Promise<void> {
  try {
    await db.put(key, value);
    console.log(
      `Data stored successfully: ${key} => ${JSON.stringify(value, null, 2)}`
    );
  } catch (err) {
    console.error("Error storing data:", err);
  }
}

// Retrieve data
export async function retrieveData(key: string): Promise<any | undefined> {
  try {
    const value = await db.get(key);
    logger.log(
      `Retrieved value for key ${key}: ${JSON.stringify(value, null, 2)}`
    );
    return value;
  } catch (err: any) {
    if (err.notFound) {
      console.log(`Key ${key} not found.`);
      return undefined;
    }
    logger.error("Error retrieving data:", err);
  }
}

export async function deleteEntry(key: string) {
  try {
    db.del(key);
  } catch (error) {
    logger.error("Error deleting data:", error);
  }
}
