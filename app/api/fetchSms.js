export async function setSmsPanel({ formData, token }) {
  const url = "https://192.168.30.20/ems3/web/api/user/setting/sms-panel/set";
if (!url) throw new Error("Invalid function code");
  const fd = new FormData();
  for (const key in formData) {
    fd.append(key, formData[key]);
  }


  try {
    const response = await fetch(url, {
        
      method: "POST",
            body: fd,

      headers: {
        Authorization: `Bearer ${token}`, // اضافه شد
      },
    });
    return await response.json();
  } catch (error) {
    console.error("API ERROR:", error);
    throw error;
  }
}