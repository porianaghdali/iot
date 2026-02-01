export async function getSensorType({  token }) {
  const url = "https://192.168.30.20/ems3/web/api/user/sensor/type";

  try {
    const response = await fetch(url, {
      method: "POST",
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
export async function getSensorList({  token }) {
  const url = "https://192.168.30.20/ems3/web/api/user/sensor/list";

  try {
    const response = await fetch(url, {
      method: "POST",
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
export async function setSensor({ formData, token }) {
  const url = "https://192.168.30.20/ems3/web/api/user/sensor/set";
  if (!url) throw new Error("Invalid function code");
  
const fd = new FormData();
  for (const key in formData) {
    // اگر مقدار object بود مثل config، باید stringify کنیم
    if (typeof formData[key] === "object") {
      fd.append(key, JSON.stringify(formData[key]));
    } else {
      fd.append(key, formData[key]);
    }
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
export async function DeleteSensor({ token, ID }) {
  const url = "https://192.168.30.20/ems3/web/api/user/sensor/delete";

  try {
    const formBody = new URLSearchParams({ ID }).toString();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    });

    return await response.json();
  } catch (error) {
    console.error("API ERROR:", error);
    throw error;
  }
}