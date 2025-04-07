import instance from "./axios";
export const save = async (scriptData) => {
  try {
    const response = await instance.post("/sup", {
      "title": scriptData.title,
      "subtitle": scriptData.subtitle,
      "written_by": scriptData.writtenBy,
      "genre": scriptData.genre,
      "page_target": parseInt(scriptData.pageTarget),
      "logline": scriptData.logline,
    });
    return response.data;
  } catch (error) {
    console.log("Unable to save: ", error);
  }
};
export const logout = async () => {
  try {
    const response = instance.post("/Editor", {});
  } catch {}
};
