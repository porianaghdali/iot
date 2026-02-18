export async function getZone({ token }) {
  const url = "https://192.168.30.20/ems3/web/api/user/zone/list";

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
export async function setZone({ formData, token }) {
  const url = "https://192.168.30.20/ems3/web/api/user/zone/set";

  const body = new URLSearchParams(formData).toString();

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    return await response.json();
  } catch (error) {
    console.error("API ERROR:", error);
    throw error;
  }
}

