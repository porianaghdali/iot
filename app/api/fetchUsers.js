export async function getUser({ token }) {
  const url = "https://192.168.30.20/ems3/web/api/user/users/list";

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