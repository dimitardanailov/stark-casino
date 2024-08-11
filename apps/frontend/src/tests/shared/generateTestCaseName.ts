function generateTestCaseName(prefix: string, uniqueName: string) {
  return `${prefix}[${uniqueName}]`;
}

export default generateTestCaseName;
