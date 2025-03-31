export async function handleExportGrades() {
  try {
    const response = await fetch("/api/export/courses");
    if (!response.ok) {
      throw new Error("Failed to export grades");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "courses.csv";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Export failed:", error);
    alert("Export failed. Please try again.");
  }
}

export async function handleExportTodos() {
  try {
    const response = await fetch("/api/export/todos");
    if (!response.ok) {
      throw new Error("Failed to export todos");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "todos.csv";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Export failed:", error);
    alert("Export failed. Please try again.");
  }
}
