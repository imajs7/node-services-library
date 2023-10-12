export function getObjectChanges(oldObj: any, newObj: any): any[] {
  const changes: any[] = [];

  // Helper function to recursively compare objects
  function compareObjects(path: string, oldVal: any, newVal: any) {
    if (typeof oldVal !== typeof newVal) {
      changes.push({
        action: "TypeChange",
        path,
        oldValue: oldVal,
        newValue: newVal,
      });
    } else if (typeof oldVal === "object") {
      // Handle nested objects
      for (const key in oldVal) {
        if (Object.prototype.hasOwnProperty.call(oldVal, key)) {
          if (!Object.prototype.hasOwnProperty.call(newVal, key)) {
            changes.push({
              action: "Deleted",
              path: `${path}.${key}`,
              oldValue: oldVal[key],
            });
          } else {
            compareObjects(`${path}.${key}`, oldVal[key], newVal[key]);
          }
        }
      }
      for (const key in newVal) {
        if (!Object.prototype.hasOwnProperty.call(oldVal, key)) {
          changes.push({
            action: "Added",
            path: `${path}.${key}`,
            newValue: newVal[key],
          });
        }
      }
    } else if (oldVal !== newVal) {
      changes.push({
        action: "Edited",
        path,
        oldValue: oldVal,
        newValue: newVal,
      });
    }
  }

  compareObjects("", oldObj, newObj);

  return changes;
}
