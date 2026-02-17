export async function setNodes({ formData, token }) {
  const url = "https://192.168.30.20/ems3/web/api/user/node/set";

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
      headers: {
        Authorization: `Bearer ${token}`, // اضافه شد
      },
      body: fd,
    });
    return await response.json();
  } catch (error) {
    console.error("API ERROR:", error);
    throw error;
  }
}
export async function getNodes({ token, zone }) {
  const url = "https://192.168.30.20/ems3/web/api/user/node/list";
  try {
    const params = new URLSearchParams();

if (zone) {
  params.append("zone", zone);
}

const response = await fetch(url, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: params.toString(),
});


    return await response.json();
  } catch (error) {
    console.error("API ERROR:", error);
    throw error;
  }
}
export async function DeleteNodes({ ID, token }) {
  const url = "https://192.168.30.20/ems3/web/api/user/node/delete";

  try {
    const formBody = new URLSearchParams({ ID }).toString();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
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
