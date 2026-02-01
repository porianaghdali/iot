export async function fetchPreRequest() {
  const url = "https://192.168.30.20/ems3/web/api/guest/pre-request";
  if (!url) throw new Error("Invalid function code");

  try {
    const response = await fetch(url, {
      method: "POST",
    });

    return await response.json();
  } catch (error) {
    console.error("API ERROR:", error);
    throw error;
  }
}

export async function fetchLogin(formData) {
  const url = "https://192.168.30.20/ems3/web/api/guest/login";

  if (!url) throw new Error("Invalid function code");
  const fd = new FormData();
  for (const key in formData) {
    fd.append(key, formData[key]);
  }

  try {
    const response = await fetch(url, {
      method: "POST",

      body: fd,
    });
    return await response.json();
  } catch (error) {
    console.error("API ERROR:", error);
    throw error;
  }
}
export async function fetchUserProfile({ token }) {
  if (!token) throw new Error("Token missing");

  const response = await fetch(
    "https://192.168.30.20/ems3/web/api/user/profile/get-me",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
    }
  );
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  return await response.json();
}
