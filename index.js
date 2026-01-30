function validate(schema, data) {
    // Guard clauses
    if (typeof schema !== "object" || schema === null) {
      throw new Error("Schema must be a non-null object");
    }
  
    if (typeof data !== "object" || data === null) {
      throw new Error("Data must be a non-null object");
    }
  
    for (const key in schema) {
      // Missing property
      if (!(key in data)) {
        throw new Error(`Missing required field: ${key}`);
      }
  
      const expectedType = schema[key];
      const actualType = typeof data[key];
  
      // Type mismatch
      if (actualType !== expectedType) {
        throw new Error(
          `Invalid type for '${key}': expected ${expectedType}, got ${actualType}`
        );
      }
    }
  
    return true;
  }
  